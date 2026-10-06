import { IconoWhatsApp } from './Detalles.jsx'

// Único botón de acción del sitio: abre WhatsApp con un mensaje armado.
// href: link generado con src/whatsapp.js
// variante: 'principal' (tomate), 'claro' (para fondos oscuros) o 'borde'
// chico: versión compacta (para el menú)
// icono: true muestra el logo de WhatsApp a la izquierda
const estilos = {
  principal: 'bg-tomate-600 text-crema hover:bg-tomate-700',
  claro: 'bg-mostaza-400 text-tinta-900 hover:bg-mostaza-300',
  borde: 'border-2 border-tinta-800 text-tinta-900 hover:bg-tinta-800 hover:text-crema',
}

export default function BotonWhatsApp({
  href,
  children,
  variante = 'principal',
  grande = false,
  chico = false,
  icono = false,
  className = '',
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-sello text-center font-texto font-bold transition duration-150 hover:-translate-y-0.5 active:translate-y-0 ${
        grande
          ? 'min-h-[3.5rem] px-8 text-lg'
          : chico
            ? 'min-h-[2.5rem] pl-3.5 pr-5 text-sm'
            : 'min-h-[3rem] px-6 text-base'
      } ${estilos[variante]} ${className}`}
    >
      {icono && <IconoWhatsApp className={grande ? 'h-6 w-6' : chico ? 'h-4 w-4' : 'h-5 w-5'} />}
      {children}
    </a>
  )
}
