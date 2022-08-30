/**
 * Navigation menu open/close
 * Open menu on movile: 'navigation--active' class
 */

let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  nav.classList.toggle('navigation--active');
});

/**
 * Form modal windows
 * Show modal window: 'modal--active' class
 */

let form = document.querySelector('.review__form');
let formSubmit = document.querySelector('.form__submit');
let modalError = document.querySelector('.modal--error');
let modalSuccess = document.querySelector('.modal--success');
let modalButtonError = document.querySelector('.modal__button--error');
let modalButtonSuccess = document.querySelector('.modal__button--success');
let active = 'modal--active';

form.addEventListener('submit', function () {
  modalError.classList.remove(active);
  modalSuccess.classList.add(active);
});

formSubmit.addEventListener('click', function () {
  modalError.classList.add(active);
});

modalButtonError.addEventListener('click', function () {
  modalError.classList.remove(active);
});

modalButtonSuccess.addEventListener('click', function () {
  modalSuccess.classList.remove(active);
});
