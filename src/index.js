const txtCountEl = document.querySelector('#txt-count');
const btnIncrementEl = document.querySelector('#btn-increment');
const btnDecrementEl = document.querySelector('#btn-decrement');
const btnResetEl = document.querySelector('#btn-reset');

btnIncrementEl.addEventListener('click', () => {
  txtCountEl.textContent = parseInt(txtCountEl.textContent) + 1;
});

btnDecrementEl.addEventListener('click', () => {
  txtCountEl.textContent = parseInt(txtCountEl.textContent) - 1;
});

btnResetEl.addEventListener('click', () => {
  txtCountEl.textContent = 0;
});
