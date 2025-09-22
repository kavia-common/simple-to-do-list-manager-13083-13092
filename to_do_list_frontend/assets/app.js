(function () {
  // Utility to log clicks for static demo
  function onClick(selector, handler) {
    document.querySelectorAll(selector).forEach(el => el.addEventListener('click', handler));
  }

  // Back button: history back
  onClick('.top-back-wrap .back-circle, .top-back-wrap .back-icon', function () {
    if (window.history.length > 1) window.history.back();
  });

  // Reset: clear demo fields (visual only)
  onClick('.top-back-wrap .reset', function () {
    const details = document.querySelector('.details-group .text');
    const price = document.querySelector('.price-group .price-text');
    const name = document.querySelector('.item-name-group .input-text');
    if (details) details.textContent = '';
    if (price) price.textContent = '$50';
    if (name) name.textContent = '';
  });

  // Save button
  onClick('.bottom-button-group .button-bg, .bottom-button-group .button-text', function () {
    alert('Changes saved (demo)');
  });

  // Upload add circles (demo)
  onClick('.upload-group .add-circle', function () {
    alert('Open media picker (demo)');
  });
})();
