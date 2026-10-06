import { config } from '../config.js'

export default function Preguntas() {
  const p = config.preguntas
  return (
    <section id="preguntas" className="bg-papel-100 py-20 md:py-28" aria-labelledby="titulo-preguntas">
      <div className="contenedor">
        <p className="sobretitulo justify-center after:h-0.5 after:w-8 after:bg-mostaza-500 after:content-['']">{p.sobretitulo}</p>
        <h2 id="titulo-preguntas" className="mt-4 text-center text-3xl font-bold text-tinta-800 md:text-4xl">
          {p.titulo}
        </h2>

        {/* <details> nativo: accesible y sin JavaScript */}
        <div className="mx-auto mt-12 max-w-4xl border-t border-tinta-700/30">
          {p.items.map((item) => (
            <details key={item.pregunta} className="group border-b border-tinta-700/30">
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-bold text-tinta-800">
                {item.pregunta}
                <span
                  aria-hidden="true"
                  className="text-2xl text-tomate-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-tinta-700">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
