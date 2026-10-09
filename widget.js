/**
 * AFROSTUDIO.RU - ELITE BEAUTY SALON WEB SYSTEM
 * Version: 12.0.0 - Interior Signature Hero, 4 Core Directions, Luxury Dark Popup & Fast CDN
 */
(function() {
  'use strict';

  // 1. INJECT EXTERNAL STYLES & LUXURY FONTS
  if (!document.getElementById('afro-web-fonts')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'afro-web-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap';
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

  // 3. APPLICATION STYLES (TOTAL HARMONY: NO WHITE PATCHES, LUXURY OBSIDIAN-GOLD)
  const styles = `
    /* ======================================================== */
    /* 0. GLOBAL BASE: NO WHITE GAPS OR FLASHES                 */
    /* ======================================================== */
    html, body, #allrecords, .t-records, .t-records__overflow {
      background-color: #09090d !important;
      color: #f3f4f6 !important;
    }

    /* KILL LIST FOR JUNK TILDA BLOCKS & NATIVE ARROWS */
    #rec2325313701, #rec2325313981, #rec2325314041, #rec2222808741, 
    #rec2334967441, #rec2334967991, #rec2222715461, #t-footer, .t345, .t854, 
    .t-records__footer, .t190, .t-scroll-to-top, [data-record-type="190"] {
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
    /* 1. LUXURY STYLING FOR TILDA MENU #rec630100959 (t451)    */
    /* ======================================================== */
    #rec630100959 {
      font-family: 'Montserrat', sans-serif !important;
      background: transparent !important;
    }
    #rec630100959 .t-menuburger span {
      background: linear-gradient(90deg, #f59e0b, #fbbf24) !important;
      border-radius: 2px !important;
      box-shadow: 0 0 8px rgba(245, 158, 11, 0.6) !important;
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
      width: 42px !important;
      height: 42px !important;
      border-radius: 50% !important;
      background: rgba(20, 20, 26, 0.75) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border: 1px solid rgba(245, 158, 11, 0.45) !important;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.12) !important;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      text-decoration: none !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item a:hover,
    #rec630100959 .t451m__rightside .t-sociallinks__item a:hover {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.35) 0%, rgba(217, 119, 6, 0.45) 100%) !important;
      border-color: #fbbf24 !important;
      transform: translateY(-3px) scale(1.08) !important;
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.5), 0 0 15px rgba(251, 191, 36, 0.4) !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__svg,
    #rec630100959 .t451m__rightside .t-sociallinks__svg {
      width: 20px !important;
      height: 20px !important;
      fill: #fbbf24 !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item a:hover .t-sociallinks__svg,
    #rec630100959 .t451m__rightside .t-sociallinks__item a:hover .t-sociallinks__svg {
      fill: #ffffff !important;
    }

    /* Sidebar Menu */
    .t451m__overlay_bg {
      background: rgba(7, 7, 11, 0.88) !important;
      backdrop-filter: blur(14px) !important;
      -webkit-backdrop-filter: blur(14px) !important;
    }
    .t451m, .t451m__left {
      background: linear-gradient(180deg, #0e0e14 0%, #08080d 100%) !important;
      border-right: 1px solid rgba(245, 158, 11, 0.3) !important;
      box-shadow: 25px 0 70px rgba(0, 0, 0, 0.9) !important;
    }
    .t451m__close-button, .t451m__close {
      background: rgba(245, 158, 11, 0.12) !important;
      border: 1px solid rgba(245, 158, 11, 0.45) !important;
      border-radius: 50% !important;
      width: 44px !important;
      height: 44px !important;
    }
    .t451m__close_icon span {
      background-color: #fbbf24 !important;
    }
    #rec630100959 .t451m__menu .t-menu__link-item {
      font-family: 'Cinzel', serif !important;
      font-size: 21px !important;
      font-weight: 700 !important;
      letter-spacing: 0.14em !important;
      text-transform: uppercase !important;
      color: #f8fafc !important;
      padding: 14px 18px !important;
      display: block !important;
      transition: all 0.3s ease !important;
      border-left: 3px solid transparent !important;
    }
    #rec630100959 .t451m__menu .t-menu__link-item:hover {
      color: #fbbf24 !important;
      border-left-color: #fbbf24 !important;
      background: linear-gradient(90deg, rgba(245, 158, 11, 0.16) 0%, transparent 100%) !important;
      padding-left: 26px !important;
      text-shadow: 0 0 16px rgba(251, 191, 36, 0.7) !important;
    }
    .t451m__right_descr strong:first-child {
      font-family: 'Cinzel', serif !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      letter-spacing: 0.18em !important;
      color: #fbbf24 !important;
    }

    /* ======================================================== */
    /* 2. POPUP MODAL & FORM MAKEOVER (rec630108157, rec4646446601) */
    /* ======================================================== */
    .t-popup, .t702, #rec630108157, #rec4646446601 {
      font-family: 'Montserrat', sans-serif !important;
    }
    .t-popup__container,
    .t702__wrapper,
    #rec630108157 .t702__wrapper,
    #rec4646446601 .t-container,
    #rec4646446601 .t-form {
      background: linear-gradient(180deg, #13131b 0%, #0c0c11 100%) !important;
      border: 1px solid rgba(245, 158, 11, 0.45) !important;
      border-radius: 24px !important;
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.95), 0 0 35px rgba(245, 158, 11, 0.2) !important;
      color: #f3f4f6 !important;
      padding: 44px 38px !important;
      box-sizing: border-box !important;
    }
    .t-popup__close-icon svg,
    .t-popup__close-icon g,
    .t702__close-icon svg {
      fill: #fbbf24 !important;
    }
    .t702__title,
    .t-popup .t-title,
    #rec630108157 .t-title,
    #rec4646446601 .t-title {
      font-family: 'Cinzel', serif !important;
      font-size: 32px !important;
      font-weight: 800 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      text-align: center !important;
      margin-bottom: 12px !important;
      text-shadow: 0 0 20px rgba(245, 158, 11, 0.4) !important;
    }
    .t702__descr,
    .t-popup .t-descr,
    #rec630108157 .t-descr,
    #rec4646446601 .t-descr {
      color: #9ca3af !important;
      font-size: 15px !important;
      text-align: center !important;
      margin-bottom: 26px !important;
    }
    .t-popup .t-input,
    .t702 .t-input,
    #rec630108157 .t-input,
    #rec4646446601 .t-input,
    input[type="text"].t-input,
    input[type="tel"].t-input {
      background: rgba(255, 255, 255, 0.06) !important;
      border: 1.5px solid rgba(245, 158, 11, 0.35) !important;
      color: #ffffff !important;
      font-size: 16px !important;
      border-radius: 12px !important;
      padding: 16px 20px !important;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.5) !important;
      box-sizing: border-box !important;
      width: 100% !important;
      transition: all 0.3s ease !important;
    }
    .t-popup .t-input:focus,
    .t702 .t-input:focus,
    #rec630108157 .t-input:focus,
    #rec4646446601 .t-input:focus {
      border-color: #fbbf24 !important;
      background: rgba(255, 255, 255, 0.1) !important;
      outline: none !important;
      box-shadow: 0 0 16px rgba(245, 158, 11, 0.45) !important;
    }
    .t-popup .t-submit,
    .t702 .t-submit,
    #rec630108157 .t-submit,
    #rec4646446601 .t-submit,
    .t-form__submit button {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%) !important;
      color: #0b0b0e !important;
      font-weight: 800 !important;
      font-size: 16px !important;
      letter-spacing: 0.1em !important;
      text-transform: uppercase !important;
      border-radius: 9999px !important;
      padding: 18px 40px !important;
      box-shadow: 0 10px 30px rgba(245, 158, 11, 0.5) !important;
      border: none !important;
      cursor: pointer !important;
      width: 100% !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .t-popup .t-submit:hover,
    .t702 .t-submit:hover,
    #rec630108157 .t-submit:hover,
    #rec4646446601 .t-submit:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 14px 40px rgba(245, 158, 11, 0.7) !important;
      filter: brightness(1.08) !important;
    }
    .t-form__bottom-text,
    .t-checkbox__labeltext {
      color: #9ca3af !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
    }
    .t702__img {
      border-radius: 16px 16px 0 0 !important;
      border-bottom: 1px solid rgba(245, 158, 11, 0.3) !important;
    }

    /* ======================================================== */
    /* 3. HERO SLIDER SECTION (WITH SIGNATURE STUDIO INTERIOR)  */
    /* ======================================================== */
    .afro-hero-wrap {
      width: 100%;
      position: relative;
      overflow: hidden;
      background: #09090b;
      border-bottom: 1px solid rgba(245, 158, 11, 0.25);
    }
    .afro-hero-track {
      display: flex;
      transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
      width: 100%;
    }
    .afro-hero-slide {
      min-width: 100%;
      min-height: 600px;
      position: relative;
      background-size: cover;
      background-position: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 90px 24px 100px;
      box-sizing: border-box;
    }
    .afro-hero-slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(12, 12, 18, 0.72) 0%, rgba(8, 8, 12, 0.94) 100%);
      z-index: 1;
    }
    .afro-hero-content {
      position: relative;
      z-index: 2;
      max-width: 960px;
      text-align: center;
      color: #fff;
    }
    .afro-hero-pill {
      display: inline-block;
      padding: 8px 24px;
      border-radius: 9999px;
      background: rgba(245, 158, 11, 0.16);
      border: 1px solid rgba(245, 158, 11, 0.45);
      color: #fbbf24;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 22px;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.25);
    }
    .afro-hero-h1 {
      font-family: 'Cinzel', serif;
      font-size: 48px;
      font-weight: 800;
      line-height: 1.22;
      color: #ffffff;
      margin-bottom: 20px;
      text-shadow: 0 4px 25px rgba(0,0,0,0.85);
    }
    .afro-hero-h1 span {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .afro-hero-desc {
      font-size: 17px;
      line-height: 1.65;
      color: #d1d5db;
      max-width: 800px;
      margin: 0 auto 34px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    }
    .afro-hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .afro-btn-gold {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 16px 38px;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #0b0b0e !important;
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
      box-shadow: 0 6px 25px rgba(245, 158, 11, 0.45);
      border: none;
      cursor: pointer;
      text-decoration: none !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .afro-btn-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 35px rgba(245, 158, 11, 0.65);
      filter: brightness(1.08);
    }
    .afro-btn-trans {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 16px 36px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.05em;
      color: #f3f4f6 !important;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      cursor: pointer;
      text-decoration: none !important;
      transition: all 0.3s ease;
    }
    .afro-btn-trans:hover {
      border-color: #fbbf24;
      color: #fbbf24 !important;
      background: rgba(245, 158, 11, 0.12);
      transform: translateY(-2px);
    }
    .afro-hero-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(18, 18, 24, 0.85);
      border: 1px solid rgba(245, 158, 11, 0.4);
      color: #fbbf24;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .afro-hero-nav:hover {
      background: #fbbf24;
      color: #0b0b0e;
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
    }
    .afro-hero-prev { left: 24px; }
    .afro-hero-next { right: 24px; }
    .afro-hero-dots {
      position: absolute;
      bottom: 24px;
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
      width: 30px;
      border-radius: 9999px;
      background: #fbbf24;
      box-shadow: 0 0 10px rgba(245, 158, 11, 0.8);
    }

    /* ======================================================== */
    /* 4. FOUR CORE DIRECTIONS SECTION (НАПРАВЛЕНИЯ И СТИЛИСТ)  */
    /* ======================================================== */
    .afro-directions-wrap {
      max-width: 1240px;
      margin: 100px auto 90px;
      padding: 0 20px;
    }
    .afro-directions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 26px;
    }
    .afro-dir-card {
      background: #121218;
      border-radius: 20px;
      border: 1px solid rgba(245, 158, 11, 0.25);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    }
    .afro-dir-card:hover {
      transform: translateY(-8px);
      border-color: #fbbf24;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(245, 158, 11, 0.25);
    }
    .afro-dir-thumb {
      width: 100%;
      height: 240px;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .afro-dir-card:hover .afro-dir-thumb {
      transform: scale(1.05);
    }
    .afro-dir-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .afro-dir-num {
      font-family: 'Cinzel', serif;
      font-size: 13px;
      font-weight: 700;
      color: #fbbf24;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .afro-dir-title {
      font-family: 'Cinzel', serif;
      font-size: 21px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .afro-dir-desc {
      font-size: 14px;
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 22px;
      flex-grow: 1;
    }
    .afro-dir-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    /* ======================================================== */
    /* 5. TELEGRAM PORTFOLIO FEED (FAST CDN, 13 REAL WORKS)     */
    /* ======================================================== */
    .afro-feed-wrap {
      max-width: 1240px;
      margin: 100px auto 90px;
      padding: 0 20px;
      position: relative;
    }
    .afro-feed-wrap::before {
      content: '';
      position: absolute;
      top: -50px;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.4), transparent);
    }
    .afro-section-head {
      text-align: center;
      margin-bottom: 50px;
    }
    .afro-section-pill {
      display: inline-block;
      padding: 7px 22px;
      border-radius: 9999px;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #fbbf24;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .afro-section-title {
      font-family: 'Cinzel', serif;
      font-size: 38px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 14px;
    }
    .afro-section-title span {
      color: #fbbf24;
    }
    .afro-section-subtitle {
      font-size: 16px;
      color: #9ca3af;
      max-width: 660px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .afro-feed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }
    .afro-post-card {
      background: #121218;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .afro-post-card:hover {
      transform: translateY(-6px);
      border-color: rgba(245, 158, 11, 0.5);
      box-shadow: 0 16px 45px rgba(0, 0, 0, 0.65), 0 0 20px rgba(245, 158, 11, 0.2);
    }
    .afro-card-thumb-wrap {
      position: relative;
      width: 100%;
      height: 260px;
      background: #09090c;
      overflow: hidden;
    }
    .afro-card-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .afro-post-card:hover .afro-card-thumb {
      transform: scale(1.06);
    }
    .afro-card-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      padding: 5px 12px;
      border-radius: 6px;
      background: rgba(15, 15, 20, 0.88);
      backdrop-filter: blur(8px);
      color: #fbbf24;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border: 1px solid rgba(245, 158, 11, 0.3);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .afro-card-body {
      padding: 22px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .afro-card-title {
      font-size: 16px;
      font-weight: 700;
      color: #f3f4f6;
      margin-bottom: 10px;
      line-height: 1.4;
    }
    .afro-card-desc {
      font-size: 13px;
      color: #9ca3af;
      line-height: 1.55;
      margin-bottom: 20px;
      flex-grow: 1;
    }
    .afro-card-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 10px;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #fbbf24 !important;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none !important;
      transition: all 0.25s ease;
    }
    .afro-card-action:hover {
      background: #fbbf24;
      color: #0b0b0e !important;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
    }

    /* ======================================================== */
    /* 6. INTERACTIVE PRICE MATRIX                              */
    /* ======================================================== */
    .afro-price-section {
      max-width: 1140px;
      margin: 100px auto 90px;
      padding: 0 20px;
      position: relative;
    }
    .afro-price-section::before {
      content: '';
      position: absolute;
      top: -50px;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.4), transparent);
    }
    .afro-price-tabs {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 35px;
      flex-wrap: wrap;
    }
    .afro-price-tab-btn {
      padding: 12px 28px;
      border-radius: 9999px;
      background: #181820;
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #d1d5db;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .afro-price-tab-btn.active {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
      color: #0b0b0e;
      font-weight: 700;
      border-color: #fbbf24;
      box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
    }
    .afro-price-card {
      background: #121218;
      border-radius: 20px;
      border: 1px solid rgba(245, 158, 11, 0.25);
      padding: 32px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    }
    .afro-price-table {
      width: 100%;
      border-collapse: collapse;
    }
    .afro-price-table th {
      text-align: left;
      padding: 16px 20px;
      font-family: 'Cinzel', serif;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #fbbf24;
      border-bottom: 1px solid rgba(245, 158, 11, 0.25);
    }
    .afro-price-table td {
      padding: 18px 20px;
      font-size: 15px;
      color: #e5e7eb;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .afro-price-table tr:hover td {
      background: rgba(245, 158, 11, 0.04);
    }
    .afro-price-val {
      font-weight: 700;
      color: #fbbf24;
      font-size: 16px;
      white-space: nowrap;
    }

    /* ======================================================== */
    /* 7. KLING AI ART SECTION                                  */
    /* ======================================================== */
    .afro-art-box {
      max-width: 1140px;
      margin: 100px auto 90px;
      padding: 60px 40px;
      background: linear-gradient(135deg, rgba(20, 20, 28, 0.95) 0%, rgba(12, 12, 16, 0.98) 100%);
      border-radius: 24px;
      border: 1px solid rgba(245, 158, 11, 0.35);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 40px;
      align-items: center;
    }
    .afro-art-title {
      font-family: 'Cinzel', serif;
      font-size: 34px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .afro-art-title span {
      color: #fbbf24;
    }
    .afro-art-desc {
      font-size: 16px;
      color: #d1d5db;
      line-height: 1.65;
      margin-bottom: 26px;
    }
    .afro-art-badges {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .afro-art-badge-item {
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.35);
      padding: 14px 20px;
      border-radius: 12px;
      text-align: center;
    }
    .afro-art-badge-item strong {
      font-family: 'Cinzel', serif;
      font-size: 24px;
      color: #fbbf24;
      display: block;
      margin-bottom: 4px;
    }
    .afro-art-badge-item span {
      font-size: 12px;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* ======================================================== */
    /* 8. ALWAYS VISIBLE LUXURY FOOTER                          */
    /* ======================================================== */
    .afro-custom-footer {
      background: #09090d;
      border-top: 1px solid rgba(245, 158, 11, 0.3);
      padding: 45px 20px;
      text-align: center;
      position: relative;
      z-index: 100;
    }
    .afro-footer-line1 {
      font-size: 15px;
      color: #e5e7eb;
      margin-bottom: 12px;
    }
    .afro-footer-line2 {
      font-size: 12px;
      color: #6b7280;
      line-height: 1.5;
      max-width: 800px;
      margin: 0 auto 16px;
    }
    .afro-footer-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 13px;
      flex-wrap: wrap;
    }
    .afro-footer-links a {
      color: #fbbf24;
      text-decoration: underline;
      cursor: pointer;
    }

    /* ======================================================== */
    /* 9. CUSTOM GOLD FLOATING SCROLL BUTTON                    */
    /* ======================================================== */
    .afro-floating-scroll {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
      color: #0b0b0e;
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.5), 0 0 15px rgba(251, 191, 36, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .afro-floating-scroll.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .afro-floating-scroll:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 12px 35px rgba(245, 158, 11, 0.7), 0 0 25px rgba(251, 191, 36, 0.6);
    }
    .afro-floating-scroll svg {
      width: 22px;
      height: 22px;
      stroke: #0b0b0e;
      stroke-width: 2.5;
      fill: none;
    }

    /* ======================================================== */
    /* 10. COOKIE BANNER & POLICY MODAL                         */
    /* ======================================================== */
    .afro-cookie-banner {
      position: fixed;
      bottom: 24px;
      left: 24px;
      max-width: 440px;
      background: rgba(18, 18, 24, 0.96);
      border: 1px solid rgba(245, 158, 11, 0.45);
      border-radius: 16px;
      padding: 22px 24px;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(12px);
      z-index: 99999;
      display: none;
    }
    .afro-cookie-banner.open {
      display: block;
    }
    .afro-cookie-title {
      font-family: 'Cinzel', serif;
      font-size: 15px;
      font-weight: 700;
      color: #fbbf24;
      margin-bottom: 8px;
    }
    .afro-cookie-text {
      font-size: 13px;
      line-height: 1.5;
      color: #d1d5db;
      margin-bottom: 16px;
    }
    .afro-cookie-actions {
      display: flex;
      gap: 10px;
    }
    .afro-cookie-btn {
      padding: 9px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.25s ease;
    }
    .afro-cookie-accept {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
      color: #0b0b0e;
      font-weight: 700;
    }
    .afro-cookie-decline {
      background: rgba(255, 255, 255, 0.08);
      color: #d1d5db;
    }
    .afro-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
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
      background: #14141a;
      border: 1px solid rgba(245, 158, 11, 0.4);
      border-radius: 20px;
      max-width: 720px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 36px;
      color: #e5e7eb;
      position: relative;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85);
    }
    .afro-modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
    }

    @media (max-width: 768px) {
      .afro-hero-h1 { font-size: 32px !important; }
      .afro-hero-desc { font-size: 15px !important; }
      .afro-section-title { font-size: 28px !important; }
      .afro-art-box { grid-template-columns: 1fr; padding: 30px 20px; }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.id = 'afro-elite-styles';
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);

  // 4. CLEAN DATA DICTIONARIES
  const cleanPosts = {
    "393": {
      thumb: "https://static.tildacdn.com/tild6439-6134-4132-a365-323035336462/_16.png",
      title: "Преображение волос: роскошный блонд и микрокапсулы",
      desc: "Скрытые крепления Lux, идеальное слияние с натуральными прядями. Студия на Таганской.",
      is_video: true
    },
    "391": {
      thumb: "https://static.tildacdn.com/tild6262-6537-4436-b634-313434323838/_34.png",
      title: "Идеальный образ и уверенность",
      desc: "Авторская укладка и наращивание от топ-мастеров Afrostudio. Без утяжеления.",
      is_video: true
    },
    "388": {
      thumb: "https://static.tildacdn.com/tild3335-3534-4036-b864-656333343963/386898038_3085263019.jpg",
      title: "Капсульное наращивание волос Lux",
      desc: "100% натуральные донорские волосы славянского типа премиального качества.",
      is_video: true
    },
    "386": {
      thumb: "https://static.tildacdn.com/tild3532-3235-4464-b931-653562623936/440708688_4038365592.jpg",
      title: "Сенегальские твисты и стильные косы",
      desc: "Безупречная симметрия, легкий гипоаллергенный канекалон, носка до 2.5 месяцев.",
      is_video: true
    },
    "383": {
      thumb: "https://static.tildacdn.com/tild6638-6434-4137-b162-313935623963/_18.png",
      title: "Биопротеиновые пряди нового поколения",
      desc: "Гладкая шелковистая текстура, естественный блеск и объем по доступной стоимости.",
      is_video: true
    },
    "381": {
      thumb: "https://static.tildacdn.com/tild6661-3564-4834-b061-623464643764/_13.png",
      title: "Брейды и боксерские косы",
      desc: "Четкие геометрические проборы и надежная фиксация для активной жизни.",
      is_video: true
    },
    "379": {
      thumb: "https://static.tildacdn.com/tild3931-6634-4438-a566-376165373230/_20.png",
      title: "Микронаращивание височной зоны",
      desc: "Точечное загущение и маскировка зон без малейшего дискомфорта для своих волос.",
      is_video: true
    },
    "377": {
      thumb: "https://static.tildacdn.com/tild3761-6433-4530-b264-376233646261/_8.png",
      title: "Афрокудри и дредокудри на каркас",
      desc: "Роскошный объем без термической завивки. Мягкие локоны премиум-качества.",
      is_video: true
    },
    "375": {
      thumb: "https://static.tildacdn.com/tild6137-3733-4338-b334-653030376132/385766245_2820401080.jpg",
      title: "Сложное колорирование и наращивание",
      desc: "Точный подбор оттенка тон-в-тон и профессиональное тонирование донорских прядей.",
      is_video: true
    },
    "373": {
      thumb: "https://static.tildacdn.com/tild6530-6432-4231-a464-653432376330/_32.png",
      title: "Зизи волна и гофре",
      desc: "Быстрое точечное плетение с готовым материалом. Легкость и комфорт.",
      is_video: true
    },
    "371": {
      thumb: "https://static.tildacdn.com/tild6538-3733-4639-b635-353562313633/_7.png",
      title: "Голливудское наращивание на трессы",
      desc: "Экологичная бескапсульная методика для максимального объема без клея и смолы.",
      is_video: true
    },
    "367": {
      thumb: "https://static.tildacdn.com/tild3766-3865-4531-a234-313163663337/442232866_1009860497.jpg",
      title: "Уход и коррекция наращенных волос",
      desc: "Бережное снятие с органическим составом и профессиональное перекапсулирование.",
      is_video: true
    },
    "365": {
      thumb: "https://static.tildacdn.com/tild3532-3836-4236-a161-643432646362/443732657_4132501582.jpg",
      title: "Классические афрокосы ручной работы",
      desc: "Идеально выверенное натяжение и безупречные кончики от мастеров с 28-летним стажем.",
      is_video: true
    }
  };

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

  // 5. INJECT SIGNATURE HERO SLIDER (WITH REAL STUDIO INTERIOR PHOTO)
  function buildHeroSlider() {
    if (document.getElementById('afro-hero-section')) return;

    const target = document.querySelector('.t-records') || document.body;
    const heroWrap = document.createElement('section');
    heroWrap.id = 'afro-hero-section';
    heroWrap.className = 'afro-hero-wrap';

    heroWrap.innerHTML = `
      <div class="afro-hero-track" id="afro-hero-track">
        <!-- SLIDE 1: SIGNATURE STUDIO INTERIOR PHOTO -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3838-6332-4232-b437-623433653961/noroot.jpg');">
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

    // Slider Logic
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

  // 6. INJECT 4 CORE DIRECTIONS (НАПРАВЛЕНИЯ, СТИЛИСТ, ОБУЧЕНИЕ)
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
              <a href="#popup:myform" class="afro-btn-gold" style="padding: 10px 22px; font-size: 13px;">Записаться</a>
              <a href="https://afrostudio.ru/services/hair-extension" class="afro-card-action" style="padding: 10px 18px;">Подробнее</a>
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
              <a href="#popup:myform" class="afro-btn-gold" style="padding: 10px 22px; font-size: 13px;">Записаться</a>
              <a href="https://afrostudio.ru/services/afro" class="afro-card-action" style="padding: 10px 18px;">Подробнее</a>
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
              <a href="#popup:myform" class="afro-btn-gold" style="padding: 10px 22px; font-size: 13px;">Записаться</a>
              <a href="#afro-pricing" class="afro-card-action" style="padding: 10px 18px;">Прайс</a>
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
              <a href="#popup:myform" class="afro-btn-gold" style="padding: 10px 22px; font-size: 13px;">Записаться</a>
              <a href="tel:+74959113911" class="afro-card-action" style="padding: 10px 18px;">Консультация</a>
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

  // 7. INJECT TELEGRAM PORTFOLIO FEED (FAST CDN, 13 REAL WORKS)
  function buildTelegramFeed() {
    if (document.getElementById('afro-telegram-feed')) return;

    const feedSec = document.createElement('section');
    feedSec.id = 'afro-telegram-feed';
    feedSec.className = 'afro-feed-wrap';

    let cardsHtml = '';
    for (const [pid, p] of Object.entries(cleanPosts)) {
      cardsHtml += `
        <div class="afro-post-card">
          <div class="afro-card-thumb-wrap">
            <img src="${p.thumb}" class="afro-card-thumb" alt="${p.title}" loading="lazy">
            <span class="afro-card-badge">&#127916; Видео работы</span>
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
          <td><a href="#popup:myform" class="afro-btn-gold" style="padding: 7px 18px; font-size: 12px;">Записаться</a></td>
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

    // Tab switcher
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
    artSec.style.maxWidth = '1240px';
    artSec.style.margin = '100px auto 90px';
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
          <a href="#popup:myform" class="afro-btn-gold" style="font-size: 16px; padding: 18px 40px;">Записаться на консультацию</a>
        </div>
      </div>
    `;

    const target = document.querySelector('.t-records') || document.body;
    target.appendChild(artSec);
  }

  // 10. INJECT CUSTOM LUXURY FOOTER
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

  // 11. INJECT FLOATING SCROLL BUTTON
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
        <h2 style="font-family: 'Cinzel', serif; font-size: 24px; color: #fbbf24; margin-bottom: 20px;">Политика обработки персональных данных</h2>
        <div style="font-size: 14px; line-height: 1.6; color: #d1d5db;">
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
