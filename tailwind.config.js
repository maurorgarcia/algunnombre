/** @type {import('tailwindcss').Config} */
// TEMA DEL SITIO: acá se cambian colores, tipografías y formas.
// Las clases de los componentes usan estos nombres (papel, tinta, arcilla, mostaza, tomate).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Reemplazamos (no extendemos) colores y bordes para no caer en el look por defecto de Tailwind.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Blanco cálido para tarjetas (nunca blanco frío)
      crema: '#FFFCF5',
      // Crema de fondo
      papel: {
        50: '#FBF6EA',
        100: '#F5EDDB',
        200: '#EADFC6',
        300: '#DCCDAE',
      },
      // Verde oliva oscuro (texto y fondos oscuros)
      tinta: {
        500: '#636B36',
        600: '#4F5729',
        700: '#3E4423',
        800: '#2E3319',
        900: '#1F230F',
      },
      // Arcilla (fotos de ejemplo, detalles)
      arcilla: {
        200: '#E8C9B3',
        300: '#D9A98B',
        400: '#C98760',
        500: '#B86B45',
        600: '#8A4A2D', // textos chicos: necesita buen contraste
      },
      // Mostaza (acento)
      mostaza: {
        300: '#EDCB6E',
        400: '#E3B23C',
        500: '#D49A1A',
        600: '#A97A0E',
      },
      // Tomate (acción principal: botones de WhatsApp)
      tomate: {
        500: '#C8452C',
        600: '#A8351F',
        700: '#862916',
      },
    },
    fontFamily: {
      // Títulos: grotesca amigable y poco común
      titulo: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      // Texto: sans legible
      texto: ['"DM Sans"', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      none: '0',
      sm: '3px',
      md: '8px',
      lg: '14px',
      sello: '9999px',
    },
    boxShadow: {
      none: 'none',
    },
    extend: {
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        pagina: '72rem',
      },
    },
  },
  plugins: [],
}
