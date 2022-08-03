const BUTTONS = document.querySelectorAll('.colection__button');
const COUNTER = document.querySelector('.cart_counter');

BUTTONS.forEach(button => {
  button.addEventListener('click', () => {
    COUNTER.innerHTML++;
  });
});