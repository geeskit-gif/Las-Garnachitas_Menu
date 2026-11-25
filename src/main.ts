import './styles.css';

type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  note?: string;
};
const menu: MenuItem[] = [
  { id: 'tostadas', name: 'Tostadas (3 piezas)', category: 'Antojitos', price: 50 },
  { id: 'garnachas', name: 'Garnachas (3 piezas)', category: 'Antojitos', price: 50 },
  { id: 'tacos-dorados', name: 'Tacos dorados (3 piezas)', category: 'Antojitos', price: 50 },
  { id: 'dobladas', name: 'Dobladas (3 piezas)', category: 'Antojitos', price: 50 },
  { id: 'enchiladas', name: 'Enchiladas (3 piezas)', category: 'Antojitos', price: 50 },
  { id: 'platanos', name: 'Plátanos fritos', category: 'Antojitos', price: 50 },
  { id: 'huarache', name: 'Huarache', category: 'Antojitos', price: 60, note: 'Frijoles, lechuga, crema, queso fresco y carne asada' },
  { id: 'huarache-mixto', name: 'Huarache mixto', category: 'Antojitos', price: 70, note: 'Frijoles, lechuga, crema, queso fresco, carne asada y chorizo' },
  { id: 'memelas', name: 'Memelas (2 piezas)', category: 'Antojitos', price: 60, note: 'Frijoles, lechuga, aguacate, queso fresco y chorizo o carne asada' },

  { id: 'emp-picadillo', name: 'Empanadas de picadillo (3 piezas)', category: 'Empanadas', price: 50 },
  { id: 'emp-quesillo', name: 'Empanadas de quesillo (3 piezas)', category: 'Empanadas', price: 50 },
  { id: 'emp-pollo', name: 'Empanadas de pollo (3 piezas)', category: 'Empanadas', price: 50 },
  { id: 'emp-deshebrada', name: 'Empanadas de deshebrada (3 piezas)', category: 'Empanadas', price: 55 },
  { id: 'emp-tinga-pollo', name: 'Empanadas de tinga de pollo (3 piezas)', category: 'Empanadas', price: 55 },
  { id: 'emp-tinga-res', name: 'Empanadas de tinga de res (3 piezas)', category: 'Empanadas', price: 55 },

  { id: 'ques-chicharron', name: 'Quesadilla de chicharrón', category: 'Quesadillas', price: 50 },
  { id: 'ques-barbacoa', name: 'Quesadilla de barbacoa', category: 'Quesadillas', price: 50 },
  { id: 'ques-tinga-res', name: 'Quesadilla de tinga de res', category: 'Quesadillas', price: 50 },
  { id: 'ques-tinga-pollo', name: 'Quesadilla de tinga de pollo', category: 'Quesadillas', price: 50 },
  { id: 'ques-deshebrada', name: 'Quesadilla de carne deshebrada', category: 'Quesadillas', price: 50 },
  { id: 'ques-champinones', name: 'Quesadilla de champiñones', category: 'Quesadillas', price: 50 },
  { id: 'ques-chorizo', name: 'Quesadilla de chorizo', category: 'Quesadillas', price: 50 },
  { id: 'ques-rajas-pollo', name: 'Quesadilla de rajas con pollo y crema', category: 'Quesadillas', price: 50 },
  { id: 'ques-asada', name: 'Quesadilla de carne asada', category: 'Quesadillas', price: 55 },
  { id: 'ques-asada-quesillo', name: 'Quesadilla de carne asada con quesillo', category: 'Quesadillas', price: 60 },
  { id: 'ques-pastor', name: 'Quesadilla al pastor sencilla', category: 'Quesadillas', price: 70 },
  { id: 'ques-pastor-quesillo', name: 'Quesadilla al pastor con quesillo', category: 'Quesadillas', price: 75 },

  { id: 'torta-asada', name: 'Torta de asada', category: 'Tortas', price: 65, note: 'Frijol, tomate, cebolla, lechuga y aguacate' },
  { id: 'torta-barbacoa', name: 'Torta de barbacoa', category: 'Tortas', price: 65, note: 'Frijol, cebolla, cilantro, lechuga y aguacate' },
  { id: 'torta-chorizo', name: 'Torta de chorizo', category: 'Tortas', price: 65, note: 'Frijol, quesillo, tomate, cebolla, lechuga y aguacate' },
  { id: 'torta-pollo', name: 'Torta de pollo', category: 'Tortas', price: 65, note: 'Pollo, lechuga, tomate, cebolla y aguacate' },
  { id: 'torta-pastor', name: 'Torta al pastor', category: 'Tortas', price: 70, note: 'Al pastor, piña, cebolla cocida y lechuga' },
  { id: 'torta-especial', name: 'Torta especial', category: 'Tortas', price: 80, note: 'Frijol, asada, chorizo, quesillo, tomate, cebolla, lechuga y aguacate' },
  { id: 'torta-carnes-frias', name: 'Torta de carnes frías', category: 'Tortas', price: 80, note: 'Tocino, salchicha, jamón, chorizo y queso amarillo' },

  { id: 'tacos-barbacoa', name: 'Tacos de barbacoa (3 piezas)', category: 'Tacos y tostadas de barbacoa', price: 55, note: 'Cebolla, cilantro y aguacate' },
  { id: 'tostadas-barbacoa', name: 'Tostadas de barbacoa (3 piezas)', category: 'Tacos y tostadas de barbacoa', price: 55, note: 'Lechuga, cebolla, cilantro y aguacate' },

  { id: 'flan-vaso', name: 'Flan de vaso', category: 'Postres', price: 30 },
  { id: 'gelatinas', name: 'Gelatinas', category: 'Postres', price: 30 },
  { id: 'budin', name: 'Budín', category: 'Postres', price: 35 },
  { id: 'pay-queso', name: 'Pay de queso', category: 'Postres', price: 35 },
  { id: 'flan-napolitano', name: 'Flan napolitano', category: 'Postres', price: 35 },
  { id: 'cheesecake-oreo', name: 'Cheesecake de galleta Oreo', category: 'Postres', price: 35 },
  { id: 'gelatina-mosaico', name: 'Gelatina mosaico', category: 'Postres', price: 40 },
  { id: 'chocoflan', name: 'Chocoflan', category: 'Postres', price: 40 },

  { id: 'helado-galleta', name: 'Helado de galleta', category: 'Helados', price: 13 },
  { id: 'helado-chocomilk', name: 'Helado de Chocomilk', category: 'Helados', price: 13 },
  { id: 'helado-cacahuate', name: 'Helado de cacahuate', category: 'Helados', price: 13 },

  { id: 'boing-cajita', name: 'Boing de cajita', category: 'Bebidas', price: 16 },
  { id: 'boing-cristal', name: 'Boing de botella de cristal', category: 'Bebidas', price: 35 },
  { id: 'agua-500', name: 'Agua 500 ml', category: 'Bebidas', price: 20 },
  { id: 'cristal', name: 'Agua Cristal', category: 'Bebidas', price: 25 },
  { id: 'agua-1l', name: 'Agua 1 Lt', category: 'Bebidas', price: 30 },
  { id: 'coca-cristal', name: 'Coca-Cola de cristal', category: 'Bebidas', price: 35 },
  { id: 'coca-plastico', name: 'Coca-Cola de plástico', category: 'Bebidas', price: 35 },
  { id: 'fanta-cristal', name: 'Fanta de cristal', category: 'Bebidas', price: 35 },
  { id: 'fanta-plastico', name: 'Fanta de plástico', category: 'Bebidas', price: 35 },
  { id: 'mundet-cristal', name: 'Mundet de cristal', category: 'Bebidas', price: 35 },
  { id: 'mineral', name: 'Agua mineral', category: 'Bebidas', price: 35 },
  { id: 'jugo', name: 'Jugo del Valle', category: 'Bebidas', price: 35 },

  { id: 'jamaica-500', name: 'Jamaica 500 ml', category: 'Aguas naturales', price: 30 },
  { id: 'jamaica-1l', name: 'Jamaica 1 Lt', category: 'Aguas naturales', price: 35 },
  { id: 'horchata-500', name: 'Horchata 500 ml', category: 'Aguas naturales', price: 30 },
  { id: 'horchata-1l', name: 'Horchata 1 Lt', category: 'Aguas naturales', price: 35 },

  { id: 'cafe', name: 'Café', category: 'Bebidas calientes', price: 40 },
  { id: 'cafe-leche', name: 'Café con leche', category: 'Bebidas calientes', price: 45 },
];;

