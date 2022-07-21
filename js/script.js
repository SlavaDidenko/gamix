const input = document.querySelector(".form__input");
const clear = document.querySelector('.form__clear-btn');
const previous = document.querySelector('.form__previous-btn');
const next = document.querySelector('.form__next-btn');
const parent = document.querySelector('.form__parent-btn');
const first = document.querySelector('.form__first-btn');
const last = document.querySelector('.form__last-btn');
const btns = document.querySelectorAll('.btn');



document.querySelector('.header__burger').onclick = () => {
  document.getElementsByTagName('body')[0].classList.add('hidden');
  document.querySelector('.header__menu-wrapper').classList.add('active-menu');
  
}
document.querySelector('.header__close-btn').onclick = () => {
  document.querySelector('.header__menu-wrapper').classList.remove('active-menu');
  document.getElementsByTagName('body')[0].classList.remove('hidden');
}

function reset(event) {
  let element = document.querySelectoAll('.active');

  event.preventDefault();

  element.forEach(el => {
    el.classList.remove('active')
  });

  input.value = '';
/////
  btns.forEach(btn => {
    if (btn.classList.contains('form__clear-btn')) return;
    btn.disabled = true;
  });
}

function checkSelector() {
  let selector = document.querySelector(input.value);

  selector.classList.add('active');
/////
  btns.forEach(btn => {
    if (btn.classList.contains('form__clear-btn')) return;
    btn.disabled = true;
  });

  checkBtns(selector);
}

function checkBtns (selector) {
  if (selector.parentElement) {
    parent.disabled = false;
  }

  if (selector.previousElementSibling) {
    previous.disabled = false;
  }

  console.log(selector.nextElementSibling)
  if (selector.nextElementSibling) {
    next.disabled = false;
  }
  
  if (selector.firstElementChild) {
    first.disabled = false;
  }

  if (selector.lastElementChild) {
    last.disabled = false;
  }
}

function replace (event) {
  event.preventDefault();

  let selector = document.querySelector(input.value);

  selector.classList.remove('active');

  if(this.classList.contains('form__parent-btn')) selector.parentElement.classList.add('active');
  if(this.classList.contains('form__previous-btn')) selector.previousElementSibling.classList.add('active');
  if (this.classList.contains('form__next-btn')) selector.nextElementSibling.classList.add('active');
  if (this.classList.contains('form__first-btn')) selector.firstElementChild.classList.add('active');
  if (this.classList.contains('form__last-btn')) selector.lastElementChild.classList.add('active');
}

// input.addEventListener('input', checkSelector)
// clear.addEventListener('click', reset)
// previous.addEventListener('click', replace);
// next.addEventListener('click', replace);
// first.addEventListener('click', replace);
// last.addEventListener('click', replace);
// parent.addEventListener('click', replace);