import { config } from '../config.js'
import { linkConsulta } from '../whatsapp.js'
import BotonWhatsApp from './BotonWhatsApp.jsx'
import { FotoPlaceholder } from './Detalles.jsx'

// Resalta una palabra del título con otro color (config.entrada.resaltado)
function Titulo({ texto, resaltado }) {
  const i = resaltado ? texto.indexOf(resaltado) : -1
  if (i < 0) return texto
  return (
    <>
      {texto.slice(0, i)}
      <span className="text-tomate-600">{resaltado}</span>
      {texto.slice(i + resaltado.length)}
    </>
  )
}

// Íconos simples para los tres puntos de la derecha (config.entrada.puntos[].icono)
const iconos = {
  hoja: <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14M5 19c2-4 5-7 9-9" />,
  porcion: <path d="M12 4a8 8 0 1 0 8 8h-8V4ZM15 3.5A8 8 0 0 1 20.5 9H15V3.5Z" />,
  corazon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />,
}

function Punto({ p }) {
  return (
    <li className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sello bg-mostaza-300">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-tinta-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {iconos[p.icono]}
        </svg>
      </span>
      <div>
        <h3 className="font-bold text-tinta-800">{p.titulo}</h3>
        <p className="mt-0.5 text-sm text-tinta-700">{p.texto}</p>
      </div>
    </li>
  )
}

// Cartelito que flota alrededor de la foto central
function Etiqueta({ texto, color, className }) {
  return (
    <span
      className={`absolute flex items-center gap-2 rounded-sello border border-tinta-700/15 bg-crema py-1.5 pl-2.5 pr-4 text-sm font-bold text-tinta-800 ${className}`}
    >
      <span aria-hidden="true" className={`h-3 w-3 rounded-sello ${color}`} />
      {texto}
    </span>
  )
}

// Entrada clara: texto a la izquierda, foto central con elementos flotando y tres puntos a la derecha.
export default function Entrada() {
  const e = config.entrada
  const colores = ['bg-tomate-600', 'bg-mostaza-500', 'bg-arcilla-400', 'bg-tinta-600']
  const posiciones = [
    'left-0 top-[18%]',
    'right-0 top-[10%]',
    'right-[2%] bottom-[16%]',
    'left-[8%] bottom-[4%]',
  ]
  return (
    <header
      id="top"
      className="overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(237,203,110,.28) 0%, rgba(251,246,234,0) 48%)' }}
    >
      <div className="contenedor py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.8fr] lg:gap-10">
          <div>
            <h1 className="text-4xl font-bold leading-[1.06] tracking-tight text-tinta-800 sm:text-5xl">
              <Titulo texto={e.titulo} resaltado={e.resaltado} />
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-700">{e.texto}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <BotonWhatsApp href={linkConsulta()} grande icono>
                {e.boton}
              </BotonWhatsApp>
              <a
                href="#platos"
                className="inline-flex min-h-[3rem] items-center justify-center whitespace-nowrap font-bold text-tinta-800 underline decoration-mostaza-500 decoration-2 underline-offset-[6px] hover:text-tomate-600"
              >
                {e.botonSecundario} ↓
              </a>
            </div>
          </div>

          {/* Centro: foto en círculo, foto redonda chica y cartelitos flotando */}
          <div className="relative mx-auto aspect-square w-full max-w-[28rem]">
            <div aria-hidden="true" className="absolute inset-3 rounded-sello bg-mostaza-300/60" />
            {/* FOTO: foto principal (ver config.entrada.foto). Con fotos recortadas sin fondo, queda como la referencia */}
            <FotoPlaceholder
              nota={e.notaFoto}
              src={e.foto}
              alt={e.fotoAlt}
              posicion={e.fotoPosicion}
              className="absolute inset-[9%] rounded-sello border-[6px] border-crema"
            />
            {/* FOTO: segunda foto redonda (ver config.entrada.foto2) */}
            <FotoPlaceholder
              compacto={!e.foto2}
              nota="foto redonda"
              src={e.foto2}
              alt={e.foto2Alt}
              className="absolute -right-1 bottom-[34%] h-24 w-24 rounded-sello border-4 border-crema sm:h-28 sm:w-28"
            />
            <div aria-hidden="true" className="absolute left-[6%] top-[4%] h-10 w-10 rounded-sello bg-tomate-600" />
            {e.etiquetas.map((t, i) => (
              <Etiqueta key={t} texto={t} color={colores[i % colores.length]} className={posiciones[i % posiciones.length]} />
            ))}
          </div>

          <ul className="grid gap-6 sm:grid-cols-3 md:col-span-2 lg:col-span-1 lg:grid-cols-1 lg:gap-8">
            {e.puntos.map((p) => (
              <Punto key={p.titulo} p={p} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
