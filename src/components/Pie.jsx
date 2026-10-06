import { config } from '../config.js'
import { linkConsulta } from '../whatsapp.js'
import BotonWhatsApp from './BotonWhatsApp.jsx'

// Pie de página: es el único cierre del sitio. Marca + botón de WhatsApp, secciones, contacto y zonas.
function Columna({ titulo, children }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-mostaza-300">{titulo}</h3>
      <div className="mt-4 space-y-2 text-papel-200">{children}</div>
    </div>
  )
}

const enlace = 'inline-flex min-h-[2.25rem] items-center hover:text-mostaza-300'

export default function Pie() {
  const p = config.pie
  const instagram = config.instagram.replace('@', '')
  return (
    <footer id="pie" className="bg-tinta-900 pt-16 text-papel-100">
      <div className="contenedor">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
          <div>
            <p className="font-titulo text-2xl font-bold text-papel-50">{config.nombre}</p>
            <p className="mt-3 max-w-xs text-papel-200">{p.descripcion}</p>
            <BotonWhatsApp href={linkConsulta()} variante="claro" icono className="mt-5">
              {p.boton}
            </BotonWhatsApp>
          </div>

          <Columna titulo={p.seccionesTitulo}>
            <ul>
              {config.nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={enlace}>
                    {l.texto}
                  </a>
                </li>
              ))}
            </ul>
          </Columna>

          <Columna titulo={p.contactoTitulo}>
            {instagram && (
              <p>
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={enlace}
                >
                  Instagram {config.instagram}
                </a>
              </p>
            )}
            <p className="pt-1 text-sm font-bold text-papel-50">{p.horarioTitulo}</p>
            <p>{config.horario}</p>
          </Columna>

          <Columna titulo={p.zonasTitulo}>
            <ul>
              {config.entregas.zonas.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </Columna>
        </div>

        <div className="mt-14 flex flex-col gap-1 border-t border-papel-50/15 py-6 text-sm text-papel-300 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {config.nombre}. {p.copyright}
          </p>
          {p.aviso && <p>{p.aviso}</p>}
        </div>
      </div>
    </footer>
  )
}
