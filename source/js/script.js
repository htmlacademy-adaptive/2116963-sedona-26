/**
 * * Navigation menu open/close
 */

let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--active');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('navigation--active');
});

/**
 * * Form validation with modal windows
 */

//TODO
