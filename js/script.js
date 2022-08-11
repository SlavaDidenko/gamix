const menu = document.querySelector('.header__menu-wrapper');
const burger = document.querySelector('.header__burger');
const body = document.getElementsByTagName('body')[0].classList;
const header = document.querySelector('.header');
const closeBurger = document.querySelector('.header__close-btn');
const headerHeight = header.offsetHeight;
const hero = document.querySelector('.main-page');
const watch = document.querySelector('.main-page__watch-btn');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-bth');
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('load', () => { 
  setTimeout(() => {
    const preloader = document.getElementById('preloader') /* находим блок Preloader */
    preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
    body.remove('hidden');
  }, 500)
})


document.addEventListener('click', e => {
  if ( !e.target.closest('.popup__window') && popup.className.includes('popup-active') && !e.target.closest('.main-page__watch-btn')) {
    console.log('aa')
    popup.classList.remove('popup-active')
  }
})

closePopup.onclick = () => {
  popup.classList.remove('popup-active');
}


watch.onclick = (e) => {
  e.preventDefault();
  popup.classList.add('popup-active')
}

const heightHero = hero.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  if (lastScrollTop > scrollDistance && heightHero < scrollDistance) {
    header.classList.add('header-fixed')
  } else {
    header.classList.remove('header-fixed')
  }
  lastScrollTop = scrollDistance;

  if (heightHero * 2 < scrollDistance) {
    console.log(scrollUp)
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
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

const swiper = new Swiper('.streamer__swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 150,
  resistanceRatio: 0.5,
  pagination: {
    el: '.streamer__swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

const testimonialSwiper = new Swiper('.testimonial__swiper', {
  slidesPerView: 1,
  parallax: true,
  speed: 600,
  resistanceRatio: 0.5,
  pagination: {
    el: '.testimonial__swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 120,
    slideShadows: false,
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   }
  // }
});
