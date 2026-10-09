/**
 * AFROSTUDIO — Autonomous Engine v1.4.0
 * Yandex Metrika Counter: 88058414
 * Official GameLead Integration: c8bee7fc877024cac5a483e8950480f0
 * Left Bottom Scroll: bottom: 14px, left: 14px, 40x40 px
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

  // 1. AUTO-INJECT OFFICIAL GAMELEAD WHEEL
  function loadGameLead() {
    if (!document.querySelector('script[src*="game-lead.ru"]')) {
      var s = document.createElement('script');
      s.src = 'https://game-lead.ru/set/c8bee7fc877024cac5a483e8950480f0';
      s.async = true;
      document.body.appendChild(s);
    }
  }

  // 2. STYLES
  var styles = `
    /* BASE CONTAINER */
    #afrostudio-app {
      font-family: 'TildaSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f5f5f7;
      background: #0d0d0f;
      overflow-x: hidden;
      width: 100%;
      position: relative;
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
      background: #1c1c20;
      border: 1px solid #d4af37;
      color: #d4af37;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9990;
      box-shadow: 0 4px 16px rgba(0,0,0,0.45);
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
      color: #0d0d0f;
      transform: translateY(-2px);
    }
    #afro-scroll-top svg {
      width: 18px;
      height: 18px;
      stroke-width: 2.5;
    }

    /* HERO */
    .afro-hero {
      padding: 60px 0 40px;
      text-align: center;
      background: radial-gradient(circle at 50% 20%, #26221c 0%, #0d0d0f 70%);
      border-bottom: 1px solid #222227;
    }
    .afro-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 30px;
      background: rgba(212,175,55,0.12);
      border: 1px solid rgba(212,175,55,0.3);
      color: #d4af37;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .afro-title {
      font-size: 32px;
      line-height: 1.2;
      font-weight: 800;
      margin-bottom: 14px;
      background: linear-gradient(135deg, #ffffff 30%, #e0d0b0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media (min-width: 768px) {
      .afro-title {
        font-size: 48px;
      }
    }
    .afro-subtitle {
      font-size: 15px;
      line-height: 1.5;
      color: #a8a8b2;
      max-width: 680px;
      margin: 0 auto 28px;
      padding: 0 8px;
    }
    .afro-cta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 20px;
    }
    .afro-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
      border: none;
      cursor: pointer;
    }
    .afro-cta-gold {
      background: linear-gradient(135deg, #d4af37 0%, #f3e08b 100%);
      color: #121214;
    }
    .afro-cta-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(212,175,55,0.4);
    }
    .afro-cta-dark {
      background: #1f1f26;
      border: 1px solid #363642;
      color: #f5f5f7;
    }
    .afro-cta-dark:hover {
      background: #2a2a34;
      border-color: #d4af37;
    }

    /* SHOWCASE */
    .afro-gallery-section {
      padding: 50px 0;
    }
    .afro-section-title {
      font-size: 26px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 8px;
    }
    .afro-section-desc {
      font-size: 14px;
      color: #9c9ca8;
      text-align: center;
      margin-bottom: 32px;
    }
    .afro-gallery-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    @media (min-width: 768px) {
      .afro-gallery-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
    }
    .afro-gallery-item {
      position: relative;
      border-radius: 14px;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      background: #1b1b20;
      cursor: pointer;
      border: 1px solid #282830;
    }
    .afro-gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .afro-gallery-item:hover img {
      transform: scale(1.05);
    }
    .afro-gallery-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(18,18,20,0.75);
      backdrop-filter: blur(8px);
      padding: 4px 8px;
      border-radius: 8px;
      font-size: 11px;
      color: #d4af37;
      border: 1px solid rgba(212,175,55,0.3);
    }

    /* COOKIE */
    #afro-cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(22,22,26,0.96);
      backdrop-filter: blur(16px);
      border-top: 1px solid #33333d;
      padding: 14px 16px;
      z-index: 9995;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
    }
    @media (min-width: 768px) {
      #afro-cookie-banner {
        flex-direction: row;
        justify-content: space-between;
        padding: 14px 32px;
      }
    }
    .afro-cookie-text {
      font-size: 12px;
      line-height: 1.4;
      color: #b5b5c2;
      text-align: center;
    }
    @media (min-width: 768px) {
      .afro-cookie-text {
        text-align: left;
        font-size: 13px;
      }
    }
    .afro-cookie-actions {
      display: flex;
      gap: 10px;
    }
    .afro-btn-cookie-accept {
      background: #d4af37;
      color: #121214;
      border: none;
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
    .afro-btn-cookie-settings {
      background: transparent;
      color: #a0a0af;
      border: 1px solid #444450;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
    }

    /* FOOTER */
    .afro-footer {
      background: #09090b;
      border-top: 1px solid #1c1c22;
      padding: 40px 0 70px;
      color: #828290;
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
      color: #a4a4b4;
      text-decoration: underline;
      cursor: pointer;
      transition: color 0.2s;
    }
    .afro-legal-link:hover {
      color: #d4af37;
    }

    /* LEGAL MODAL */
    .afro-legal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.85);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .afro-legal-box {
      background: #18181d;
      border: 1px solid #32323e;
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
      background: rgba(0,0,0,0.94);
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
      <!-- SCROLL TO TOP (strictly bottom: 14px, left: 14px, 40x40px) -->
      <button id="afro-scroll-top" title="Наверх" aria-label="Наверх">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <!-- HERO -->
      <section class="afro-hero">
        <div class="afro-container">
          <div class="afro-badge">Премиум салон красоты • Москва</div>
          <h1 class="afro-title">Наращивание волос и афропрически нового уровня</h1>
          <p class="afro-subtitle">Индивидуальный подбор донорских прядей, бережная капсуляция без утяжеления и плетение любой сложности со стажем мастеров с 1998 года.</p>

          <div class="afro-cta-row">
            <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-cta-btn afro-cta-gold">
              <span>Записаться в WhatsApp</span>
            </a>
            <a href="https://t.me/afrostudio" target="_blank" class="afro-cta-btn afro-cta-dark">
              <span>Канал в Telegram</span>
            </a>
          </div>
        </div>
      </section>

      <!-- SHOWCASE -->
      <section class="afro-gallery-section">
        <div class="afro-container">
          <h2 class="afro-section-title">Работы мастеров студии</h2>
          <p class="afro-section-desc">Живые результаты до и после из нашего салона в Москве</p>
          <div class="afro-gallery-grid" id="afro-gallery">
            <div class="afro-gallery-item" data-src="https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg">
              <img src="https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg" alt="Капсульное наращивание" loading="lazy" />
              <span class="afro-gallery-badge">Микрокапсулы</span>
            </div>
            <div class="afro-gallery-item" data-src="https://thb.tildacdn.com/tild3838-6332-4232-b437-623433653961/-/empty/noroot.jpg">
              <img src="https://static.tildacdn.com/tild3838-6332-4232-b437-623433653961/noroot.jpg" alt="Брейды и узоры" loading="lazy" />
              <span class="afro-gallery-badge">Брейды</span>
            </div>
            <div class="afro-gallery-item" data-src="https://static.tildacdn.com/tild3237-6635-4163-b565-323065303332/faviconV2.png">
              <img src="https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg" alt="Биопротеин люкс" loading="lazy" />
              <span class="afro-gallery-badge">Биопротеин</span>
            </div>
            <div class="afro-gallery-item" data-src="https://thb.tildacdn.com/tild3838-6332-4232-b437-623433653961/noroot.jpg">
              <img src="https://static.tildacdn.com/tild3838-6332-4232-b437-623433653961/noroot.jpg" alt="Дредокудри" loading="lazy" />
              <span class="afro-gallery-badge">Дредокудри</span>
            </div>
          </div>
        </div>
      </section>

      <!-- LEGAL FOOTER -->
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

      <!-- COOKIE -->
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

    // 2. Cookie consent
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

    // 3. Legal Modals
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

    // 4. Lightbox with swipe
    var lightbox = document.getElementById('afro-lightbox');
    var lightboxImg = document.getElementById('afro-lightbox-img');
    var lightboxClose = document.getElementById('afro-lightbox-x');
    var galleryItems = Array.from(document.querySelectorAll('.afro-gallery-item'));
    var currentIndex = 0;

    galleryItems.forEach(function(item, idx) {
      item.addEventListener('click', function() {
        currentIndex = idx;
        var src = item.getAttribute('data-src');
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
      });
    });

    lightboxClose.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // Swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    lightbox.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    lightbox.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          currentIndex = (currentIndex + 1) % galleryItems.length;
        } else {
          currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        }
        lightboxImg.src = galleryItems[currentIndex].getAttribute('data-src');
      }
    }, false);

    // Global click tracking for YM goals
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

    console.log('[AfroStudio] Engine v1.4.0 activated.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
