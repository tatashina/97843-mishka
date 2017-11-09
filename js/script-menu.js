var navMain = document.querySelector('.main-header__nav');
var navToggle = document.querySelector('.main-header__nav-burger');
var contMenu = document.querySelector('.main-header__container');


navMain.classList.remove('main-header__nav--nojs');
contMenu.classList.remove('container--menu-nojs');
navMain.classList.add('main-header__nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
  }

  else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
  }
});
