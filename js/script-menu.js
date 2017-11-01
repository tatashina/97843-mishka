var navMain = document.querySelector('.main-header__nav');
var navToggle = document.querySelector('.main-header__nav-burger');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header--closed')) {
    navMain.classList.remove('main-header--closed');
    navMain.classList.add('main-header--opened');
  }

  else {
    navMain.classList.add('main-header--closed');
    navMain.classList.remove('main-header--opened');
  }
});
