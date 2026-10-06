import { config } from '../config.js'

// Lista chica (días, zonas o pagos)
function Dato({ titulo, items }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-arcilla-600">{titulo}</h3>
      <p className="mt-2 text-tinta-800">{items.join(' · ')}</p>
    </div>
  )
}

// Cómo pedir en 3 pasos + días, zonas y medios de pago en una franja, todo en la misma sección.
export default function ComoPedir() {
  const c = config.comoPedir
  const e = config.entregas
  return (
    <section id="como-pedir" className="contenedor py-20 md:py-28" aria-labelledby="titulo-como">
      <p className="sobretitulo">{c.sobretitulo}</p>
      <h2 id="titulo-como" className="mt-4 max-w-xl text-3xl font-bold text-tinta-800 md:text-4xl">
        {c.titulo}
      </h2>

      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
        {c.pasos.map((paso, i) => (
          <li key={paso.titulo} className="flex gap-5">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sello bg-tinta-800 font-titulo text-xl font-bold text-mostaza-300"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-bold text-tinta-800">{paso.titulo}</h3>
              <p className="mt-1 text-tinta-700">{paso.texto}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Franja con la logística */}
      <div className="mt-16 rounded-lg border border-tinta-700/20 bg-crema p-6 md:p-8">
        <div className="grid gap-7 md:grid-cols-3 md:gap-10">
          <Dato titulo={e.diasTitulo} items={e.dias} />
          <Dato titulo={e.zonasTitulo} items={e.zonas} />
          <Dato titulo={e.pagosTitulo} items={e.pagos} />
        </div>
        <p className="mt-7 border-t border-tinta-700/15 pt-5 text-sm text-tinta-700">{e.nota}</p>
      </div>
    </section>
  )
}
