(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.cssText = 'position:absolute;left:-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  document.querySelectorAll('.code-block').forEach(function (block) {
    var button = block.querySelector('.code-block-copy');
    var code = block.querySelector('code');
    if (!button || !code) return;

    button.addEventListener('click', function () {
      Promise.resolve(copyText(code.textContent)).then(function () {
        button.classList.add('is-copied');
        button.setAttribute('aria-label', 'Copied');
        setTimeout(function () {
          button.classList.remove('is-copied');
          button.setAttribute('aria-label', 'Copy code');
        }, 1500);
      });
    });
  });
})();
