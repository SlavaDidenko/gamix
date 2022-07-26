const menu = document.querySelector('.header__menu-wrapper');
const burger = document.querySelector('.header__burger');
const body = document.getElementsByTagName('body')[0].classList;
const header = document.querySelector('.header');
const closeBurger = document.querySelector('.header__close-btn');
const headerHeight = header.offsetHeight;
const hero = document.querySelector('.main-page');
const heightHero = hero.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= heightHero) {
    header.style.transform = `translateY(0)`;
    header.classList.add('header-fixed')
    // if (lastScrollTop < scrollDistance && scrollDistance >= heightHero + headerHeight) {
    //   header.classList.remove('header-fixed')
    //   lastScrollTop = scrollDistance;
    // } else {
    //   header.classList.remove('header-fixed')
    // }
  } else {
    header.classList.remove('header-fixed')
  }
})

function offMenuBurger() {
  menu.classList.remove('active-menu');
  body.remove('hidden');
  header.classList.remove('back');
}

burger.onclick = () => {
  body.add('hidden');
  menu.classList.add('active-menu');
  header.classList.add('back');
}

closeBurger.onclick = () => {
  offMenuBurger();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.active-menu') && menu.className.includes('active-menu') && !e.target.closest('.header__burger')) {
    offMenuBurger();
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  crossFade: true,
  longswipes: false,
  preventClicks: true,
  resistanceRatio: 0.55,
  speed: 150,
  watchOverflow : true,
  touchAngle : 200,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
});

swiper.slideNext();