const quantities: Record<string, number> = {};
let tipRate = 0;
const money = (amount: number) =>
  amount.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 2,
  });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <header class="topbar">
    <img class="brand-logo" src="/resources/logo-las-garnachitas.png" alt="Logo oficial de Las Garnachitas" loading="eager">
    <div><p class="eyebrow">ANTOJITOS · TAPACHULA</p><h1>LAS <span>GARNACHITAS</span></h1></div>
    <button class="print-link" id="print-poster" type="button">Imprimir QR</button>
  </header>
  <section class="hero">
    <div class="hero-copy"><img class="hero-brand-logo" src="/resources/logo-las-garnachitas.png" alt="Logo oficial de Las Garnachitas"><p class="eyebrow">HECHO PARA LLEVAR</p><h2>Tu antojo.<br><em>A tu manera.</em></h2><p>Explora el menú, arma tu pedido y envíalo por WhatsApp con el total calculado.</p><a class="hero-cta" href="#menu">VER MENÚ <span>↓</span></a></div>
    <div class="hero-art"><img class="menu-reference-image" src="/resources/menu-fisico-referencia.png" alt="Menú físico de Las Garnachitas"><div class="art-label">EL SABOR DE SIEMPRE · AHORA EN TU CELULAR</div></div>
  </section>
  <div class="demo-banner"><span class="demo-dot"></span><div><strong>MENÚ ACTUALIZADO</strong><small>Arma tu pedido y envíalo directamente por WhatsApp.</small></div></div>
  <nav class="category-nav" id="categories" aria-label="Categorías del menú"></nav>
  <main class="layout" id="menu">
    <section class="menu-area"><div class="section-heading"><div><p class="eyebrow">ELIGE TUS FAVORITOS</p><h2>Menú <span>digital</span></h2></div><span class="menu-count">PARA LLEVAR</span></div><div class="page-controls"><button type="button" id="page-prev" aria-label="Página anterior">‹</button><span id="page-indicator">01 / 09</span><button type="button" id="page-next" aria-label="Página siguiente">›</button></div><div class="product-grid" id="products"></div></section>
    <aside class="cart-panel" id="pedido">
      <div class="cart-head"><div><p class="eyebrow">TU PEDIDO</p><h2>Resumen</h2></div><span class="cart-count" id="cart-count">0</span></div>
      <div id="cart-items" class="cart-items"><div class="empty-cart"><span>＋</span><strong>Tu pedido empieza aquí</strong><p>Agrega productos del menú para calcular el total.</p></div></div>
      <div class="tip-box"><p>¿Deseas dejar propina?</p><div class="tip-options"><button type="button" data-tip="0" class="tip-option active">No, gracias</button><button type="button" data-tip="5" class="tip-option">5%</button><button type="button" data-tip="10" class="tip-option">10%</button><button type="button" data-tip="15" class="tip-option">15%</button></div><label class="custom-tip">Otra cantidad (MXN)<input id="custom-tip" type="number" min="0" step="1" inputmode="decimal" placeholder="$ 0.00"></label></div>
      <div class="totals"><div><span>Subtotal</span><strong id="subtotal">$0.00</strong></div><div><span>Propina</span><strong id="tip-total">$0.00</strong></div><div class="grand-total"><span>Total estimado</span><strong id="grand-total">$0.00</strong></div></div>
      <button id="show-payment" class="primary-button" type="button">Enviar pedido por WhatsApp <span>↗</span></button>
      <p class="cart-note">Revisa tu pedido y envíalo por WhatsApp. El negocio confirmará la disponibilidad y el tiempo de recogida.</p>
    </aside>
  </main>
  <section class="payment-section" id="payment-section" hidden><div class="payment-card"><p class="eyebrow">SIGUIENTE PASO</p><h2>Transfiere sin dictados.</h2><p>Esta demostración ya calcula tu pedido. Los datos bancarios reales se agregarán únicamente con autorización de las dueñas.</p><div class="transfer-placeholder"><span class="bank-icon">↗</span><div><strong>Datos de transferencia del negocio</strong><small>Pendientes de autorización para esta demostración</small></div><span class="lock">●</span></div><div class="order-preview" id="order-preview"></div><div class="payment-actions"><button class="primary-button" id="copy-order" type="button">Copiar resumen del pedido</button><button class="secondary-button" id="hide-payment" type="button">Volver al menú</button></div><p class="cart-note">No se realiza ningún cobro en esta versión. No uses comprobantes como prueba única de pago.</p></div></section>
  <section class="poster-section" id="poster"><div class="poster-card"><img class="poster-logo" src="/resources/logo-las-garnachitas.png" alt="Las Garnachitas"><p class="eyebrow">ESCANEA · ELIGE · DISFRUTA</p><h2>Consulta nuestro<br><em>menú digital</em></h2><p>Elige tus antojitos y calcula tu pedido desde tu teléfono.</p><div class="qr-frame"><img id="qr-image" alt="Código QR para abrir el menú digital"><span>ABRE LA CÁMARA Y ESCANEA</span></div><small class="poster-url" id="poster-url"></small><div class="poster-footer">MENÚ PARA LLEVAR · TAPACHULA</div></div></section>
  <footer><span>LAS GARNACHITAS</span><span>MENÚ DIGITAL · DEMO</span></footer>
