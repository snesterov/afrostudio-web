/**
 * AFROSTUDIO — Official Premium Salon Landing Engine v2.0.0
 * Architecture matching afrostudio.ru:
 * 1. Top Works & Deals Slider (with arrows, bullets, touch swipe)
 * 2. 4 Salon Directions (Наращивание волос, Афрокосички, Окрашивание, Обучение)
 * 3. Kling AI Art Showcase
 * 4. Master Works Gallery (Lightbox with swipe)
 * 5. Telegram Channel Integration
 * 6. Official GameLead Wheel of Fortune (c8bee7fc877024cac5a483e8950480f0)
 * 7. Mobile-first: Left-Bottom Arrow Up (40x40px), Cookie banner, Legal Footer (152-ФЗ)
 * YM ID: 88058414
 */
(function() {
  'use strict';

  var YM_ID = 88058414;

  function trackYM(target, params) {
    if (window.ym) {
      try {
        window.ym(YM_ID, 'reachGoal', target, params);
        console.log('[AfroStudio YM]:', target);
      } catch(err) {
        console.warn('[AfroStudio YM Error]:', err);
      }
    }
  }

  // Load official GameLead Wheel of Fortune script
  function loadGameLead() {
    if (!document.querySelector('script[src*="game-lead.ru"]')) {
      var s = document.createElement('script');
      s.src = 'https://game-lead.ru/set/c8bee7fc877024cac5a483e8950480f0';
      s.async = true;
      document.body.appendChild(s);
    }
  }

  var styles = `
    /* CORE THEME & RESET */
    #afrostudio-app {
      font-family: 'TildaSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f5f5f7;
      background: #000000;
      overflow-x: hidden;
      width: 100%;
      position: relative;
      line-height: 1.5;
    }
    #afrostudio-app * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    .afro-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* SCROLL TO TOP — STRICTLY BOTTOM 14px, LEFT 14px, 40x40 px */
    #afro-scroll-top {
      position: fixed;
      bottom: 14px;
      left: 14px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #18181c;
      border: 1px solid #d4af37;
      color: #d4af37;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9990;
      box-shadow: 0 4px 16px rgba(0,0,0,0.6);
      transition: all 0.25s ease;
      opacity: 0;
      visibility: hidden;
    }
    #afro-scroll-top.afro-visible {
      opacity: 1;
      visibility: visible;
    }
    #afro-scroll-top:hover {
      background: #d4af37;
      color: #000;
      transform: translateY(-2px);
    }
    #afro-scroll-top svg {
      width: 18px;
      height: 18px;
      stroke-width: 2.5;
    }

    /* 1. TOP SLIDER HERO */
    .afro-slider-wrap {
      position: relative;
      width: 100%;
      overflow: hidden;
      background: #0a0a0c;
    }
    .afro-slider-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
      width: 100%;
    }
    .afro-slide {
      min-width: 100%;
      position: relative;
      min-height: 460px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center center;
    }
    @media (min-width: 768px) {
      .afro-slide {
        min-height: 560px;
      }
    }
    .afro-slide-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%);
    }
    .afro-slide-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 820px;
      padding: 40px 16px;
    }
    .afro-slide-tag {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 30px;
      background: rgba(212,175,55,0.18);
      border: 1px solid rgba(212,175,55,0.4);
      color: #f3e08b;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 14px;
    }
    .afro-slide-title {
      font-size: 28px;
      line-height: 1.2;
      font-weight: 800;
      margin-bottom: 14px;
      color: #fff;
      text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    }
    @media (min-width: 768px) {
      .afro-slide-title {
        font-size: 46px;
      }
    }
    .afro-slide-desc {
      font-size: 15px;
      color: #ddd;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .afro-slider-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 28px;
      border-radius: 12px;
      background: linear-gradient(135deg, #d4af37 0%, #f3e08b 100%);
      color: #111;
      font-weight: 800;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.2s;
    }
    .afro-slider-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(212,175,55,0.45);
    }

    /* SLIDER ARROWS & BULLETS */
    .afro-slider-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(20,20,25,0.7);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.2s;
    }
    .afro-slider-nav:hover {
      background: #d4af37;
      color: #000;
    }
    .afro-slider-prev { left: 16px; }
    .afro-slider-next { right: 16px; }
    .afro-slider-bullets {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 10;
    }
    .afro-bullet {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      cursor: pointer;
      transition: all 0.2s;
    }
    .afro-bullet.afro-active-bullet {
      background: #d4af37;
      width: 26px;
      border-radius: 6px;
    }

    /* 2. SALON DIRECTIONS (4 BLOCKS) */
    .afro-directions-section {
      padding: 60px 0 40px;
      background: #060608;
    }
    .afro-section-head {
      text-align: center;
      margin-bottom: 40px;
    }
    .afro-section-title {
      font-size: 28px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 8px;
    }
    @media (min-width: 768px) {
      .afro-section-title {
        font-size: 38px;
      }
    }
    .afro-section-sub {
      font-size: 15px;
      color: #9c9ca8;
    }
    .afro-directions-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    @media (min-width: 768px) {
      .afro-directions-grid {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
    }
    .afro-dir-card {
      position: relative;
      border-radius: 20px;
      background: #111115;
      border: 1px solid #22222b;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }
    .afro-dir-card:hover {
      border-color: #d4af37;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .afro-dir-img-wrap {
      width: 100%;
      height: 240px;
      position: relative;
      overflow: hidden;
      background: #191920;
    }
    @media (min-width: 768px) {
      .afro-dir-img-wrap {
        height: 280px;
      }
    }
    .afro-dir-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .afro-dir-card:hover .afro-dir-img {
      transform: scale(1.06);
    }
    .afro-dir-num {
      position: absolute;
      top: 14px;
      left: 14px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(8px);
      border: 1px solid #d4af37;
      color: #f3e08b;
      font-size: 16px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .afro-dir-body {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }
    .afro-dir-title {
      font-size: 22px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 8px;
    }
    .afro-dir-desc {
      font-size: 14px;
      color: #a8a8b4;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    .afro-dir-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .afro-dir-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 10px 20px;
      border-radius: 10px;
      background: #1c1c24;
      border: 1px solid #363644;
      color: #f3e08b;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
    }
    .afro-dir-link:hover {
      background: #d4af37;
      color: #000;
      border-color: #d4af37;
    }

    /* 3. KLING AI ART SECTION */
    .afro-kling-section {
      padding: 40px 0;
      background: #0a0a0d;
    }
    .afro-kling-banner {
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #282834;
      position: relative;
    }
    .afro-kling-banner img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* 4. GALLERY & WORKS */
    .afro-gallery-section {
      padding: 60px 0;
      background: #000000;
    }
    .afro-gallery-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    @media (min-width: 768px) {
      .afro-gallery-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
      }
    }
    .afro-gal-card {
      border-radius: 16px;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      background: #141418;
      border: 1px solid #24242e;
      position: relative;
      cursor: pointer;
    }
    .afro-gal-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    .afro-gal-card:hover img {
      transform: scale(1.08);
    }
    .afro-gal-badge {
      position: absolute;
      bottom: 10px;
      left: 10px;
      padding: 4px 10px;
      border-radius: 8px;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(6px);
      font-size: 11px;
      color: #f3e08b;
      border: 1px solid rgba(212,175,55,0.3);
    }

    /* 5. TELEGRAM INTEGRATION */
    .afro-tg-section {
      padding: 40px 0 60px;
      text-align: center;
      background: #09090c;
      border-top: 1px solid #1a1a22;
    }
    .afro-tg-box {
      max-width: 620px;
      margin: 0 auto;
      background: #14141a;
      border: 1px solid #282836;
      border-radius: 20px;
      padding: 30px 20px;
    }
    .afro-tg-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      border-radius: 12px;
      background: #229ed9;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      margin-top: 16px;
      transition: transform 0.2s;
    }
    .afro-tg-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(34,158,217,0.4);
    }

    /* 6. COOKIE BANNER */
    #afro-cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(18,18,22,0.96);
      backdrop-filter: blur(14px);
      border-top: 1px solid #30303c;
      padding: 14px 16px;
      z-index: 9995;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.6);
    }
    @media (min-width: 768px) {
      #afro-cookie-banner {
        flex-direction: row;
        justify-content: space-between;
        padding: 14px 32px;
      }
    }
    .afro-cookie-text {
      font-size: 13px;
      color: #b5b5c2;
      text-align: center;
    }
    @media (min-width: 768px) {
      .afro-cookie-text {
        text-align: left;
      }
    }
    .afro-cookie-actions {
      display: flex;
      gap: 10px;
    }
    .afro-btn-cookie-accept {
      background: #d4af37;
      color: #000;
      border: none;
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
    .afro-btn-cookie-settings {
      background: transparent;
      color: #999;
      border: 1px solid #444;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
    }

    /* 7. LEGAL FOOTER */
    .afro-footer {
      background: #040405;
      border-top: 1px solid #16161c;
      padding: 40px 0 70px;
      color: #7a7a88;
      font-size: 12px;
      line-height: 1.6;
    }
    .afro-footer-content {
      display: flex;
      flex-direction: column;
      gap: 18px;
      text-align: center;
    }
    @media (min-width: 768px) {
      .afro-footer-content {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
      }
    }
    .afro-footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      justify-content: center;
    }
    @media (min-width: 768px) {
      .afro-footer-links {
        justify-content: flex-end;
      }
    }
    .afro-legal-link {
      color: #9c9cae;
      text-decoration: underline;
      cursor: pointer;
      transition: color 0.2s;
    }
    .afro-legal-link:hover {
      color: #d4af37;
    }

    /* MODAL FOR LEGAL */
    .afro-legal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.88);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .afro-legal-box {
      background: #16161b;
      border: 1px solid #333340;
      border-radius: 20px;
      width: 100%;
      max-width: 580px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
      position: relative;
    }
    .afro-legal-close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #25252e;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      font-size: 18px;
    }

    /* LIGHTBOX */
    #afro-lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.95);
      z-index: 10000;
      display: none;
      align-items: center;
      justify-content: center;
      touch-action: pan-y;
    }
    #afro-lightbox img {
      max-width: 90%;
      max-height: 85%;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.8);
      user-select: none;
    }
    .afro-lightbox-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255,255,255,0.15);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      border: none;
    }
  `;

  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleEl);

  function renderApp() {
    var root = document.getElementById('afrostudio-app');
    if (!root) {
      root = document.createElement('div');
      root.id = 'afrostudio-app';
      document.body.appendChild(root);
    }

    root.innerHTML = `
      <!-- SCROLL TO TOP (strictly bottom 14px, left 14px, 40x40px) -->
      <button id="afro-scroll-top" title="Наверх" aria-label="Наверх">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <!-- 1. TOP SLIDER HERO (Works, extensions & deals) -->
      <section class="afro-slider-wrap" id="afro-top-slider">
        <div class="afro-slider-track" id="afro-slider-track">
          
          <!-- SLIDE 1: Наращивание волос -->
          <div class="afro-slide" style="background-image: url('https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg');">
            <div class="afro-slide-overlay"></div>
            <div class="afro-slide-content">
              <span class="afro-slide-tag">Салон Afrostudio • Москва</span>
              <h1 class="afro-slide-title">Наращивание волос премиум класса</h1>
              <p class="afro-slide-desc">Микро и нано-капсулы, бережное наращивание без утяжеления корней. Натуральные славянские пряди и биопротеин люкс.</p>
              <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-slider-btn">
                <span>Записаться на примерку волос</span>
              </a>
            </div>
          </div>

          <!-- SLIDE 2: Афрокосы и брейды -->
          <div class="afro-slide" style="background-image: url('https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png');">
            <div class="afro-slide-overlay"></div>
            <div class="afro-slide-content">
              <span class="afro-slide-tag">Студия брейдинга с 1998 года</span>
              <h2 class="afro-slide-title">Афрокосички, брейды и дредокудри</h2>
              <p class="afro-slide-desc">Плетение любой сложности от топ-стилистов. Идеальная геометрия проборов, безопасность для своих волос и яркий стиль.</p>
              <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-slider-btn">
                <span>Выбрать плетение и длину</span>
              </a>
            </div>
          </div>

          <!-- SLIDE 3: Биопротеин и уход -->
          <div class="afro-slide" style="background-image: url('https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg');">
            <div class="afro-slide-overlay"></div>
            <div class="afro-slide-content">
              <span class="afro-slide-tag">Новинка сезона</span>
              <h2 class="afro-slide-title">Биопротеиновые волосы люкс</h2>
              <p class="afro-slide-desc">Шелковистая текстура, легкое расчесывание и роскошная длина до 85 см по выгодной цене.</p>
              <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-slider-btn">
                <span>Рассчитать стоимость онлайн</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Slider arrows -->
        <button class="afro-slider-nav afro-slider-prev" id="afro-prev-slide" aria-label="Назад">&#10094;</button>
        <button class="afro-slider-nav afro-slider-next" id="afro-next-slide" aria-label="Вперед">&#10095;</button>

        <!-- Slider bullets -->
        <div class="afro-slider-bullets" id="afro-bullets">
          <div class="afro-bullet afro-active-bullet" data-index="0"></div>
          <div class="afro-bullet" data-index="1"></div>
          <div class="afro-bullet" data-index="2"></div>
        </div>
      </section>

      <!-- 2. FOUR SALON DIRECTIONS -->
      <section class="afro-directions-section">
        <div class="afro-container">
          <div class="afro-section-head">
            <h2 class="afro-section-title">Направления студии</h2>
            <p class="afro-section-sub">Профессиональные услуги в самом центре Москвы (Таганская / Полянка)</p>
          </div>

          <div class="afro-directions-grid">
            
            <!-- DIRECTION 1: НАРАЩИВАНИЕ ВОЛОС -->
            <div class="afro-dir-card">
              <div class="afro-dir-img-wrap">
                <span class="afro-dir-num">01</span>
                <img src="https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png" alt="Наращивание волос" class="afro-dir-img" loading="lazy" />
              </div>
              <div class="afro-dir-body">
                <div>
                  <h3 class="afro-dir-title">Наращивание волос</h3>
                  <p class="afro-dir-desc">Капсульное (микро/нано), голливудское наращивание на трессах и биопротеиновые пряди. Идеальное слияние с вашей длиной и бережное снятие без повреждений.</p>
                </div>
                <div class="afro-dir-action">
                  <a href="https://afrostudio.ru/services/hair-extension" class="afro-dir-link">
                    <span>Прайс и каталог &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- DIRECTION 2: АФРОКОСИЧКИ -->
            <div class="afro-dir-card">
              <div class="afro-dir-img-wrap">
                <span class="afro-dir-num">02</span>
                <img src="https://static.tildacdn.com/tild3337-3833-4835-b261-643866373439/afro34f1a9f.png" alt="Афрокосички" class="afro-dir-img" loading="lazy" />
              </div>
              <div class="afro-dir-body">
                <div>
                  <h3 class="afro-dir-title">Афрокосички и брейды</h3>
                  <p class="afro-dir-desc">Классические афрокосы, точечное плетение, сенегальские косы, брейды с канекалоном и дредокудри. Более 60 оттенков канекалона в наличии в салоне.</p>
                </div>
                <div class="afro-dir-action">
                  <a href="https://afrostudio.ru/services/afro" class="afro-dir-link">
                    <span>Виды плетений &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- DIRECTION 3: СТИЛИСТЫ И ОКРАШИВАНИЕ -->
            <div class="afro-dir-card">
              <div class="afro-dir-img-wrap">
                <span class="afro-dir-num">03</span>
                <img src="https://static.tildacdn.com/tild3063-6664-4637-b334-376564313961/paint-bg27e7061.png" alt="Стилисты и окрашивание" class="afro-dir-img" loading="lazy" />
              </div>
              <div class="afro-dir-body">
                <div>
                  <h3 class="afro-dir-title">Стилисты и окрашивание</h3>
                  <p class="afro-dir-desc">Сложное колорирование, тонирование под цвет донорских волос, шатуш, балаяж, стрижки и глубокая реконструкция поврежденных волос премиум составами.</p>
                </div>
                <div class="afro-dir-action">
                  <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-dir-link">
                    <span>Консультация стилиста &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- DIRECTION 4: ОБУЧЕНИЕ С НУЛЯ -->
            <div class="afro-dir-card">
              <div class="afro-dir-img-wrap">
                <span class="afro-dir-num">04</span>
                <img src="https://static.tildacdn.com/tild3762-3565-4130-b234-396335363263/main-s-355276df.png" alt="Обучение" class="afro-dir-img" loading="lazy" />
              </div>
              <div class="afro-dir-body">
                <div>
                  <h3 class="afro-dir-title">Обучение мастеров</h3>
                  <p class="afro-dir-desc">Курсы по наращиванию волос и брейдингу для новичков и действующих мастеров. Практика на живых моделях, постановка руки и выдача фирменного сертификата.</p>
                </div>
                <div class="afro-dir-action">
                  <a href="https://afrostudio.ru/services/traininghairextensions" class="afro-dir-link">
                    <span>Программа курса &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 3. KLING AI ART BANNER -->
      <section class="afro-kling-section">
        <div class="afro-container">
          <div class="afro-kling-banner">
            <img src="https://static.tildacdn.com/tild3035-6535-4466-b132-623636393732/kling_20260322_IMAGE.png" alt="Afrostudio Kling AI Banner" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- 4. LIVE WORKS GALLERY -->
      <section class="afro-gallery-section">
        <div class="afro-container">
          <div class="afro-section-head">
            <h2 class="afro-section-title">Работы мастеров студии</h2>
            <p class="afro-section-sub">Живые результаты наращивания и плетения из салона в Москве</p>
          </div>

          <div class="afro-gallery-grid" id="afro-gallery">
            <div class="afro-gal-card" data-src="https://static.tildacdn.com/tild6530-3866-4235-a336-336131326631/Screenshot_1.jpg">
              <img src="https://static.tildacdn.com/tild6530-3866-4235-a336-336131326631/Screenshot_1.jpg" alt="Работа студии" loading="lazy" />
              <span class="afro-gal-badge">Микрокапсулы</span>
            </div>
            <div class="afro-gal-card" data-src="https://static.tildacdn.com/tild3131-3738-4463-b965-653331363861/1.JPG">
              <img src="https://static.tildacdn.com/tild3131-3738-4463-b965-653331363861/1.JPG" alt="Афроприческа" loading="lazy" />
              <span class="afro-gal-badge">Афрокосы</span>
            </div>
            <div class="afro-gal-card" data-src="https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg">
              <img src="https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg" alt="Биопротеин" loading="lazy" />
              <span class="afro-gal-badge">Биопротеин</span>
            </div>
            <div class="afro-gal-card" data-src="https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png">
              <img src="https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png" alt="Брейды узоры" loading="lazy" />
              <span class="afro-gal-badge">Брейды</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. TELEGRAM CHANNEL -->
      <section class="afro-tg-section">
        <div class="afro-container">
          <div class="afro-tg-box">
            <h3 style="font-size:22px; font-weight:800; color:#fff; margin-bottom:8px;">Наш Telegram-канал</h3>
            <p style="color:#a4a4b2; font-size:14px;">Свежие видео из кресла мастера, обзоры донорских срезов и свободные окошки каждый день.</p>
            <a href="https://t.me/Salon_afrostudio" target="_blank" class="afro-tg-btn">
              <span>Подписаться на @Salon_afrostudio</span>
            </a>
          </div>
        </div>
      </section>

      <!-- 6. LEGAL FOOTER -->
      <footer class="afro-footer">
        <div class="afro-container afro-footer-content">
          <div>
            <div style="font-weight:700; color:#eee; margin-bottom:4px;">Afrostudio — студия наращивания волос и брейдинга</div>
            <div>Москва, ул. Большая Полянка, 26, к. 1 / Таганская</div>
            <div>ИНН: 770501234567 • ОГРНИП: 318774600123456</div>
            <div style="margin-top:6px;">Телефон: <a href="tel:+74959113911" style="color:#d4af37;">+7 (495) 911-39-11</a> | WhatsApp: <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" style="color:#d4af37;">+7 (925) 506-99-00</a></div>
          </div>
          <div class="afro-footer-links">
            <span class="afro-legal-link" id="afro-open-policy">Политика конфиденциальности</span>
            <span class="afro-legal-link" id="afro-open-consent">Согласие на обработку данных (152-ФЗ)</span>
          </div>
        </div>
      </footer>

      <!-- COOKIE BANNER -->
      <div id="afro-cookie-banner" style="display:none;">
        <div class="afro-cookie-text">
          Мы используем cookie-файлы для обеспечения работы сайта, аналитики посещаемости и сохранения индивидуальных настроек.
        </div>
        <div class="afro-cookie-actions">
          <button type="button" class="afro-btn-cookie-accept" id="afro-cookie-ok">Принять</button>
          <button type="button" class="afro-btn-cookie-settings" id="afro-cookie-cfg">Настроить</button>
        </div>
      </div>

      <!-- LEGAL MODAL -->
      <div class="afro-legal-overlay" id="afro-legal-modal">
        <div class="afro-legal-box">
          <button class="afro-legal-close" id="afro-legal-x">&times;</button>
          <h3 id="afro-legal-title" style="margin-bottom:14px; color:#fff; font-size:18px;"></h3>
          <div id="afro-legal-text" style="color:#b5b5c2; font-size:13px; line-height:1.6;"></div>
        </div>
      </div>

      <!-- LIGHTBOX -->
      <div id="afro-lightbox">
        <button class="afro-lightbox-close" id="afro-lightbox-x">&times;</button>
        <img id="afro-lightbox-img" src="" alt="Увеличенное фото" />
      </div>
    `;

    setupHandlers();
    loadGameLead();
  }

  function setupHandlers() {
    // 1. Scroll-To-Top button (strictly bottom 14px, left 14px, 40x40px)
    var scrollBtn = document.getElementById('afro-scroll-top');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 250) {
        scrollBtn.classList.add('afro-visible');
      } else {
        scrollBtn.classList.remove('afro-visible');
      }
    });
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. Slider Logic
    var currentSlide = 0;
    var track = document.getElementById('afro-slider-track');
    var bullets = Array.from(document.querySelectorAll('.afro-bullet'));
    var totalSlides = 3;

    function goToSlide(idx) {
      currentSlide = (idx + totalSlides) % totalSlides;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      bullets.forEach(function(b, i) {
        if (i === currentSlide) {
          b.classList.add('afro-active-bullet');
        } else {
          b.classList.remove('afro-active-bullet');
        }
      });
    }

    document.getElementById('afro-prev-slide').addEventListener('click', function() {
      goToSlide(currentSlide - 1);
    });
    document.getElementById('afro-next-slide').addEventListener('click', function() {
      goToSlide(currentSlide + 1);
    });
    bullets.forEach(function(b) {
      b.addEventListener('click', function() {
        goToSlide(parseInt(b.getAttribute('data-index'), 10));
      });
    });

    // Autoplay slider every 5 seconds
    var sliderTimer = setInterval(function() {
      goToSlide(currentSlide + 1);
    }, 5000);

    // Touch swipe for slider
    var touchStartX = 0;
    var touchEndX = 0;
    var sliderWrap = document.getElementById('afro-top-slider');
    sliderWrap.addEventListener('touchstart', function(e) {
      clearInterval(sliderTimer);
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    sliderWrap.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          goToSlide(currentSlide + 1);
        } else {
          goToSlide(currentSlide - 1);
        }
      }
    }, false);

    // 3. Cookie consent
    var cookieBanner = document.getElementById('afro-cookie-banner');
    if (!localStorage.getItem('afro_cookie_agreed')) {
      cookieBanner.style.display = 'flex';
    }
    document.getElementById('afro-cookie-ok').addEventListener('click', function() {
      localStorage.setItem('afro_cookie_agreed', '1');
      cookieBanner.style.display = 'none';
    });
    document.getElementById('afro-cookie-cfg').addEventListener('click', function() {
      openLegal(
        'Настройка cookie',
        'Вы можете управлять сохранением технических файлов в настройках вашего браузера. Мы используем cookie исключительно для корректной работы сайта.'
      );
    });

    // 4. Legal Modals
    var legalModal = document.getElementById('afro-legal-modal');
    var legalTitle = document.getElementById('afro-legal-title');
    var legalText = document.getElementById('afro-legal-text');
    var legalClose = document.getElementById('afro-legal-x');

    function openLegal(title, text) {
      legalTitle.textContent = title;
      legalText.innerHTML = text;
      legalModal.style.display = 'flex';
    }
    legalClose.addEventListener('click', function() {
      legalModal.style.display = 'none';
    });
    legalModal.addEventListener('click', function(e) {
      if (e.target === legalModal) legalModal.style.display = 'none';
    });

    document.getElementById('afro-open-policy').addEventListener('click', function() {
      openLegal(
        'Политика конфиденциальности',
        '<p>Настоящая Политика регулирует порядок обработки информации пользователей сайта afrostudio.ru в соответствии с законодательством РФ.</p><br/><p>1. Контактные данные собираются исключительно для связи и записи на процедуры.</p><br/><p>2. Данные надежно защищены и не передаются третьим сторонам.</p>'
      );
    });

    document.getElementById('afro-open-consent').addEventListener('click', function() {
      openLegal(
        'Согласие на обработку персональных данных (152-ФЗ)',
        '<p>Настоящим я даю согласие студии красоты Afrostudio на обработку персональных данных с целью консультации, получения призов и записи к мастеру.</p><br/><p>Согласие действует до момента отзыва клиентом.</p>'
      );
    });

    // 5. Lightbox with swipe
    var lightbox = document.getElementById('afro-lightbox');
    var lightboxImg = document.getElementById('afro-lightbox-img');
    var lightboxClose = document.getElementById('afro-lightbox-x');
    var galleryCards = Array.from(document.querySelectorAll('.afro-gal-card'));
    var currentGalIdx = 0;

    galleryCards.forEach(function(item, idx) {
      item.addEventListener('click', function() {
        currentGalIdx = idx;
        lightboxImg.src = item.getAttribute('data-src');
        lightbox.style.display = 'flex';
      });
    });

    lightboxClose.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });

    lightbox.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    lightbox.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          currentGalIdx = (currentGalIdx + 1) % galleryCards.length;
        } else {
          currentGalIdx = (currentGalIdx - 1 + galleryCards.length) % galleryCards.length;
        }
        lightboxImg.src = galleryCards[currentGalIdx].getAttribute('data-src');
      }
    }, false);

    // 6. Global click tracking for YM goals
    document.addEventListener('click', function(e) {
      var a = e.target.closest('a');
      if (!a) return;
      var h = a.getAttribute('href') || '';
      if (h.indexOf('whatsapp.com') !== -1 || h.indexOf('wa.me') !== -1) {
        trackYM('233127645');
      } else if (h.indexOf('t.me') !== -1) {
        trackYM('368208880');
      } else if (h.indexOf('tel:') !== -1) {
        trackYM('357211540');
      }
    });

    console.log('[AfroStudio] Engine v2.0.0 activated.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
