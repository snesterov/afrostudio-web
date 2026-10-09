/**
 * AFROSTUDIO — Elite Salon Web Architecture v3.0.0
 * 100% Valid Links, Slider, Before/After Split, 4 Directions, Kling Art,
 * Interactive Hair Calculator, Native Telegram & Cookie styling, GameLead Wheel.
 * Yandex Metrika Counter: 88058414
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

  // Load official GameLead Wheel of Fortune
  function loadGameLead() {
    if (!document.querySelector('script[src*="game-lead.ru"]')) {
      var s = document.createElement('script');
      s.src = 'https://game-lead.ru/set/c8bee7fc877024cac5a483e8950480f0';
      s.async = true;
      document.body.appendChild(s);
    }
  }

  var styles = `
    /* AFROSTUDIO CORE SYSTEM */
    #afrostudio-app {
      font-family: 'TildaSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f7f7fa;
      background: #09090b;
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
      background: #141418;
      border: 1px solid #d4af37;
      color: #d4af37;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9990;
      box-shadow: 0 4px 16px rgba(0,0,0,0.65);
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

    /* 1. HERO SLIDER CAROUSEL */
    .afro-slider-section {
      position: relative;
      width: 100%;
      overflow: hidden;
      background: #050507;
    }
    .afro-slider-track {
      display: flex;
      transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);
      width: 100%;
    }
    .afro-slide {
      min-width: 100%;
      position: relative;
      min-height: 480px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center center;
    }
    @media (min-width: 768px) {
      .afro-slide {
        min-height: 580px;
      }
    }
    .afro-slide-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 40%, rgba(9,9,11,0.5) 0%, rgba(5,5,7,0.92) 85%);
    }
    .afro-slide-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 860px;
      padding: 50px 20px;
    }
    .afro-slide-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      border-radius: 30px;
      background: rgba(212,175,55,0.15);
      border: 1px solid rgba(212,175,55,0.4);
      color: #f3e08b;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }
    .afro-slide-title {
      font-size: 30px;
      line-height: 1.2;
      font-weight: 800;
      margin-bottom: 16px;
      color: #ffffff;
      text-shadow: 0 4px 16px rgba(0,0,0,0.8);
    }
    @media (min-width: 768px) {
      .afro-slide-title {
        font-size: 48px;
      }
    }
    .afro-slide-desc {
      font-size: 15px;
      color: #d1d1dc;
      line-height: 1.6;
      max-width: 680px;
      margin: 0 auto 28px;
    }
    .afro-btn-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .afro-btn-main {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      border-radius: 12px;
      background: linear-gradient(135deg, #d4af37 0%, #f3e08b 100%);
      color: #0d0d0f;
      font-weight: 800;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.25s ease;
      box-shadow: 0 4px 15px rgba(212,175,55,0.3);
    }
    .afro-btn-main:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 22px rgba(212,175,55,0.5);
    }
    .afro-btn-sub {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 24px;
      border-radius: 12px;
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.25);
      color: #ffffff;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.25s ease;
    }
    .afro-btn-sub:hover {
      background: rgba(255,255,255,0.16);
      border-color: #d4af37;
      color: #f3e08b;
    }

    /* SLIDER NAVIGATION */
    .afro-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(18,18,24,0.75);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.2s;
    }
    .afro-nav-btn:hover {
      background: #d4af37;
      color: #000;
    }
    .afro-nav-prev { left: 16px; }
    .afro-nav-next { right: 16px; }
    .afro-bullets-bar {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 10;
    }
    .afro-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .afro-dot.afro-active-dot {
      background: #d4af37;
      width: 26px;
      border-radius: 6px;
    }

    /* 2. BEFORE / AFTER COMPARISON SLIDER */
    .afro-compare-section {
      padding: 60px 0 40px;
      background: #09090b;
      border-bottom: 1px solid #1c1c24;
    }
    .afro-head-center {
      text-align: center;
      margin-bottom: 34px;
    }
    .afro-h2 {
      font-size: 28px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      .afro-h2 {
        font-size: 38px;
      }
    }
    .afro-subtext {
      font-size: 15px;
      color: #a4a4b4;
      max-width: 600px;
      margin: 0 auto;
    }
    .afro-split-card {
      position: relative;
      width: 100%;
      max-width: 820px;
      height: 440px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #282834;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
      user-select: none;
      touch-action: pan-y;
    }
    @media (min-width: 768px) {
      .afro-split-card {
        height: 520px;
      }
    }
    .afro-split-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .afro-split-after {
      z-index: 1;
    }
    .afro-split-before-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
      z-index: 2;
    }
    .afro-split-before-wrap .afro-split-img {
      width: 820px;
      max-width: 820px;
    }
    @media (max-width: 820px) {
      .afro-split-before-wrap .afro-split-img {
        width: 100vw;
        max-width: 100vw;
      }
    }
    .afro-split-divider {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 3px;
      background: #d4af37;
      z-index: 5;
      cursor: ew-resize;
      box-shadow: 0 0 12px rgba(212,175,55,0.7);
    }
    .afro-split-handle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #d4af37;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 18px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.7);
      cursor: ew-resize;
    }
    .afro-split-label {
      position: absolute;
      bottom: 16px;
      padding: 6px 14px;
      border-radius: 8px;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(8px);
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      z-index: 6;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .afro-label-before { left: 16px; }
    .afro-label-after { right: 16px; color: #f3e08b; border-color: #d4af37; }

    /* 3. FOUR SALON DIRECTIONS */
    .afro-directions-section {
      padding: 60px 0 50px;
      background: #050507;
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
      border-radius: 20px;
      background: #111116;
      border: 1px solid #23232c;
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
    .afro-dir-pic-wrap {
      width: 100%;
      height: 250px;
      position: relative;
      overflow: hidden;
      background: #191920;
    }
    @media (min-width: 768px) {
      .afro-dir-pic-wrap {
        height: 280px;
      }
    }
    .afro-dir-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .afro-dir-card:hover .afro-dir-pic {
      transform: scale(1.06);
    }
    .afro-dir-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(9,9,11,0.8);
      backdrop-filter: blur(8px);
      border: 1px solid #d4af37;
      color: #f3e08b;
      font-size: 16px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .afro-dir-text-wrap {
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
    .afro-dir-description {
      font-size: 14px;
      color: #a4a4b2;
      line-height: 1.5;
      margin-bottom: 22px;
    }
    .afro-dir-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 11px 22px;
      border-radius: 10px;
      background: #1a1a22;
      border: 1px solid #363644;
      color: #f3e08b;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
      align-self: flex-start;
    }
    .afro-dir-btn:hover {
      background: #d4af37;
      color: #000;
      border-color: #d4af37;
    }

    /* 4. INTERACTIVE QUIZ & CALCULATOR */
    .afro-quiz-section {
      padding: 60px 0;
      background: #09090c;
      border-top: 1px solid #1a1a22;
    }
    .afro-quiz-card {
      max-width: 820px;
      margin: 0 auto;
      background: #131318;
      border: 1px solid #282834;
      border-radius: 24px;
      padding: 28px 18px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    }
    @media (min-width: 768px) {
      .afro-quiz-card {
        padding: 36px 32px;
      }
    }
    .afro-pill-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 10px 0 20px;
    }
    .afro-pill-btn {
      background: #1c1c24;
      border: 1px solid #333340;
      color: #d0d0de;
      padding: 9px 16px;
      border-radius: 10px;
      font-size: 13px;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s;
    }
    .afro-pill-btn:hover {
      border-color: #d4af37;
      color: #fff;
    }
    .afro-pill-btn.afro-selected-pill {
      background: rgba(212,175,55,0.18);
      border-color: #d4af37;
      color: #f3e08b;
      font-weight: 700;
    }
    .afro-quiz-price-row {
      background: #1b1b22;
      border: 1px solid rgba(212,175,55,0.35);
      border-radius: 14px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: center;
      text-align: center;
      margin-top: 14px;
    }
    @media (min-width: 768px) {
      .afro-quiz-price-row {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
      }
    }
    .afro-quiz-sum {
      font-size: 28px;
      font-weight: 800;
      color: #d4af37;
    }

    /* 5. KLING AI ART BANNER */
    .afro-art-section {
      padding: 40px 0;
      background: #050507;
    }
    .afro-art-card {
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #292934;
      background: #0d0d12;
    }
    .afro-art-card img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* 6. LIVE GALLERY (LIGHTBOX WITH SWIPE) */
    .afro-gallery-wrap {
      padding: 60px 0;
      background: #09090c;
    }
    .afro-gal-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    @media (min-width: 768px) {
      .afro-gal-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
      }
    }
    .afro-gal-item {
      border-radius: 16px;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      background: #141418;
      border: 1px solid #24242e;
      position: relative;
      cursor: pointer;
    }
    .afro-gal-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    .afro-gal-item:hover img {
      transform: scale(1.08);
    }
    .afro-gal-tag {
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

    /* LIGHTBOX OVERLAY */
    #afro-lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.96);
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
      box-shadow: 0 10px 40px rgba(0,0,0,0.85);
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

    /* HARMONIZED NATIVE TILDA BLOCKS (TELEGRAM T854 & COOKIE T972) */
    .t854__news-wrap {
      border-radius: 20px !important;
      border: 1px solid #d4af37 !important;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6) !important;
    }
    .t972__panel {
      border-radius: 16px 16px 0 0 !important;
      border-top: 1px solid #d4af37 !important;
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

      <!-- 1. HERO SLIDER CAROUSEL -->
      <section class="afro-slider-section" id="afro-hero-slider">
        <div class="afro-slider-track" id="afro-track">
          
          <!-- SLIDE 1 -->
          <div class="afro-slide" style="background-image: url('https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg');">
            <div class="afro-slide-overlay"></div>
            <div class="afro-slide-content">
              <span class="afro-slide-badge">Салон Afrostudio • Москва</span>
              <h1 class="afro-slide-title">Наращивание волос премиум класса</h1>
              <p class="afro-slide-desc">Микро и нано-капсулы, бережное крепление без утяжеления корней. Натуральные славянские пряди Lux и биопротеин. Стаж мастеров с 1998 года.</p>
              <div class="afro-btn-row">
                <a href="https://afrostudio.ru/services/hair-extension" class="afro-btn-main">
                  <span>Каталог и цены</span>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-btn-sub">
                  <span>Запись в WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <!-- SLIDE 2 -->
          <div class="afro-slide" style="background-image: url('https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png');">
            <div class="afro-slide-overlay"></div>
            <div class="afro-slide-content">
              <span class="afro-slide-badge">Студия брейдинга в Москве</span>
              <h2 class="afro-slide-title">Афрокосички, брейды и дредокудри</h2>
              <p class="afro-slide-desc">Плетение любой сложности от топ-стилистов. Идеальная геометрия проборов, безопасность для своих волос и более 60 оттенков канекалона.</p>
              <div class="afro-btn-row">
                <a href="https://afrostudio.ru/services/afro" class="afro-btn-main">
                  <span>Каталог плетений</span>
                </a>
                <a href="https://t.me/Salon_afrostudio" target="_blank" class="afro-btn-sub">
                  <span>Канал в Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <!-- SLIDE 3 -->
          <div class="afro-slide" style="background-image: url('https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg');">
            <div class="afro-slide-overlay"></div>
            <div class="afro-slide-content">
              <span class="afro-slide-badge">Шелковистая длина до 85 см</span>
              <h2 class="afro-slide-title">Биопротеиновые волосы люкс</h2>
              <p class="afro-slide-desc">Легкое расчесывание, термостойкость до 180°C, естественный блеск и максимальная длина без переплат.</p>
              <div class="afro-btn-row">
                <a href="#afro-calc-anchor" class="afro-btn-main">
                  <span>Рассчитать смету</span>
                </a>
                <a href="tel:+74959113911" class="afro-btn-sub">
                  <span>+7 (495) 911-39-11</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Arrows -->
        <button class="afro-nav-btn afro-nav-prev" id="afro-slider-left" aria-label="Назад">&#10094;</button>
        <button class="afro-nav-btn afro-nav-next" id="afro-slider-right" aria-label="Вперед">&#10095;</button>

        <!-- Bullets -->
        <div class="afro-bullets-bar" id="afro-bullets-bar">
          <div class="afro-dot afro-active-dot" data-idx="0"></div>
          <div class="afro-dot" data-idx="1"></div>
          <div class="afro-dot" data-idx="2"></div>
        </div>
      </section>

      <!-- 2. BEFORE / AFTER SPLIT COMPARISON -->
      <section class="afro-compare-section">
        <div class="afro-container">
          <div class="afro-head-center">
            <h2 class="afro-h2">Преображение волос: До и После</h2>
            <p class="afro-subtext">Потяните золотой бегунок в центре, чтобы оценить густоту, капсулы и длину</p>
          </div>

          <div class="afro-split-card" id="afro-split-container">
            <!-- AFTER IMAGE (base layer) -->
            <img src="https://static.tildacdn.com/tild6530-3866-4235-a336-336131326631/Screenshot_1.jpg" alt="После наращивания" class="afro-split-img afro-split-after" />
            
            <!-- BEFORE IMAGE (clipped layer) -->
            <div class="afro-split-before-wrap" id="afro-before-wrap">
              <img src="https://static.tildacdn.com/tild3131-3738-4463-b965-653331363861/1.JPG" alt="До наращивания" class="afro-split-img" id="afro-before-img" />
            </div>

            <!-- SPLIT DIVIDER -->
            <div class="afro-split-divider" id="afro-split-line">
              <div class="afro-split-handle">&#8644;</div>
            </div>

            <div class="afro-split-label afro-label-before">ДО ПРОЦЕДУРЫ</div>
            <div class="afro-split-label afro-label-after">ПОСЛЕ НАРАЩИВАНИЯ</div>
          </div>
        </div>
      </section>

      <!-- 3. FOUR SALON DIRECTIONS -->
      <section class="afro-directions-section">
        <div class="afro-container">
          <div class="afro-head-center">
            <h2 class="afro-h2">Направления салона Afrostudio</h2>
            <p class="afro-subtext">Полный спектр услуг красоты в центре Москвы (Таганская / Полянка)</p>
          </div>

          <div class="afro-directions-grid">
            
            <!-- 01: НАРАЩИВАНИЕ ВОЛОС -->
            <div class="afro-dir-card">
              <div class="afro-dir-pic-wrap">
                <span class="afro-dir-badge">01</span>
                <img src="https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png" alt="Наращивание волос" class="afro-dir-pic" loading="lazy" />
              </div>
              <div class="afro-dir-text-wrap">
                <div>
                  <h3 class="afro-dir-title">Наращивание волос</h3>
                  <p class="afro-dir-description">Микрокапсулы, нанокапсулы, голливудское наращивание на трессах и биопротеин. Бережная постановка прядей без вреда для своих волос.</p>
                </div>
                <a href="https://afrostudio.ru/services/hair-extension" class="afro-dir-btn">
                  <span>Прайс и каталог &rarr;</span>
                </a>
              </div>
            </div>

            <!-- 02: АФРОКОСИЧКИ -->
            <div class="afro-dir-card">
              <div class="afro-dir-pic-wrap">
                <span class="afro-dir-badge">02</span>
                <img src="https://static.tildacdn.com/tild3337-3833-4835-b261-643866373439/afro34f1a9f.png" alt="Афрокосички" class="afro-dir-pic" loading="lazy" />
              </div>
              <div class="afro-dir-text-wrap">
                <div>
                  <h3 class="afro-dir-title">Афрокосички и брейды</h3>
                  <p class="afro-dir-description">Классические афрокосы, зизи, сенегальские косы, брейды и дредокудри. Четкие проборы, комфортная носка и огромная палитра цветов.</p>
                </div>
                <a href="https://afrostudio.ru/services/afro" class="afro-dir-btn">
                  <span>Виды плетений &rarr;</span>
                </a>
              </div>
            </div>

            <!-- 03: СТИЛИСТЫ И ОКРАШИВАНИЕ -->
            <div class="afro-dir-card">
              <div class="afro-dir-pic-wrap">
                <span class="afro-dir-badge">03</span>
                <img src="https://static.tildacdn.com/tild3063-6664-4637-b334-376564313961/paint-bg27e7061.png" alt="Стилисты и окрашивание" class="afro-dir-pic" loading="lazy" />
              </div>
              <div class="afro-dir-text-wrap">
                <div>
                  <h3 class="afro-dir-title">Стилисты и окрашивание</h3>
                  <p class="afro-dir-description">Сложные техники (шатуш, балаяж, аиртач), тонирование донорских волос точно в тон, стрижки и глубокое восстановление структуры.</p>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-dir-btn">
                  <span>Запись к стилисту &rarr;</span>
                </a>
              </div>
            </div>

            <!-- 04: ОБУЧЕНИЕ МАСТЕРОВ -->
            <div class="afro-dir-card">
              <div class="afro-dir-pic-wrap">
                <span class="afro-dir-badge">04</span>
                <img src="https://static.tildacdn.com/tild3762-3565-4130-b234-396335363263/main-s-355276df.png" alt="Обучение" class="afro-dir-pic" loading="lazy" />
              </div>
              <div class="afro-dir-text-wrap">
                <div>
                  <h3 class="afro-dir-title">Обучение мастеров с нуля</h3>
                  <p class="afro-dir-description">Курсы по наращиванию волос и брейдингу для начинающих и действующих мастеров. Постановка руки на моделях и выдача сертификата.</p>
                </div>
                <a href="https://afrostudio.ru/services/traininghairextensions" class="afro-dir-btn">
                  <span>Программа курса &rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. INTERACTIVE CALCULATOR (ANCHOR) -->
      <section class="afro-quiz-section" id="afro-calc-anchor">
        <div class="afro-container">
          <div class="afro-head-center">
            <h2 class="afro-h2">Онлайн калькулятор подбора волос</h2>
            <p class="afro-subtext">Выберите желаемые параметры для моментального расчета сметы</p>
          </div>

          <div class="afro-quiz-card">
            <div style="font-size:13px; font-weight:700; color:#c5c5d2; text-transform:uppercase; letter-spacing:0.5px;">1. Выберите процедуру</div>
            <div class="afro-pill-group" id="afro-calc-types">
              <div class="afro-pill-btn afro-selected-pill" data-val="12000">Капсульное (микро/нано)</div>
              <div class="afro-pill-btn" data-val="9500">Биопротеин люкс</div>
              <div class="afro-pill-btn" data-val="14000">Голливудское (трессы)</div>
              <div class="afro-pill-btn" data-val="8500">Афрокосы классика</div>
              <div class="afro-pill-btn" data-val="7900">Брейды</div>
              <div class="afro-pill-btn" data-val="9900">Дредокудри</div>
            </div>

            <div style="font-size:13px; font-weight:700; color:#c5c5d2; text-transform:uppercase; letter-spacing:0.5px;">2. Желаемая длина</div>
            <div class="afro-pill-group" id="afro-calc-lengths">
              <div class="afro-pill-btn" data-val="1">40-45 см (до лопаток)</div>
              <div class="afro-pill-btn afro-selected-pill" data-val="1.2">50-55 см (до талии)</div>
              <div class="afro-pill-btn" data-val="1.45">60-65 см (до поясницы)</div>
              <div class="afro-pill-btn" data-val="1.7">70+ см (максимальная)</div>
            </div>

            <div style="font-size:13px; font-weight:700; color:#c5c5d2; text-transform:uppercase; letter-spacing:0.5px;">3. Густота и объем</div>
            <div class="afro-pill-group" id="afro-calc-vols">
              <div class="afro-pill-btn afro-selected-pill" data-val="1">Стандарт (100-120 капсул)</div>
              <div class="afro-pill-btn" data-val="1.25">Густые (140-160 капсул)</div>
              <div class="afro-pill-btn" data-val="1.5">Максимум (180-220 капсул)</div>
            </div>

            <div class="afro-quiz-price-row">
              <div>
                <div style="font-size:13px; color:#9c9cae;">Расчетная стоимость процедуры:</div>
                <div class="afro-quiz-sum" id="afro-sum-display">14 400 ₽</div>
                <div style="font-size:12px; color:#8ce196; margin-top:4px;">✓ Скидка 10% на первый визит + мытье и уход в подарок</div>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-btn-main" id="afro-calc-book">
                <span>Зафиксировать цену в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. KLING AI ART SECTION -->
      <section class="afro-art-section">
        <div class="afro-container">
          <div class="afro-art-card">
            <img src="https://static.tildacdn.com/tild3035-6535-4466-b132-623636393732/kling_20260322_IMAGE.png" alt="Afrostudio Kling AI Art" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- 6. LIVE WORKS GALLERY -->
      <section class="afro-gallery-wrap">
        <div class="afro-container">
          <div class="afro-head-center">
            <h2 class="afro-h2">Галерея работ студии</h2>
            <p class="afro-subtext">Нажмите на фото для полноэкранного просмотра со свайпом</p>
          </div>

          <div class="afro-gal-grid">
            <div class="afro-gal-item" data-src="https://static.tildacdn.com/tild6530-3866-4235-a336-336131326631/Screenshot_1.jpg">
              <img src="https://static.tildacdn.com/tild6530-3866-4235-a336-336131326631/Screenshot_1.jpg" alt="Микрокапсулы" loading="lazy" />
              <span class="afro-gal-tag">Микрокапсулы</span>
            </div>
            <div class="afro-gal-item" data-src="https://static.tildacdn.com/tild3131-3738-4463-b965-653331363861/1.JPG">
              <img src="https://static.tildacdn.com/tild3131-3738-4463-b965-653331363861/1.JPG" alt="Афрокосы" loading="lazy" />
              <span class="afro-gal-tag">Афрокосы</span>
            </div>
            <div class="afro-gal-item" data-src="https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg">
              <img src="https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg" alt="Биопротеин" loading="lazy" />
              <span class="afro-gal-tag">Биопротеин</span>
            </div>
            <div class="afro-gal-item" data-src="https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png">
              <img src="https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png" alt="Брейды узоры" loading="lazy" />
              <span class="afro-gal-tag">Брейды</span>
            </div>
          </div>
        </div>
      </section>

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
    // 1. Scroll-To-Top button
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

    // 2. Hero Slider
    var currentSlide = 0;
    var track = document.getElementById('afro-track');
    var dots = Array.from(document.querySelectorAll('.afro-dot'));
    var totalSlides = 3;

    function setSlide(idx) {
      currentSlide = (idx + totalSlides) % totalSlides;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      dots.forEach(function(d, i) {
        if (i === currentSlide) {
          d.classList.add('afro-active-dot');
        } else {
          d.classList.remove('afro-active-dot');
        }
      });
    }

    document.getElementById('afro-slider-left').addEventListener('click', function() {
      setSlide(currentSlide - 1);
    });
    document.getElementById('afro-slider-right').addEventListener('click', function() {
      setSlide(currentSlide + 1);
    });
    dots.forEach(function(d) {
      d.addEventListener('click', function() {
        setSlide(parseInt(d.getAttribute('data-idx'), 10));
      });
    });

    var autoTimer = setInterval(function() {
      setSlide(currentSlide + 1);
    }, 6000);

    // Touch swipe for hero slider
    var sStartX = 0;
    var sEndX = 0;
    var heroWrap = document.getElementById('afro-hero-slider');
    heroWrap.addEventListener('touchstart', function(e) {
      clearInterval(autoTimer);
      sStartX = e.changedTouches[0].screenX;
    }, false);
    heroWrap.addEventListener('touchend', function(e) {
      sEndX = e.changedTouches[0].screenX;
      var diff = sEndX - sStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) setSlide(currentSlide + 1);
        else setSlide(currentSlide - 1);
      }
    }, false);

    // 3. Before/After Split Comparison Slider
    var splitContainer = document.getElementById('afro-split-container');
    var beforeWrap = document.getElementById('afro-before-wrap');
    var splitLine = document.getElementById('afro-split-line');
    var isDragging = false;

    function updateSplit(clientX) {
      var rect = splitContainer.getBoundingClientRect();
      var offsetX = clientX - rect.left;
      var pct = (offsetX / rect.width) * 100;
      if (pct < 5) pct = 5;
      if (pct > 95) pct = 95;
      beforeWrap.style.width = pct + '%';
      splitLine.style.left = pct + '%';
    }

    splitContainer.addEventListener('mousedown', function(e) {
      isDragging = true;
      updateSplit(e.clientX);
    });
    window.addEventListener('mouseup', function() {
      isDragging = false;
    });
    window.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      updateSplit(e.clientX);
    });

    splitContainer.addEventListener('touchstart', function(e) {
      updateSplit(e.touches[0].clientX);
    }, false);
    splitContainer.addEventListener('touchmove', function(e) {
      updateSplit(e.touches[0].clientX);
    }, false);

    // 4. Calculator interactive calculation
    var cBase = 12000;
    var cLen = 1.2;
    var cVol = 1;
    var sumDisplay = document.getElementById('afro-sum-display');

    function recalc() {
      var total = Math.round(cBase * cLen * cVol / 100) * 100;
      sumDisplay.textContent = total.toLocaleString('ru-RU') + ' ₽';
    }

    function setupPills(containerId, setter) {
      var parent = document.getElementById(containerId);
      if (!parent) return;
      var pills = Array.from(parent.querySelectorAll('.afro-pill-btn'));
      pills.forEach(function(p) {
        p.addEventListener('click', function() {
          pills.forEach(function(item) { item.classList.remove('afro-selected-pill'); });
          p.classList.add('afro-selected-pill');
          setter(parseFloat(p.getAttribute('data-val')));
          recalc();
        });
      });
    }

    setupPills('afro-calc-types', function(v) { cBase = v; });
    setupPills('afro-calc-lengths', function(v) { cLen = v; });
    setupPills('afro-calc-vols', function(v) { cVol = v; });
    recalc();

    document.getElementById('afro-calc-book').addEventListener('click', function() {
      trackYM('296485879', { sum: sumDisplay.textContent });
    });

    // 5. Lightbox with swipe
    var lightbox = document.getElementById('afro-lightbox');
    var lightboxImg = document.getElementById('afro-lightbox-img');
    var lightboxClose = document.getElementById('afro-lightbox-x');
    var galItems = Array.from(document.querySelectorAll('.afro-gal-item'));
    var curIdx = 0;

    galItems.forEach(function(item, idx) {
      item.addEventListener('click', function() {
        curIdx = idx;
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

    var lbStartX = 0;
    var lbEndX = 0;
    lightbox.addEventListener('touchstart', function(e) {
      lbStartX = e.changedTouches[0].screenX;
    }, false);
    lightbox.addEventListener('touchend', function(e) {
      lbEndX = e.changedTouches[0].screenX;
      var diff = lbEndX - lbStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          curIdx = (curIdx + 1) % galItems.length;
        } else {
          curIdx = (curIdx - 1 + galItems.length) % galItems.length;
        }
        lightboxImg.src = galItems[curIdx].getAttribute('data-src');
      }
    }, false);

    // 6. Global Tracking for Links
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

    console.log('[AfroStudio] Elite Engine v3.0.0 activated.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