`;

const categories = [
  'Todos',
  ...Array.from(new Set(menu.map(item => item.category))),
];
let activeCategory = 'Todos';
const categoryNav = document.querySelector<HTMLElement>('#categories')!;
categoryNav.innerHTML = categories
  .map(
    category =>
      `<button type="button" class="category-chip ${category === activeCategory ? 'selected' : ''}" data-category="${category}">${category}</button>`
  )
  .join('');

const productImages: Record<string, string> = {
  // Antojitos: cada tarjeta usa un primer plano del platillo que nombra.
  'tostadas': '/resources/foto-tostadas.jpg',
  'garnachas': '/resources/foto-garnachas.jpg',
  'tacos-dorados': 'https://www.thedailymeal.com/img/gallery/tacos-dorados-are-the-perfect-way-to-spice-up-your-next-taco-night/l-intro-1673097822.jpg',
  'dobladas': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'enchiladas': '/resources/foto-enchiladas.jpg',
  'platanos': 'https://img0.didiglobal.com/static/soda_public/img_37c37b42b58c865e60b0dd807a40f729.png',
  'huarache': 'https://cdn7.kiwilimon.com/recetaimagen/37040/640x640/46480.jpg.jpg',
  'huarache-mixto': 'https://cdn7.kiwilimon.com/recetaimagen/37040/640x640/46480.jpg.jpg',
  'memelas': 'https://cdn7.kiwilimon.com/recetaimagen/37040/640x640/46480.jpg.jpg',

  // Empanadas, quesadillas y tortas.
  'emp-picadillo': 'https://static.spotapps.co/spots/3d/32004eda0a4f7697835e69dcfe2620/full',
  'emp-quesillo': 'https://static.spotapps.co/spots/3d/32004eda0a4f7697835e69dcfe2620/full',
  'emp-pollo': 'https://static.spotapps.co/spots/3d/32004eda0a4f7697835e69dcfe2620/full',
  'emp-deshebrada': 'https://static.spotapps.co/spots/3d/32004eda0a4f7697835e69dcfe2620/full',
  'emp-tinga-pollo': 'https://static.spotapps.co/spots/3d/32004eda0a4f7697835e69dcfe2620/full',
  'emp-tinga-res': 'https://static.spotapps.co/spots/3d/32004eda0a4f7697835e69dcfe2620/full',
  'ques-chicharron': '/resources/foto-quesadilla.jpg',
  'ques-barbacoa': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-tinga-res': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-tinga-pollo': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-deshebrada': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-champinones': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-chorizo': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-rajas-pollo': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-asada': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-asada-quesillo': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-pastor': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'ques-pastor-quesillo': 'https://img0.didiglobal.com/static/soda_public/do1_geACSAyaNJMknGcL8Q5I',
  'torta-asada': '/resources/foto-torta.jpg',
  'torta-barbacoa': 'https://img0.didiglobal.com/static/soda_public/img_2ee8707a46dab183e2599e7134065fbf.jpg',
  'torta-chorizo': 'https://img0.didiglobal.com/static/soda_public/img_2ee8707a46dab183e2599e7134065fbf.jpg',
  'torta-pollo': 'https://img0.didiglobal.com/static/soda_public/img_2ee8707a46dab183e2599e7134065fbf.jpg',
  'torta-pastor': 'https://img0.didiglobal.com/static/soda_public/img_2ee8707a46dab183e2599e7134065fbf.jpg',
  'torta-especial': 'https://img0.didiglobal.com/static/soda_public/img_2ee8707a46dab183e2599e7134065fbf.jpg',
  'torta-carnes-frias': 'https://img0.didiglobal.com/static/soda_public/img_2ee8707a46dab183e2599e7134065fbf.jpg',

  // Barbacoa: taco y tostada tienen fotos diferentes.
  'tacos-barbacoa': '/resources/foto-tacos-barbacoa.jpg',
  'tostadas-barbacoa': 'https://static.wixstatic.com/media/72849d_68fb19a627394701a6f4d6bcd6c917e4~mv2.jpg/v1/fit/w_500%2Ch_500%2Cq_90/file.jpg',

  // Postres con fotografía propia por tipo.
  'flan-vaso': 'https://www.hola.com/horizon/original_aspect_ratio/0ce5984b3bdd-detalle-faln.jpg',
  'gelatinas': 'https://1.bp.blogspot.com/-UXI3Eyt04ZY/T-im6GXIOWI/AAAAAAAAC9U/V2lYHPwY7MU/s1600/fantasia-de-colores.jpg',
  'budin': 'https://food.cld.sndimg.com/image/upload/w_2400/v1/fn_core_images/food/plus/fullset/2021/04/13/0/FNKLIve_Santos-Loo_Budin-de-Pan-con-Caramelo-2_s4x3.jpg',
  'pay-queso': 'https://cdn.apartmenttherapy.info/image/upload/f_jpg%2Cq_auto%3Aeco%2Cc_fill%2Cg_auto%2Cw_1500%2Car_1%3A1/k%2Frecipes%2F2023%2F2023-12-pay-de-queso%2Fpay-de-queso-5',
  'flan-napolitano': 'https://www.hola.com/horizon/original_aspect_ratio/0ce5984b3bdd-detalle-faln.jpg',
  'cheesecake-oreo': 'https://img0.didiglobal.com/static/soda_public/img_9e1dd3bc34a6d130492bc95725a77969.jpg',
  'gelatina-mosaico': 'https://cdn.apartmenttherapy.info/image/upload/v1779999185/tk/photo/2026/05-2026/2026-05-mosaic-jello-squares/mosaic-jello-squares-445.jpg',
  'chocoflan': 'https://i.pinimg.com/originals/9c/3a/bd/9c3abd37b89589e7909a1390adc9f8f1.jpg',

  // Helados y bebidas.
  'helado-galleta': 'https://img.mesa247.pe/archivos/platos/lart-helado-artesanal/peanut-caramel.jpg',
  'helado-chocomilk': 'https://img.mesa247.pe/archivos/platos/lart-helado-artesanal/peanut-caramel.jpg',
  'helado-cacahuate': 'https://img.mesa247.pe/archivos/platos/lart-helado-artesanal/peanut-caramel.jpg',
  'boing-cajita': 'https://i5-mx.walmartimages.com/mg/gm/3pp/asr/bf3d796e-a1a4-4c4a-856d-fe58eff5f99a.5d7448acec4b8030be906ad8ca48d51d.jpeg?odnBg=FFFFFF&odnHeight=612&odnWidth=612',
  // Las siete presentaciones de refrescos esperan sus fotografías individuales finales.
  'boing-cristal': '',
  'coca-cristal': '',
  'coca-plastico': '',
  'fanta-cristal': '',
  'fanta-plastico': '',
  'mundet-cristal': '',
  'agua-500': 'https://i.blogs.es/1b04fd/35489597822_e7640272b4_k/450_1000.jpg',
  'cristal': 'https://i.blogs.es/1b04fd/35489597822_e7640272b4_k/450_1000.jpg',
  'agua-1l': 'https://i.blogs.es/1b04fd/35489597822_e7640272b4_k/450_1000.jpg',




  'mineral': 'https://i.blogs.es/1b04fd/35489597822_e7640272b4_k/450_1000.jpg',
  'jugo': 'https://i5-mx.walmartimages.com/mg/gm/3pp/asr/bf3d796e-a1a4-4c4a-856d-fe58eff5f99a.5d7448acec4b8030be906ad8ca48d51d.jpeg?odnBg=FFFFFF&odnHeight=612&odnWidth=612',
  'jamaica-500': 'https://static.wixstatic.com/media/ee509a_011443789c7c4b48aa170cc24cf87e16~mv2.jpg/v1/fill/w_716%2Ch_660%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/ee509a_011443789c7c4b48aa170cc24cf87e16~mv2.jpg',
  'jamaica-1l': 'https://static.wixstatic.com/media/ee509a_011443789c7c4b48aa170cc24cf87e16~mv2.jpg/v1/fill/w_716%2Ch_660%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/ee509a_011443789c7c4b48aa170cc24cf87e16~mv2.jpg',
  'horchata-500': 'https://static.wixstatic.com/media/11edfd_15537c06b6334dd4b3404953fa3dcd0c~mv2.jpg/v1/fill/w_580%2Ch_420%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/11edfd_15537c06b6334dd4b3404953fa3dcd0c~mv2.jpg',
  'horchata-1l': 'https://static.wixstatic.com/media/11edfd_15537c06b6334dd4b3404953fa3dcd0c~mv2.jpg/v1/fill/w_580%2Ch_420%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/11edfd_15537c06b6334dd4b3404953fa3dcd0c~mv2.jpg',
  'cafe': 'https://www.gastrolabweb.com/u/fotografias/m/2025/9/10/f638x638-82552_140719_5050.jpg',
  'cafe-leche': 'https://www.gastrolabweb.com/u/fotografias/m/2025/9/10/f638x638-82552_140719_5050.jpg'
};

// Keep the curated, direct food-photo URLs above. Avoid random image services:
// they can return unrelated dishes, rate-limit requests, or fail on mobile.
const defaultProductImage = 'https://img0.didiglobal.com/static/soda_public/img_05c8bbc0315f9329efbc4efeec4a1ac7.jpg';
const pageCategories = categories.filter(category => category !== 'Todos');
function updatePageIndicator() {
  const current = activeCategory === 'Todos' ? 0 : pageCategories.indexOf(activeCategory) + 1;
  document.querySelector<HTMLElement>('#page-indicator')!.textContent =
    `${String(current + 1).padStart(2, '0')} / ${String(pageCategories.length + 1).padStart(2, '0')}`;
  document.querySelector<HTMLButtonElement>('#page-prev')!.disabled = current === 0;
  document.querySelector<HTMLButtonElement>('#page-next')!.disabled = current === pageCategories.length;
}
function turnToCategory(category: string) {
  const grid = document.querySelector<HTMLElement>('#products')!;
  const currentIndex = activeCategory === 'Todos' ? -1 : pageCategories.indexOf(activeCategory);
  const nextIndex = category === 'Todos' ? -1 : pageCategories.indexOf(category);
  const direction = nextIndex >= currentIndex ? 'forward' : 'backward';
  grid.classList.remove('page-enter', 'slide-forward', 'slide-backward');
  grid.classList.add('page-leave', direction === 'forward' ? 'slide-forward' : 'slide-backward');
  window.setTimeout(() => {
    activeCategory = category;
    categoryNav.querySelectorAll<HTMLButtonElement>('.category-chip').forEach(chip =>
      chip.classList.toggle('selected', chip.dataset.category === category)
    );
    renderProducts();
    grid.classList.remove('page-leave');
    grid.classList.add('page-enter', direction === 'forward' ? 'slide-forward' : 'slide-backward');
    window.setTimeout(() => grid.classList.remove('page-enter', 'slide-forward', 'slide-backward'), 420);
  }, 160);
}
function renderProducts() {
  const shown = activeCategory === 'Todos'
    ? menu
    : menu.filter(item => item.category === activeCategory);
  const usedPhotoUrls = new Set<string>();
  document.querySelector<HTMLElement>('#products')!.innerHTML = shown
    .map(item => {
      const photoUrl = productImages[item.id];
      const isUniquePhoto = Boolean(photoUrl && !usedPhotoUrls.has(photoUrl));
      if (isUniquePhoto) usedPhotoUrls.add(photoUrl!);
      return `
    <article class="product-card">
      <div class="product-photo-wrap ${isUniquePhoto ? '' : 'photo-pending'}">
        ${isUniquePhoto
          ? `<img class="product-photo" src="${photoUrl}" alt="Fotografía ilustrativa de ${item.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('photo-pending');this.nextElementSibling.textContent='FOTO PROPIA EN PREPARACIÓN';this.nextElementSibling.classList.add('photo-pending-label');this.remove()"><span class="photo-caption">FOTOGRAFÍA ILUSTRATIVA</span>`
          : `<span class="photo-pending-label">FOTO PROPIA<br><strong>EN PREPARACIÓN</strong></span>`}
      </div>
      <div class="product-top"><span class="product-number">${String(menu.indexOf(item) + 1).padStart(2, '0')}</span><span class="product-category">${item.category}</span></div>
      <h3>${item.name}</h3><p class="product-note">${item.note ?? 'Preparado al momento.'}</p>
      <div class="product-bottom"><strong>${money(item.price)}</strong><button type="button" class="add-button" data-add="${item.id}" aria-label="Agregar ${item.name}">＋ <span>Agregar</span></button></div>
    </article>`;
    })
    .join('');
  updatePageIndicator();
}

function subtotal() {
  return menu.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 0),
    0
  );
}
function tipAmount() {
  const custom = Number(
    document.querySelector<HTMLInputElement>('#custom-tip')!.value || 0
  );
  return custom > 0 ? custom : (subtotal() * tipRate) / 100;
}
function renderCart() {
  const items = menu.filter(item => quantities[item.id] > 0);
  const count = items.reduce((sum, item) => sum + quantities[item.id], 0);
  document.querySelector<HTMLElement>('#cart-count')!.textContent =
    String(count);
  document.querySelector<HTMLElement>('#cart-items')!.innerHTML = items.length
    ? items
        .map(
          item => `
    <div class="cart-item"><div><strong>${item.name}</strong><small>${money(item.price)} c/u</small></div><div class="quantity-control"><button type="button" data-qty="${item.id}" data-delta="-1" aria-label="Quitar uno">−</button><span>${quantities[item.id]}</span><button type="button" data-qty="${item.id}" data-delta="1" aria-label="Agregar uno">＋</button></div><strong class="line-total">${money(item.price * quantities[item.id])}</strong></div>`
        )
        .join('')
    : '<div class="empty-cart"><span>＋</span><strong>Tu pedido empieza aquí</strong><p>Agrega productos del menú para calcular el total.</p></div>';
  const base = subtotal();
  document.querySelector<HTMLElement>('#subtotal')!.textContent = money(base);
  document.querySelector<HTMLElement>('#tip-total')!.textContent =
    money(tipAmount());
  document.querySelector<HTMLElement>('#grand-total')!.textContent = money(
    base + tipAmount()
  );
  document.querySelector<HTMLButtonElement>('#show-payment')!.disabled =
    count === 0;
}
function orderText() {
  const items = menu.filter(item => quantities[item.id] > 0);
  return [
    'LAS GARNACHITAS — PEDIDO PARA LLEVAR',
    'Pedido para recoger:',
    ...items.map(
      item =>
        `${quantities[item.id]} × ${item.name} — ${money(item.price * quantities[item.id])}`
    ),
    `Subtotal: ${money(subtotal())}`,
    `Propina opcional: ${money(tipAmount())}`,
    `TOTAL ESTIMADO: ${money(subtotal() + tipAmount())}`,
    'Pago pendiente de verificación por el negocio.',
  ].join('\n');
}
function updateQr() {
  const url = window.location.href.split('#')[0].split('?')[0];
  document.querySelector<HTMLImageElement>('#qr-image')!.src =
    'https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=12&data=' +
    encodeURIComponent(url);
  document.querySelector<HTMLElement>('#poster-url')!.textContent = url;
}
categoryNav.addEventListener('click', event => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
    '[data-category]'
  );
  if (!button) return;
  turnToCategory(button.dataset.category || 'Todos');
});
document.querySelector<HTMLButtonElement>('#page-prev')!.addEventListener('click', () => {
  const current = activeCategory === 'Todos' ? -1 : pageCategories.indexOf(activeCategory);
  turnToCategory(current <= 0 ? 'Todos' : pageCategories[current - 1]);
});
document.querySelector<HTMLButtonElement>('#page-next')!.addEventListener('click', () => {
  const current = activeCategory === 'Todos' ? -1 : pageCategories.indexOf(activeCategory);
  turnToCategory(current >= pageCategories.length - 1 ? 'Todos' : pageCategories[current + 1]);
});
let swipeStartX = 0;
document.querySelector<HTMLElement>('#products')!.addEventListener('touchstart', event => {
  swipeStartX = event.changedTouches[0].screenX;
}, { passive: true });
document.querySelector<HTMLElement>('#products')!.addEventListener('touchend', event => {
  const delta = event.changedTouches[0].screenX - swipeStartX;
  if (Math.abs(delta) < 65) return;
  const current = activeCategory === 'Todos' ? -1 : pageCategories.indexOf(activeCategory);
  if (delta < 0 && current < pageCategories.length - 1) turnToCategory(pageCategories[current + 1]);
  if (delta > 0 && current >= 0) turnToCategory(current === 0 ? 'Todos' : pageCategories[current - 1]);
}, { passive: true });
document
  .querySelector<HTMLElement>('#products')!
  .addEventListener('click', event => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      '[data-add]'
    );
    if (!button) return;
    const id = button.dataset.add!;
    quantities[id] = (quantities[id] || 0) + 1;
    renderCart();
    button.classList.add('just-added');
    button.innerHTML = '✓ <span>Agregado</span>';
    window.setTimeout(() => {
      if (button.isConnected) {
        button.classList.remove('just-added');
        button.innerHTML = '＋ <span>Agregar</span>';
      }
    }, 700);
  });
document
  .querySelector<HTMLElement>('#cart-items')!
  .addEventListener('click', event => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      '[data-qty]'
    );
    if (!button) return;
    const id = button.dataset.qty!;
    quantities[id] = Math.max(
      0,
      (quantities[id] || 0) + Number(button.dataset.delta)
    );
    renderCart();
  });
document.querySelectorAll<HTMLButtonElement>('[data-tip]').forEach(button =>
  button.addEventListener('click', () => {
    tipRate = Number(button.dataset.tip);
    document.querySelector<HTMLInputElement>('#custom-tip')!.value = '';
    document
      .querySelectorAll('.tip-option')
      .forEach(option => option.classList.toggle('active', option === button));
    renderCart();
  })
);
document
  .querySelector<HTMLInputElement>('#custom-tip')!
  .addEventListener('input', event => {
    tipRate = 0;
    document
      .querySelectorAll('.tip-option')
      .forEach(option => option.classList.remove('active'));
    renderCart();
  });
document
  .querySelector<HTMLButtonElement>('#show-payment')!
  .addEventListener('click', () => {
    const phone = '529622060330';
    const message = [
      'Hola, quiero hacer este pedido en Las Garnachitas:',
      '',
      orderText(),
      '',
      '¿Me pueden confirmar el tiempo aproximado para recogerlo?'
    ].join('\n');
    const whatsappUrl = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
document
  .querySelector<HTMLButtonElement>('#hide-payment')!
  .addEventListener('click', () => {
    document.querySelector<HTMLElement>('#payment-section')!.hidden = true;
    document
      .querySelector<HTMLElement>('#menu')!
      .scrollIntoView({ behavior: 'smooth' });
  });
document
  .querySelector<HTMLButtonElement>('#copy-order')!
  .addEventListener('click', async event => {
    const button = event.currentTarget as HTMLButtonElement;
    try {
      await navigator.clipboard.writeText(orderText());
      button.textContent = 'Resumen copiado ✓';
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = orderText();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
      button.textContent = 'Resumen copiado ✓';
    }
  });
document
  .querySelector<HTMLButtonElement>('#print-poster')!
  .addEventListener('click', () => {
    updateQr();
    document.body.classList.add('printing-poster');
    window.print();
    window.setTimeout(
      () => document.body.classList.remove('printing-poster'),
      500
    );
  });
renderProducts();
renderCart();
updateQr();
