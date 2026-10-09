/**
 * AFROSTUDIO.RU - OFFICIAL HIGH-CONVERTING INTERACTIVE APPLICATION
 * Version: 4.0.0
 * Architecture: Tilda T123 Single-Script Engine with Dynamic Telegram Feed
 */
(function() {
  'use strict';

  // 1. INJECT EXTERNAL STYLES & FONTS
  if (!document.getElementById('afro-web-fonts')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'afro-web-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap';
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

  // 3. INJECT APPLICATION STYLES
  const styles = `
    /* HIDE DUPLICATE TILDA BLOCKS & FOOTER */
    #rec2325313701, #rec2325313981, #rec2325314041, #rec2222808741, 
    #rec2334967441, #rec2222715461, footer, #t-footer, .t345, .afro-footer {
      display: none !important;
    }

    /* FULL WIDTH & RESET */
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      max-width: 100vw !important;
      overflow-x: hidden !important;
      background-color: #070709 !important;
    }
    #allrecords {
      overflow-x: hidden !important;
      width: 100% !important;
    }
    #rec4638438901, 
    #rec4638438901 .t123, 
    #rec4638438901 .t-container_100, 
    #rec4638438901 .t-width, 
    #rec4638438901 .t-width_100 {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    #afrostudio-app {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f1f5f9;
      background: #070709;
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden;
      box-sizing: border-box;
      line-height: 1.5;
    }
    #afrostudio-app * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .afro-container {
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* SCROLL TO TOP - STRICTLY BOTTOM 14px, LEFT 14px, 40x40px */
    #afro-scroll-top {
      position: fixed;
      bottom: 14px;
      left: 14px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #141418;
      border: 1px solid #f59e0b;
      color: #f59e0b;
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
      background: #f59e0b;
      color: #000;
      transform: translateY(-2px);
    }
    #afro-scroll-top svg {
      width: 18px;
      height: 18px;
      stroke-width: 2.5;
    }

    /* SECTION TITLES */
    .afro-section-header {
      text-align: center;
      margin-bottom: 36px;
    }
    .afro-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.35);
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 12px;
    }
    .afro-section-title {
      font-family: 'Cinzel', serif;
      font-size: 34px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .afro-section-title span {
      color: #f59e0b;
    }
    .afro-section-sub {
      font-size: 15px;
      color: #94a3b8;
      max-width: 640px;
      margin: 0 auto;
    }

    /* 1. HERO SLIDER */
    .afro-hero-section {
      position: relative;
      width: 100%;
      min-height: 540px;
      overflow: hidden;
      background: #000000;
      display: flex;
      align-items: center;
    }
    .afro-hero-track {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .afro-hero-slide {
      min-width: 100%;
      min-height: 540px;
      position: relative;
      background-size: cover;
      background-position: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 70px 20px 80px;
    }
    .afro-hero-slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(10, 10, 14, 0.55) 0%, rgba(6, 6, 8, 0.92) 100%);
      z-index: 1;
    }
    .afro-hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 880px;
      margin: 0 auto;
    }
    .afro-hero-pill {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.14);
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 6px 16px;
      border-radius: 999px;
      margin-bottom: 18px;
    }
    .afro-hero-h1 {
      font-family: 'Cinzel', serif;
      font-size: 42px;
      font-weight: 800;
      line-height: 1.2;
      color: #ffffff;
      margin-bottom: 16px;
      text-shadow: 0 4px 20px rgba(0,0,0,0.8);
    }
    .afro-hero-h1 span {
      color: #f59e0b;
    }
    .afro-hero-desc {
      font-size: 16px;
      color: #cbd5e1;
      max-width: 660px;
      margin: 0 auto 28px;
      line-height: 1.6;
    }
    .afro-hero-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 14px;
    }
    .afro-btn-gold {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: #0b0b0f !important;
      font-weight: 700;
      font-size: 14px;
      padding: 13px 26px;
      border-radius: 10px;
      text-decoration: none;
      box-shadow: 0 6px 20px rgba(245, 158, 11, 0.35);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
    }
    .afro-btn-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 26px rgba(245, 158, 11, 0.5);
    }
    .afro-btn-trans {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff !important;
      font-weight: 600;
      font-size: 14px;
      padding: 13px 24px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      text-decoration: none;
      transition: background 0.2s, border-color 0.2s;
      cursor: pointer;
    }
    .afro-btn-trans:hover {
      background: rgba(255, 255, 255, 0.16);
      border-color: #f59e0b;
    }

    /* SLIDER NAV BUTTONS & DOTS */
    .afro-hero-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: rgba(15, 15, 20, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.2s;
    }
    .afro-hero-arrow:hover {
      background: #f59e0b;
      color: #000;
      border-color: #f59e0b;
    }
    .afro-arrow-prev { left: 16px; }
    .afro-arrow-next { right: 16px; }
    .afro-hero-dots {
      position: absolute;
      bottom: 22px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      z-index: 10;
    }
    .afro-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      cursor: pointer;
      transition: all 0.25s;
    }
    .afro-dot.active {
      background: #f59e0b;
      width: 26px;
      border-radius: 6px;
    }

    /* 2. DIRECTIONS GRID (4 CARDS) */
    .afro-directions-section {
      padding: 60px 0 40px;
      background: #070709;
    }
    .afro-dir-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
    .afro-dir-card {
      position: relative;
      border-radius: 18px;
      overflow: hidden;
      min-height: 290px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 28px 24px;
      text-decoration: none;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-size: cover;
      background-position: center;
      transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s, box-shadow 0.3s;
    }
    .afro-dir-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(10, 10, 15, 0.25) 0%, rgba(10, 10, 15, 0.88) 70%, rgba(6, 6, 8, 0.98) 100%);
      z-index: 1;
      transition: opacity 0.3s;
    }
    .afro-dir-card:hover {
      transform: translateY(-5px);
      border-color: rgba(245, 158, 11, 0.6);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(245, 158, 11, 0.2);
    }
    .afro-dir-content {
      position: relative;
      z-index: 2;
    }
    .afro-dir-num {
      display: inline-block;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: #f59e0b;
      margin-bottom: 6px;
    }
    .afro-dir-title {
      font-family: 'Cinzel', serif;
      font-size: 22px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .afro-dir-text {
      font-size: 13px;
      color: #cbd5e1;
      line-height: 1.5;
      margin-bottom: 16px;
      max-width: 480px;
    }
    .afro-dir-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 700;
      color: #f59e0b;
      transition: gap 0.2s;
    }
    .afro-dir-card:hover .afro-dir-link {
      gap: 10px;
    }

    /* 3. ART BANNER & STUDIO PHILOSOPHY */
    .afro-art-section {
      padding: 40px 0 50px;
      background: #070709;
    }
    .afro-art-banner {
      width: 100%;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(245, 158, 11, 0.3);
      position: relative;
      min-height: 240px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      padding: 30px;
      box-shadow: 0 16px 45px rgba(0,0,0,0.6);
    }
    .afro-art-banner::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(8, 8, 11, 0.92) 0%, rgba(8, 8, 11, 0.65) 55%, rgba(8, 8, 11, 0.3) 100%);
      z-index: 1;
    }
    .afro-art-content {
      position: relative;
      z-index: 2;
      max-width: 600px;
    }
    .afro-art-title {
      font-family: 'Cinzel', serif;
      font-size: 28px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .afro-art-title span {
      color: #f59e0b;
    }
    .afro-art-desc {
      font-size: 14px;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    /* STUDIO GALLERY 4-GRID */
    .afro-gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 24px;
    }
    .afro-gallery-item {
      position: relative;
      border-radius: 14px;
      overflow: hidden;
      height: 220px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .afro-gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .afro-gallery-item:hover .afro-gallery-img {
      transform: scale(1.06);
    }

    /* 4. TELEGRAM LIVE FEED (MATCHING SCREENSHOT 2) */
    .afro-tg-section {
      margin-top: 50px;
      margin-bottom: 40px;
      padding: 30px 24px;
      background: linear-gradient(180deg, rgba(18, 18, 24, 0.95) 0%, rgba(12, 12, 16, 0.98) 100%);
      border: 1px solid rgba(245, 158, 11, 0.35);
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(245, 158, 11, 0.12);
      position: relative;
      overflow: hidden;
    }
    .afro-tg-section::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, #f59e0b, #eab308, transparent);
    }
    .afro-tg-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 26px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .afro-tg-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.35);
      padding: 5px 12px;
      border-radius: 999px;
    }
    .afro-tg-badge span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 8px #10b981;
      display: inline-block;
      animation: afroPulse 1.8s infinite;
    }
    @keyframes afroPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }
    .afro-tg-title {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      font-weight: 800;
      color: #ffffff;
      margin-top: 6px;
    }
    .afro-tg-title span {
      color: #f59e0b;
    }
    .afro-tg-sub {
      font-size: 13px;
      color: #94a3b8;
      margin-top: 4px;
    }
    .afro-tg-channel-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 700;
      font-size: 13px;
      padding: 11px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .afro-tg-channel-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(2, 132, 199, 0.5);
    }
    
    /* TELEGRAM GRID 3 COLUMNS */
    .afro-tg-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      width: 100%;
    }
    .afro-tg-card {
      background: rgba(15, 15, 20, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    }
    .afro-tg-card:hover {
      transform: translateY(-4px);
      border-color: rgba(245, 158, 11, 0.45);
      box-shadow: 0 16px 35px rgba(0, 0, 0, 0.7);
    }
    .afro-tg-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 12px;
    }
    .afro-tg-card-date {
      color: #f59e0b;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .afro-tg-card-channel {
      color: #94a3b8;
      font-weight: 500;
    }

    /* MEDIA CONTAINER WITH POSTER & PLAY BUTTON */
    .afro-tg-media-wrap {
      position: relative;
      width: 100%;
      height: 190px;
      border-radius: 12px;
      overflow: hidden;
      background: #090a0f;
      margin-bottom: 14px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .afro-tg-media-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.35s ease;
    }
    .afro-tg-card:hover .afro-tg-media-img {
      transform: scale(1.04);
    }
    .afro-tg-play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.3);
      transition: background 0.2s;
    }
    .afro-tg-card:hover .afro-tg-play-overlay {
      background: rgba(0, 0, 0, 0.15);
    }
    .afro-tg-play-btn {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #f59e0b;
      color: #0b0b0f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      padding-left: 3px;
      box-shadow: 0 0 24px rgba(245, 158, 11, 0.7);
      transition: transform 0.2s;
    }
    .afro-tg-card:hover .afro-tg-play-btn {
      transform: scale(1.12);
    }
    .afro-tg-video-badge {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.78);
      border: 1px solid #f59e0b;
      color: #f59e0b;
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 5px;
      letter-spacing: 0.06em;
    }
    
    /* SCROLLABLE POST TEXT */
    .afro-tg-text-box {
      font-size: 13px;
      color: #cbd5e1;
      line-height: 1.55;
      max-height: 165px;
      overflow-y: auto;
      padding-right: 6px;
      flex-grow: 1;
      word-break: break-word;
    }
    .afro-tg-text-box::-webkit-scrollbar {
      width: 4px;
    }
    .afro-tg-text-box::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    .afro-tg-text-box::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }
    .afro-tg-text-box::-webkit-scrollbar-thumb:hover {
      background: #f59e0b;
    }
    .afro-tg-text-box a {
      color: #38bdf8;
      text-decoration: underline;
    }

    .afro-tg-footer-actions {
      text-align: center;
      margin-top: 26px;
    }
    .afro-tg-more-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.4);
      color: #f59e0b;
      font-size: 13px;
      font-weight: 700;
      padding: 11px 26px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .afro-tg-more-btn:hover {
      background: #f59e0b;
      color: #000;
      border-color: #f59e0b;
    }
    .afro-tg-loader {
      text-align: center;
      padding: 30px;
      color: #94a3b8;
      font-size: 14px;
      grid-column: 1 / -1;
    }

    /* 5. COOKIE BANNER (152-FZ) */
    #afro-cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(14, 14, 18, 0.96);
      backdrop-filter: blur(12px);
      border-top: 1px solid rgba(245, 158, 11, 0.3);
      padding: 16px 20px;
      z-index: 9998;
      box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.7);
      display: none;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .afro-cookie-text {
      font-size: 13px;
      color: #cbd5e1;
      max-width: 820px;
      line-height: 1.5;
    }
    .afro-cookie-text a {
      color: #f59e0b;
      text-decoration: underline;
    }
    .afro-cookie-actions {
      display: flex;
      gap: 10px;
      flex-shrink: 0;
    }
    .afro-cookie-accept {
      background: #f59e0b;
      color: #0b0b0f;
      border: none;
      padding: 9px 20px;
      font-size: 13px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .afro-cookie-accept:hover {
      background: #eab308;
    }
    .afro-cookie-settings {
      background: transparent;
      color: #cbd5e1;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 9px 16px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .afro-cookie-settings:hover {
      border-color: #f59e0b;
      color: #ffffff;
    }

    /* RESPONSIVE DESIGN */
    @media screen and (max-width: 992px) {
      .afro-tg-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .afro-dir-grid {
        grid-template-columns: 1fr;
      }
      .afro-gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .afro-hero-h1 {
        font-size: 32px;
      }
      .afro-section-title {
        font-size: 28px;
      }
    }
    @media screen and (max-width: 640px) {
      .afro-tg-grid {
        grid-template-columns: 1fr;
      }
      .afro-gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .afro-hero-slide {
        min-height: 460px;
        padding: 50px 14px 60px;
      }
      .afro-hero-h1 {
        font-size: 26px;
      }
      .afro-hero-desc {
        font-size: 14px;
      }
      .afro-hero-arrow {
        display: none;
      }
      .afro-tg-section {
        padding: 20px 14px;
      }
      .afro-tg-header {
        flex-direction: column;
        align-items: flex-start;
      }
      #afro-cookie-banner {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `;

  if (!document.getElementById('afro-widget-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'afro-widget-styles';
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);
  }

  // 4. FIND ROOT CONTAINER
  const root = document.getElementById('afrostudio-app');
  if (!root) {
    console.warn('[Afrostudio] Container #afrostudio-app not found.');
    return;
  }

  // 5. RENDER APPLICATION STRUCTURE
  root.innerHTML = `
    <!-- SCROLL TO TOP -->
    <div id="afro-scroll-top" title="Наверх">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 15l-6-6-6 6"/></svg>
    </div>

    <!-- 1. HERO SLIDER -->
    <section class="afro-hero-section">
      <div class="afro-hero-track" id="afro-hero-track">
        <!-- SLIDE 1 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3235-6631-4566-a361-626237366630/Screenshot_19.jpg');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">Премиум салон в центре Москвы</span>
            <h1 class="afro-hero-h1">Afrostudio — студия <span>наращивания волос</span> и афроплетения</h1>
            <p class="afro-hero-desc">Безупречная техника, натуральные материалы высшего качества и индивидуальный подбор длины и оттенка от топ-мастеров Москвы.</p>
            <div class="afro-hero-actions">
              <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-btn-gold" onclick="afroTrack('whatsapp')">Записаться через WhatsApp</a>
              <a href="#afro-directions" class="afro-btn-trans">Выбрать направление</a>
            </div>
          </div>
        </div>

        <!-- SLIDE 2 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3337-3833-4835-b261-643866373439/afro34f1a9f.png');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">Тренды и авторский стиль</span>
            <h2 class="afro-hero-h1">Афрокосички, брейды и <span>дредокудри</span></h2>
            <p class="afro-hero-desc">Зизи, сенегальские косы, брейды в хвост, дредокудри и яркие плетения любой сложности. До 1.5–2 месяцев безупречной носки.</p>
            <div class="afro-hero-actions">
              <a href="https://afrostudio.ru/services/afro" class="afro-btn-gold" onclick="afroTrack('services_afro')">Смотреть стили афро</a>
              <a href="https://t.me/Salon_afrostudio" target="_blank" class="afro-btn-trans" onclick="afroTrack('telegram')">Канал студии</a>
            </div>
          </div>
        </div>

        <!-- SLIDE 3 -->
        <div class="afro-hero-slide" style="background-image: url('https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png');">
          <div class="afro-hero-content">
            <span class="afro-hero-pill">Итальянская горячая методика</span>
            <h2 class="afro-hero-h1">Наращивание волос <span>высшей категории</span></h2>
            <p class="afro-hero-desc">Микро и нано-капсулы, биопротеиновые пряди, натуральные славянские волосы Lux. Невидимые крепления без вреда для своих волос.</p>
            <div class="afro-hero-actions">
              <a href="https://afrostudio.ru/services/hair-extension" class="afro-btn-gold" onclick="afroTrack('services_hair')">Каталог наращивания</a>
              <a href="tel:+74959113911" class="afro-btn-trans" onclick="afroTrack('phone')">+7 (495) 911-39-11</a>
            </div>
          </div>
        </div>
      </div>

      <!-- SLIDER CONTROLS -->
      <button class="afro-hero-arrow afro-arrow-prev" id="afro-prev-btn" aria-label="Предыдущий слайд">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="afro-hero-arrow afro-arrow-next" id="afro-next-btn" aria-label="Следующий слайд">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="afro-hero-dots" id="afro-hero-dots">
        <div class="afro-dot active" data-index="0"></div>
        <div class="afro-dot" data-index="1"></div>
        <div class="afro-dot" data-index="2"></div>
      </div>
    </section>

    <!-- 2. DIRECTIONS GRID (4 MAIN SECTIONS) -->
    <section class="afro-directions-section" id="afro-directions">
      <div class="afro-container">
        <div class="afro-section-header">
          <div class="afro-badge">Услуги салона</div>
          <h2 class="afro-section-title">Направления студии <span>Afrostudio</span></h2>
          <p class="afro-section-sub">Профессиональный уход, безупречная эстетика и бережное отношение к здоровью волос</p>
        </div>

        <div class="afro-dir-grid">
          <!-- 01 -->
          <a href="https://afrostudio.ru/services/hair-extension" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3763-3734-4337-b531-393764383838/hair4488ef8.png');" onclick="afroTrack('dir_hair')">
            <div class="afro-dir-content">
              <span class="afro-dir-num">01 / ПРЕМИУМ ТЕХНИКИ</span>
              <h3 class="afro-dir-title">Наращивание волос</h3>
              <p class="afro-dir-text">Итальянское капсульное наращивание, микро и нано пряди, биопротеиновые волосы. Максимально естественный объем и длина.</p>
              <span class="afro-dir-link">Перейти к услуге &rarr;</span>
            </div>
          </a>

          <!-- 02 -->
          <a href="https://afrostudio.ru/services/afro" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3337-3833-4835-b261-643866373439/afro34f1a9f.png');" onclick="afroTrack('dir_afro')">
            <div class="afro-dir-content">
              <span class="afro-dir-num">02 / АВТОРСКИЕ ПЛЕТЕНИЯ</span>
              <h3 class="afro-dir-title">Афрокосички и брейды</h3>
              <p class="afro-dir-text">Классические зизи, сенегальские косы, брейды в хвост, дредокудри и афрокудри с безопасным вплетением.</p>
              <span class="afro-dir-link">Перейти к услуге &rarr;</span>
            </div>
          </a>

          <!-- 03 -->
          <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3063-6664-4637-b334-376564313961/paint-bg27e7061.png');" onclick="afroTrack('dir_color')">
            <div class="afro-dir-content">
              <span class="afro-dir-num">03 / СТИЛИСТЫ & КОЛОРИСТИКА</span>
              <h3 class="afro-dir-title">Стилисты и окрашивание</h3>
              <p class="afro-dir-text">Сложное окрашивание, AirTouch, тонирование под цвет донорских прядей, восстанавливающие спа-уходы.</p>
              <span class="afro-dir-link">Консультация колориста &rarr;</span>
            </div>
          </a>

          <!-- 04 -->
          <a href="https://afrostudio.ru/services/traininghairextensions" class="afro-dir-card" style="background-image: url('https://static.tildacdn.com/tild3762-3565-4130-b234-396335363263/main-s-355276df.png');" onclick="afroTrack('dir_training')">
            <div class="afro-dir-content">
              <span class="afro-dir-num">04 / АКАДЕМИЯ МАСТЕРОВ</span>
              <h3 class="afro-dir-title">Обучение мастеров</h3>
              <p class="afro-dir-text">Курсы по наращиванию волос и афроплетению с нуля и для действующих специалистов. Сертификат и диплом мастера.</p>
              <span class="afro-dir-link">Программа курсов &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 3. ART BANNER & STUDIO GALLERY -->
    <section class="afro-art-section">
      <div class="afro-container">
        <div class="afro-art-banner" style="background-image: url('https://static.tildacdn.com/tild3035-6535-4466-b132-623636393732/kling_20260322_IMAGE.png');">
          <div class="afro-art-content">
            <h3 class="afro-art-title">Искусство преображения в <span>Afrostudio</span></h3>
            <p class="afro-art-desc">Более 12 лет создаем роскошные прически и безупречные образы для сотен клиентов в Москве. Уютная студия рядом с метро Полянка и Третьяковская.</p>
            <a href="https://api.whatsapp.com/send/?phone=79255069900" target="_blank" class="afro-btn-gold" onclick="afroTrack('whatsapp')">Задать вопрос мастеру</a>
          </div>
        </div>

        <div class="afro-gallery-grid">
          <div class="afro-gallery-item">
            <img src="https://static.tildacdn.com/tild6530-3866-4235-a336-336131326631/Screenshot_1.jpg" class="afro-gallery-img" alt="Интерьер студии Afrostudio" loading="lazy" />
          </div>
          <div class="afro-gallery-item">
            <img src="https://static.tildacdn.com/tild3131-3738-4463-b965-653331363861/1.JPG" class="afro-gallery-img" alt="Материалы для наращивания волос" loading="lazy" />
          </div>
          <div class="afro-gallery-item">
            <img src="https://static.tildacdn.com/tild6164-6463-4163-a435-316164313232/l266da221.jpg" class="afro-gallery-img" alt="Процесс наращивания волос" loading="lazy" />
          </div>
          <div class="afro-gallery-item">
            <img src="https://static.tildacdn.com/tild3332-3066-4637-b063-313337666137/Grey-Wolf_Hair_Exten.png" class="afro-gallery-img" alt="Результат работы Afrostudio" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- 4. TELEGRAM LIVE FEED (CONNECTED TO CHANNEL @Salon_afrostudio) -->
    <section class="afro-container">
      <div id="afro-telegram-feed" class="afro-tg-section">
        <div class="afro-tg-header">
          <div>
            <div class="afro-tg-badge"><span></span> LIVE ЭФИР ИЗ TELEGRAM</div>
            <h2 class="afro-tg-title">Акции и публикации в <span>@Salon_afrostudio</span></h2>
            <p class="afro-tg-sub">Прямая трансляция свежих работ, видеообзоров и спецпредложений из Telegram-канала студии</p>
          </div>
          <a href="https://t.me/Salon_afrostudio" target="_blank" class="afro-tg-channel-btn" onclick="afroTrack('telegram')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#24A1DE"/><path d="M5.4 12.03L17.15 7.5c.54-.2.85.12.7.75l-2 9.43c-.15.67-.55.83-1.11.52l-3.05-2.25-1.47 1.42c-.16.16-.3.3-.61.3l.22-3.11 5.66-5.11c.25-.22-.05-.34-.39-.12L8.1 14.8 5.08 13.86c-.66-.21-.67-.66.14-.97z" fill="white"/></svg>
            Перейти в @Salon_afrostudio
          </a>
        </div>

        <div id="afro-tg-grid" class="afro-tg-grid">
          <div class="afro-tg-loader">Загрузка публикаций студии...</div>
        </div>

        <div class="afro-tg-footer-actions">
          <button id="afro-tg-more-btn" class="afro-tg-more-btn" onclick="window.afroLoadMoreTg()">Показать ещё посты</button>
        </div>
      </div>
    </section>

    <!-- 5. COOKIE BANNER (152-FZ) -->
    <div id="afro-cookie-banner">
      <div class="afro-cookie-text">
        Мы используем файлы cookie для персонализации сервиса и повышения удобства работы. Продолжая использовать сайт, вы даете согласие на обработку данных в соответствии с <a href="https://afrostudio.ru/privacy" target="_blank">Политикой конфиденциальности</a> (152-ФЗ).
      </div>
      <div class="afro-cookie-actions">
        <button class="afro-cookie-settings" onclick="window.afroDismissCookie()">Настроить</button>
        <button class="afro-cookie-accept" onclick="window.afroDismissCookie()">Принять</button>
      </div>
    </div>
  `;

  // 6. HERO SLIDER INTERACTION
  let currentSlide = 0;
  const track = document.getElementById('afro-hero-track');
  const dots = document.querySelectorAll('.afro-dot');
  const totalSlides = 3;

  function updateHeroSlide(idx) {
    currentSlide = (idx + totalSlides) % totalSlides;
    if (track) {
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  const prevBtn = document.getElementById('afro-prev-btn');
  const nextBtn = document.getElementById('afro-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', function() { updateHeroSlide(currentSlide - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { updateHeroSlide(currentSlide + 1); });
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'), 10);
      updateHeroSlide(idx);
    });
  });

  // Auto slide change
  let heroTimer = setInterval(function() {
    updateHeroSlide(currentSlide + 1);
  }, 6500);

  // 7. TELEGRAM FEED LIVE LOADER
  const TG_FEED_KEY = 'telegrambot-1192705437-e35adf4947a214c26';
  const TG_CHANNEL_URL = 'https://t.me/Salon_afrostudio';
  let tgPostsBatch = 9;
  let tgPostsFrom = 0;
  let tgTotalPosts = 0;

  function formatTgDate(dateStr) {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split(' ');
      const dateParts = parts[0].split('-');
      const day = dateParts[2];
      const month = dateParts[1];
      const year = dateParts[0];
      const time = parts[1] ? parts[1].substring(0, 5) : '';
      return day + '.' + month + '.' + year + (time ? ' в ' + time : '');
    } catch(e) {
      return dateStr;
    }
  }

  function renderTgCard(post) {
    const card = document.createElement('div');
    card.className = 'afro-tg-card';

    const top = document.createElement('div');
    top.className = 'afro-tg-card-top';
    top.innerHTML = '<span class="afro-tg-card-date">📅 ' + formatTgDate(post.date) + '</span><span class="afro-tg-card-channel">@Salon_afrostudio</span>';
    card.appendChild(top);

    const postText = post.text || '';
    const hasVideo = /видео|video|ролик|клип|эфир|обзор/i.test(postText) || (post.files && post.files.length > 0 && postText.indexOf('телеграмм') !== -1);
    
    // Media image
    let mediaUrl = '';
    if (post.files && post.files.length > 0) {
      mediaUrl = 'https://news.tildacdn.com/' + post.files[0] + '/-/resize/600x/';
    } else {
      // Default branded studio art when no image file in text-only post
      mediaUrl = 'https://static.tildacdn.com/tild3035-6535-4466-b132-623636393732/kling_20260322_IMAGE.png';
    }

    const postLink = post.link || (post.messageid ? TG_CHANNEL_URL + '/' + post.messageid : TG_CHANNEL_URL);

    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'afro-tg-media-wrap';
    mediaWrap.onclick = function() {
      afroTrack('telegram');
      window.open(postLink, '_blank');
    };

    let overlayHtml = '';
    if (hasVideo) {
      overlayHtml = '<div class="afro-tg-play-overlay"><div class="afro-tg-play-btn">▶</div><span class="afro-tg-video-badge">ВИДЕО</span></div>';
    }
    mediaWrap.innerHTML = '<img src="' + mediaUrl + '" class="afro-tg-media-img" loading="lazy" alt="Медиа поста Afrostudio" />' + overlayHtml;
    card.appendChild(mediaWrap);

    // Text box with scrollbar
    const textBox = document.createElement('div');
    textBox.className = 'afro-tg-text-box';
    let cleanText = postText;
    cleanText = cleanText.replace(/https?:\/\/t\.me\/Salon_afrostudio\/\d+/g, function(url) {
      return '<a href="' + url + '" target="_blank" onclick="event.stopPropagation();">' + url + '</a>';
    });
    textBox.innerHTML = cleanText || 'Публикация из Telegram-канала студии Afrostudio.';
    card.appendChild(textBox);

    return card;
  }

  window.afroLoadMoreTg = function() {
    const grid = document.getElementById('afro-tg-grid');
    const moreBtn = document.getElementById('afro-tg-more-btn');
    if (!grid) return;

    const url = 'https://news.tildacdn.com/feed/' + TG_FEED_KEY + '/' + tgPostsBatch + '/' + tgPostsFrom + '/0';
    fetch(url)
      .then(function(res) { return res.json(); })
      .then(function(data) {
        const loader = grid.querySelector('.afro-tg-loader');
        if (loader) loader.remove();

        tgTotalPosts = data.total || 0;
        const msgs = data.messages || [];
        if (msgs.length === 0 && tgPostsFrom === 0) {
          grid.innerHTML = '<div class="afro-tg-loader">Публикаций пока нет. Перейдите в канал @Salon_afrostudio!</div>';
          if (moreBtn) moreBtn.style.display = 'none';
          return;
        }

        msgs.forEach(function(post) {
          const card = renderTgCard(post);
          if (card) grid.appendChild(card);
        });

        tgPostsFrom += msgs.length;
        if (moreBtn) {
          if (tgPostsFrom >= tgTotalPosts || msgs.length < tgPostsBatch) {
            moreBtn.style.display = 'none';
          } else {
            moreBtn.style.display = 'inline-block';
          }
        }
      })
      .catch(function(err) {
        console.warn('[Afrostudio] Telegram feed load error', err);
        const loader = grid.querySelector('.afro-tg-loader');
        if (loader) {
          loader.innerHTML = 'Загляните прямо в канал: <a href="' + TG_CHANNEL_URL + '" target="_blank" style="color:#f59e0b">@Salon_afrostudio</a>';
        }
      });
  };

  // Launch feed
  setTimeout(window.afroLoadMoreTg, 200);

  // 8. SCROLL TO TOP ARROW
  const scrollTopBtn = document.getElementById('afro-scroll-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('afro-visible');
    } else {
      scrollTopBtn.classList.remove('afro-visible');
    }
  });
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 9. COOKIE BANNER DISMISS
  const cookieBanner = document.getElementById('afro-cookie-banner');
  if (cookieBanner && !localStorage.getItem('afro_cookie_dismissed')) {
    cookieBanner.style.display = 'flex';
  }
  window.afroDismissCookie = function() {
    if (cookieBanner) cookieBanner.style.display = 'none';
    localStorage.setItem('afro_cookie_dismissed', '1');
  };

  // 10. METRIKA GOALS
  window.afroTrack = function(goal) {
    if (typeof ym !== 'undefined') {
      try {
        const metrikaId = 88058414;
        if (goal === 'whatsapp') ym(metrikaId, 'reachGoal', '233127645');
        else if (goal === 'telegram') ym(metrikaId, 'reachGoal', '368208880');
        else if (goal === 'phone') ym(metrikaId, 'reachGoal', '357211540');
        else ym(metrikaId, 'reachGoal', '296485879');
      } catch(e) {}
    }
  };

})();
