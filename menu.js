const menuWrapper = document.querySelector('.burger-menu');
const menu = document.querySelector('.burger-menu__menu');
const menuBack = document.querySelector('.burger-menu__back');
const menuControl = document.querySelector('.burger-menu__control');

menuWrapper.addEventListener('click', (ev) => {
  if (ev.target !== menu) {
    menu.classList.toggle('closed');
    menuBack.classList.toggle('closed');
  }
});
