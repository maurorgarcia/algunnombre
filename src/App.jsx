import { useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import Entrada from './components/Entrada.jsx'
import Carta from './components/Carta.jsx'
import ComoPedir from './components/ComoPedir.jsx'
import Quienes from './components/Quienes.jsx'
import Preguntas from './components/Preguntas.jsx'
import Pie from './components/Pie.jsx'
import BotonFlotante from './components/BotonFlotante.jsx'
import { Separador } from './components/Detalles.jsx'

export default function App() {
  // Estado del pedido: { idDelPlato: cantidad }. Vive solo en el navegador.
  const [cantidades, setCantidades] = useState({})

  const cambiar = (id, delta) =>
    setCantidades((actual) => ({
      ...actual,
      [id]: Math.max(0, (actual[id] || 0) + delta),
    }))

  const hayPedido = Object.values(cantidades).some((n) => n > 0)

  return (
    // overflow-x-clip: evita scroll horizontal accidental
    <div className="overflow-x-clip">
      <a
        href="#platos"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-crema focus:p-3"
      >
        Ir a los platos
      </a>
      <Encabezado />
      <main>
        <Entrada />
        <Separador de="bg-papel-50" a="text-papel-100" forma="onda" />
        <Carta cantidades={cantidades} cambiar={cambiar} vaciar={() => setCantidades({})} />
        <Separador de="bg-papel-100" a="text-papel-50" forma="colina" />
        <ComoPedir />
        <Separador de="bg-papel-50" a="text-tinta-800" forma="onda" />
        <Quienes />
        <Separador de="bg-tinta-800" a="text-papel-100" forma="colina" />
        <Preguntas />
      </main>
      <Separador de="bg-papel-100" a="text-tinta-900" forma="onda" />
      <Pie />
      {/* Espacio para que la barra fija del pedido (celular) no tape el final de la página */}
      {hayPedido && <div className="h-28 sm:hidden" aria-hidden="true" />}
      <BotonFlotante oculto={hayPedido} />
    </div>
  )
}
