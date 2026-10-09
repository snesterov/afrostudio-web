/**
 * AFROSTUDIO.RU - ULTRA BEAUTY MARKETING TREND WEB SYSTEM
 * Version: 19.0.0 - Strict Descending Array Chronological Order 393 to 359
 */
(function() {
  'use strict';

  // 1. INJECT HIGH-FASHION BEAUTY FONTS
  if (!document.getElementById('afro-web-fonts')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'afro-web-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(fontLink);
  }

  // 2. INJECT GAMELEAD WHEEL OF FORTUNE
  if (!document.getElementById('gamelead-script')) {
    const glScript = document.createElement('script');
    glScript.id = 'gamelead-script';
    glScript.src = 'https://game-lead.ru/set/c8bee7fc877024cac5a483e8950480f0';
    glScript.async = true;
    document.head.appendChild(glScript);
  }

  // 3. ULTRA TREND BEAUTY STYLES
  const styles = `
    /* ======================================================== */
    /* 0. AMBIENT LUXURY CANVAS (VELVET NOIR + ROSE GOLD MESH)  */
    /* ======================================================== */
    html, body, #allrecords, .t-records, .t-records__overflow {
      background-color: #0b0910 !important;
      background-image: 
        radial-gradient(ellipse at 15% 10%, rgba(244, 63, 94, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 85% 30%, rgba(245, 158, 11, 0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 25% 70%, rgba(217, 70, 239, 0.08) 0%, transparent 55%),
        radial-gradient(ellipse at 75% 90%, rgba(244, 114, 182, 0.09) 0%, transparent 50%) !important;
      background-attachment: fixed !important;
      color: #f8fafc !important;
      font-family: 'Plus Jakarta Sans', 'Montserrat', sans-serif !important;
      -webkit-font-smoothing: antialiased !important;
    }

    /* KILL LIST FOR JUNK TILDA BLOCKS */
    #rec2325313701, #rec2325313981, #rec2325314041, #rec2222808741, 
    #rec2334967441, #rec2334967991, #rec2222715461, #t-footer, .t345, .t854, 
    .t-records__footer, .t190, .t-scroll-to-top, #t-scrolltop, .t-scrolltop, [data-scroll-to-top], [data-record-type="190"], .t-btn-scroll {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0 !important;
      min-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      pointer-events: none !important;
      overflow: hidden !important;
    }

    /* ======================================================== */
    /* 1. LIQUID SILK 3D PILL BUTTONS (2026 BEAUTY TREND)      */
    /* ======================================================== */
    .afro-btn-gold,
    .t-popup .t-submit,
    .t702 .t-submit,
    #rec630108157 .t-submit,
    #rec4646446601 .t-submit,
    .t-form__submit button {
      position: relative !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px 38px;
      border-radius: 9999px !important;
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      background: linear-gradient(135deg, #f43f5e 0%, #fb7185 30%, #f59e0b 80%, #d97706 100%) !important;
      border: 1px solid rgba(255, 255, 255, 0.3) !important;
      box-shadow: 
        0 10px 30px rgba(244, 63, 94, 0.45),
        0 0 20px rgba(245, 158, 11, 0.3),
        inset 0 1px 2px rgba(255, 255, 255, 0.6) !important;
      cursor: pointer !important;
      text-decoration: none !important;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      box-sizing: border-box !important;
    }
    .afro-btn-gold:hover,
    .t-popup .t-submit:hover,
    .t702 .t-submit:hover {
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: 
        0 16px 45px rgba(244, 63, 94, 0.6),
        0 0 30px rgba(245, 158, 11, 0.5),
        inset 0 1px 3px rgba(255, 255, 255, 0.8) !important;
      filter: brightness(1.06) !important;
    }
    .afro-btn-trans {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 16px 34px;
      border-radius: 9999px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: #fce7f3 !important;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.22);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      cursor: pointer;
      text-decoration: none !important;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }
    .afro-btn-trans:hover {
      border-color: #fb7185;
      color: #ffffff !important;
      background: rgba(244, 63, 94, 0.15);
      box-shadow: 0 8px 25px rgba(244, 63, 94, 0.3);
      transform: translateY(-2px);
    }

    /* DEDICATED CARDS ACTION BUTTONS (ZERO CLIPPING, PERFECT FIT) */
    .afro-dir-actions {
      display: flex !important;
      gap: 8px !important;
      align-items: stretch !important;
      width: 100% !important;
      margin-top: auto !important;
    }
    .afro-card-cta-btn {
      flex: 1 1 auto !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 12px 14px !important;
      border-radius: 9999px !important;
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 13px !important;
      font-weight: 800 !important;
      letter-spacing: 0.04em !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      background: linear-gradient(135deg, #f43f5e 0%, #fb7185 30%, #f59e0b 80%, #d97706 100%) !important;
      border: 1px solid rgba(255, 255, 255, 0.3) !important;
      box-shadow: 0 6px 20px rgba(244, 63, 94, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5) !important;
      cursor: pointer !important;
      text-decoration: none !important;
      white-space: nowrap !important;
      transition: all 0.3s ease !important;
      overflow: visible !important;
      box-sizing: border-box !important;
    }
    .afro-card-cta-btn:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 10px 25px rgba(244, 63, 94, 0.6) !important;
    }
    .afro-card-detail-btn {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 12px 14px !important;
      border-radius: 9999px !important;
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      color: #fbcfe8 !important;
      background: rgba(255, 255, 255, 0.06) !important;
      border: 1px solid rgba(244, 114, 182, 0.35) !important;
      cursor: pointer !important;
      text-decoration: none !important;
      white-space: nowrap !important;
      transition: all 0.3s ease !important;
      box-sizing: border-box !important;
    }
    .afro-card-detail-btn:hover {
      background: rgba(244, 63, 94, 0.2) !important;
      border-color: #fb7185 !important;
      color: #ffffff !important;
      transform: translateY(-2px) !important;
    }

    /* ======================================================== */
    /* 2. BEAUTY SALON MENU & HEADER ICONS (#rec630100959)      */
    /* ======================================================== */
    #rec630100959 {
      background: transparent !important;
    }
    #rec630100959 .t-menuburger span {
      background: linear-gradient(90deg, #f43f5e, #fbbf24) !important;
      border-radius: 2px !important;
      box-shadow: 0 0 10px rgba(244, 63, 94, 0.6) !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item a,
    #rec630100959 .t451m__rightside .t-sociallinks__item a {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 44px !important;
      height: 44px !important;
      border-radius: 50% !important;
      background: rgba(26, 20, 34, 0.8) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border: 1px solid rgba(244, 114, 182, 0.4) !important;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2) !important;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      text-decoration: none !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item a:hover,
    #rec630100959 .t451m__rightside .t-sociallinks__item a:hover {
      background: linear-gradient(135deg, rgba(244, 63, 94, 0.4) 0%, rgba(245, 158, 11, 0.45) 100%) !important;
      border-color: #fbcfe8 !important;
      transform: translateY(-3px) scale(1.1) !important;
      box-shadow: 0 10px 30px rgba(244, 63, 94, 0.5), 0 0 20px rgba(245, 158, 11, 0.4) !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__svg,
    #rec630100959 .t451m__rightside .t-sociallinks__svg {
      width: 20px !important;
      height: 20px !important;
      fill: #fbcfe8 !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item a:hover .t-sociallinks__svg,
    #rec630100959 .t451m__rightside .t-sociallinks__item a:hover .t-sociallinks__svg {
      fill: #ffffff !important;
    }

    /* Sidebar Menu */
    .t451m__overlay_bg {
      background: rgba(10, 8, 14, 0.9) !important;
      backdrop-filter: blur(18px) !important;
      -webkit-backdrop-filter: blur(18px) !important;
    }
    .t451m, .t451m__left {
      background: linear-gradient(180deg, #130f1c 0%, #0c0812 100%) !important;
      border-right: 1px solid rgba(244, 114, 182, 0.3) !important;
      box-shadow: 30px 0 80px rgba(0, 0, 0, 0.95) !important;
    }
    .t451m__close-button, .t451m__close {
      background: rgba(244, 63, 94, 0.15) !important;
      border: 1px solid rgba(244, 114, 182, 0.5) !important;
      border-radius: 50% !important;
      width: 44px !important;
      height: 44px !important;
    }
    .t451m__close_icon span {
      background-color: #fbcfe8 !important;
    }
    #rec630100959 .t451m__menu .t-menu__link-item {
      font-family: 'Cinzel', serif !important;
      font-size: 21px !important;
      font-weight: 700 !important;
      letter-spacing: 0.14em !important;
      text-transform: uppercase !important;
      color: #fce7f3 !important;
      padding: 14px 20px !important;
      display: block !important;
      transition: all 0.3s ease !important;
      border-left: 3px solid transparent !important;
    }
    #rec630100959 .t451m__menu .t-menu__link-item:hover {
      color: #ffffff !important;
      border-left-color: #f43f5e !important;
      background: linear-gradient(90deg, rgba(244, 63, 94, 0.2) 0%, transparent 100%) !important;
      padding-left: 28px !important;
      text-shadow: 0 0 18px rgba(244, 63, 94, 0.8) !important;
    }
    .t451m__right_descr strong:first-child {
      font-family: 'Cinzel', serif !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      letter-spacing: 0.18em !important;
      background: linear-gradient(135deg, #fbcfe8, #fbbf24) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }

    /* ======================================================== */
    /* 3. POPUP MODAL (rec630108157, rec4646446601, .t702)     */
    /* ======================================================== */
    .t-popup, .t702, #rec630108157, #rec4646446601 {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
    }
    .t-popup__container,
    .t702__wrapper,
    #rec630108157 .t702__wrapper,
    #rec4646446601 .t-container,
    #rec4646446601 .t-form {
      background: linear-gradient(180deg, rgba(22, 17, 30, 0.98) 0%, rgba(13, 9, 18, 0.99) 100%) !important;
      border: 1px solid rgba(244, 114, 182, 0.45) !important;
      border-radius: 28px !important;
      box-shadow: 
        0 30px 90px rgba(0, 0, 0, 0.95),
        0 0 40px rgba(244, 63, 94, 0.25),
        inset 0 1px 1px rgba(255, 255, 255, 0.15) !important;
      color: #fce7f3 !important;
      padding: 48px 40px !important;
      box-sizing: border-box !important;
    }
    .t-popup__close-icon svg,
    .t-popup__close-icon g,
    .t702__close-icon svg {
      fill: #fb7185 !important;
    }
    .t702__title,
    .t-popup .t-title,
    #rec630108157 .t-title,
    #rec4646446601 .t-title {
      font-family: 'Cinzel', serif !important;
      font-size: 34px !important;
      font-weight: 800 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
      background: linear-gradient(135deg, #ffffff 0%, #fbcfe8 50%, #fb7185 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      text-align: center !important;
      margin-bottom: 12px !important;
    }
    .t702__descr,
    .t-popup .t-descr,
    #rec630108157 .t-descr,
    #rec4646446601 .t-descr {
      color: #d8b4fe !important;
      font-size: 15px !important;
      text-align: center !important;
      margin-bottom: 28px !important;
    }
    .t-popup .t-input,
    .t702 .t-input,
    #rec630108157 .t-input,
    #rec4646446601 .t-input,
    input[type="text"].t-input,
    input[type="tel"].t-input {
      background: rgba(255, 255, 255, 0.05) !important;
      border: 1.5px solid rgba(244, 114, 182, 0.35) !important;
      color: #ffffff !important;
      font-size: 16px !important;
      border-radius: 14px !important;
      padding: 17px 22px !important;
      box-shadow: inset 0 2px 6px rgba(0,0,0,0.5) !important;
      box-sizing: border-box !important;
      width: 100% !important;
      transition: all 0.3s ease !important;
    }
    .t-popup .t-input:focus,
    .t702 .t-input:focus,
    #rec630108157 .t-input:focus,
    #rec4646446601 .t-input:focus {
      border-color: #fb7185 !important;
      background: rgba(255, 255, 255, 0.09) !important;
      outline: none !important;
      box-shadow: 0 0 20px rgba(244, 63, 94, 0.45) !important;
    }
    .t-form__bottom-text,
    .t-checkbox__labeltext {
      color: #c4b5fd !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
    }
    .t702__img {
      border-radius: 20px 20px 0 0 !important;
      border-bottom: 1px solid rgba(244, 114, 182, 0.3) !important;
    }

    /* ======================================================== */
    /* 4. SIGNATURE HERO SLIDER                                 */
    /* ======================================================== */
    .afro-hero-wrap {
      width: 100%;
      position: relative;
      overflow: hidden;
      background: #0b0910;
      border-bottom: 1px solid rgba(244, 114, 182, 0.25);
    }
    .afro-hero-track {
      display: flex;
      transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
      width: 100%;
    }
    .afro-hero-slide {
      min-width: 100%;
      min-height: 620px;
      position: relative;
      background-size: cover;
      background-position: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px 24px 110px;
      box-sizing: border-box;
    }
    .afro-hero-slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(14, 10, 20, 0.35) 0%, rgba(9, 6, 13, 0.75) 100%);
      z-index: 1;
    }
    .afro-hero-content {
      position: relative;
      z-index: 2;
      max-width: 980px;
      text-align: center;
      color: #fff;
    }
    .afro-hero-pill {
      display: inline-block;
      padding: 9px 26px;
      border-radius: 9999px;
      background: rgba(244, 63, 94, 0.16);
      border: 1px solid rgba(244, 114, 182, 0.5);
      color: #fbcfe8;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 24px;
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 20px rgba(244, 63, 94, 0.3);
    }
    .afro-hero-h1 {
      font-family: 'Cinzel', serif;
      font-size: 50px;
      font-weight: 800;
      line-height: 1.2;
      color: #ffffff;
      margin-bottom: 22px;
      text-shadow: 0 4px 30px rgba(0,0,0,0.9);
    }
    .afro-hero-h1 span {
      background: linear-gradient(135deg, #fbcfe8 0%, #fb7185 40%, #fbbf24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .afro-hero-desc {
      font-size: 18px;
      line-height: 1.65;
      color: #e2e8f0;
      max-width: 820px;
      margin: 0 auto 36px;
      text-shadow: 0 2px 12px rgba(0,0,0,0.8);
    }
    .afro-hero-actions {
      display: flex;
      gap: 18px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .afro-hero-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(26, 18, 34, 0.85);
      border: 1px solid rgba(244, 114, 182, 0.45);
      color: #fbcfe8;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    }
    .afro-hero-nav:hover {
      background: linear-gradient(135deg, #f43f5e, #fbbf24);
      color: #ffffff;
      box-shadow: 0 0 25px rgba(244, 63, 94, 0.7);
    }
    .afro-hero-prev { left: 24px; }
    .afro-hero-next { right: 24px; }
    .afro-hero-dots {
      position: absolute;
      bottom: 26px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      display: flex;
      gap: 10px;
    }
    .afro-hero-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .afro-hero-dot.active {
      width: 32px;
      border-radius: 9999px;
      background: linear-gradient(90deg, #f43f5e, #fbbf24);
      box-shadow: 0 0 12px rgba(244, 63, 94, 0.8);
    }

    /* ======================================================== */
    /* 5. 4 CORE DIRECTIONS (ACRYLIC GLASSMORPHISM CARDS)       */
    /* ======================================================== */
    .afro-directions-wrap {
      max-width: 1260px;
      margin: 110px auto 95px;
      padding: 0 20px;
    }
    .afro-directions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
      gap: 28px;
    }
    .afro-dir-card {
      background: rgba(20, 15, 28, 0.8);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 24px;
      border: 1px solid rgba(244, 114, 182, 0.28);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6);
    }
    .afro-dir-card:hover {
      transform: translateY(-8px);
      border-color: #fb7185;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), 0 0 30px rgba(244, 63, 94, 0.3);
    }
    .afro-dir-thumb {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .afro-dir-card:hover .afro-dir-thumb {
      transform: scale(1.06);
    }
    .afro-dir-body {
      padding: 26px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .afro-dir-num {
      font-family: 'Cinzel', serif;
      font-size: 13px;
      font-weight: 700;
      color: #fb7185;
      letter-spacing: 0.12em;
      margin-bottom: 6px;
    }
    .afro-dir-title {
      font-family: 'Cinzel', serif;
      font-size: 22px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .afro-dir-desc {
      font-size: 14px;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 24px;
      flex-grow: 1;
    }

    /* ======================================================== */
    /* 6. TELEGRAM PORTFOLIO FEED (REAL VIDEO SCREENSHOTS)      */
    /* ======================================================== */
    .afro-feed-wrap {
      max-width: 1260px;
      margin: 110px auto 95px;
      padding: 0 20px;
      position: relative;
    }
    .afro-feed-wrap::before {
      content: '';
      position: absolute;
      top: -55px;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(244, 114, 182, 0.4), transparent);
    }
    .afro-section-head {
      text-align: center;
      margin-bottom: 52px;
    }
    .afro-section-pill {
      display: inline-block;
      padding: 8px 24px;
      border-radius: 9999px;
      background: rgba(244, 63, 94, 0.15);
      border: 1px solid rgba(244, 114, 182, 0.4);
      color: #fbcfe8;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 16px;
      box-shadow: 0 4px 15px rgba(244, 63, 94, 0.2);
    }
    .afro-section-title {
      font-family: 'Cinzel', serif;
      font-size: 40px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 14px;
    }
    .afro-section-title span {
      background: linear-gradient(135deg, #fbcfe8, #fb7185, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .afro-section-subtitle {
      font-size: 16px;
      color: #cbd5e1;
      max-width: 680px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .afro-feed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
      gap: 26px;
    }
    .afro-post-card {
      background: rgba(20, 15, 28, 0.85);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .afro-post-card:hover {
      transform: translateY(-6px);
      border-color: rgba(244, 114, 182, 0.55);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(244, 63, 94, 0.3);
    }
    .afro-card-thumb-wrap {
      position: relative;
      width: 100%;
      height: 320px;
      background: #09060c;
      overflow: hidden;
    }
    .afro-card-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .afro-post-card:hover .afro-card-thumb {
      transform: scale(1.07);
    }
    .afro-card-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      padding: 6px 14px;
      border-radius: 9999px;
      background: rgba(18, 12, 24, 0.9);
      backdrop-filter: blur(10px);
      color: #fbcfe8;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border: 1px solid rgba(244, 114, 182, 0.4);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .afro-card-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .afro-card-title {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
      line-height: 1.4;
    }
    .afro-card-desc {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.55;
      margin-bottom: 22px;
      flex-grow: 1;
    }
    .afro-card-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 9999px;
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 114, 182, 0.4);
      color: #fbcfe8 !important;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none !important;
      transition: all 0.25s ease;
    }
    .afro-card-action:hover {
      background: linear-gradient(135deg, #f43f5e, #fbbf24);
      color: #ffffff !important;
      border-color: transparent;
      box-shadow: 0 6px 20px rgba(244, 63, 94, 0.5);
    }

    /* ======================================================== */
    /* 7. INTERACTIVE PRICE MATRIX                              */
    /* ======================================================== */
    .afro-price-section {
      max-width: 1160px;
      margin: 110px auto 95px;
      padding: 0 20px;
      position: relative;
    }
    .afro-price-section::before {
      content: '';
      position: absolute;
      top: -55px;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(244, 114, 182, 0.4), transparent);
    }
    .afro-price-tabs {
      display: flex;
      justify-content: center;
      gap: 14px;
      margin-bottom: 38px;
      flex-wrap: wrap;
    }
    .afro-price-tab-btn {
      padding: 13px 30px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #cbd5e1;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .afro-price-tab-btn.active {
      background: linear-gradient(135deg, #f43f5e, #fb7185 40%, #fbbf24);
      color: #ffffff;
      border-color: #fbcfe8;
      box-shadow: 0 6px 25px rgba(244, 63, 94, 0.45);
    }
    .afro-price-card {
      background: rgba(20, 15, 28, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 24px;
      border: 1px solid rgba(244, 114, 182, 0.3);
      padding: 36px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
    }
    .afro-price-table {
      width: 100%;
      border-collapse: collapse;
    }
    .afro-price-table th {
      text-align: left;
      padding: 18px 22px;
      font-family: 'Cinzel', serif;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #fbcfe8;
      border-bottom: 1px solid rgba(244, 114, 182, 0.25);
    }
    .afro-price-table td {
      padding: 20px 22px;
      font-size: 15px;
      color: #e2e8f0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .afro-price-table tr:hover td {
      background: rgba(244, 63, 94, 0.06);
    }
    .afro-price-val {
      font-weight: 800;
      background: linear-gradient(135deg, #fbcfe8, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 16px;
      white-space: nowrap;
    }

    /* ======================================================== */
    /* 8. KLING AI ART SECTION                                  */
    /* ======================================================== */
    .afro-art-box {
      max-width: 1160px;
      margin: 110px auto 95px;
      padding: 65px 44px;
      background: linear-gradient(135deg, rgba(26, 18, 36, 0.95) 0%, rgba(14, 9, 20, 0.98) 100%);
      border-radius: 28px;
      border: 1px solid rgba(244, 114, 182, 0.4);
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8), 0 0 30px rgba(244, 63, 94, 0.2);
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 40px;
      align-items: center;
    }
    .afro-art-title {
      font-family: 'Cinzel', serif;
      font-size: 36px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .afro-art-title span {
      background: linear-gradient(135deg, #fbcfe8, #fb7185, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .afro-art-desc {
      font-size: 16px;
      color: #cbd5e1;
      line-height: 1.65;
      margin-bottom: 28px;
    }
    .afro-art-badges {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .afro-art-badge-item {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 114, 182, 0.4);
      padding: 15px 22px;
      border-radius: 14px;
      text-align: center;
    }
    .afro-art-badge-item strong {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      color: #fbcfe8;
      display: block;
      margin-bottom: 4px;
    }
    .afro-art-badge-item span {
      font-size: 12px;
      color: #cbd5e1;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* ======================================================== */
    /* 9. ALWAYS VISIBLE FOOTER                                 */
    /* ======================================================== */
    .afro-custom-footer {
      background: #09060c;
      border-top: 1px solid rgba(244, 114, 182, 0.3);
      padding: 50px 20px;
      text-align: center;
      position: relative;
      z-index: 100;
    }
    .afro-footer-line1 {
      font-size: 15px;
      color: #e2e8f0;
      margin-bottom: 12px;
    }
    .afro-footer-line2 {
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.5;
      max-width: 820px;
      margin: 0 auto 18px;
    }
    .afro-footer-links {
      display: flex;
      justify-content: center;
      gap: 22px;
      font-size: 13px;
      flex-wrap: wrap;
    }
    .afro-footer-links a {
      color: #fb7185;
      text-decoration: underline;
      cursor: pointer;
    }

    /* ======================================================== */
    /* 10. FLOATING SCROLL BUTTON (STRICTLY BOTTOM-LEFT)        */
    /* ======================================================== */
    .afro-floating-scroll {
      position: fixed !important;
      bottom: 30px !important;
      left: 30px !important;
      right: auto !important;
      width: 52px !important;
      height: 52px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #f43f5e 0%, #fbbf24 100%) !important;
      color: #ffffff !important;
      box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5), 0 0 15px rgba(245, 158, 11, 0.4) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      z-index: 99999 !important;
      opacity: 0 !important;
      visibility: hidden !important;
      transform: translateY(20px) !important;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .afro-floating-scroll.visible {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0) !important;
    }
    .afro-floating-scroll:hover {
      transform: translateY(-4px) scale(1.08) !important;
      box-shadow: 0 14px 40px rgba(244, 63, 94, 0.7) !important;
    }
    .afro-floating-scroll svg {
      width: 22px !important;
      height: 22px !important;
      stroke: #ffffff !important;
      stroke-width: 2.5 !important;
      fill: none !important;
    }

    /* ======================================================== */
    /* 11. COOKIE BANNER & POLICY MODAL                         */
    /* ======================================================== */
    .afro-cookie-banner {
      position: fixed;
      bottom: 24px;
      left: 95px; /* offset from bottom-left scroll button */
      max-width: 420px;
      background: rgba(22, 16, 30, 0.96);
      border: 1px solid rgba(244, 114, 182, 0.45);
      border-radius: 18px;
      padding: 24px 26px;
      box-shadow: 0 16px 50px rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(16px);
      z-index: 99998;
      display: none;
    }
    .afro-cookie-banner.open {
      display: block;
    }
    .afro-cookie-title {
      font-family: 'Cinzel', serif;
      font-size: 15px;
      font-weight: 700;
      color: #fbcfe8;
      margin-bottom: 8px;
    }
    .afro-cookie-text {
      font-size: 13px;
      line-height: 1.5;
      color: #cbd5e1;
      margin-bottom: 16px;
    }
    .afro-cookie-actions {
      display: flex;
      gap: 10px;
    }
    .afro-cookie-btn {
      padding: 10px 20px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.25s ease;
    }
    .afro-cookie-accept {
      background: linear-gradient(135deg, #f43f5e, #fbbf24);
      color: #ffffff;
    }
    .afro-cookie-decline {
      background: rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
    }
    .afro-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(7, 5, 10, 0.88);
      backdrop-filter: blur(10px);
      z-index: 100000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .afro-modal-overlay.open {
      display: flex;
    }
    .afro-modal-card {
      background: #140f1d;
      border: 1px solid rgba(244, 114, 182, 0.45);
      border-radius: 24px;
      max-width: 720px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 38px;
      color: #f1f5f9;
      position: relative;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
    }
    .afro-modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
    }

    @media (max-width: 768px) {
      .afro-hero-h1 { font-size: 34px !important; }
      .afro-hero-desc { font-size: 15px !important; }
      .afro-section-title { font-size: 28px !important; }
      .afro-art-box { grid-template-columns: 1fr; padding: 32px 20px; }
      .afro-cookie-banner { left: 20px !important; right: 20px !important; max-width: none !important; }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.id = 'afro-elite-styles';
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);

  // 4. CLEAN DATA DICTIONARIES
  const cleanPosts = [
    {
      id: "393",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_393.jpg",
      title: "Когда общаешься со сложным клиентом и случайно смотришь на коллегу 😁",
      desc: "Живые моменты из будней топ-мастеров студии Afrostudio на Таганской. Смотрите ролик в нашем Telegram-канале!",
      is_video: true
    },
    {
      id: "391",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_391.jpg",
      title: "Иногда для идеального образа не хватает только волос ❤️",
      desc: "Добавим длину, густоту и роскошный объем, сохранив максимально естественный результат ✨ Твои волосы - твоя уверенность! #наращиваниеволос",
      is_video: true
    },
    {
      id: "390",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_390.jpg",
      title: "Преображение в студии Afrostudio ✨",
      desc: "Свежая работа топ-стилистов: роскошная длина и безупречный объем без утяжеления. Смотрите видео в канале!",
      is_video: true
    },
    {
      id: "388",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_388.jpg",
      title: "Идеальное слияние и роскошный объем 🤍",
      desc: "Работа с премиальными натуральными прядями славянского типа. Смотрите полный видеообзор в нашем Telegram!",
      is_video: true
    },
    {
      id: "386",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_386.jpg",
      title: "Когда вернулся клиент, который говорил, что дорого 😁",
      desc: "Качественная работа всегда окупается превосходным результатом и комфортной ноской! Смотрите видео в Telegram.",
      is_video: true
    },
    {
      id: "385",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_385.jpg",
      title: "Процесс создания идеальной прически 💫",
      desc: "Ювелирная работа мастера с микрокапсулами в студии на Таганской. Смотрите ролик в Telegram!",
      is_video: true
    },
    {
      id: "383",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_383.jpg",
      title: "Те самые «незаменимые» сотрудники студии ❤️",
      desc: "Иногда для идеального образа не хватает только волос! Смотрите ролик в нашем канале @Salon_afrostudio.",
      is_video: true
    },
    {
      id: "381",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_381.jpg",
      title: "До конца 😁",
      desc: "Смотрите живой ролик из закулисья работы мастеров Afrostudio до конца! Все самое интересное в канале.",
      is_video: true
    },
    {
      id: "379",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_379.jpg",
      title: "Блин, мне так плохо, мне срочно нужны… витрины волос! 😁",
      desc: "Огромный выбор натуральных донорских срезов в студии на Таганской. Смотрите видеоролик в нашем Telegram.",
      is_video: true
    },
    {
      id: "377",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_377.jpg",
      title: "Наращивание волос — и вот уже совсем другая длина, густота и настроение! 🤍",
      desc: "Красивые волосы меняют не только образ, но и самоощущение. Записывайтесь на преображение 💫 #наращиваниеволос",
      is_video: true
    },
    {
      id: "375",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_375.jpg",
      title: "Когда за день сделала 5 наращиваний, 3 укладки и 100 раз услышала:",
      desc: "«А можно ещё чуть-чуть длиннее?» 😅 В конце рабочего дня мастер уже не ходит — он передвигается по инерции) #наращиваниеволос",
      is_video: true
    },
    {
      id: "373",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_373.jpg",
      title: "Наращивание волос — когда хочется перемен прямо сейчас!",
      desc: "Длина, густота и роскошный объём — всё это можно получить за одну процедуру 🤍 Подбираем оттенок, длину и объём индивидуально ✨",
      is_video: true
    },
    {
      id: "371",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_371.jpg",
      title: "Сегодня у нас особенная история ❤️",
      desc: "Мама решила подарить своим волосам новую длину и объем, а донором стала… её дочка ✨ Аккуратно отрезали детские волосы и нарастили маме.",
      is_video: true
    },
    {
      id: "369",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_369.jpg",
      title: "До конца 😂",
      desc: "Юмор и позитивная атмосфера в стенах студии Afrostudio! Смотрите видеоролик в нашем канале.",
      is_video: true
    },
    {
      id: "367",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_367.jpg",
      title: "Загущение волос — идеальное решение для тех, кто хочет плотную прическу ✨",
      desc: "Сделать прическу более плотной, естественной и ухоженной, не меняя длину ✨ #наращиваниеволос",
      is_video: true
    },
    {
      id: "365",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_365.jpg",
      title: "Дорогие клиенты, вы можете разговаривать, смеяться, истории рассказывать…",
      desc: "Но, пожалуйста, не забывайте, что голова должна оставаться на месте 😄 Мастер работает. Клиент отдыхает. Результат радует обоих ❤️",
      is_video: true
    },
    {
      id: "364",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_364.jpg",
      title: "Техника аккуратных капсул Afrostudio 🤍",
      desc: "Микронаращивание прядей премиум-качества: скрытые крепления и легкая естественная носка. Смотрите в Telegram!",
      is_video: true
    },
    {
      id: "362",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_362.jpg",
      title: "Когда записали двух клиентов на одно время 😅",
      desc: "Смотрите юмористический ролик из закулисья работы мастеров Afrostudio в Telegram.",
      is_video: true
    },
    {
      id: "360",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_360.jpg",
      title: "Финальный результат наращивания волос ✨",
      desc: "Потрясающая густота, блеск и идеальное слияние с родными волосами. Смотрите видео в канале!",
      is_video: true
    },
    {
      id: "359",
      thumb: "https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_359.jpg",
      title: "Преображение прядей в руках мастера ❤️",
      desc: "Профессиональный уход и качественное наращивание в студии на Таганской. Смотрите ролик в нашем канале!",
      is_video: true
    }
  ];

  const afroPrices = [
    {"service": "Афрокосички классические (точечно)", "time": "4-6 ч", "price": "от 8 000 ₽"},
    {"service": "Зизи (прямые, волна, гофре)", "time": "3-4 ч", "price": "от 7 500 ₽"},
    {"service": "Сенегальские косы (твисты)", "time": "3-5 ч", "price": "от 8 500 ₽"},
    {"service": "Брейды по голове (боксерские)", "time": "1.5-2.5 ч", "price": "от 3 500 ₽"},
    {"service": "Дредокудри / Афрокудри на каркас", "time": "3-4.5 ч", "price": "от 9 000 ₽"},
    {"service": "Афронаращивание волос (микрокосички)", "time": "3-4 ч", "price": "от 7 000 ₽"},
    {"service": "Снятие афропричесок с уходом", "time": "1-2 ч", "price": "от 2 500 ₽"}
  ];

  const hairPrices = [
    {"service": "Горячее капсульное (итальянское)", "time": "2-3.5 ч", "price": "от 9 500 ₽"},
    {"service": "Микрокапсулы / Нанокапсулы Lux", "time": "2.5-4 ч", "price": "от 12 000 ₽"},
    {"service": "Ленточное наращивание волос", "time": "1-1.5 ч", "price": "от 8 000 ₽"},
    {"service": "Биопротеиновое наращивание волос", "time": "2.5-3.5 ч", "price": "от 8 500 ₽"},
    {"service": "Голливудское (пришивное на тресс)", "time": "1.5-2 ч", "price": "от 9 000 ₽"},
    {"service": "Коррекция капсульного наращивания", "time": "3-5 ч", "price": "от 10 500 ₽"},
    {"service": "Бережное снятие волос + мытье и уход", "time": "1-2 ч", "price": "от 3 000 ₽"}
  ];

  // 5. INJECT HERO SLIDER (SIGNATURE STUDIO INTERIOR)
  function buildHeroSlider() {
    if (document.getElementById('afro-hero-section')) return;

    const target = document.querySelector('.t-records') || document.body;
    const heroWrap = document.createElement('section');
    heroWrap.id = 'afro-hero-section';
    heroWrap.className = 'afro-hero-wrap';

    heroWrap.innerHTML = `
      <div class="afro-hero-track" id="afro-hero-track">
        <!-- SLIDE 1: INTERIOR PHOTO -->
        <div class="afro-hero-slide" style="background-image: url('https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/hero_interior_hd.jpg');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">СТУДИЯ НА ТАГАНСКОЙ &middot; 28 ЛЕТ МАСТЕРСТВА</span>
            <h1 class="afro-hero-h1">Afrostudio &mdash; Легендарная <span>Студия Красоты</span> в Москве</h1>
            <p class="afro-hero-desc">Знакомый интерьер, теплая атмосфера и премиальный уровень сервиса с 1998 года. 100% натуральные донорские волосы славянского типа и авторские схемы плетения (г. Москва, ул. Таганская, 26, стр. 1).</p>
            <div class="afro-hero-actions">
              <a href="#popup:myform" class="afro-btn-gold">Записаться онлайн</a>
              <a href="#afro-directions" class="afro-btn-trans">Все направления</a>
            </div>
          </div>
        </div>
        <!-- SLIDE 2: HAIR EXTENSION -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">ПРЕМИУМ НАРАЩИВАНИЕ &middot; ЛЮБЫЕ ТЕХНИКИ</span>
            <h1 class="afro-hero-h1">Капсульное, Ленточное и <span>Биопротеиновое</span> Наращивание</h1>
            <p class="afro-hero-desc">Скрытые невидимые микрокапсулы, легкая носка без утяжеления, подбор идеального оттенка и структуры волос под ваш образ.</p>
            <div class="afro-hero-actions">
              <a href="#popup:myform" class="afro-btn-gold">Записаться на примерку</a>
              <a href="#afro-pricing" class="afro-btn-trans">Смотреть прайс</a>
            </div>
          </div>
        </div>
        <!-- SLIDE 3: AFRO STYLING -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3337-3833-4835-b261-643866373439/afro34f1a9f.png');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">АФРОПЛЕТЕНИЕ &middot; АВТОРСКИЙ СТИЛЬ</span>
            <h1 class="afro-hero-h1">Афрокосы, Зизи, Дредокудри и <span>Брейды</span></h1>
            <p class="afro-hero-desc">Любая сложность плетения, премиальный канекалон, комфортное распределение веса без вреда для своих волос на 2-3 месяца.</p>
            <div class="afro-hero-actions">
              <a href="#popup:myform" class="afro-btn-gold">Записаться на плетение</a>
              <a href="#afro-telegram-feed" class="afro-btn-trans">Работы мастеров</a>
            </div>
          </div>
        </div>
      </div>
      <button class="afro-hero-nav afro-hero-prev" id="afro-hero-prev">&#10094;</button>
      <button class="afro-hero-nav afro-hero-next" id="afro-hero-next">&#10095;</button>
      <div class="afro-hero-dots" id="afro-hero-dots">
        <div class="afro-hero-dot active" data-index="0"></div>
        <div class="afro-hero-dot" data-index="1"></div>
        <div class="afro-hero-dot" data-index="2"></div>
      </div>
    `;

    target.insertBefore(heroWrap, target.firstChild);

    let currentSlide = 0;
    const track = document.getElementById('afro-hero-track');
    const dots = document.querySelectorAll('.afro-hero-dot');

    function goToSlide(idx) {
      currentSlide = (idx + 3) % 3;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    document.getElementById('afro-hero-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('afro-hero-next').addEventListener('click', () => goToSlide(currentSlide + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goToSlide(i)));
    setInterval(() => goToSlide(currentSlide + 1), 7000);
  }

  // 6. INJECT 4 CORE DIRECTIONS (WITH ZERO-CLIPPING BUTTONS)
  function buildDirectionsSection() {
    if (document.getElementById('afro-directions')) return;

    const dirSec = document.createElement('section');
    dirSec.id = 'afro-directions';
    dirSec.className = 'afro-directions-wrap';

    dirSec.innerHTML = `
      <div class="afro-section-head">
        <span class="afro-section-pill">НАПРАВЛЕНИЯ СТУДИИ</span>
        <h2 class="afro-section-title">Полный Спектр <span>Услуг и Мастерства</span></h2>
        <p class="afro-section-subtitle">С 1998 года Afrostudio объединяет все виды наращивания, афропричесок, стилистического сервиса и обучения.</p>
      </div>
      <div class="afro-directions-grid">
        <!-- 1. НАРАЩИВАНИЕ -->
        <div class="afro-dir-card">
          <img src="https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png" class="afro-dir-thumb" alt="Наращивание волос" loading="lazy">
          <div class="afro-dir-body">
            <span class="afro-dir-num">01 / НАПРАВЛЕНИЕ</span>
            <h3 class="afro-dir-title">Наращивание Волос</h3>
            <p class="afro-dir-desc">Горячее итальянское капсульное, микрокапсулы Lux, ленточное, биопротеин и пришивное голливудское наращивание. 100% славянские донорские волосы.</p>
            <div class="afro-dir-actions">
              <a href="#popup:myform" class="afro-card-cta-btn">Запись</a>
              <a href="https://afrostudio.ru/services/hair-extension" class="afro-card-detail-btn">Подробнее</a>
            </div>
          </div>
        </div>

        <!-- 2. АФРОПЛЕТЕНИЕ -->
        <div class="afro-dir-card">
          <img src="https://static.tildacdn.com/tild3337-3833-4835-b261-643866373439/afro34f1a9f.png" class="afro-dir-thumb" alt="Афрокосички" loading="lazy">
          <div class="afro-dir-body">
            <span class="afro-dir-num">02 / НАПРАВЛЕНИЕ</span>
            <h3 class="afro-dir-title">Афрокосички и Плетение</h3>
            <p class="afro-dir-desc">Классические афрокосы, зизи, сенегальские твисты, брейды и дредокудри на каркас. Любая цветовая палитра и безопасное распределение нагрузки.</p>
            <div class="afro-dir-actions">
              <a href="#popup:myform" class="afro-card-cta-btn">Запись</a>
              <a href="https://afrostudio.ru/services/afro" class="afro-card-detail-btn">Подробнее</a>
            </div>
          </div>
        </div>

        <!-- 3. УСЛУГИ СТИЛИСТА -->
        <div class="afro-dir-card">
          <img src="https://static.tildacdn.com/tild3063-6664-4637-b334-376564313961/paint-bg27e7061.png" class="afro-dir-thumb" alt="Услуги стилиста" loading="lazy">
          <div class="afro-dir-body">
            <span class="afro-dir-num">03 / НАПРАВЛЕНИЕ</span>
            <h3 class="afro-dir-title">Услуги Топ-Стилиста</h3>
            <p class="afro-dir-desc">Авторское колорирование донорских и своих волос, адаптированные стрижки, бережный профессиональный уход, адаптация цвета тон-в-тон.</p>
            <div class="afro-dir-actions">
              <a href="#popup:myform" class="afro-card-cta-btn">Запись</a>
              <a href="#afro-pricing" class="afro-card-detail-btn">Прайс</a>
            </div>
          </div>
        </div>

        <!-- 4. ОБУЧЕНИЕ -->
        <div class="afro-dir-card">
          <img src="https://static.tildacdn.com/tild3762-3565-4130-b234-396335363263/main-s-355276df.png" class="afro-dir-thumb" alt="Обучение мастеров" loading="lazy">
          <div class="afro-dir-body">
            <span class="afro-dir-num">04 / НАПРАВЛЕНИЕ</span>
            <h3 class="afro-dir-title">Обучение Мастеров</h3>
            <p class="afro-dir-desc">Индивидуальные и практические курсы по наращиванию волос и афроплетению с постановкой руки, отработкой на моделях и сертификатом студии.</p>
            <div class="afro-dir-actions">
              <a href="#popup:myform" class="afro-card-cta-btn">Запись</a>
              <a href="tel:+74959113911" class="afro-card-detail-btn">Инфо</a>
            </div>
          </div>
        </div>
      </div>
    `;

    const heroSec = document.getElementById('afro-hero-section');
    if (heroSec && heroSec.nextSibling) {
      heroSec.parentNode.insertBefore(dirSec, heroSec.nextSibling);
    } else {
      const target = document.querySelector('.t-records') || document.body;
      target.appendChild(dirSec);
    }
  }

  // 7. INJECT TELEGRAM PORTFOLIO FEED (REAL VIDEO SCREENSHOTS)
  function buildTelegramFeed() {
    if (document.getElementById('afro-telegram-feed')) return;

    const feedSec = document.createElement('section');
    feedSec.id = 'afro-telegram-feed';
    feedSec.className = 'afro-feed-wrap';

    let cardsHtml = '';
    for (const p of cleanPosts) {
      const pid = p.id;
      cardsHtml += `
        <div class="afro-post-card">
          <div class="afro-card-thumb-wrap">
            <img src="${p.thumb}" class="afro-card-thumb" alt="${p.title}" loading="lazy" onerror="this.src='https://cdn.jsdelivr.net/gh/snesterov/afrostudio-web@main/images/post_393.jpg'">
            <span class="afro-card-badge">${p.is_video ? '&#127916; Видео' : '&#128247; Фото'}</span>
          </div>
          <div class="afro-card-body">
            <h3 class="afro-card-title">${p.title}</h3>
            <p class="afro-card-desc">${p.desc}</p>
            <a href="https://t.me/Salon_afrostudio/${pid}" target="_blank" rel="noopener" class="afro-card-action">
              <span>Смотреть в Telegram</span> &#8594;
            </a>
          </div>
        </div>
      `;
    }

    feedSec.innerHTML = `
      <div class="afro-section-head">
        <span class="afro-section-pill">ОФИЦИАЛЬНЫЙ TELEGRAM КАНАЛ</span>
        <h2 class="afro-section-title">Живые Работы <span>Наших Мастеров</span></h2>
        <p class="afro-section-subtitle">Реальные преображения, микрокапсульное наращивание и афроплетение студии Afrostudio на Таганской.</p>
      </div>
      <div class="afro-feed-grid">
        ${cardsHtml}
      </div>
    `;

    const target = document.querySelector('.t-records') || document.body;
    target.appendChild(feedSec);
  }

  // 8. INJECT INTERACTIVE PRICE MATRIX
  function buildPriceSection() {
    if (document.getElementById('afro-pricing')) return;

    const priceSec = document.createElement('section');
    priceSec.id = 'afro-pricing';
    priceSec.className = 'afro-price-section';

    function renderTableRows(items) {
      return items.map(it => `
        <tr>
          <td><strong>${it.service}</strong></td>
          <td>${it.time}</td>
          <td class="afro-price-val">${it.price}</td>
          <td><a href="#popup:myform" class="afro-card-cta-btn" style="padding: 6px 16px; font-size: 12px;">Записаться</a></td>
        </tr>
      `).join('');
    }

    priceSec.innerHTML = `
      <div class="afro-section-head">
        <span class="afro-section-pill">ПРАЙС-ЛИСТ СТУДИИ</span>
        <h2 class="afro-section-title">Стоимость Услуг <span>и Направлений</span></h2>
        <p class="afro-section-subtitle">Прозрачные фиксированные цены без скрытых доплат. Консультация мастера бесплатно.</p>
      </div>
      <div class="afro-price-tabs">
        <button class="afro-price-tab-btn active" id="tab-hair-btn">Наращивание волос (все виды)</button>
        <button class="afro-price-tab-btn" id="tab-afro-btn">Афроплетение и косички</button>
      </div>
      <div class="afro-price-card">
        <table class="afro-price-table">
          <thead>
            <tr>
              <th>Услуга / Направление</th>
              <th>Время работы</th>
              <th>Стоимость</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody id="afro-price-tbody">
            ${renderTableRows(hairPrices)}
          </tbody>
        </table>
      </div>
    `;

    const dirSec = document.getElementById('afro-directions');
    if (dirSec && dirSec.nextSibling) {
      dirSec.parentNode.insertBefore(priceSec, dirSec.nextSibling);
    } else {
      const target = document.querySelector('.t-records') || document.body;
      target.appendChild(priceSec);
    }

    const tabHair = document.getElementById('tab-hair-btn');
    const tabAfro = document.getElementById('tab-afro-btn');
    const tbody = document.getElementById('afro-price-tbody');

    if (tabHair && tabAfro && tbody) {
      tabHair.addEventListener('click', () => {
        tabHair.classList.add('active');
        tabAfro.classList.remove('active');
        tbody.innerHTML = renderTableRows(hairPrices);
      });
      tabAfro.addEventListener('click', () => {
        tabAfro.classList.add('active');
        tabHair.classList.remove('active');
        tbody.innerHTML = renderTableRows(afroPrices);
      });
    }
  }

  // 9. INJECT KLING AI ART BADGE SECTION
  function buildArtSection() {
    if (document.getElementById('afro-art-section')) return;

    const artSec = document.createElement('section');
    artSec.id = 'afro-art-section';
    artSec.style.maxWidth = '1160px';
    artSec.style.margin = '110px auto 95px';
    artSec.style.padding = '0 20px';

    artSec.innerHTML = `
      <div class="afro-art-box">
        <div>
          <span class="afro-section-pill">ВЫСОКИЕ СТАНДАРТЫ КАЧЕСТВА</span>
          <h2 class="afro-art-title">Искусство Создавать <span>Идеальный Образ</span></h2>
          <p class="afro-art-desc">Студия Afrostudio с 1998 года задает тренды в индустрии наращивания волос и афропричесок в Москве. Мы объединяем передовые европейские технологии, натуральные донорские волосы категории Lux и авторскую эстетику.</p>
          <div class="afro-art-badges">
            <div class="afro-art-badge-item">
              <strong>28</strong>
              <span>Лет мастерства</span>
            </div>
            <div class="afro-art-badge-item">
              <strong>100%</strong>
              <span>Натуральный волос</span>
            </div>
            <div class="afro-art-badge-item">
              <strong>&gt;15 000</strong>
              <span>Довольных клиенток</span>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          <a href="#popup:myform" class="afro-btn-gold" style="font-size: 16px; padding: 18px 44px;">Записаться на примерку</a>
        </div>
      </div>
    `;

    const target = document.querySelector('.t-records') || document.body;
    target.appendChild(artSec);
  }

  // 10. INJECT ALWAYS VISIBLE FOOTER
  function buildCustomFooter() {
    if (document.getElementById('afro-custom-footer')) return;

    const footer = document.createElement('footer');
    footer.id = 'afro-custom-footer';
    footer.className = 'afro-custom-footer';

    footer.innerHTML = `
      <div class="afro-footer-line1">&copy; 1998&ndash;2026 AFROSTUDIO &middot; 28 лет мастерства &middot; afrostudio.ru &middot; г. Москва, ул. Таганская, 26, стр. 1 (м. Таганская / Марксистская)</div>
      <div class="afro-footer-line2">*Деятельность Meta Platforms Inc. по реализации продуктов Instagram и Facebook признана экстремистской и запрещена на территории Российской Федерации.</div>
      <div class="afro-footer-links">
        <a onclick="openPolicyModal()">Политика обработки персональных данных (152-ФЗ)</a>
        <a href="tel:+74959113911">+7 (495) 911-39-11</a>
        <a href="https://t.me/Salon_afrostudio" target="_blank" rel="noopener">Telegram канал</a>
      </div>
    `;

    document.body.appendChild(footer);
  }

  // 11. INJECT FLOATING SCROLL BUTTON (STRICTLY IN BOTTOM-LEFT CORNER)
  function buildScrollButton() {
    if (document.getElementById('afro-floating-scroll')) return;

    const btn = document.createElement('div');
    btn.id = 'afro-floating-scroll';
    btn.className = 'afro-floating-scroll';
    btn.title = 'Наверх';
    btn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"></polyline></svg>`;

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    document.body.appendChild(btn);
  }

  // 12. INJECT COOKIE BANNER & POLICY MODAL
  function buildPolicyAndCookie() {
    if (document.getElementById('afro-cookie-banner')) return;

    const cookieBanner = document.createElement('div');
    cookieBanner.id = 'afro-cookie-banner';
    cookieBanner.className = 'afro-cookie-banner';
    cookieBanner.innerHTML = `
      <div class="afro-cookie-title">Конфиденциальность и файлы Cookie</div>
      <div class="afro-cookie-text">Мы используем файлы cookie для обеспечения корректной работы сайта и сбора аналитики в соответствии с Федеральным законом № 152-ФЗ.</div>
      <div class="afro-cookie-actions">
        <button class="afro-cookie-btn afro-cookie-accept" id="afro-cookie-accept">Принять</button>
        <button class="afro-cookie-btn afro-cookie-decline" onclick="openPolicyModal()">Подробнее</button>
      </div>
    `;
    document.body.appendChild(cookieBanner);

    const modal = document.createElement('div');
    modal.id = 'afro-policy-modal';
    modal.className = 'afro-modal-overlay';
    modal.innerHTML = `
      <div class="afro-modal-card">
        <button class="afro-modal-close" onclick="closePolicyModal()">&times;</button>
        <h2 style="font-family: 'Cinzel', serif; font-size: 24px; color: #fbcfe8; margin-bottom: 20px;">Политика обработки персональных данных</h2>
        <div style="font-size: 14px; line-height: 1.6; color: #cbd5e1;">
          <p>Настоящая Политика составлена в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки данных студией Afrostudio (работает с 1998 года, г. Москва, ул. Таганская, 26, стр. 1).</p>
          <p>Студия обеспечивает конфиденциальность предоставленных клиентом данных (имя, номер телефона) исключительно для связи, консультации и записи на услуги.</p>
          <p>Контакты: +7 (495) 911-39-11 &middot; г. Москва, ул. Таганская, 26, стр. 1.</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('afro-cookie-accept').addEventListener('click', () => {
      try { localStorage.setItem('afro_cookie_accepted', 'true'); } catch(e) {}
      cookieBanner.classList.remove('open');
    });

    window.openPolicyModal = () => modal.classList.add('open');
    window.closePolicyModal = () => modal.classList.remove('open');

    try {
      if (!localStorage.getItem('afro_cookie_accepted')) {
        setTimeout(() => cookieBanner.classList.add('open'), 1200);
      }
    } catch(e) {
      setTimeout(() => cookieBanner.classList.add('open'), 1200);
    }
  }

  // 13. INITIALIZATION ORCHESTRATOR
  function init() {
    buildHeroSlider();
    buildDirectionsSection();
    buildPriceSection();
    buildTelegramFeed();
    buildArtSection();
    buildCustomFooter();
    buildScrollButton();
    buildPolicyAndCookie();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
