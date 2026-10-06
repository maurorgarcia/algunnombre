// =====================================================================
//  TODO EL CONTENIDO EDITABLE DEL SITIO ESTÁ ACÁ.
//  Todo es de EJEMPLO. Cambiá los textos entre comillas y listo:
//  no hace falta tocar ningún otro archivo.
// =====================================================================

export const config = {
  // ---------- Datos básicos ----------
  nombre: '[NOMBRE PROVISORIO]', // Se usa en toda la web, los mensajes de WhatsApp y la pestaña
  eslogan: 'Viandas armadas por nutricionistas',
  descripcionSitio:
    'Viandas, bowls, budines y snacks por encargo, armados por dos nutricionistas. Pedís por WhatsApp y coordinamos la entrega.',

  whatsapp: '5493364000000', // Solo números, con código de país (54 9 + área + número). Ejemplo.
  instagram: '@nombre.provisorio', // Poné '' para ocultarlo
  horario: 'Lunes a viernes de 9 a 18 hs · Sábados de 9 a 13 hs',

  // ---------- Menú de arriba ----------
  nav: [
    { texto: 'Platos', href: '#platos' },
    { texto: 'Cómo pedir', href: '#como-pedir' },
    { texto: 'Quiénes somos', href: '#quienes' },
    { texto: 'Preguntas', href: '#preguntas' },
  ],
  botonMenu: 'Escribinos', // botón de WhatsApp del menú

  // ---------- Entrada ----------
  entrada: {
    titulo: 'Viandas y bowls armados por nutricionistas.',
    resaltado: 'nutricionistas', // palabra del título que va en color
    texto:
      'Elegís tus platos, nos escribís por WhatsApp y coordinamos la entrega. Cocinamos por encargo, en tandas chicas.',
    boton: 'Hacer un pedido',
    botonSecundario: 'Ver los platos',
    // Cartelitos que flotan alrededor de la foto (máximo 4)
    etiquetas: ['Viandas', 'Bowls', 'Budines', 'Snacks'],
    // Tres puntos a la derecha. icono: 'hoja', 'porcion' o 'corazon'
    puntos: [
      { icono: 'hoja', titulo: 'Ingredientes a la vista', texto: 'Cada plato dice qué lleva.' },
      { icono: 'porcion', titulo: 'Porciones claras', texto: 'Sabés cuánto trae cada vianda.' },
      { icono: 'corazon', titulo: 'Lo adaptamos a vos', texto: 'Celíacos, veganos o sin lactosa: consultanos.' },
    ],
    // FOTO PROVISORIA (Pexels, gratis). Para cambiarla: guardá tu foto en /public/fotos y poné su ruta.
    // Dejá foto: '' para volver al bloque de color.
    notaFoto: 'acá va una foto',
    foto: '/fotos/pexels-1640770.jpg',
    fotoAlt: 'Dos bowls de arroz con verduras, vistos desde arriba',
    fotoPosicion: '22% 50%',
    // Segunda foto, redonda, superpuesta a la principal (provisoria, de Pexels)
    foto2: '/fotos/pexels-3851088.jpg',
    foto2Alt: 'Verduras y granos sobre una mesada de cocina',
  },

  // ---------- Platos ----------
  carta: {
    sobretitulo: 'Los platos',
    titulo: 'Elegí qué querés comer esta semana',
    texto: 'Sumá lo que quieras con el + y mandamos todo junto. Si es un solo plato, tocá "Pedir este".',
    notaPrecios: 'Precios de ejemplo. Pueden cambiar según la semana.',
    botonPedirUno: 'Pedir este',
    destacado: 'Plato de la semana',
  },

  // Platos de EJEMPLO. Para agregar uno, copiá un bloque { ... } y cambiale el id.
  // El id tiene que ser único. "etiquetas" son avisos cortos que se ven en cada plato (ej: 'sin carne').
  // "foto": ruta de la foto real (ej: '/fotos/vianda-pollo.jpg'). Si queda vacía, se ve un bloque de color.
  // "color": color del bloque cuando no hay foto (arcilla-300, mostaza-300, papel-300, tinta-500).
  platos: [
    {
      id: 'vianda-pollo',
      nombre: 'Vianda de pollo al horno',
      descripcion: 'Pollo con puré rústico y verduras de estación.',
      ingredientes: 'pollo, papa, zanahoria, cebolla, romero',
      precio: 7800,
      etiquetas: ['vianda'],
      destacado: false, // true = lleva el cartelito "Plato de la semana"
      foto: '', // FOTO: acá va la foto del pollo al horno
      color: 'bg-arcilla-300',
    },
    {
      id: 'bowl-lentejas',
      nombre: 'Bowl de lentejas y calabaza',
      descripcion: 'Lentejas, calabaza asada y arroz, con aderezo de limón.',
      ingredientes: 'lentejas, calabaza, arroz, limón, comino',
      precio: 7200,
      etiquetas: ['bowl', 'sin carne'],
      destacado: false,
      foto: '', // FOTO: acá va la foto del bowl de lentejas
      color: 'bg-mostaza-300',
    },
    {
      id: 'tarta-espinaca',
      nombre: 'Tarta de espinaca y queso',
      descripcion: 'Masa casera, relleno de espinaca y queso. Porción grande.',
      ingredientes: 'espinaca, queso, cebolla, huevo, harina',
      precio: 6500,
      etiquetas: ['vianda', 'sin carne'],
      destacado: false,
      foto: '', // FOTO: acá va la foto de la tarta
      color: 'bg-papel-300',
    },
    {
      id: 'bowl-atun',
      nombre: 'Bowl de atún y arroz yamaní',
      descripcion: 'Arroz yamaní, atún, pepino y zanahoria rallada.',
      ingredientes: 'arroz yamaní, atún, pepino, zanahoria, sésamo',
      precio: 8200,
      etiquetas: ['bowl'],
      destacado: false,
      foto: '', // FOTO: acá va la foto del bowl de atún
      color: 'bg-arcilla-200',
    },
    {
      id: 'budin-limon',
      nombre: 'Budín de limón y amapola',
      descripcion: 'Budín húmedo, para acompañar el mate.',
      ingredientes: 'limón, harina, huevo, manteca, amapola',
      precio: 5200,
      etiquetas: ['budín'],
      destacado: true,
      foto: '', // FOTO: acá va la foto del budín
      color: 'bg-mostaza-300',
    },
    {
      id: 'snack-avena',
      nombre: 'Caja de barritas de avena',
      descripcion: 'Seis barritas de avena, banana y nueces.',
      ingredientes: 'avena, banana, nueces, canela',
      precio: 4800,
      etiquetas: ['snack'],
      destacado: false,
      foto: '', // FOTO: acá va la foto de las barritas
      color: 'bg-arcilla-300',
    },
  ],

  // ---------- Armador de pedido ----------
  armador: {
    titulo: 'Tu pedido',
    verPedido: 'Ver pedido',
    vaciar: 'Empezar de nuevo',
    cerrar: 'Cerrar',
    zonaTitulo: 'Zona de entrega (opcional)',
    zonaVacia: 'Todavía no sé / lo coordinamos',
    semanalTitulo: 'Es para toda la semana',
    semanalAyuda: 'Marcalo si querés que coordinemos un pedido semanal.',
    totalAviso: 'Total estimado con precios de la carta. Lo confirmamos por chat.',
    // Texto del botón. {n} se reemplaza por la cantidad y {platos} por "plato" o "platos".
    botonFijo: 'Enviar mi pedido por WhatsApp ({n} {platos})',
  },

  // ---------- Mensajes de WhatsApp ----------
  // Podés usar {negocio}, {plato}, {lista}, {total}, {zona} y {dieta}.
  mensajes: {
    consulta: 'Hola! Vi la web de {negocio} y quería hacerles una consulta.',
    plato: 'Hola! Vi en la web {plato} y quiero pedirlo. ¿Tenés disponibilidad?',
    pedido:
      'Hola! Quiero hacer un pedido en {negocio}:\n\n{lista}\n\nTotal estimado: {total}{zona}\n\n¿Cómo lo coordinamos?',
    pedidoSemanal:
      'Hola! Quiero armar un pedido semanal en {negocio}:\n\n{lista}\n\nTotal estimado por semana: {total}{zona}\n\n¿Qué días podrían entregarlo?',
    dieta:
      'Hola! Quería consultarles por opciones para {dieta}. ¿Qué platos de {negocio} me recomendás?',
    // Línea que se agrega si eligió zona. {zona} es la zona elegida.
    lineaZona: '\nZona de entrega: {zona}',
  },

  // ---------- Cómo pedir (incluye días, zonas y pagos, que están justo abajo) ----------
  comoPedir: {
    sobretitulo: 'Cómo pedir',
    titulo: 'Tres pasos, sin registrarte en nada',
    pasos: [
      { titulo: 'Elegís', texto: 'Mirás los platos y sumás lo que quieras. Si dudás, preguntá.' },
      { titulo: 'Escribís', texto: 'Tocás el botón y se abre WhatsApp con el mensaje ya escrito. Solo lo mandás.' },
      { titulo: 'Coordinamos', texto: 'Te decimos si llegamos, qué día te lo llevamos y cómo pagás.' },
    ],
  },

  // ---------- Días, zonas y pagos (se muestran dentro de "Cómo pedir") ----------
  entregas: {
    diasTitulo: 'Días de entrega',
    dias: ['Martes', 'Jueves', 'Sábados (a confirmar)'],
    zonasTitulo: 'Zonas',
    zonas: ['Centro', 'Barrio Norte', 'Barrio Sur', 'Retiro por el local (a confirmar)'],
    pagosTitulo: 'Medios de pago',
    pagos: ['Transferencia', 'Efectivo', 'Mercado Pago'],
    nota: 'Pedimos con 48 hs de anticipación. Es por encargo, así que se cocina para vos.',
  },

  // ---------- Quiénes somos ----------
  quienes: {
    sobretitulo: 'Quiénes somos',
    titulo: 'Somos nutricionistas y cocinamos lo que armamos',
    // Textos y nombres de EJEMPLO
    texto:
      'Somos dos amigas y colegas. Nuestros pacientes siempre nos pedían ideas de qué comer en la semana, así que empezamos a cocinarlas. Antes de ofrecer un plato, lo pensamos y lo probamos.',
    puntos: [
      { titulo: 'Ingredientes a la vista', texto: 'Cada plato dice qué lleva.' },
      { titulo: 'Porciones claras', texto: 'Te contamos cuánto trae cada vianda.' },
      { titulo: 'Lo adaptamos a vos', texto: 'Celíacos, veganos, sin lactosa: escribinos y vemos qué se puede hacer.' },
    ],
    firma: 'Lu y Caro',
    matriculas: 'Lic. en Nutrición · M.P. 0000 y M.P. 0000', // Poné las matrículas reales
    // FOTO PROVISORIA (Pexels, gratis): ingredientes sobre la mesada. Reemplazala por una foto de ustedes.
    notaFoto: 'foto de las dos',
    foto: '/fotos/pexels-3851088.jpg',
    fotoAlt: 'Verduras, hongos y granos sobre una mesada de cocina',
    fotoPosicion: '50% 50%',
  },

  // ---------- Preguntas frecuentes ----------
  preguntas: {
    sobretitulo: 'Preguntas',
    titulo: 'Preguntas frecuentes',
    items: [
      { pregunta: '¿Con cuánta anticipación tengo que pedir?', respuesta: 'Con 48 hs, porque cocinamos por encargo.' },
      { pregunta: '¿Hay pedido mínimo?', respuesta: 'Para entrega a domicilio, 2 platos. Para retirar, no hay mínimo.' },
      { pregunta: '¿Puedo pedir para toda la semana?', respuesta: 'Sí. Armás el pedido, marcás "toda la semana" y coordinamos los días.' },
      { pregunta: '¿Los platos vienen calientes?', respuesta: 'Van en envases cerrados y se calientan en casa. Te avisamos cómo en cada plato.' },
    ],
    // Consultas por dieta: hoy no se muestran en la web, pero el mensaje y el helper (linkDieta) quedan listos.
    dietas: [
      { etiqueta: 'Celíaca', valor: 'celíacos (sin TACC)' },
      { etiqueta: 'Vegana', valor: 'una dieta vegana' },
      { etiqueta: 'Sin lactosa', valor: 'una dieta sin lactosa' },
    ],
  },

  // ---------- Pie de página (es el único cierre del sitio: incluye el botón de WhatsApp) ----------
  pie: {
    descripcion: 'Viandas, bowls, budines y snacks por encargo, armados por dos nutricionistas.',
    boton: 'Escribinos por WhatsApp',
    seccionesTitulo: 'Secciones',
    contactoTitulo: 'Contacto',
    horarioTitulo: 'Horario de atención',
    zonasTitulo: 'Entregas en',
    copyright: 'Todos los derechos reservados.',
    // Aviso chico de abajo. Borralo (dejá '') cuando el sitio deje de ser una prueba.
    aviso: 'Sitio de prueba con contenido de ejemplo.',
  },

  // ---------- Botón flotante ----------
  flotante: 'Escribinos',
}

// Formatea un número como pesos argentinos: 7800 -> "$7.800"
export const pesos = (n) => '$' + n.toLocaleString('es-AR')
