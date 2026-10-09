/**
 * AFROSTUDIO.RU - ELITE BEAUTY SALON WEB SYSTEM
 * Version: 10.0.0 - Strict Design Standards, Spacing & Native Killers
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
    /* ABSOLUTE KILL LIST FOR JUNK TILDA BLOCKS (INCLUDING NATIVE BLACK ARROW t190 & COOKIE t972) */
    #rec2325313701, #rec2325313981, #rec2325314041, #rec2222808741, 
    #rec2334967441, #rec2334967991, #rec2222715461, #t-footer, .t345, .t854, 
    .t190, .t190__button, .t972 {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    /* TILDA POPUP FORM #rec4646446601 - ULTRA-CLEAR HIGH-CONTRAST */
    #rec4646446601 .t-popup {
      background: rgba(0, 0, 0, 0.92) !important;
      backdrop-filter: blur(16px) !important;
    }
    #rec4646446601 .t-popup__container {
      background: #0f1118 !important;
      border: 1.5px solid rgba(245, 158, 11, 0.5) !important;
      border-radius: 28px !important;
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.95), 0 0 45px rgba(245, 158, 11, 0.25) !important;
      padding: 44px 36px !important;
    }
    #rec4646446601 .t-popup__close-icon {
      fill: #f59e0b !important;
      width: 22px !important;
      height: 22px !important;
    }
    #rec4646446601 .t702__title,
    #rec4646446601 .t-title,
    #rec4646446601 .t-title_xxs {
      color: #ffffff !important;
      font-family: 'Cinzel', serif !important;
      font-size: 26px !important;
      font-weight: 800 !important;
      letter-spacing: 0.03em !important;
      text-shadow: 0 2px 12px rgba(0,0,0,0.7) !important;
      margin-bottom: 12px !important;
      text-align: center !important;
    }
    #rec4646446601 .t702__descr,
    #rec4646446601 .t-descr,
    #rec4646446601 .t-text {
      color: #cbd5e1 !important;
      font-size: 14.5px !important;
      line-height: 1.6 !important;
      text-align: center !important;
    }

    /* HIGHLIGHT EVERY LABEL & QUESTION TITLE IN FORM */
    #rec4646446601 .t-input-title,
    #rec4646446601 .t-descr_md {
      color: #fbbf24 !important;
      -webkit-text-fill-color: #fbbf24 !important;
      font-weight: 800 !important;
      font-size: 14px !important;
      text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
      margin-top: 14px !important;
      margin-bottom: 8px !important;
      display: block !important;
    }

    /* SUBTITLE NOTICE (Telegram / MAX instruction) */
    #rec4646446601 .t-input-subtitle,
    #rec4646446601 .t-input-subtitle * {
      color: #e2e8f0 !important;
      -webkit-text-fill-color: #e2e8f0 !important;
      font-size: 13.5px !important;
      line-height: 1.65 !important;
      background: rgba(245, 158, 11, 0.12) !important;
      border-left: 3.5px solid #f59e0b !important;
      padding: 12px 16px !important;
      border-radius: 8px !important;
      margin-top: 10px !important;
      margin-bottom: 16px !important;
      display: block !important;
    }

    /* RADIO ITEMS & SURVEY QUESTIONS (Длина, Загущение, до плеч, etc.) */
    #rec4646446601 .t-radio__item {
      background: rgba(255, 255, 255, 0.06) !important;
      border: 1px solid rgba(255, 255, 255, 0.16) !important;
      border-radius: 12px !important;
      padding: 12px 18px !important;
      margin-bottom: 10px !important;
      display: flex !important;
      align-items: center !important;
      cursor: pointer !important;
      transition: all 0.2s !important;
    }
    #rec4646446601 .t-radio__item:hover {
      border-color: #f59e0b !important;
      background: rgba(245, 158, 11, 0.15) !important;
    }
    #rec4646446601 .t-radio__item-text,
    #rec4646446601 .t-radio__control,
    #rec4646446601 .t-radio__title,
    #rec4646446601 .t-radio label {
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
      font-size: 14.5px !important;
      font-weight: 600 !important;
      letter-spacing: 0.02em !important;
    }
    #rec4646446601 .t-radio__indicator {
      border: 2px solid #f59e0b !important;
      background: transparent !important;
      margin-right: 12px !important;
    }
    #rec4646446601 .t-radio__item input:checked + .t-radio__indicator {
      background: #f59e0b !important;
      box-shadow: 0 0 10px #f59e0b !important;
    }

    /* CHECKBOX (152-FZ CONSENT) */
    #rec4646446601 .t-checkbox__control,
    #rec4646446601 .t-checkbox__label,
    #rec4646446601 .t-checkbox__label span {
      color: #cbd5e1 !important;
      -webkit-text-fill-color: #cbd5e1 !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
    }
    #rec4646446601 .t-checkbox__label a {
      color: #fbbf24 !important;
      text-decoration: underline !important;
    }
    #rec4646446601 .t-checkbox__indicator {
      border: 2px solid #f59e0b !important;
      background: transparent !important;
      border-radius: 6px !important;
    }
    #rec4646446601 .t-checkbox input:checked + .t-checkbox__indicator {
      background: #f59e0b !important;
      box-shadow: 0 0 10px #f59e0b !important;
    }

    /* ALL INPUTS CLEAR & CONTRAST */
    #rec4646446601 .t-input,
    #rec4646446601 input[type="text"],
    #rec4646446601 input[type="tel"],
    #rec4646446601 textarea {
      background: #171926 !important;
      border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
      font-size: 15px !important;
      font-weight: 600 !important;
      border-radius: 14px !important;
      padding: 15px 18px !important;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.6) !important;
      transition: all 0.25s ease !important;
    }
    #rec4646446601 .t-input:focus,
    #rec4646446601 input[type="text"]:focus,
    #rec4646446601 input[type="tel"]:focus {
      border-color: #fbbf24 !important;
      background: #1d2030 !important;
      box-shadow: 0 0 18px rgba(245, 158, 11, 0.5), inset 0 2px 5px rgba(0,0,0,0.6) !important;
      outline: none !important;
    }
    #rec4646446601 .t-input::placeholder,
    #rec4646446601 input::placeholder {
      color: #94a3b8 !important;
      -webkit-text-fill-color: #94a3b8 !important;
      opacity: 1 !important;
    }

    /* MESSENGER SELECTOR RADIOS */
    #rec4646446601 .t-contact-method__type {
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 14px !important;
      padding: 12px 16px !important;
      background: rgba(255, 255, 255, 0.05) !important;
      transition: all 0.2s !important;
      cursor: pointer !important;
    }
    #rec4646446601 .t-contact-method__type:hover,
    #rec4646446601 .t-contact-method__type_active {
      border-color: #f59e0b !important;
      background: rgba(245, 158, 11, 0.2) !important;
      box-shadow: 0 0 16px rgba(245, 158, 11, 0.3) !important;
    }
    #rec4646446601 .t-contact-method__title {
      color: #ffffff !important;
      font-weight: 700 !important;
      font-size: 14px !important;
    }

    /* SUBMIT BUTTON - FISH-EYE 3D GOLD LUXURY PILL */
    #rec4646446601 .t-submit {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 100% !important;
      min-height: 56px !important;
      padding: 18px 36px !important;
      background: radial-gradient(120% 120% at 50% 10%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, #fde68a 0%, #f59e0b 45%, #d97706 100%) !important;
      color: #0b0c10 !important;
      font-weight: 800 !important;
      font-size: 15px !important;
      text-transform: uppercase !important;
      letter-spacing: 0.06em !important;
      border-radius: 9999px !important;
      border: 1px solid rgba(255,255,255,0.6) !important;
      box-shadow: inset 0 2px 3px rgba(255,255,255,0.85), inset 0 -3px 6px rgba(0,0,0,0.35), 0 12px 30px -4px rgba(245,158,11,0.6), 0 0 18px rgba(251,191,36,0.4) !important;
      cursor: pointer !important;
      transition: all 0.25s ease !important;
      white-space: nowrap !important;
    }
    #rec4646446601 .t-submit:hover {
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: inset 0 2px 3px rgba(255,255,255,0.95), inset 0 -3px 6px rgba(0,0,0,0.4), 0 16px 36px -2px rgba(245,158,11,0.75), 0 0 26px rgba(251,191,36,0.55) !important;
    }

    /* ONLY ONE ULTRA-BRIGHT RADIANT 3D GOLD SCROLL BUTTON */
    #afro-scroll-top {
      position: fixed !important;
      bottom: 30px !important;
      right: 30px !important;
      width: 54px !important;
      height: 54px !important;
      border-radius: 50% !important;
      background: radial-gradient(120% 120% at 35% 15%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 55%), linear-gradient(135deg, #fde68a 0%, #f59e0b 50%, #d97706 100%) !important;
      border: 2.5px solid rgba(255, 255, 255, 0.85) !important;
      color: #0b0c10 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      z-index: 999999 !important;
      box-shadow: inset 0 2px 4px rgba(255,255,255,0.95), inset 0 -3px 6px rgba(0,0,0,0.35), 0 12px 32px rgba(245, 158, 11, 0.75), 0 0 22px rgba(251, 191, 36, 0.6) !important;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      transform: translateY(15px) scale(0.9) !important;
    }
    #afro-scroll-top.afro-visible {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0) scale(1) !important;
    }
    #afro-scroll-top:hover {
      transform: translateY(-4px) scale(1.1) !important;
      box-shadow: inset 0 2px 4px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.4), 0 18px 40px rgba(245, 158, 11, 0.9), 0 0 30px rgba(251, 191, 36, 0.8) !important;
    }
    #afro-scroll-top svg {
      width: 26px !important;
      height: 26px !important;
      stroke: #0b0c10 !important;
      stroke-width: 3.5px !important;
    }

    /* MASTER DESIGN SYSTEM: BREATHING ROOM & SPACING (ПРАВИЛА ВЕБ-СТАНДАРТОВ) */
    #afrostudio-app {
      font-family: 'Montserrat', sans-serif;
      color: #ffffff;
      background-color: #07080c;
      overflow-x: hidden;
      width: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    #afrostudio-app * {
      box-sizing: border-box;
    }

    /* ELEGANT SECTION DIVIDER (ЗОЛОТОЙ СВЕТОВОЙ ЛУЧ МЕЖДУ БЛОКАМИ) */
    .afro-divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.35) 50%, transparent 100%);
      margin: 0;
      border: none;
    }

    /* SECTION SPACING: 120px VERTICAL PADDING ДЛЯ ПРЕМИАЛЬНОГО ВОЗДУХА */
    .afro-section-spacer {
      padding: 110px 0;
    }

    .afro-container {
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 28px;
      width: 100%;
    }

    .afro-section-header {
      text-align: center;
      margin-bottom: 56px;
    }
    .afro-section-pill {
      display: inline-block;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #fbbf24;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 8px 24px;
      border-radius: 9999px;
      margin-bottom: 18px;
      box-shadow: 0 0 18px rgba(245, 158, 11, 0.2);
    }
    .afro-section-title {
      font-family: 'Cinzel', serif;
      font-size: 40px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 16px;
      letter-spacing: 0.02em;
      line-height: 1.25;
    }
    .afro-section-title span {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .afro-section-sub {
      font-size: 16px;
      color: #94a3b8;
      max-width: 740px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* FISH-EYE 3D LIQUID GLASS GOLD BUTTON */
    .afro-btn-gold {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 54px;
      padding: 16px 40px;
      border-radius: 9999px;
      background: radial-gradient(120% 120% at 50% 10%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 60%), linear-gradient(180deg, #fde68a 0%, #f59e0b 45%, #d97706 100%);
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: #0b0c10 !important;
      font-weight: 800;
      font-size: 14.5px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      text-decoration: none;
      white-space: nowrap;
      box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.35), 0 10px 28px -4px rgba(245, 158, 11, 0.55), 0 0 16px rgba(251, 191, 36, 0.35);
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      overflow: hidden;
    }
    .afro-btn-gold::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 12%;
      right: 12%;
      height: 44%;
      border-radius: 9999px 9999px 60% 60%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.05) 100%);
      pointer-events: none;
    }
    .afro-btn-gold:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -3px 6px rgba(0, 0, 0, 0.4), 0 16px 36px -2px rgba(245, 158, 11, 0.75), 0 0 26px rgba(251, 191, 36, 0.55);
    }
    .afro-btn-gold:active {
      transform: translateY(0) scale(0.98);
    }

    /* FISH-EYE FROSTED LIQUID GLASS BUTTON */
    .afro-btn-trans {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 54px;
      padding: 16px 38px;
      border-radius: 9999px;
      background: radial-gradient(120% 120% at 50% 10%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.02) 65%), rgba(20, 22, 34, 0.75);
      border: 1.5px solid rgba(245, 158, 11, 0.45);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 14.5px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-decoration: none;
      white-space: nowrap;
      backdrop-filter: blur(12px);
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.35), 0 8px 24px rgba(0, 0, 0, 0.5);
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      overflow: hidden;
    }
    .afro-btn-trans::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 12%;
      right: 12%;
      height: 44%;
      border-radius: 9999px 9999px 60% 60%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
      pointer-events: none;
    }
    .afro-btn-trans:hover {
      transform: translateY(-3px) scale(1.03);
      border-color: #fbbf24;
      color: #fbbf24 !important;
      background: radial-gradient(120% 120% at 50% 10%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 65%), rgba(245, 158, 11, 0.18);
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 0 25px rgba(245, 158, 11, 0.4);
    }

    /* 1. HERO SLIDER */
    .afro-hero-section {
      position: relative;
      width: 100%;
      min-height: 620px;
      overflow: hidden;
      background: #000000;
      display: flex;
      align-items: center;
    }
    .afro-hero-track {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1);
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
      padding: 90px 24px 100px;
    }
    .afro-hero-slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(10, 10, 14, 0.6) 0%, rgba(6, 7, 10, 0.94) 100%);
      z-index: 1;
    }
    .afro-hero-content {
      position: relative;
      z-index: 2;
      max-width: 920px;
      text-align: center;
    }
    .afro-hero-pill {
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #fbbf24;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 8px 26px;
      border-radius: 9999px;
      margin-bottom: 24px;
      box-shadow: 0 0 16px rgba(245, 158, 11, 0.25);
    }
    .afro-hero-h1 {
      font-family: 'Cinzel', serif;
      font-size: 50px;
      font-weight: 800;
      line-height: 1.2;
      color: #ffffff;
      margin-bottom: 22px;
      text-shadow: 0 4px 24px rgba(0,0,0,0.9);
    }
    .afro-hero-h1 span {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .afro-hero-desc {
      font-size: 17px;
      color: #cbd5e1;
      max-width: 740px;
      margin: 0 auto 36px;
      line-height: 1.7;
    }
    .afro-hero-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    /* SLIDER NAV ARROWS & DOTS */
    .afro-hero-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: rgba(15, 17, 26, 0.85);
      border: 1.5px solid rgba(245, 158, 11, 0.4);
      color: #f59e0b;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      backdrop-filter: blur(8px);
      transition: all 0.2s;
    }
    .afro-hero-arrow:hover {
      background: #f59e0b;
      color: #0b0c10;
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
    }
    .afro-arrow-prev { left: 24px; }
    .afro-arrow-next { right: 24px; }
    .afro-hero-dots {
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 10;
    }
    .afro-hero-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: all 0.3s;
    }
    .afro-hero-dot.active {
      background: #f59e0b;
      border-color: #f59e0b;
      transform: scale(1.3);
      box-shadow: 0 0 12px #f59e0b;
    }

    /* 2. DIRECTIONS GRID (4 MAIN CARDS) */
    .afro-directions-section {
      background: #090a10;
    }
    .afro-dir-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 28px;
    }
    .afro-dir-card {
      position: relative;
      border-radius: 22px;
      overflow: hidden;
      height: 440px;
      background-size: cover;
      background-position: center center;
      border: 1.5px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 30px 24px;
      text-decoration: none;
      transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
    }
    .afro-dir-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(8, 9, 14, 0.1) 0%, rgba(8, 9, 14, 0.92) 85%);
      transition: opacity 0.3s;
    }
    .afro-dir-card:hover {
      transform: translateY(-8px);
      border-color: #f59e0b;
      box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85), 0 0 25px rgba(245, 158, 11, 0.3);
    }
    .afro-dir-content {
      position: relative;
      z-index: 2;
    }
    .afro-dir-tag {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #fbbf24;
      background: rgba(245, 158, 11, 0.18);
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 4px 12px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }
    .afro-dir-name {
      font-family: 'Cinzel', serif;
      font-size: 22px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .afro-dir-desc {
      font-size: 14px;
      color: #cbd5e1;
      line-height: 1.55;
    }

    /* 3. ALL KINDS OF HAIR EXTENSIONS SWITCHER WITH PRICES */
    .afro-all-types-section {
      background: #0d0f17;
    }
    .afro-types-layout {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 40px;
      align-items: start;
    }
    .afro-types-menu {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #121420;
      border: 1.5px solid rgba(255, 255, 255, 0.08);
      border-radius: 22px;
      padding: 18px;
    }
    .afro-type-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 14px;
      padding: 14px 20px;
      color: #cbd5e1;
      font-size: 14.5px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .afro-type-btn:hover {
      background: rgba(255, 255, 255, 0.06);
      color: #ffffff;
    }
    .afro-type-btn.active {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.22) 100%);
      border-color: rgba(245, 158, 11, 0.5);
      color: #fbbf24;
      font-weight: 700;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15);
    }
    .afro-type-display {
      background: #121420;
      border: 1.5px solid rgba(245, 158, 11, 0.35);
      border-radius: 26px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75);
      min-height: 520px;
    }
    .afro-type-photo {
      position: relative;
      background-size: cover;
      background-position: center center;
      min-height: 420px;
    }
    .afro-type-photo::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(18, 20, 32, 0) 55%, rgba(18, 20, 32, 1) 100%);
    }
    .afro-type-info {
      padding: 44px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .afro-type-price-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 19px;
      font-weight: 800;
      color: #fbbf24;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.45);
      padding: 7px 18px;
      border-radius: 12px;
      margin-bottom: 18px;
      width: fit-content;
    }
    .afro-type-title {
      font-family: 'Cinzel', serif;
      font-size: 27px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 14px;
      line-height: 1.25;
    }
    .afro-type-text {
      font-size: 15px;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 22px;
    }
    .afro-type-features {
      list-style: none;
      padding: 0;
      margin: 0 0 32px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .afro-type-features li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      color: #e2e8f0;
    }
    .afro-type-features li span {
      color: #fbbf24;
      font-weight: 700;
    }

    /* 4. NATIVE INTERACTIVE PRICING TABLE MATRIX */
    .afro-pricing-section {
      background: #090a11;
    }
    .afro-price-tabs {
      display: flex;
      justify-content: center;
      gap: 18px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }
    .afro-price-tab-btn {
      padding: 15px 36px;
      border-radius: 9999px;
      border: 1.5px solid rgba(245, 158, 11, 0.35);
      background: rgba(255, 255, 255, 0.05);
      color: #cbd5e1;
      font-size: 14.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .afro-price-tab-btn.active {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: #0b0c10;
      border-color: #f59e0b;
      box-shadow: 0 8px 24px rgba(245, 158, 11, 0.45);
    }
    .afro-price-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
    .afro-price-card {
      background: #111320;
      border: 1.5px solid rgba(255, 255, 255, 0.08);
      border-radius: 22px;
      padding: 36px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s ease;
      position: relative;
    }
    .afro-price-card:hover {
      transform: translateY(-8px);
      border-color: #f59e0b;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(245, 158, 11, 0.25);
    }
    .afro-price-card.featured {
      border-color: rgba(245, 158, 11, 0.65);
      background: linear-gradient(180deg, #171a2c 0%, #111320 100%);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.75), 0 0 25px rgba(245, 158, 11, 0.2);
    }
    .afro-price-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #0b0c10;
      background: #fbbf24;
      padding: 5px 14px;
      border-radius: 9999px;
    }
    .afro-price-card-title {
      font-family: 'Cinzel', serif;
      font-size: 21px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .afro-price-card-desc {
      font-size: 14px;
      color: #94a3b8;
      line-height: 1.6;
      margin-bottom: 24px;
      min-height: 44px;
    }
    .afro-price-val {
      font-family: 'Cinzel', serif;
      font-size: 30px;
      font-weight: 800;
      color: #fbbf24;
      margin-bottom: 24px;
    }
    .afro-price-includes {
      list-style: none;
      padding: 0;
      margin: 0 0 32px;
      display: flex;
      flex-direction: column;
      gap: 11px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 22px;
    }
    .afro-price-includes li {
      font-size: 13.5px;
      color: #cbd5e1;
      display: flex;
      align-items: center;
      gap: 9px;
    }
    .afro-price-includes li span {
      color: #f59e0b;
      font-weight: 700;
    }

    /* 5. KLING AI ART BANNER */
    .afro-art-section {
      background: #08090e;
    }
    .afro-art-banner {
      position: relative;
      border-radius: 26px;
      overflow: hidden;
      background: linear-gradient(135deg, #151826 0%, #0d0f17 100%);
      border: 1.5px solid rgba(245, 158, 11, 0.4);
      padding: 64px 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 35px rgba(245, 158, 11, 0.18);
    }
    .afro-art-text {
      max-width: 680px;
    }
    .afro-art-title {
      font-family: 'Cinzel', serif;
      font-size: 34px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 16px;
      line-height: 1.3;
    }
    .afro-art-title span {
      color: #fbbf24;
    }
    .afro-art-desc {
      font-size: 16px;
      color: #cbd5e1;
      line-height: 1.75;
      margin-bottom: 30px;
    }

    /* 6. TELEGRAM LIVE FEED */
    .afro-tg-section {
      background: #0c0d16;
    }
    .afro-tg-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-bottom: 56px;
    }
    .afro-tg-card {
      background: #121422;
      border: 1.5px solid rgba(255, 255, 255, 0.08);
      border-radius: 22px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.35s ease;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.65);
    }
    .afro-tg-card:hover {
      transform: translateY(-8px);
      border-color: #f59e0b;
      box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85), 0 0 25px rgba(245, 158, 11, 0.25);
    }
    .afro-tg-media {
      position: relative;
      width: 100%;
      height: 300px;
      background-size: cover;
      background-position: center center;
      background-color: #0b0c12;
      overflow: hidden;
    }
    .afro-tg-play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(11, 13, 20, 0.85);
      border: 2px solid #f59e0b;
      color: #f59e0b;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 22px rgba(245, 158, 11, 0.45);
      transition: all 0.25s ease;
    }
    .afro-tg-card:hover .afro-tg-play-btn {
      transform: translate(-50%, -50%) scale(1.12);
      background: #f59e0b;
      color: #0b0c10;
      box-shadow: 0 0 32px rgba(245, 158, 11, 0.75);
    }
    .afro-tg-play-btn svg {
      width: 24px;
      height: 24px;
      margin-left: 3px;
    }
    .afro-tg-body {
      padding: 26px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .afro-tg-title {
      font-family: 'Cinzel', serif;
      font-size: 19px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 12px;
      line-height: 1.4;
    }
    .afro-tg-text {
      font-size: 14px;
      color: #94a3b8;
      line-height: 1.65;
      flex-grow: 1;
      margin-bottom: 20px;
    }
    .afro-tg-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 16px;
      font-size: 13px;
      color: #64748b;
    }
    .afro-tg-link {
      color: #fbbf24;
      text-decoration: none;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }
    .afro-tg-link:hover {
      color: #f59e0b;
    }
    .afro-tg-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    /* 7. CUSTOM FOOTER (ALWAYS VISIBLE) */
    .afro-custom-footer {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      position: relative !important;
      z-index: 99 !important;
      background: #06070a !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      padding: 50px 20px 54px !important;
      text-align: center !important;
      font-size: 13px !important;
      color: #94a3b8 !important;
      line-height: 1.75 !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }
    .afro-footer-line1 {
      color: #cbd5e1;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .afro-footer-line2 {
      color: #64748b;
      font-size: 12px;
      margin-bottom: 16px;
    }
    .afro-footer-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
    }
    .afro-footer-link {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 13px;
      text-decoration: underline;
      cursor: pointer;
      padding: 0;
      transition: color 0.2s;
    }
    .afro-footer-link:hover {
      color: #fbbf24;
    }

    /* 8. COOKIE BANNER & MODAL */
    .afro-cookie-banner {
      position: fixed;
      bottom: 28px;
      left: 28px;
      max-width: 440px;
      width: calc(100% - 56px);
      background: #121422;
      border: 1.5px solid #f59e0b;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(245, 158, 11, 0.25);
      border-radius: 22px;
      padding: 26px;
      z-index: 999998;
      display: none;
      box-sizing: border-box;
      backdrop-filter: blur(14px);
    }
    .afro-cookie-banner.open {
      display: block !important;
      animation: afroFadeInUp 0.35s ease forwards;
    }
    @keyframes afroFadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .afro-cookie-close-corner {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      line-height: 1;
      padding: 0;
      transition: all 0.2s;
    }
    .afro-cookie-close-corner:hover {
      background: #f59e0b;
      color: #0b0c10;
      border-color: #f59e0b;
    }
    .afro-cookie-title {
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 10px;
      padding-right: 30px;
    }
    .afro-cookie-text {
      font-size: 13px;
      line-height: 1.6;
      color: #94a3b8;
      margin-bottom: 18px;
    }
    .afro-cookie-text a {
      color: #fbbf24;
      text-decoration: underline;
      cursor: pointer;
    }
    .afro-cookie-btn-col {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .afro-cookie-btn-primary {
      width: 100%;
      min-height: 46px;
      background: radial-gradient(120% 120% at 50% 10%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 60%), linear-gradient(180deg, #fde68a 0%, #f59e0b 50%, #d97706 100%);
      color: #0b0f17 !important;
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 9999px;
      padding: 13px 24px;
      font-size: 13.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      cursor: pointer;
      box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), 0 6px 20px rgba(245, 158, 11, 0.4);
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .afro-cookie-btn-secondary {
      width: 100%;
      min-height: 44px;
      background: rgba(245, 158, 11, 0.16);
      border: 1.5px solid rgba(245, 158, 11, 0.45);
      color: #fbbf24 !important;
      border-radius: 9999px;
      padding: 12px 24px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .afro-cookie-btn-dark {
      width: 100%;
      min-height: 42px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.18);
      color: #cbd5e1 !important;
      border-radius: 9999px;
      padding: 11px 24px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .afro-cookie-toggles-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0 16px;
    }
    .afro-cookie-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 10px 14px;
    }
    .afro-cookie-item-label {
      font-size: 13px;
      color: #e2e8f0;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .afro-cookie-item-label span {
      color: #fbbf24;
      font-weight: 700;
    }
    .afro-switch {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
    }
    .afro-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .afro-slider {
      position: absolute;
      cursor: pointer;
      inset: 0;
      background-color: rgba(255, 255, 255, 0.2);
      transition: 0.3s;
      border-radius: 24px;
    }
    .afro-slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
    }
    .afro-switch input:checked + .afro-slider {
      background-color: #f59e0b;
    }
    .afro-switch input:checked + .afro-slider:before {
      transform: translateX(20px);
    }

    /* 9. POLICY MODAL 152-FZ */
    .afro-policy-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(12px);
      z-index: 1000000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
    }
    .afro-policy-backdrop.open {
      display: flex !important;
    }
    .afro-policy-box {
      background: #0f1118;
      border: 1.5px solid rgba(245, 158, 11, 0.45);
      border-radius: 26px;
      max-width: 760px;
      width: 100%;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(245,158,11,0.2);
      overflow: hidden;
    }
    .afro-policy-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 28px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .afro-policy-title {
      font-family: 'Cinzel', serif;
      font-size: 22px;
      font-weight: 800;
      color: #ffffff;
    }
    .afro-policy-close {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s;
    }
    .afro-policy-close:hover {
      background: #f59e0b;
      color: #0b0c10;
      border-color: #f59e0b;
    }
    .afro-policy-body {
      padding: 28px;
      overflow-y: auto;
      font-size: 14px;
      line-height: 1.75;
      color: #cbd5e1;
    }
    .afro-policy-body h4 {
      color: #fbbf24;
      margin: 22px 0 8px;
      font-size: 16px;
    }
    .afro-policy-body h4:first-child {
      margin-top: 0;
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 1100px) {
      .afro-dir-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .afro-types-layout {
        grid-template-columns: 1fr;
      }
      .afro-price-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .afro-tg-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 768px) {
      .afro-section-spacer {
        padding: 70px 0;
      }
      .afro-hero-h1 {
        font-size: 32px;
      }
      .afro-dir-grid {
        grid-template-columns: 1fr;
      }
      .afro-type-display {
        grid-template-columns: 1fr;
      }
      .afro-price-grid {
        grid-template-columns: 1fr;
      }
      .afro-tg-grid {
        grid-template-columns: 1fr;
      }
      .afro-art-banner {
        flex-direction: column;
        text-align: center;
        padding: 40px 24px;
      }
      #afro-scroll-top {
        bottom: 20px !important;
        right: 20px !important;
        width: 48px !important;
        height: 48px !important;
      }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.id = 'afro-luxury-styles';
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);

  // 4. METRIKA GOAL TRACKING
  window.afroTrack = function(goal) {
    if (window.ym) {
      try {
        window.ym(296485879, 'reachGoal', goal);
        console.log('[Metrika Goal Sent]:', goal);
      } catch (e) {
        console.warn('[Metrika Error]:', e);
      }
    }
  };

  // 5. DATA FOR HAIR EXTENSION SWITCHER (WITH REAL PRICES)
  const HAIR_TYPES_DATA = [
    {
      id: "capsule",
      title: "Капсульное (Итальянское)",
      price: "от 6 900 ₽",
      text: "Самая популярная и надежная мировая технология. Донорские пряди крепятся с помощью микроскопических кератиновых капсул под цвет ваших волос. Капсулы не ощущаются при прикосновении и позволяют собирать любые прически, включая высокий хвост.",
      features: [
        "Срок носки: 2.5 - 3.5 месяца до коррекции",
        "Кератин премиум-класса, безопасный для структуры волос",
        "Возможность делать проборы в любых направлениях",
        "Подходит для тонких и редких волос"
      ],
      photo: "https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png"
    },
    {
      id: "microcapsule",
      title: "Микрокапсульное наращивание",
      price: "от 8 500 ₽",
      text: "Ювелирная техника с уменьшенными капсулами размером менее 2 мм. Идеальна для височной и теменной зоны, маскировки челки и наращивания на ультратонкие волосы. Полная незаметность даже при сильном ветре.",
      features: [
        "Невесомые капсулы весом всего 0.05 г",
        "Максимально естественное распределение прядей",
        "Отсутствие нагрузки на волосяные луковицы",
        "Комфортный сон с первого дня"
      ],
      photo: "https://static.tildacdn.com/tild3164-3232-4735-b935-643564343162/microcapsule.jpg"
    },
    {
      id: "nanocapsule",
      title: "Нано-наращивание волос",
      price: "от 9 900 ₽",
      text: "Ультрасовременная технология с нано-капсулами, которые в 3 раза меньше стандартных микрокапсул. Мастер работает с тонкими прядками, добиваясь эффекта натуральной густоты собственных волос.",
      features: [
        "Невидимость даже при макросъемке и ярком солнце",
        "Идеально для зоны пробора и краевой линии роста",
        "Безопасно для поврежденных и ослабленных волос",
        "100% славянские донорские волосы категории Люкс"
      ],
      photo: "https://static.tildacdn.com/tild3833-3164-4261-b664-373539343361/nanocapsule.jpg"
    },
    {
      id: "tape",
      title: "Ленточное наращивание",
      price: "от 5 500 ₽",
      text: "Быстрая холодная технология без термического воздействия. Волосы распределяются широкими мягкими лентами, создавая мгновенный плотный объем и длину за 40-50 минут.",
      features: [
        "Быстрая процедура наращивания",
        "Полное отсутствие термощипцов и нагрева",
        "Ровный густой срез по всей длине",
        "Легкое снятие специальным безопасным спреем"
      ],
      photo: "https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png"
    },
    {
      id: "hollywood",
      title: "Голливудское (Пришивание трессов)",
      price: "от 7 000 ₽",
      text: "Экологичный и безопасный метод, используемый звездами мирового кино. На голове плетется тончайшая микрокосичка (брейд), к которой вручную пришивается мягкий тресс из натуральных волос.",
      features: [
        "Ноль клея, кератина и химических составов",
        "Мгновенный королевский объем от корней",
        "Возможность многократного использования тресса",
        "Комфортное расчесывание без зацепок"
      ],
      photo: "https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg"
    },
    {
      id: "bioprotein",
      title: "Биопротеиновое наращивание",
      price: "от 8 900 ₽ под ключ",
      text: "Инновационная доступная альтернатива натуральным волосам. Японское биопротеиновое волокно визуально и тактильно неотличимо от шелковистых славянских волос, не сечется и сохраняет гладкость.",
      features: [
        "В 3 раза выгоднее натуральных волос",
        "Идеальный блеск и послушность при укладке",
        "Легко выпрямляется утюжком до 160 градусов",
        "Богатая палитра трендовых оттенков и омбре"
      ],
      photo: "https://static.tildacdn.com/tild3164-3232-4735-b935-643564343162/microcapsule.jpg"
    },
    {
      id: "ultrasonic",
      title: "Ультразвуковое наращивание",
      price: "от 8 000 ₽",
      text: "Аппаратная холодная технология, при которой кератин размягчается ультразвуковыми волнами без нагрева. Подходит для клиентов с чувствительной кожей головы.",
      features: [
        "Бережное воздействие ультразвуком",
        "Высокая прочность сцепки прядей",
        "Отсутствие риска перегрева волоса",
        "Длительный период носки"
      ],
      photo: "https://static.tildacdn.com/tild3833-3164-4261-b664-373539343361/nanocapsule.jpg"
    },
    {
      id: "cold_spanish",
      title: "Холодное испанское (Rueber)",
      price: "от 7 500 ₽",
      text: "Фиксация прядей специальным хирургическим клеем Rueber, образующим микроскопические плоские капсулы. Устойчиво к воздействию масел, масок и саун.",
      features: [
        "Устойчивость к уходовым косметическим маслам",
        "Абсолютно холодный метод крепления",
        "Подходит для блондинок и светлых оттенков",
        "Маленькие плоские незаметные соединения"
      ],
      photo: "https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png"
    },
    {
      id: "japanese",
      title: "Японское (Ring Star / Кольца)",
      price: "от 6 500 ₽",
      text: "Метод фиксации прядей на миниатюрных металлокерамических клипсах-бусинах с силиконовой прослойкой внутри. Полностью исключает контакт с клеем и температурой.",
      features: [
        "Механическая фиксация без термического нагрева",
        "Внутренний силиконовый слой защищает волос от залома",
        "Быстрое снятие и моментальная коррекция",
        "Безопасно для густых и плотных волос"
      ],
      photo: "https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg"
    },
    {
      id: "brazilian",
      title: "Бразильское наращивание",
      price: "от 7 000 ₽",
      text: "Холодное наращивание путем вплетения донорской пряди в собственную тонкую косичку с закреплением эластичной шелковой нитью. Проверенная временем бережная классика.",
      features: [
        "Натуральные материалы фиксации",
        "Надежное удержание прядей при активном спорте",
        "Без использования аппаратов и химических клеев",
        "Подходит для кудрявых и пористых текстур"
      ],
      photo: "https://static.tildacdn.com/tild3164-3232-4735-b935-643564343162/microcapsule.jpg"
    }
  ];

  // 6. PRICING DATA (HAIR & AFRO EXTRACTED DIRECTLY FROM AFROSTUDIO.RU)
  const PRICING_DATA = {
    hair: [
      {
        title: "Капсульное наращивание Lux",
        desc: "Итальянская техника, невидимые микрокапсулы, 100% славянские волосы",
        price: "от 6 900 ₽",
        badge: "Хит сезона",
        featured: true,
        includes: ["Консультация и подбор оттенка", "Ювелирная расстановка прядей", "Адаптационная стрижка", "Укладка в подарок"]
      },
      {
        title: "Биопротеиновое наращивание",
        desc: "Полное преображение под ключ: японский биопротеин + работа мастера",
        price: "от 8 900 ₽",
        badge: "Выгодно",
        featured: false,
        includes: ["Волосы включены в стоимость", "Длина до 70-80 см", "Шелковистая гладкость", "Не путаются и не секутся"]
      },
      {
        title: "Микро / Нано-наращивание",
        desc: "Невесомые микрокапсулы для челки, височной зоны и ультратонких волос",
        price: "от 8 500 ₽",
        badge: "Премиум",
        featured: false,
        includes: ["Капсулы менее 2 мм", "Без нагрузки на корни", "Комфортный сон", "Полная невидимость"]
      },
      {
        title: "Голливудское (Трессы)",
        desc: "Пришивание тресса на микрокосичку без клея, кератина и нагрева",
        price: "от 7 000 ₽",
        badge: "Безопасно",
        featured: false,
        includes: ["100% эко-технология", "Королевский прикорневой объем", "Многократное использование", "Быстрая процедура"]
      },
      {
        title: "Ленточное наращивание",
        desc: "Широкие ультратонкие ленты, идеальный ровный срез за 45 минут",
        price: "от 5 500 ₽",
        badge: "Экспресс",
        featured: false,
        includes: ["Без термощипцов", "Плотный объем по всей длине", "Быстрое наращивание", "Бережное холодное снятие"]
      },
      {
        title: "Коррекция наращивания",
        desc: "Комплекс: бережное снятие, перекапсуляция и повторное наращивание",
        price: "от 8 000 ₽",
        badge: "Уход",
        featured: false,
        includes: ["Бережный состав для снятия", "Новый итальянский кератин", "Мытье и спа-уход", "Повторная фиксация"]
      }
    ],
    afro: [
      {
        title: "Афроклассика",
        desc: "Классические афрокосы с канекалоном, точечное вплетение по всей голове",
        price: "10 000 – 20 000 ₽",
        badge: "Классика",
        featured: true,
        includes: ["Материал высшего качества", "Носка 2-3 месяца", "Любые цветовые переходы", "Легкий уход без фена"]
      },
      {
        title: "Афропрически (Зи-зи, локоны)",
        desc: "Афролоконы, зи-зи, сенегальские косы и гофре через брейды",
        price: "15 000 ₽",
        badge: "Тренд",
        featured: false,
        includes: ["Быстрое вплетение за 3-4 часа", "Пышный воздушный объем", "Безопасно для своих волос", "Повторное использование кос"]
      },
      {
        title: "Боксерские косы",
        desc: "Две объемные тугие косы с канекалоном на любую длину волос",
        price: "3 000 ₽",
        badge: "Топ выбор",
        featured: false,
        includes: ["Плетение за 1-1.5 часа", "Носка до 5-7 дней", "Яркие акцентные цвета", "Идеально для спорта и отдыха"]
      },
      {
        title: "Афрохвост",
        desc: "Стильный объемный хвост из брейдов с добавлением цветного материала",
        price: "5 000 ₽",
        badge: "Стиль",
        featured: false,
        includes: ["Эффектная вечерняя прическа", "Плотная фиксация", "Не требует расчесывания", "Носка до 1.5-2 недель"]
      },
      {
        title: "Брейды по голове",
        desc: "Французские косы по голове с узорами или классическими линиями",
        price: "1 000 ₽ / шт.",
        badge: "Индивидуально",
        featured: false,
        includes: ["Четкие ровные проборы", "С материалом или без", "Узоры любой сложности", "Удобство на каждый день"]
      }
    ]
  };

  // 7. CLEAN TELEGRAM POSTS DATABASE
  const AFRO_CLEAN_POSTS = {
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

  // 8. BUILD APP HTML STRUCTURE
  let appContainer = document.getElementById('afrostudio-app');
  if (!appContainer) {
    appContainer = document.createElement('div');
    appContainer.id = 'afrostudio-app';
    const firstRec = document.querySelector('.r') || document.body.firstChild;
    document.body.insertBefore(appContainer, firstRec);
  }

  appContainer.innerHTML = `
    <!-- 1. HERO SLIDER -->
    <section class="afro-hero-section">
      <div class="afro-hero-track" id="afro-hero-track">
        <!-- SLIDE 1 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">ПРЕМИУМ САЛОН В МОСКВЕ &middot; 14 ЛЕТ МАСТЕРСТВА</span>
            <h1 class="afro-hero-h1">Afrostudio &mdash; Студия <span>Наращивания Волос</span> и Афроплетения</h1>
            <p class="afro-hero-desc">Безупречный результат, 100% натуральные донорские волосы славянского типа, микрокапсулы и авторские схемы плетения в центре Москвы (ул. Таганская, 26, стр. 1, м. Таганская).</p>
            <div class="afro-hero-actions">
              <a href="#popup:contact" class="afro-btn-gold" onclick="afroTrack('cta_hero_book')">Записаться онлайн</a>
              <a href="#afro-pricing" class="afro-btn-trans">Смотреть прайс-лист</a>
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
              <a href="#popup:contact" class="afro-btn-gold" onclick="afroTrack('cta_hero_fitting')">Записаться на примерку</a>
              <a href="#afro-telegram-feed" class="afro-btn-trans">Смотреть работы</a>
            </div>
          </div>
        </div>
        <!-- SLIDE 3 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3164-3232-4735-b935-643564343162/microcapsule.jpg');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">ТРЕНД СЕЗОНА &middot; АВТОРСКИЙ СТИЛЬ</span>
            <h1 class="afro-hero-h1">Афрокосички, Зизи, Брейды и <span>Дредокудри</span></h1>
            <p class="afro-hero-desc">Яркие и естественные комплекты, безопасность для собственных волос, комфортная носка до 2-3 месяцев.</p>
            <div class="afro-hero-actions">
              <a href="#popup:contact" class="afro-btn-gold" onclick="afroTrack('cta_hero_style')">Выбрать стиль</a>
              <a href="#afro-tech-section" class="afro-btn-trans">Каталог техник</a>
            </div>
          </div>
        </div>
      </div>
      <button class="afro-hero-arrow afro-arrow-prev" id="afro-slider-prev" aria-label="Назад">&#10094;</button>
      <button class="afro-hero-arrow afro-arrow-next" id="afro-slider-next" aria-label="Вперед">&#10095;</button>
      <div class="afro-hero-dots" id="afro-slider-dots">
        <span class="afro-hero-dot active" data-index="0"></span>
        <span class="afro-hero-dot" data-index="1"></span>
        <span class="afro-hero-dot" data-index="2"></span>
      </div>
    </section>

    <div class="afro-divider"></div>

    <!-- 2. DIRECTIONS GRID -->
    <section class="afro-directions-section afro-section-spacer" id="afro-directions">
      <div class="afro-container">
        <div class="afro-section-header">
          <span class="afro-section-pill">НАПРАВЛЕНИЯ РАБОТЫ</span>
          <h2 class="afro-section-title">Услуги студии <span>Afrostudio</span></h2>
          <p class="afro-section-sub">Премиальный уровень сервиса, сертифицированные мастера и материалы высшей пробы</p>
        </div>
        <div class="afro-dir-grid">
          <a href="#afro-tech-section" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png');" onclick="afroTrack('dir_hair')">
            <div class="afro-dir-content">
              <span class="afro-dir-tag">ТОП УСЛУГА</span>
              <h3 class="afro-dir-name">Наращивание волос</h3>
              <p class="afro-dir-desc">Капсульное, ленточное, голливудское, биопротеин</p>
            </div>
          </a>
          <a href="#afro-telegram-feed" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg');" onclick="afroTrack('dir_afro')">
            <div class="afro-dir-content">
              <span class="afro-dir-tag">АВТОРСКИЙ СТИЛЬ</span>
              <h3 class="afro-dir-name">Афроплетение и дреды</h3>
              <p class="afro-dir-desc">Зизи, брейды, сенегальские косы, дредокудри</p>
            </div>
          </a>
          <a href="#popup:contact" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3164-3232-4735-b935-643564343162/microcapsule.jpg');" onclick="afroTrack('dir_color')">
            <div class="afro-dir-content">
              <span class="afro-dir-tag">КОЛОРИСТИКА</span>
              <h3 class="afro-dir-name">Окрашивание и уход</h3>
              <p class="afro-dir-desc">Сложные техники, тонирование, спа-восстановление</p>
            </div>
          </a>
          <a href="#popup:contact" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3833-3164-4261-b664-373539343361/nanocapsule.jpg');" onclick="afroTrack('dir_edu')">
            <div class="afro-dir-content">
              <span class="afro-dir-tag">АКАДЕМИЯ</span>
              <h3 class="afro-dir-name">Обучение мастеров</h3>
              <p class="afro-dir-desc">Курсы с нуля, постановка руки, выдача сертификата</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <div class="afro-divider"></div>

    <!-- 3. ALL KINDS OF HAIR EXTENSIONS -->
    <section class="afro-all-types-section afro-section-spacer" id="afro-tech-section">
      <div class="afro-container">
        <div class="afro-section-header">
          <span class="afro-section-pill">ВСЕ ВИДЫ НАРАЩИВАНИЯ</span>
          <h2 class="afro-section-title">10 современных <span>технологий</span> наращивания</h2>
          <p class="afro-section-sub">В студии Afrostudio представлены все мировые техники. Выберите подходящий метод под структуру ваших волос:</p>
        </div>
        <div class="afro-types-layout">
          <div class="afro-types-menu" id="afro-types-menu"></div>
          <div class="afro-type-display" id="afro-type-display"></div>
        </div>
      </div>
    </section>

    <div class="afro-divider"></div>

    <!-- 4. NATIVE INTERACTIVE PRICING TABLE MATRIX -->
    <section class="afro-pricing-section afro-section-spacer" id="afro-pricing">
      <div class="afro-container">
        <div class="afro-section-header">
          <span class="afro-section-pill">ПРОЗРАЧНЫЙ ПРАЙС-ЛИСТ</span>
          <h2 class="afro-section-title">Стоимость услуг <span>Afrostudio</span></h2>
          <p class="afro-section-sub">Фиксированные цены без скрытых доплат. В стоимость входит консультация мастера, подбор тона и бережная адаптация.</p>
        </div>
        <div class="afro-price-tabs">
          <button type="button" class="afro-price-tab-btn active" id="afro-tab-hair-btn" onclick="switchPriceCategory('hair')">Наращивание волос</button>
          <button type="button" class="afro-price-tab-btn" id="afro-tab-afro-btn" onclick="switchPriceCategory('afro')">Афроплетение и брейды</button>
        </div>
        <div class="afro-price-grid" id="afro-price-grid"></div>
      </div>
    </section>

    <div class="afro-divider"></div>

    <!-- 5. KLING AI ART BANNER -->
    <section class="afro-art-section afro-section-spacer">
      <div class="afro-container">
        <div class="afro-art-banner">
          <div class="afro-art-text">
            <span class="afro-section-pill">ИНТЕЛЛЕКТУАЛЬНЫЙ ПОДБОР</span>
            <h2 class="afro-art-title">Искусство преображения <span>в деталях</span></h2>
            <p class="afro-art-desc">Каждый образ создается индивидуально с учетом пропорций лица, густоты и здоровья ваших волос. Приходите на очную консультацию и примерку прядей в наш салон на Таганской (ул. Таганская, 26, стр. 1).</p>
            <a href="#popup:contact" class="afro-btn-gold" onclick="afroTrack('cta_art_consult')">Записаться на примерку</a>
          </div>
          <div class="afro-art-badge">
            <div style="font-family: 'Cinzel', serif; font-size: 56px; font-weight: 800; color: #fbbf24; line-height: 1; text-align: center;">14</div>
            <div style="font-size: 13px; font-weight: 700; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.12em; text-align: center; margin-top: 8px;">Лет мастерства</div>
          </div>
        </div>
      </div>
    </section>

    <div class="afro-divider"></div>

    <!-- 6. TELEGRAM LIVE FEED (STREAMLINED & DIVERSE) -->
    <section class="afro-tg-section afro-section-spacer" id="afro-telegram-feed">
      <div class="afro-container">
        <div class="afro-section-header">
          <span class="afro-section-pill">ЖИВАЯ ЛЕНТА TELEGRAM</span>
          <h2 class="afro-section-title">Свежие работы <span>@Salon_afrostudio</span></h2>
          <p class="afro-section-sub">Реальные видео и фото из нашей студии в Москве. Обновляется в прямом эфире!</p>
        </div>
        <div class="afro-tg-grid" id="afro-tg-posts-grid"></div>
        <div class="afro-tg-actions">
          <button type="button" class="afro-btn-gold" id="afro-tg-load-more" onclick="afroLoadMoreTg()">Показать еще работы</button>
          <a href="https://t.me/Salon_afrostudio" target="_blank" rel="noopener noreferrer" class="afro-btn-trans" onclick="afroTrack('tg_channel_click')">Перейти в канал Telegram</a>
        </div>
      </div>
    </section>

    <!-- 7. ALWAYS VISIBLE CUSTOM FOOTER -->
    <div class="afro-custom-footer" id="afro-custom-footer">
      <div class="afro-footer-line1">&copy; 2012&ndash;2026 AFROSTUDIO &middot; Студия наращивания волос и афроплетения &middot; afrostudio.ru &middot; г. Москва, ул. Таганская, 26, стр. 1 (м. Таганская / Марксистская)</div>
      <div class="afro-footer-line2">*Meta признана экстремистской организацией и запрещена на территории РФ</div>
      <div class="afro-footer-links">
        <button type="button" class="afro-footer-link" onclick="openPolicyModal()">Политика конфиденциальности</button>
        <button type="button" class="afro-footer-link" onclick="openCookieSettings()">Настройки Cookie</button>
      </div>
    </div>

    <!-- 8. COOKIE CONSENT & SETTINGS HUD -->
    <div id="afro-cookie-banner" class="afro-cookie-banner">
      <button type="button" class="afro-cookie-close-corner" onclick="closeCookieBanner()" title="Закрыть" aria-label="Закрыть">&times;</button>
      
      <!-- ШАГ 1: БАННЕР СОГЛАСИЯ -->
      <div id="afro-cookie-view-main" class="afro-cookie-view">
        <div class="afro-cookie-title">AFROSTUDIO использует файлы COOKIE</div>
        <div class="afro-cookie-text">
          Они необходимы для правильной и надежной работы сайта и сервисов. Подробнее прочитайте в <a onclick="openPolicyModal()">Политике использования файлов cookie</a>
        </div>
        <div class="afro-cookie-btn-col">
          <button type="button" class="afro-cookie-btn-primary" onclick="acceptAllCookies()">Разрешить все</button>
          <button type="button" class="afro-cookie-btn-secondary" onclick="acceptEssentialCookies()">Разрешить обязательные</button>
          <button type="button" class="afro-cookie-btn-dark" onclick="showCookieSettings()">Настроить</button>
        </div>
      </div>

      <!-- ШАГ 2: НАСТРОЙКИ С ТУМБЛЕРАМИ -->
      <div id="afro-cookie-view-settings" class="afro-cookie-view" style="display: none;">
        <div class="afro-cookie-title">Настройки файлов COOKIE</div>
        <div class="afro-cookie-text">
          Сервис использует файлы cookie для корректной работы и сбора статистики. Подробнее в <a onclick="openPolicyModal()">Политике использования файлов cookie</a>
        </div>
        <div class="afro-cookie-toggles-list">
          <div class="afro-cookie-item">
            <div class="afro-cookie-item-label"><span>+</span> Технические, всегда активны</div>
            <label class="afro-switch">
              <input type="checkbox" checked disabled>
              <span class="afro-slider"></span>
            </label>
          </div>
          <div class="afro-cookie-item">
            <div class="afro-cookie-item-label"><span>+</span> Аналитические / рекламные</div>
            <label class="afro-switch">
              <input type="checkbox" id="afro-cookie-toggle-analytics" checked>
              <span class="afro-slider"></span>
            </label>
          </div>
        </div>
        <div class="afro-cookie-btn-col">
          <button type="button" class="afro-cookie-btn-primary" onclick="acceptSelectedCookies()">Сохранить выбор</button>
          <button type="button" class="afro-cookie-btn-secondary" onclick="hideCookieSettings()">Назад</button>
        </div>
      </div>
    </div>

    <!-- 9. POLICY MODAL 152-FZ -->
    <div id="afro-policy-modal" class="afro-policy-backdrop" onclick="closePolicyModal()">
      <div class="afro-policy-box" onclick="event.stopPropagation()">
        <div class="afro-policy-top">
          <div class="afro-policy-title">Политика конфиденциальности</div>
          <button type="button" class="afro-policy-close" onclick="closePolicyModal()">&times;</button>
        </div>
        <div class="afro-policy-body">
          <h4>1. Общие положения</h4>
          <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ &laquo;О персональных данных&raquo; и определяет порядок обработки персональных данных и меры по обеспечению безопасности данных студией Afrostudio (г. Москва, ул. Таганская, д. 26, стр. 1).</p>
          
          <h4>2. Цели сбора и обработки данных</h4>
          <p>Сбор данных (имя, номер телефона, аккаунт Telegram, выбранные услуги) осуществляется исключительно в целях консультации, записи на процедуры наращивания волос и афроплетения, а также подтверждения визита.</p>
          
          <h4>3. Обработка файлов cookie</h4>
          <p>Сайт использует файлы cookie для корректной работы сервисов, авторизации сессий и сбора статистики посещаемости через систему Яндекс Метрика. Пользователь вправе в любой момент изменить настройки файлов cookie в соответствующем меню сайта.</p>
          
          <h4>4. Безопасность и защита данных</h4>
          <p>Студия принимает необходимые организационные и технические меры для защиты персональной информации от неправомерного или случайного доступа третьими лицами.</p>

          <h4>5. Контакты студии</h4>
          <p>Студия Afrostudio: г. Москва, ул. Таганская, 26, стр. 1 (м. Таганская).<br>Телефон: +7 (495) 911-39-11.<br>Официальный сайт: afrostudio.ru</p>
        </div>
      </div>
    </div>

    <!-- 10. ONLY ONE ULTRA-BRIGHT 3D GOLD SCROLL TO TOP -->
    <button type="button" id="afro-scroll-top" aria-label="Наверх" title="Наверх">
      <svg viewBox="0 0 24 24" fill="none"><path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;

  // 9. RENDER TABS FOR HAIR EXTENSION TECHNOLOGIES
  const menuContainer = document.getElementById('afro-types-menu');
  const displayContainer = document.getElementById('afro-type-display');

  function renderTechTab(techId) {
    const tech = HAIR_TYPES_DATA.find(t => t.id === techId) || HAIR_TYPES_DATA[0];
    
    document.querySelectorAll('.afro-type-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.techId === tech.id);
    });

    const featuresHtml = tech.features.map(f => `<li><span>&#10003;</span> ${f}</li>`).join('');
    displayContainer.innerHTML = `
      <div class="afro-type-photo" style="background-image: url('${tech.photo}');"></div>
      <div class="afro-type-info">
        <div class="afro-type-price-badge">${tech.price}</div>
        <h3 class="afro-type-title">${tech.title}</h3>
        <p class="afro-type-text">${tech.text}</p>
        <ul class="afro-type-features">${featuresHtml}</ul>
        <div>
          <a href="#popup:contact" class="afro-btn-gold" onclick="afroTrack('tech_consult_${tech.id}')">Записаться по этой технологии</a>
        </div>
      </div>
    `;
  }

  if (menuContainer && displayContainer) {
    HAIR_TYPES_DATA.forEach((tech, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'afro-type-btn' + (idx === 0 ? ' active' : '');
      btn.dataset.techId = tech.id;
      btn.innerHTML = `
        <span>${tech.title}</span>
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;
      btn.addEventListener('click', () => renderTechTab(tech.id));
      menuContainer.appendChild(btn);
    });

    renderTechTab(HAIR_TYPES_DATA[0].id);
  }

  // 10. RENDER PRICING MATRIX TABLE
  window.switchPriceCategory = function(cat) {
    document.getElementById('afro-tab-hair-btn').classList.toggle('active', cat === 'hair');
    document.getElementById('afro-tab-afro-btn').classList.toggle('active', cat === 'afro');
    
    const grid = document.getElementById('afro-price-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const items = PRICING_DATA[cat] || PRICING_DATA.hair;
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'afro-price-card' + (item.featured ? ' featured' : '');
      const incHtml = item.includes.map(inc => `<li><span>&#10003;</span> ${inc}</li>`).join('');
      card.innerHTML = `
        ${item.badge ? `<div class="afro-price-badge">${item.badge}</div>` : ''}
        <div>
          <h3 class="afro-price-card-title">${item.title}</h3>
          <p class="afro-price-card-desc">${item.desc}</p>
          <div class="afro-price-val">${item.price}</div>
          <ul class="afro-price-includes">${incHtml}</ul>
        </div>
        <a href="#popup:contact" class="afro-btn-gold" onclick="afroTrack('price_book_${cat}')">Записаться по акции</a>
      `;
      grid.appendChild(card);
    });
  };

  switchPriceCategory('hair');

  // 11. HERO SLIDER ENGINE
  let currentSlide = 0;
  const totalSlides = 3;
  const track = document.getElementById('afro-hero-track');
  const dots = document.querySelectorAll('.afro-hero-dot');

  function goToSlide(idx) {
    currentSlide = (idx + totalSlides) % totalSlides;
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  const prevBtn = document.getElementById('afro-slider-prev');
  const nextBtn = document.getElementById('afro-slider-next');
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  dots.forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index, 10)));
  });

  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 6000);

  // 12. RENDER CLEAN & DIVERSE TELEGRAM POSTS
  const tgGrid = document.getElementById('afro-tg-posts-grid');
  let tgDisplayLimit = 6;

  function renderTelegramPosts() {
    if (!tgGrid) return;
    tgGrid.innerHTML = '';

    const postKeys = Object.keys(AFRO_CLEAN_POSTS);
    const visibleKeys = postKeys.slice(0, tgDisplayLimit);

    visibleKeys.forEach(pid => {
      const p = AFRO_CLEAN_POSTS[pid];

      const card = document.createElement('div');
      card.className = 'afro-tg-card';
      card.innerHTML = `
        <div class="afro-tg-media" style="background-image: url('${p.thumb}');">
          <div class="afro-tg-play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="afro-tg-body">
          <h4 class="afro-tg-title">${p.title}</h4>
          <p class="afro-tg-text">${p.desc}</p>
          <div class="afro-tg-meta">
            <span>Afrostudio Moscow</span>
            <a href="https://t.me/Salon_afrostudio/${pid}" target="_blank" rel="noopener noreferrer" class="afro-tg-link">Смотреть в Telegram &rarr;</a>
          </div>
        </div>
      `;
      tgGrid.appendChild(card);
    });

    const moreBtn = document.getElementById('afro-tg-load-more');
    if (moreBtn) {
      moreBtn.style.display = tgDisplayLimit >= postKeys.length ? 'none' : 'inline-flex';
    }
  }

  window.afroLoadMoreTg = function() {
    tgDisplayLimit += 6;
    renderTelegramPosts();
  };

  renderTelegramPosts();

  // 13. ONLY ONE SCROLL TO TOP LOGIC (SMOOTH & BRIGHT)
  const scrollTopBtn = document.getElementById('afro-scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('afro-visible');
      } else {
        scrollTopBtn.classList.remove('afro-visible');
      }
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 14. COOKIE BANNER & MODALS LOGIC
  const cookieBanner = document.getElementById('afro-cookie-banner');
  const policyModal = document.getElementById('afro-policy-modal');

  window.closeCookieBanner = function() {
    if (cookieBanner) cookieBanner.classList.remove('open');
  };

  window.openCookieSettings = function() {
    if (cookieBanner) {
      cookieBanner.classList.add('open');
      const mainView = document.getElementById('afro-cookie-view-main');
      const setView = document.getElementById('afro-cookie-view-settings');
      if (mainView) mainView.style.display = 'none';
      if (setView) setView.style.display = 'block';
    }
  };

  window.showCookieSettings = function() {
    const mainView = document.getElementById('afro-cookie-view-main');
    const setView = document.getElementById('afro-cookie-view-settings');
    if (mainView) mainView.style.display = 'none';
    if (setView) setView.style.display = 'block';
  };

  window.hideCookieSettings = function() {
    const mainView = document.getElementById('afro-cookie-view-main');
    const setView = document.getElementById('afro-cookie-view-settings');
    if (mainView) mainView.style.display = 'block';
    if (setView) setView.style.display = 'none';
  };

  window.acceptAllCookies = function() {
    try { localStorage.setItem('afro_cookie_accepted', 'all'); } catch (e) {}
    closeCookieBanner();
  };

  window.acceptEssentialCookies = function() {
    try { localStorage.setItem('afro_cookie_accepted', 'essential'); } catch (e) {}
    closeCookieBanner();
  };

  window.acceptSelectedCookies = function() {
    try { localStorage.setItem('afro_cookie_accepted', 'custom'); } catch (e) {}
    closeCookieBanner();
  };

  window.openPolicyModal = function() {
    if (policyModal) policyModal.classList.add('open');
  };

  window.closePolicyModal = function() {
    if (policyModal) policyModal.classList.remove('open');
  };

  setTimeout(() => {
    try {
      if (!localStorage.getItem('afro_cookie_accepted')) {
        if (cookieBanner) cookieBanner.classList.add('open');
      }
    } catch (e) {
      if (cookieBanner) cookieBanner.classList.add('open');
    }
  }, 1200);

})();
