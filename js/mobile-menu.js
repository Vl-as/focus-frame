(() => {
  const burgerBtn = document.querySelector('.header-burger');
  const menu = document.querySelector('.header-menu');
  const overlay = document.querySelector('.header-menu-overlay');
  const closeBtn = document.querySelector('.header-close');

  const openMenu = () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  burgerBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
})();
