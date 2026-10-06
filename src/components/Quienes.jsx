import { config } from '../config.js'
import { FotoPlaceholder } from './Detalles.jsx'

// Quiénes somos + cómo armamos los platos: el diferencial (son nutricionistas), en una sola sección.
export default function Quienes() {
  const q = config.quienes
  return (
    <section id="quienes" className="bg-tinta-800 py-20 text-papel-50 md:py-28" aria-labelledby="titulo-quienes">
      <div className="contenedor grid items-center gap-14 md:grid-cols-2 md:gap-16">
        {/* FOTO: las dos nutricionistas (ver config.quienes.foto). Detrás, un marco desplazado */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full rounded-lg border-2 border-mostaza-400"
          />
          <FotoPlaceholder
            nota={q.notaFoto}
            src={q.foto}
            alt={q.fotoAlt}
            posicion={q.fotoPosicion}
            color="bg-mostaza-300"
            className="relative aspect-[4/3] rounded-lg"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-mostaza-300">{q.sobretitulo}</p>
          <h2 id="titulo-quienes" className="mt-4 text-3xl font-bold md:text-4xl">
            {q.titulo}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-papel-200">{q.texto}</p>

          <ul className="mt-8 space-y-4">
            {q.puntos.map((p) => (
              <li key={p.titulo} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-sello bg-mostaza-400" />
                <p>
                  <span className="font-bold text-papel-50">{p.titulo}.</span>{' '}
                  <span className="text-papel-200">{p.texto}</span>
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-xl font-bold text-mostaza-300">{q.firma}</p>
          <p className="text-sm text-papel-300">{q.matriculas}</p>
        </div>
      </div>
    </section>
  )
}
