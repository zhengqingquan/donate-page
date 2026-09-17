/* ============================================================
   赞赏页交互 — 二维码弹窗 / 图片缺失提示
   ============================================================ */
(function () {
  'use strict';

  /* 收款码放到 image/ ：
       image/wechat.jpg  微信
       image/alipay.png  支付宝
  */
  var QRCODES = {
    wechat: { file: 'image/wechat.jpg', name: '微信支付', tool: '微信' },
    alipay: { file: 'image/alipay.png', name: '支付宝', tool: '支付宝' }
  };

  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modal-title');
  var modalTip = modal.querySelector('.modal-tip strong');
  var qrcodeImg = document.getElementById('modal-qrcode');
  var placeholder = document.getElementById('qrcode-placeholder');

  function openModal(key) {
    var cfg = QRCODES[key];
    if (!cfg) return;

    modalTitle.textContent = cfg.name;
    modalTip.textContent = cfg.tool;

    placeholder.hidden = true;
    qrcodeImg.hidden = false;
    qrcodeImg.src = cfg.file;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () {
      if (!modal.classList.contains('open')) {
        qrcodeImg.removeAttribute('src');
      }
    }, 280);
  }

  document.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.getAttribute('data-open'));
    });
  });

  document.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  qrcodeImg.addEventListener('error', function () {
    qrcodeImg.hidden = true;
    placeholder.hidden = false;
  });

  modal.querySelector('.modal-panel').addEventListener('click', function (e) {
    e.stopPropagation();
  });

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
