// Espacio para una foto. Si le pasás "src" muestra la foto real; si no, un bloque de color
// con el texto "nota" (no usa ninguna imagen inventada).
//
// PARA PONER UNA FOTO: guardala en la carpeta /public/fotos y poné su ruta (ej: '/fotos/mi-foto.jpg')
// en src/config.js (campo "foto" del plato, de la entrada o de "quienes").
// "posicion" es el recorte de la foto, ej: '85% 50%' (horizontal vertical).
export function FotoPlaceholder({
  nota,
  src,
  alt = '',
  posicion = '50% 50%',
  className = '',
  color = 'bg-arcilla-300',
  compacto = false, // true: sin rayas ni texto (para fotos chicas)
  estilo, // estilos extra (opcional)
}) {
  if (src) {
    return (
      <div className={`overflow-hidden ${color} ${className}`} style={estilo}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: posicion }}
        />
      </div>
    )
  }
  if (compacto) {
    return (
      <div
        role="img"
        aria-label={`Espacio reservado para una foto: ${nota}`}
        className={`${color} ${className}`}
        style={estilo}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`Espacio reservado para una foto: ${nota}`}
      className={`relative flex items-end overflow-hidden ${color} ${className}`}
      style={estilo}
    >
      {/* Rayas finas para que se note que es un placeholder */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 14px, rgba(31,35,15,.35) 14px 15px)',
        }}
      />
      <span className="relative m-3 rounded-sm bg-crema px-2 py-1 text-xs font-bold text-tinta-800">
        {nota}
      </span>
    </div>
  )
}

// Logo de WhatsApp (se pinta con el color del texto del botón).
export function IconoWhatsApp({ className = 'h-5 w-5' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

// Separador curvo entre dos secciones.
//  - "de": clase de fondo de la sección de ARRIBA (ej: 'bg-papel-50')
//  - "a": clase de color de texto con el color de la sección de ABAJO (ej: 'text-papel-100')
//  - "forma": 'onda' o 'colina'
export function Separador({ de, a, forma = 'onda' }) {
  const caminos = {
    onda: 'M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z',
    colina: 'M0,80 C400,0 1040,0 1440,80 Z',
  }
  return (
    <div aria-hidden="true" className={`-mb-px ${de}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-8 w-full md:h-14 ${a}`}
        fill="currentColor"
      >
        <path d={caminos[forma]} />
      </svg>
    </div>
  )
}

// Grilla de puntitos decorativa (se posiciona con "className").
export function Puntitos({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`h-24 w-24 text-tinta-500/50 ${className}`}
      style={{
        backgroundImage: 'radial-gradient(currentColor 2px, transparent 2.5px)',
        backgroundSize: '14px 14px',
      }}
    />
  )
}
