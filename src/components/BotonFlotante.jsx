import { useEffect, useState } from 'react'
import { config } from '../config.js'
import { linkConsulta } from '../whatsapp.js'
import { IconoWhatsApp } from './Detalles.jsx'

// Botón flotante chico con el logo de WhatsApp. Solo en celular: en escritorio el menú ya tiene el botón.
// - No aparece en la entrada (ya hay un botón grande ahí).
// - Se oculta cuando aparece la barra del pedido.
// - Se oculta al llegar al pie de página, que tiene su propio botón.
export default function BotonFlotante({ oculto }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const revisar = () => {
      const pasoEntrada = window.scrollY > window.innerHeight * 0.8
      const pie = document.getElementById('pie')
      const enPie = pie ? pie.getBoundingClientRect().top < window.innerHeight * 0.8 : false
      setVisible(pasoEntrada && !enPie)
    }
    revisar()
    window.addEventListener('scroll', revisar, { passive: true })
    return () => window.removeEventListener('scroll', revisar)
  }, [])

  if (oculto || !visible) return null
  return (
    <a
      href={linkConsulta()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-30 inline-flex min-h-[3rem] items-center gap-2 rounded-sello bg-tinta-800 pl-4 pr-5 text-sm font-bold text-crema hover:bg-tinta-700 lg:hidden"
    >
      <IconoWhatsApp className="h-6 w-6" />
      {config.flotante}
    </a>
  )
}
