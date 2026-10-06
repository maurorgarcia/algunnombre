import { config, pesos } from '../config.js'
import { linkPlato } from '../whatsapp.js'
import BotonWhatsApp from './BotonWhatsApp.jsx'
import ArmadorDePedido from './ArmadorDePedido.jsx'
import { FotoPlaceholder } from './Detalles.jsx'

// Un plato: foto chica a la izquierda, datos a la derecha, botones abajo.
function Plato({ plato, cantidad, cambiar }) {
  const elegido = cantidad > 0
  return (
    <li
      className={`flex gap-5 rounded-lg border bg-crema p-5 ${
        elegido ? 'border-mostaza-500 ring-2 ring-mostaza-500' : 'border-tinta-700/20'
      }`}
    >
      {/* FOTO: la foto de cada plato se pone en config.js (campo "foto").
          Con foto se ve cuadrada; sin foto, un bloque de color liso. */}
      <FotoPlaceholder
        compacto
        nota={`foto de ${plato.nombre.toLowerCase()}`}
        src={plato.foto}
        alt={plato.nombre}
        color={plato.color}
        className="h-24 w-24 shrink-0 rounded-md sm:h-28 sm:w-28"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        {plato.destacado && (
          <p className="mb-1 w-fit rounded-sm bg-mostaza-400 px-2 py-0.5 text-xs font-bold text-tinta-900">
            {config.carta.destacado}
          </p>
        )}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-tight text-tinta-800">{plato.nombre}</h3>
          <p className="whitespace-nowrap font-bold text-tomate-600">{pesos(plato.precio)}</p>
        </div>
        <p className="mt-1 text-sm text-tinta-700">{plato.descripcion}</p>
        <p className="mt-1 text-sm text-tinta-600">
          <span className="font-bold">Lleva:</span> {plato.ingredientes}
        </p>
        {plato.etiquetas.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {plato.etiquetas.map((t) => (
              <li key={t} className="rounded-sello bg-papel-100 px-2.5 py-0.5 text-xs font-bold text-tinta-700">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
          <div
            role="group"
            aria-label={`Cantidad de ${plato.nombre}`}
            className="inline-flex items-center rounded-md border-2 border-tinta-800"
          >
            <button
              type="button"
              onClick={() => cambiar(plato.id, -1)}
              disabled={cantidad === 0}
              aria-label={`Sacar uno de ${plato.nombre}`}
              className="h-11 w-11 text-2xl font-bold text-tinta-800 hover:bg-papel-100 disabled:opacity-30"
            >
              −
            </button>
            <span aria-live="polite" className="w-8 text-center text-lg font-bold text-tinta-900">
              {cantidad}
            </span>
            <button
              type="button"
              onClick={() => cambiar(plato.id, 1)}
              aria-label={`Sumar uno de ${plato.nombre}`}
              className="h-11 w-11 text-2xl font-bold text-tinta-800 hover:bg-papel-100"
            >
              +
            </button>
          </div>

          <BotonWhatsApp href={linkPlato(plato)} variante="borde" className="!min-h-[2.75rem] !px-3 !text-sm">
            {config.carta.botonPedirUno}
          </BotonWhatsApp>
        </div>
      </div>
    </li>
  )
}

export default function Carta({ cantidades, cambiar, vaciar }) {
  const c = config.carta
  const platos = config.platos

  return (
    <section id="platos" className="bg-papel-100 py-20 md:py-28" aria-labelledby="titulo-platos">
      <div className="contenedor">
        <p className="sobretitulo">{c.sobretitulo}</p>
        <h2 id="titulo-platos" className="mt-4 max-w-2xl text-3xl font-bold text-tinta-800 md:text-4xl">
          {c.titulo}
        </h2>
        <p className="mt-4 max-w-xl text-tinta-700">{c.texto}</p>
        <p className="mt-1 text-sm text-tinta-600">{c.notaPrecios}</p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {platos.map((plato) => (
            <Plato key={plato.id} plato={plato} cantidad={cantidades[plato.id] || 0} cambiar={cambiar} />
          ))}
        </ul>
      </div>

      {/* Barra del pedido: no se ve hasta que se suma un plato */}
      <ArmadorDePedido cantidades={cantidades} cambiar={cambiar} vaciar={vaciar} />
    </section>
  )
}
