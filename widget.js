/**
 * AFROSTUDIO.RU - ELITE BEAUTY SALON WEB SYSTEM
 * Version: 11.0.0 - Luxury Menu Redesign, 1998 Foundation, High-Contrast Forms & Zero Junk
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

  // 3. INJECT APPLICATION STYLES (ELITE DESIGN SYSTEM)
  const styles = `
    /* ======================================================== */
    /* 0. ABSOLUTE KILL LIST FOR JUNK BLOCKS & NATIVE SCROLL BTN */
    /* ======================================================== */
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
    }

    /* Burger Menu Icon */
    #rec630100959 .t-menuburger {
      cursor: pointer !important;
      transition: transform 0.3s ease !important;
    }
    #rec630100959 .t-menuburger:hover {
      transform: scale(1.1) !important;
    }
    #rec630100959 .t-menuburger span {
      background: linear-gradient(90deg, #f59e0b, #fbbf24) !important;
      border-radius: 2px !important;
      box-shadow: 0 0 8px rgba(245, 158, 11, 0.6) !important;
    }

    /* Top Right Header Social Icons (Phone, MAX, Telegram) */
    #rec630100959 .t451__rightside .t-sociallinks {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item {
      margin: 0 !important;
      padding: 0 !important;
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
      transition: fill 0.3s ease !important;
    }
    #rec630100959 .t451__rightside .t-sociallinks__item a:hover .t-sociallinks__svg,
    #rec630100959 .t451m__rightside .t-sociallinks__item a:hover .t-sociallinks__svg {
      fill: #ffffff !important;
    }

    /* Sidebar Menu Overlay */
    .t451m__overlay_bg {
      background: rgba(7, 7, 11, 0.88) !important;
      backdrop-filter: blur(14px) !important;
      -webkit-backdrop-filter: blur(14px) !important;
    }

    /* Sidebar Menu Panel */
    .t451m, .t451m__left {
      background: linear-gradient(180deg, #0e0e14 0%, #08080d 100%) !important;
      border-right: 1px solid rgba(245, 158, 11, 0.3) !important;
      box-shadow: 25px 0 70px rgba(0, 0, 0, 0.9), inset -1px 0 0 rgba(251, 191, 36, 0.15) !important;
      padding: 40px 30px !important;
    }

    /* Sidebar Close Button */
    .t451m__close-button, .t451m__close {
      background: rgba(245, 158, 11, 0.12) !important;
      border: 1px solid rgba(245, 158, 11, 0.45) !important;
      border-radius: 50% !important;
      width: 44px !important;
      height: 44px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      top: 30px !important;
      right: 30px !important;
    }
    .t451m__close-button:hover, .t451m__close:hover {
      background: rgba(245, 158, 11, 0.3) !important;
      border-color: #fbbf24 !important;
      transform: rotate(90deg) scale(1.1) !important;
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.6) !important;
    }
    .t451m__close_icon span {
      background-color: #fbbf24 !important;
    }

    /* Sidebar Navigation Links */
    #rec630100959 .t451m__menu .t-menu__link-item {
      font-family: 'Cinzel', 'Playfair Display', serif !important;
      font-size: 21px !important;
      font-weight: 700 !important;
      letter-spacing: 0.14em !important;
      text-transform: uppercase !important;
      color: #f8fafc !important;
      padding: 14px 18px !important;
      display: block !important;
      position: relative !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
      border-left: 3px solid transparent !important;
      border-radius: 0 8px 8px 0 !important;
    }
    #rec630100959 .t451m__menu .t-menu__link-item:hover {
      color: #fbbf24 !important;
      border-left-color: #fbbf24 !important;
      background: linear-gradient(90deg, rgba(245, 158, 11, 0.16) 0%, transparent 100%) !important;
      padding-left: 26px !important;
      text-shadow: 0 0 16px rgba(251, 191, 36, 0.7) !important;
    }

    /* Sidebar Footer Description */
    .t451m__right_descr {
      margin-top: 40px !important;
      padding-top: 25px !important;
      border-top: 1px solid rgba(245, 158, 11, 0.2) !important;
    }
    .t451m__right_descr strong:first-child {
      font-family: 'Cinzel', serif !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      letter-spacing: 0.18em !important;
      color: #fbbf24 !important;
      text-shadow: 0 0 10px rgba(245, 158, 11, 0.4) !important;
      display: inline-block !important;
      margin-bottom: 8px !important;
    }

    /* ======================================================== */
    /* 2. SECTION VERTICAL RHYTHM & GOLDEN DIVIDERS             */
    /* ======================================================== */
    #afro-hero-section,
    #afro-telegram-feed,
    #afro-pricing,
    #afro-services-section,
    #afro-art-section,
    #rec4646446601 {
      margin-top: 110px !important;
      margin-bottom: 90px !important;
      position: relative !important;
    }
    #afro-telegram-feed::before,
    #afro-pricing::before,
    #afro-services-section::before,
    #afro-art-section::before,
    #rec4646446601::before {
      content: '';
      position: absolute;
      top: -55px;
      left: 5%;
      right: 5%;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.35) 30%, rgba(251, 191, 36, 0.6) 50%, rgba(245, 158, 11, 0.35) 70%, transparent 100%);
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
      pointer-events: none;
    }

    /* ======================================================== */
    /* 3. HERO SLIDER LUXURY SECTION                            */
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
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      width: 100%;
    }
    .afro-hero-slide {
      min-width: 100%;
      min-height: 580px;
      position: relative;
      background-size: cover;
      background-position: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 24px 90px;
      box-sizing: border-box;
    }
    .afro-hero-slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(10, 10, 14, 0.65) 0%, rgba(8, 8, 10, 0.95) 100%);
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
      padding: 8px 22px;
      border-radius: 9999px;
      background: rgba(245, 158, 11, 0.14);
      border: 1px solid rgba(245, 158, 11, 0.45);
      color: #fbbf24;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 22px;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
    }
    .afro-hero-h1 {
      font-family: 'Cinzel', 'Playfair Display', serif;
      font-size: 46px;
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
      max-width: 780px;
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
      padding: 15px 36px;
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
      padding: 15px 34px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.05em;
      color: #f3f4f6 !important;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      cursor: pointer;
      text-decoration: none !important;
      transition: all 0.3s ease;
    }
    .afro-btn-trans:hover {
      border-color: #fbbf24;
      color: #fbbf24 !important;
      background: rgba(245, 158, 11, 0.1);
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
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
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
      width: 28px;
      border-radius: 9999px;
      background: #fbbf24;
      box-shadow: 0 0 10px rgba(245, 158, 11, 0.8);
    }

    /* ======================================================== */
    /* 4. FORM BLOCK REFINEMENT #rec4646446601                  */
    /* ======================================================== */
    #rec4646446601 {
      position: relative !important;
      z-index: 10 !important;
      padding: 60px 20px !important;
      background: transparent !important;
    }
    #rec4646446601 .t-container,
    #rec4646446601 .t-form,
    #rec4646446601 .t678 {
      max-width: 680px !important;
      margin: 0 auto !important;
      background: #ffffff !important;
      border-radius: 20px !important;
      padding: 44px 40px !important;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(245, 158, 11, 0.3) !important;
      box-sizing: border-box !important;
    }
    #rec4646446601 .t-title,
    #rec4646446601 .t-heading,
    #rec4646446601 .t678__title {
      color: #111827 !important;
      font-family: 'Cinzel', serif !important;
      font-weight: 800 !important;
      font-size: 32px !important;
      text-align: center !important;
      margin-bottom: 12px !important;
    }
    #rec4646446601 .t-descr,
    #rec4646446601 .t678__descr {
      color: #4b5563 !important;
      font-size: 15px !important;
      line-height: 1.5 !important;
      text-align: center !important;
      margin-bottom: 28px !important;
    }
    #rec4646446601 .t-input,
    #rec4646446601 input[type="text"],
    #rec4646446601 input[type="tel"],
    #rec4646446601 input[type="email"],
    #rec4646446601 textarea {
      background: #f9fafb !important;
      border: 1.5px solid #d1d5db !important;
      color: #111827 !important;
      font-size: 16px !important;
      border-radius: 10px !important;
      padding: 15px 18px !important;
      box-sizing: border-box !important;
      width: 100% !important;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05) !important;
    }
    #rec4646446601 .t-input:focus {
      border-color: #f59e0b !important;
      background: #ffffff !important;
      outline: none !important;
      box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25) !important;
    }
    #rec4646446601 .t-input-title {
      color: #374151 !important;
      font-weight: 600 !important;
      font-size: 13px !important;
      margin-bottom: 6px !important;
      text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
    }
    #rec4646446601 .t-submit,
    #rec4646446601 button[type="submit"] {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%) !important;
      color: #111827 !important;
      font-weight: 800 !important;
      font-size: 16px !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
      border-radius: 9999px !important;
      padding: 18px 36px !important;
      box-shadow: 0 8px 30px rgba(245, 158, 11, 0.45) !important;
      border: none !important;
      cursor: pointer !important;
      width: 100% !important;
      transition: all 0.3s ease !important;
    }
    #rec4646446601 .t-submit:hover,
    #rec4646446601 button[type="submit"]:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 35px rgba(245, 158, 11, 0.65) !important;
    }

    /* ======================================================== */
    /* 5. TELEGRAM VERIFIED FEED (CLEAN 13 WORKS)               */
    /* ======================================================== */
    .afro-feed-wrap {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .afro-section-head {
      text-align: center;
      margin-bottom: 50px;
    }
    .afro-section-pill {
      display: inline-block;
      padding: 7px 20px;
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
      max-width: 640px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .afro-feed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }
    .afro-post-card {
      background: #14141a;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .afro-post-card:hover {
      transform: translateY(-6px);
      border-color: rgba(245, 158, 11, 0.45);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.2);
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
      background: rgba(15, 15, 20, 0.85);
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
      padding: 20px;
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
      margin-bottom: 18px;
      flex-grow: 1;
    }
    .afro-card-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 11px 20px;
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
      margin: 0 auto;
      padding: 0 20px;
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
      border-radius: 18px;
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
      margin: 0 auto;
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
      animation: afroFadeIn 0.4s ease;
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

    @keyframes afroFadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .afro-hero-h1 { font-size: 32px !important; }
      .afro-hero-desc { font-size: 15px !important; }
      .afro-section-title { font-size: 28px !important; }
      .afro-art-box { grid-template-columns: 1fr; padding: 30px 20px; }
      #rec4646446601 .t-container,
      #rec4646446601 .t-form { padding: 30px 20px !important; }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.id = 'afro-elite-styles';
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);

  // 4. CLEAN DATA DICTIONARIES
  const cleanPosts = {
    "393": {
      thumb: "https://cdn4.telesco.pe/file/fz_I_LF75CzaDsblUk8jYftxQYQTlGHb81a826abb671e63a59d5e3a559a8e7ee.jpg",
      title: "Преображение волос: роскошный блонд и микрокапсулы",
      desc: "Сложное наращивание на славянские волосы Lux. Невидимые микрокапсулы ручной работы, идеальное слияние оттенков и естественный объем.",
      is_video: true
    },
    "391": {
      thumb: "https://cdn4.telesco.pe/file/kBIJfzCQOTzU34ionDalM6kkyLn3YO5nnet6NJukkBcMeWC8GpgQwPTJOXPtFsuxjQ7MrV_m8qxf9urB6GPMFcz_2XK0dAxut_qwn6x9IoEcl6nano-DHv8EXdUZd5WOSGRV9wwDshQ-nQqpxCUfIPMaXSL2j7J5MC_7dYP0oMb3viiYmiM5e37wC2VJbNjkSl2esUDsAk-rbnw9e8dJCRVvESbJVf2xQey7Eigob-niQ9HTtE30DdK7lkl57O70dHiono_fDNuyLw6VDIk-LI6o-mVsTzH9b8hvVhsWJzuz1jhO4DRzSnsI0bFyNJu5YXo5qEOfmJuhor_378p4HQ",
      title: "Идеальный образ и уверенность",
      desc: "Иногда для идеального образа не хватает только волос ❤️ Добавим длину, густоту и роскошный объем, сохранив максимально естественный результат ✨ Твои волосы — твоя уверенность! #наращиваниеволос",
      is_video: true
    },
    "388": {
      thumb: "https://cdn4.telesco.pe/file/PCqAQbDEPT8-R8gJ6RPtb7jMq_xwDaz30fd13a89374b5fe8721952a242ff1f9.jpg",
      title: "Капсульное наращивание волос Lux",
      desc: "Результат работы топ-мастеров Afrostudio. Легкость в носке, возможность собирать любые прически и конские хвосты без риска раскрытия капсул.",
      is_video: true
    },
    "386": {
      thumb: "https://cdn4.telesco.pe/file/Fkefvtao-y6Ii5BfmbOAERyLKFfDtvU63aa0165835811aede47fff8655630ef.jpg",
      title: "Биопротеиновые волосы: шелк и зеркальный блеск",
      desc: "Инновационное наращивание биопротеиновых прядей японского качества. Не пушатся, легко расчесываются и сохраняют идеальную текстуру.",
      is_video: true
    },
    "383": {
      thumb: "https://cdn4.telesco.pe/file/tbOnqRFeg8prLnPD5BTJZbIro47WLUICe79167d88a9dac997f852b40b5504e5.jpg",
      title: "Наращивание на короткую стрижку каре",
      desc: "Ювелирное распределение микро и нано капсул для плавного перехода от родных коротких волос к длинным струящимся локонам.",
      is_video: true
    },
    "381": {
      thumb: "https://cdn4.telesco.pe/file/MZEt7KiVQA7CYNfo7vnuJx7GQJ1s2x8bd49f7ae66eeaf2b4a7fee6acdaa597c.jpg",
      title: "Финальное преображение волос до конца 😁",
      desc: "Смотрите видео до конца! Реакция клиентки на новую длину и объем бесценна. Мастера Afrostudio воплощают любую мечту о волосах.",
      is_video: true
    },
    "379": {
      thumb: "https://cdn4.telesco.pe/file/TqrZ-pg7ZrPoJJaW5SQ62TH8nF0ql05fd9b6b990cc8f3677f57596fa77cd88a.jpg",
      title: "Горячая итальянская методика в студии",
      desc: "Правильная постановка прядей и бережное отношение к здоровью родных волос. Срок комфортной носки до 3.5 месяцев.",
      is_video: true
    },
    "377": {
      thumb: "https://cdn4.telesco.pe/file/IUtZ6BLoZh7e6XMTNB_piN16Eb_bGMEca2569424cbe29c0d067c3bf0b1d5b11.jpg",
      title: "Новая длина, густота и настроение 🤍",
      desc: "Наращивание волос — и вот уже совсем другая длина, густота и настроение! Чистая итальянская методика, незаметные микрокапсулы.",
      is_video: true
    },
    "375": {
      thumb: "https://cdn4.telesco.pe/file/YIdF87JLvGi9UgSu2_LNKep_3YvsYi_26540c58d4756b85c45cd77d6d445210.jpg",
      title: "Будни салона Afrostudio на Таганской",
      desc: "Когда за день сделала 5 наращиваний, 3 укладки и 100 раз услышала: «А можно ещё гуще?» 😂 Работаем с любовью к каждой пряди!",
      is_video: true
    },
    "373": {
      thumb: "https://cdn4.telesco.pe/file/O75ydYUVg6yA1xbz9cdncJIlKtO8fTEba279cdf4c5f6a40660cf027d72e099d.jpg",
      title: "Перемены прямо сейчас: длина и густота",
      desc: "Наращивание волос — когда хочется перемен прямо сейчас! Длина, густота и роскошный объем без ожидания годами.",
      is_video: true
    },
    "371": {
      thumb: "https://cdn4.telesco.pe/file/FsMYpnrt2-TzzhwIDVBtYQZRsse6cy3.jpg",
      title: "Особенная история преображения ❤️",
      desc: "Сегодня у нас особенная история. Мама решила подарить своим волосам новую жизнь и объем. Посмотрите на этот сияющий результат!",
      is_video: true
    },
    "367": {
      thumb: "https://cdn4.telesco.pe/file/sfcCaq8r--O4Ibwv22S2SnDOS0MPy-D.jpg",
      title: "Загущение волос — для объема без лишней длины",
      desc: "Загущение волос — идеальное решение для тех, кто хочет сделать прическу более плотной без сильного изменения длины.",
      is_video: true
    },
    "365": {
      thumb: "https://cdn4.telesco.pe/file/plXzRhqYqSbBekvLWYWpQ6BIWALWkoG.jpg",
      title: "Уютная атмосфера студии на Большой Таганской",
      desc: "Дорогие клиенты, вы можете разговаривать, смеяться, рассказывать истории… Но главное — наслаждаться процессом и результатом в Afrostudio!",
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

  // 5. INJECT HERO SLIDER BEFORE CONTENT
  function buildHeroSlider() {
    if (document.getElementById('afro-hero-section')) return;

    const target = document.querySelector('.t-records') || document.body;
    const heroWrap = document.createElement('section');
    heroWrap.id = 'afro-hero-section';
    heroWrap.className = 'afro-hero-wrap';

    heroWrap.innerHTML = `
      <div class="afro-hero-track" id="afro-hero-track">
        <!-- SLIDE 1 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">ПРЕМИУМ САЛОН В МОСКВЕ &middot; 28 ЛЕТ МАСТЕРСТВА</span>
            <h1 class="afro-hero-h1">Afrostudio &mdash; Студия <span>Наращивания Волос</span> и Афроплетения</h1>
            <p class="afro-hero-desc">Безупречный результат, 100% натуральные донорские волосы славянского типа, микрокапсулы и авторские схемы плетения в центре Москвы (ул. Таганская, 26, стр. 1, м. Таганская).</p>
            <div class="afro-hero-actions">
              <a href="#popup:myform" class="afro-btn-gold">Записаться онлайн</a>
              <a href="#afro-pricing" class="afro-btn-trans">Смотреть прайс</a>
            </div>
          </div>
        </div>
        <!-- SLIDE 2 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">ТОП МАСТЕРА &middot; ГАРАНТИЯ КАЧЕСТВА</span>
            <h1 class="afro-hero-h1">Капсульное, Ленточное и <span>Биопротеиновое</span> Наращивание</h1>
            <p class="afro-hero-desc">Скрытые невидимые капсулы, легкая носка без утяжеления, подбор идеального оттенка и структуры волос под ваш образ.</p>
            <div class="afro-hero-actions">
              <a href="#popup:myform" class="afro-btn-gold">Записаться на примерку</a>
              <a href="#afro-telegram-feed" class="afro-btn-trans">Работы мастеров</a>
            </div>
          </div>
        </div>
        <!-- SLIDE 3 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3164-3232-4735-b935-643564343162/microcapsule.jpg');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">АФРОПЛЕТЕНИЕ &middot; СТИЛЬНЫЙ ОБРАЗ</span>
            <h1 class="afro-hero-h1">Афрокосы, Зизи, Дредокудри и <span>Брейды</span></h1>
            <p class="afro-hero-desc">Любая сложность плетения, премиальный канекалон, комфортное распределение веса без вреда для своих волос на 2-3 месяца.</p>
            <div class="afro-hero-actions">
              <a href="#popup:myform" class="afro-btn-gold">Записаться на плетение</a>
              <a href="#afro-pricing" class="afro-btn-trans">Прайс услуг</a>
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
    setInterval(() => goToSlide(currentSlide + 1), 6500);
  }

  // 6. INJECT TELEGRAM VERIFIED FEED
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

    const formRec = document.getElementById('rec4646446601');
    if (formRec && formRec.parentNode) {
      formRec.parentNode.insertBefore(feedSec, formRec);
    } else {
      const target = document.querySelector('.t-records') || document.body;
      target.appendChild(feedSec);
    }
  }

  // 7. INJECT INTERACTIVE PRICE MATRIX
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

    const feedSec = document.getElementById('afro-telegram-feed');
    if (feedSec && feedSec.parentNode) {
      feedSec.parentNode.insertBefore(priceSec, feedSec);
    } else {
      const formRec = document.getElementById('rec4646446601');
      if (formRec && formRec.parentNode) {
        formRec.parentNode.insertBefore(priceSec, formRec);
      }
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

  // 8. INJECT KLING AI ART BADGE SECTION
  function buildArtSection() {
    if (document.getElementById('afro-art-section')) return;

    const artSec = document.createElement('section');
    artSec.id = 'afro-art-section';
    artSec.style.maxWidth = '1240px';
    artSec.style.margin = '110px auto 90px';
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

  // 9. INJECT CUSTOM LUXURY FOOTER
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

  // 10. INJECT FLOATING SCROLL BUTTON
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

  // 11. INJECT COOKIE BANNER & POLICY MODAL
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

  // 12. INITIALIZATION ORCHESTRATOR
  function init() {
    buildHeroSlider();
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
