document.querySelector('.header__burger').onclick = () => {
  document.getElementsByTagName('body')[0].classList.add('hidden');
  document.querySelector('.header__menu-wrapper').classList.add('active-menu');
  document.querySelector('.header').classList.add('back');
}
document.querySelector('.header__close-btn').onclick = () => {
  document.querySelector('.header__menu-wrapper').classList.remove('active-menu');
  document.getElementsByTagName('body')[0].classList.remove('hidden');
  document.querySelector('.header').classList.remove('back');
}


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

const swipers = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();