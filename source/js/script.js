/**
 * * Navigation menu open/close
 */

let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--active');

navToggle.addEventListener('click', function () {
  nav.classList.toggle('navigation--active');
});

/**
 * * Form validation with modal windows
 */

let form = document.querySelector('.review__form');
let formSubmit = document.querySelector('.form__submit');
let modalError = document.querySelector('.modal--error');
let modalSuccess = document.querySelector('.modal--success');
let modalButtons = document.querySelectorAll('.modal__button');
let active = 'modal--active';

form.addEventListener('submit', function () {
  modalSuccess.classList.add(active);
});

formSubmit.addEventListener('click', function () {
  let fields = form.querySelectorAll('input[required]');
  let email = form.querySelector('input[name="email"]');
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value === '') {
      modalError.classList.add(active);
      return;
    }
  }

  if (!emailRegex.test(email.value.toLowerCase())) {
    modalError.classList.add(active);
  }
});

modalButtons.forEach(function (modalButton) {
  modalButton.addEventListener('click', function () {
    modalError.classList.remove(active);
    modalSuccess.classList.remove(active);
  });
});
