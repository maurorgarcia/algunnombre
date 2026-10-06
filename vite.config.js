import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from './src/config.js'

// Reemplaza __NOMBRE__, __ESLOGAN__ y __DESCRIPCION__ en index.html
// con los datos de src/config.js (título de pestaña y Open Graph).
const datosEnHtml = () => ({
  name: 'datos-en-html',
  transformIndexHtml: (html) =>
    html
      .replaceAll('__NOMBRE__', config.nombre)
      .replaceAll('__ESLOGAN__', config.eslogan)
      .replaceAll('__DESCRIPCION__', config.descripcionSitio),
})

export default defineConfig({
  plugins: [react(), datosEnHtml()],
})
