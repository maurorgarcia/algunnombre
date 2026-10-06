// Helper de WhatsApp: toda la lógica de armar links wa.me vive acá.
// Los textos de los mensajes se editan en src/config.js (config.mensajes).
import { config, pesos } from './config.js'

// Reemplaza {clave} por su valor dentro de una plantilla de texto.
const rellenar = (plantilla, datos) =>
  plantilla.replace(/\{(\w+)\}/g, (_, clave) => datos[clave] ?? '')

// Link base: abre WhatsApp con el mensaje ya escrito.
export const linkWhatsApp = (mensaje) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensaje)}`

const base = { negocio: config.nombre }

// Consulta general (botones de la entrada, flotante y cierre)
export const linkConsulta = () =>
  linkWhatsApp(rellenar(config.mensajes.consulta, base))

// "Pedir este" de un plato
export const linkPlato = (plato) =>
  linkWhatsApp(rellenar(config.mensajes.plato, { ...base, plato: plato.nombre }))

// Consulta por dieta (celíacos, vegano, sin lactosa)
export const linkDieta = (dieta) =>
  linkWhatsApp(rellenar(config.mensajes.dieta, { ...base, dieta: dieta.valor }))

// Pedido armado. items: [{ plato, cantidad }]
export const linkPedido = ({ items, zona, semanal }) => {
  const lista = items.map((i) => `- ${i.cantidad} x ${i.plato.nombre}`).join('\n')
  const total = items.reduce((suma, i) => suma + i.cantidad * i.plato.precio, 0)
  const lineaZona = zona ? rellenar(config.mensajes.lineaZona, { zona }) : ''
  const plantilla = semanal ? config.mensajes.pedidoSemanal : config.mensajes.pedido
  return linkWhatsApp(
    rellenar(plantilla, { ...base, lista, total: pesos(total), zona: lineaZona }),
  )
}
