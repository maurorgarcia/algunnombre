import { useState } from 'react'
import { config } from '../config.js'
import { linkConsulta } from '../whatsapp.js'
import BotonWhatsApp from './BotonWhatsApp.jsx'
import { IconoWhatsApp } from './Detalles.jsx'

// Menú fijo de arriba.
// Escritorio: nombre, links y un botón de WhatsApp chico.
// Celular: nombre, ícono de WhatsApp y botón de tres rayitas que abre un panel con los links.
export default function Encabezado() {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <div className="sticky top-0 z-40 border-b border-tinta-700/10 bg-papel-50/95 backdrop-blur-sm">
      <div className="contenedor flex min-h-[4.25rem] items-center justify-between gap-4">
        <a href="#top" onClick={cerrar} className="flex items-center gap-2.5 whitespace-nowrap font-titulo text-base font-bold text-tinta-800 sm:text-lg">
          {/* Marca provisoria: reemplazala por el logo cuando lo tengan */}
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sello bg-tinta-800 sm:h-8 sm:w-8">
            <span className="h-3 w-3 rounded-sello bg-mostaza-400" />
          </span>
          {config.nombre}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {config.nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="border-b-2 border-transparent py-1 text-[0.95rem] font-medium text-tinta-700 hover:border-mostaza-500 hover:text-tinta-900"
                >
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
          <BotonWhatsApp href={linkConsulta()} icono chico>
            {config.botonMenu}
          </BotonWhatsApp>
        </nav>

        {/* Celular: WhatsApp (solo ícono) + menú */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={linkConsulta()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={config.botonMenu}
            className="flex h-11 w-11 items-center justify-center rounded-sello bg-tomate-600 text-crema hover:bg-tomate-700"
          >
            <IconoWhatsApp className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-expanded={abierto}
            aria-controls="menu-celular"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-12 w-12 items-center justify-center text-tinta-800"
          >
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              {abierto ? (
                <path d="M5 5 L21 21 M21 5 L5 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              ) : (
                <path d="M4 7 H22 M4 13 H22 M4 19 H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Panel del menú en celular: solo los links */}
      {abierto && (
        <nav id="menu-celular" aria-label="Secciones" className="border-t border-tinta-700/10 pb-3 lg:hidden">
          <ul className="contenedor">
            {config.nav.map((l) => (
              <li key={l.href} className="border-b border-tinta-700/10 last:border-0">
                <a
                  href={l.href}
                  onClick={cerrar}
                  className="flex min-h-[3.25rem] items-center text-lg font-medium text-tinta-800"
                >
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
