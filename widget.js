// AFROSTUDIO — Dynamic Tilda Integration v1.0.0
// Auto-connected to Yandex Metrika Counter: 88058414
(function() {
  var YM_COUNTER = 88058414;

  function reachGoal(goalName, goalParams) {
    if (window.ym) {
      try {
        window.ym(YM_COUNTER, 'reachGoal', goalName, goalParams);
        console.log('[AfroStudio YM] Goal triggered:', goalName);
      } catch(e) {
        console.warn('[AfroStudio YM] Error reaching goal:', e);
      }
    }
  }

  function initAfroStudio() {
    var root = document.getElementById('afrostudio-app');
    if (!root) {
      root = document.createElement('div');
      root.id = 'afrostudio-app';
      document.body.appendChild(root);
    }
    
    // Tracking auto-bindings for links and forms
    document.addEventListener('click', function(e) {
      var target = e.target.closest('a');
      if (!target) return;
      var href = target.getAttribute('href') || '';
      
      if (href.indexOf('whatsapp.com') !== -1 || href.indexOf('wa.me') !== -1) {
        reachGoal('whatsapp_click');
      } else if (href.indexOf('t.me') !== -1) {
        reachGoal('telegram_click');
      } else if (href.indexOf('tel:') !== -1) {
        reachGoal('phone_click');
      }
    });

    console.log('[AfroStudio] Engine v1.0.0 initialized successfully.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAfroStudio);
  } else {
    initAfroStudio();
  }
})();
