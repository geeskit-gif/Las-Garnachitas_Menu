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

  { id: 'tacos-barbacoa', name: 'Tacos de barbacoa (3 piezas)', category: 'Antojitos', price: 55, note: 'Cebolla, cilantro y aguacate' },
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
    <section class="menu-area"><div class="section-heading"><div><p class="eyebrow">ELIGE TUS FAVORITOS</p><h2>Menú <span>digital</span></h2></div><span class="menu-count">PARA LLEVAR</span></div><div class="page-controls"><button type="button" id="page-prev" aria-label="Página anterior">‹</button><span id="page-indicator">01 / 09</span><button type="button" id="page-next" aria-label="Página siguiente">›</button></div><div class="page-stage" id="page-stage"><div class="category-feature" id="category-feature" hidden></div><div class="product-grid" id="products"></div></div></section>
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

const categories = Array.from(new Set(menu.map(item => item.category)));
let activeCategory = categories[0];
const categoryNav = document.querySelector<HTMLElement>('#categories')!;
categoryNav.innerHTML = categories
  .map(
    category =>
      `<button type="button" class="category-chip ${category === activeCategory ? 'selected' : ''}" data-category="${category}">${category}</button>`
  )
  .join('');

const categoryImages: Record<string, { image?: string; kicker: string; description: string }> = {
  'Antojitos': { image: '/resources/memelas.jpg', kicker: 'SABORES DE LA CASA', description: 'Los antojitos que hacen especial cada visita.' },
  'Empanadas': { image: '/resources/empanadas.jpg', kicker: 'RECIÉN PREPARADAS', description: 'Elige tu relleno favorito.' },
  'Quesadillas': { image: '/resources/foto-quesadilla.jpg', kicker: 'A TU GUSTO', description: 'Una quesadilla, muchas formas de disfrutarla.' },
  'Tortas': { image: '/resources/foto-torta.jpg', kicker: 'PARA UN ANTOJO COMPLETO', description: 'Elige tu combinación favorita.' },
  'Postres': { image: '/resources/flan.jpg', kicker: 'UN TOQUE DULCE', description: 'El cierre perfecto para tu comida.' },
  'Helados': { kicker: 'ALGO FRESCO', description: 'Elige tu sabor favorito.' },
  'Bebidas': { image: '/resources/boing-fresa-354ml.jpg', kicker: 'PARA ACOMPAÑAR', description: 'Encuentra algo rico para tomar.' },
  'Aguas naturales': { image: '/resources/aguas-frescas.jpg', kicker: 'FRESCAS Y NATURALES', description: 'Jamaica y horchata, en el tamaño que prefieras.' },
  'Bebidas calientes': { image: '/resources/cafe-con-leche.jpg', kicker: 'UNA PAUSA CALIENTITA', description: 'Café para acompañar tu momento.' }
};
const pageCategories = categories;
function updatePageIndicator() {
  const current = pageCategories.indexOf(activeCategory);
  document.querySelector<HTMLElement>('#page-indicator')!.textContent =
    `${String(current + 1).padStart(2, '0')} / ${String(pageCategories.length).padStart(2, '0')}`;
  document.querySelector<HTMLButtonElement>('#page-prev')!.disabled = current === 0;
  document.querySelector<HTMLButtonElement>('#page-next')!.disabled = current === pageCategories.length - 1;
}
function turnToCategory(category: string) {
  if (category === activeCategory || !pageCategories.includes(category)) return;
  const stage = document.querySelector<HTMLElement>('#page-stage')!;
  const currentIndex = pageCategories.indexOf(activeCategory);
  const nextIndex = pageCategories.indexOf(category);
  const direction = nextIndex > currentIndex ? 'forward' : 'backward';
  stage.classList.remove('page-enter', 'slide-forward', 'slide-backward');
  stage.classList.add('page-leave', direction === 'forward' ? 'slide-forward' : 'slide-backward');
  window.setTimeout(() => {
    activeCategory = category;
    categoryNav.querySelectorAll<HTMLButtonElement>('.category-chip').forEach(chip =>
      chip.classList.toggle('selected', chip.dataset.category === category)
    );
    renderProducts();
    stage.classList.remove('page-leave');
    stage.classList.add('page-enter', direction === 'forward' ? 'slide-forward' : 'slide-backward');
    window.setTimeout(() => stage.classList.remove('page-enter', 'slide-forward', 'slide-backward'), 420);
  }, 160);
}
function renderProducts() {
  const shown = menu.filter(item => item.category === activeCategory);
  const feature = document.querySelector<HTMLElement>('#category-feature')!;
  const visual = categoryImages[activeCategory];
  feature.hidden = false;
  feature.innerHTML = visual?.image
    ? `<div class="category-feature-image"><img src="${visual.image}" alt="${activeCategory}" loading="eager"></div>
       <div class="category-feature-copy"><p class="eyebrow">${visual.kicker}</p><h3>${activeCategory}</h3><p>${visual.description}</p><span class="category-feature-count">${shown.length} opciones</span></div>`
    : `<div class="category-feature-copy category-feature-copy-only"><p class="eyebrow">${visual?.kicker ?? 'HECHO AL MOMENTO'}</p><h3>${activeCategory}</h3><p>${visual?.description ?? 'Explora nuestras opciones.'}</p><span class="category-feature-count">${shown.length} opciones</span></div>`;
  document.querySelector<HTMLElement>('#products')!.innerHTML = shown
    .map(item => `
      <article class="product-card">
        <div class="product-top"><span class="product-number">${String(menu.indexOf(item) + 1).padStart(2, '0')}</span><span class="product-category">${item.category}</span></div>
        <div class="product-info"><h3>${item.name}</h3><p class="product-note">${item.note ?? 'Preparado al momento.'}</p></div>
        <div class="product-bottom"><strong>${money(item.price)}</strong><button type="button" class="add-button" data-add="${item.id}" aria-label="Agregar ${item.name}">＋ <span>Agregar</span></button></div>
      </article>`)
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
  turnToCategory(button.dataset.category || categories[0]);
});
document.querySelector<HTMLButtonElement>('#page-prev')!.addEventListener('click', () => {
  const current = pageCategories.indexOf(activeCategory);
  if (current > 0) turnToCategory(pageCategories[current - 1]);
});
document.querySelector<HTMLButtonElement>('#page-next')!.addEventListener('click', () => {
  const current = pageCategories.indexOf(activeCategory);
  if (current < pageCategories.length - 1) turnToCategory(pageCategories[current + 1]);
});
let swipeStartX = 0;
document.querySelector<HTMLElement>('#page-stage')!.addEventListener('touchstart', event => {
  swipeStartX = event.changedTouches[0].screenX;
}, { passive: true });
document.querySelector<HTMLElement>('#page-stage')!.addEventListener('touchend', event => {
  const delta = event.changedTouches[0].screenX - swipeStartX;
  if (Math.abs(delta) < 65) return;
  const current = pageCategories.indexOf(activeCategory);
  if (delta < 0 && current < pageCategories.length - 1) turnToCategory(pageCategories[current + 1]);
  if (delta > 0 && current > 0) turnToCategory(pageCategories[current - 1]);
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
