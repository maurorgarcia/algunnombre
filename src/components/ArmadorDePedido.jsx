import { useEffect, useRef, useState } from 'react'
import { config, pesos } from '../config.js'
import { linkPedido } from '../whatsapp.js'

// Pedido en dos partes:
//  1. Barra fija abajo (solo aparece si hay platos): "Ver pedido · $total" + botón de WhatsApp.
//  2. Panel con el detalle (se abre desde "Ver pedido"): cantidades, zona y pedido semanal.
// El estado de las cantidades vive en App.jsx; acá solo se guarda zona, "semanal" y si el panel está abierto.
// Nada se envía ni se guarda en ningún servidor.
export default function ArmadorDePedido({ cantidades, cambiar, vaciar }) {
  const a = config.armador
  const [zona, setZona] = useState('')
  const [semanal, setSemanal] = useState(false)
  const [abierto, setAbierto] = useState(false)
  const botonCerrar = useRef(null)

  const items = config.platos
    .filter((p) => cantidades[p.id] > 0)
    .map((p) => ({ plato: p, cantidad: cantidades[p.id] }))
  const cantidadTotal = items.reduce((s, i) => s + i.cantidad, 0)
  const total = items.reduce((s, i) => s + i.cantidad * i.plato.precio, 0)

  const textoBoton = a.botonFijo
    .replace('{n}', cantidadTotal)
    .replace('{platos}', cantidadTotal === 1 ? 'plato' : 'platos')
  const href = linkPedido({ items, zona, semanal })

  // Si se vacía el pedido, se cierra el panel
  useEffect(() => {
    if (cantidadTotal === 0) setAbierto(false)
  }, [cantidadTotal])

  // Panel abierto: foco en "Cerrar", se cierra con Escape y no se mueve la página de fondo
  useEffect(() => {
    if (!abierto) return
    botonCerrar.current?.focus()
    const alTeclear = (e) => e.key === 'Escape' && setAbierto(false)
    document.addEventListener('keydown', alTeclear)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', alTeclear)
      document.body.style.overflow = overflow
    }
  }, [abierto])

  if (cantidadTotal === 0) return null

  const claseBoton =
    'flex min-h-[3.5rem] items-center justify-center rounded-md bg-tomate-600 px-4 text-center font-bold text-crema hover:bg-tomate-700'

  return (
    <>
      {/* Barra fija */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta-700/30 bg-papel-100 px-3 pb-3 pt-2 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-[25rem] sm:rounded-lg sm:border sm:pb-3">
        <button
          type="button"
          onClick={() => setAbierto(true)}
          aria-haspopup="dialog"
          className="mb-2 flex min-h-[2.5rem] w-full items-center justify-between px-1 text-sm font-bold text-tinta-800 underline decoration-mostaza-500 decoration-2 underline-offset-4"
        >
          <span>{a.verPedido}</span>
          <span>{pesos(total)}</span>
        </button>
        <a href={href} target="_blank" rel="noopener noreferrer" className={claseBoton}>
          {textoBoton}
        </a>
      </div>

      {/* Panel con el detalle */}
      {abierto && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-tinta-900/60" onClick={() => setAbierto(false)} aria-hidden="true" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-pedido"
            className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-lg bg-crema p-5 sm:max-w-md sm:rounded-lg"
          >
            <div className="flex items-center justify-between">
              <h3 id="titulo-pedido" className="text-2xl font-bold text-tinta-800">
                {a.titulo}
              </h3>
              <button
                ref={botonCerrar}
                type="button"
                onClick={() => setAbierto(false)}
                className="min-h-[2.75rem] px-2 font-bold text-tinta-800 underline underline-offset-4"
              >
                {a.cerrar}
              </button>
            </div>

            <ul className="mt-3 divide-y divide-tinta-700/15">
              {items.map(({ plato, cantidad }) => (
                <li key={plato.id} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="font-bold text-tinta-800">{plato.nombre}</p>
                    <p className="text-sm text-tinta-600">{pesos(cantidad * plato.precio)}</p>
                  </div>
                  <div
                    role="group"
                    aria-label={`Cantidad de ${plato.nombre}`}
                    className="inline-flex shrink-0 items-center rounded-md border-2 border-tinta-800"
                  >
                    <button
                      type="button"
                      onClick={() => cambiar(plato.id, -1)}
                      aria-label={`Sacar uno de ${plato.nombre}`}
                      className="h-11 w-11 text-2xl font-bold text-tinta-800 hover:bg-papel-100"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-lg font-bold">{cantidad}</span>
                    <button
                      type="button"
                      onClick={() => cambiar(plato.id, 1)}
                      aria-label={`Sumar uno de ${plato.nombre}`}
                      className="h-11 w-11 text-2xl font-bold text-tinta-800 hover:bg-papel-100"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <p className="flex justify-between border-t-2 border-tinta-800 pt-3 font-titulo text-xl font-bold text-tinta-900">
              <span>Total</span>
              <span>{pesos(total)}</span>
            </p>
            <p className="mt-1 text-sm text-tinta-600">{a.totalAviso}</p>

            <label className="mt-5 block text-sm font-bold text-tinta-800" htmlFor="zona">
              {a.zonaTitulo}
            </label>
            <select
              id="zona"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
              className="mt-1 h-12 w-full rounded-md border-2 border-tinta-800 bg-crema px-3 text-tinta-900"
            >
              <option value="">{a.zonaVacia}</option>
              {config.entregas.zonas.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>

            <label className="mt-4 flex min-h-[3rem] cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={semanal}
                onChange={(e) => setSemanal(e.target.checked)}
                className="mt-1 h-6 w-6 shrink-0 accent-tomate-600"
              />
              <span>
                <span className="block font-bold text-tinta-800">{a.semanalTitulo}</span>
                <span className="block text-sm text-tinta-600">{a.semanalAyuda}</span>
              </span>
            </label>

            <a href={href} target="_blank" rel="noopener noreferrer" className={`${claseBoton} mt-5`}>
              {textoBoton}
            </a>
            <button
              type="button"
              onClick={vaciar}
              className="mt-2 min-h-[2.75rem] w-full text-sm font-bold text-tomate-700 underline underline-offset-4"
            >
              {a.vaciar}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
