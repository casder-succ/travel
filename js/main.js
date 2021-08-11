(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
      if (window.pageYOffset > 70) {
          header.classList.add('header__active');
      } else {
          header.classList.remove('header__active');
      }
    };
}());

(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });
}());