// Prueba rápida de los links de WhatsApp. Correr con: node test-whatsapp.mjs
import { config } from './src/config.js'
import { linkConsulta, linkPlato, linkDieta, linkPedido } from './src/whatsapp.js'

const leer = (url) => {
  const u = new URL(url)
  return { host: u.host, numero: u.pathname.slice(1), texto: u.searchParams.get('text') }
}
const items = [
  { plato: config.platos[0], cantidad: 2 },
  { plato: config.platos[4], cantidad: 1 },
]
const casos = {
  consulta: linkConsulta(),
  plato: linkPlato(config.platos[1]),
  dieta: linkDieta(config.preguntas.dietas[0]),
  pedido: linkPedido({ items, zona: '', semanal: false }),
  'pedido + zona': linkPedido({ items, zona: 'Centro', semanal: false }),
  semanal: linkPedido({ items, zona: 'Barrio Norte', semanal: true }),
}
let fallas = 0
for (const [nombre, url] of Object.entries(casos)) {
  const r = leer(url)
  const ok = r.host === 'wa.me' && r.numero === config.whatsapp && !r.texto.includes('{') && !r.texto.includes('undefined')
  if (!ok) fallas++
  console.log(`\n[${ok ? 'OK' : 'FALLA'}] ${nombre}\n${r.texto}`)
}
console.log(fallas ? `\n${fallas} falla(s)` : '\nTodo bien')
process.exit(fallas ? 1 : 0)
