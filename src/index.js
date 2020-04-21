const txtCountEl = document.querySelector('#txt-count');
const btnIncrementEl = document.querySelector('#btn-increment');
const btnDecrementEl = document.querySelector('#btn-decrement');
const btnResetEl = document.querySelector('#btn-reset');
const inputStepEl = document.querySelector('#input-step');
const inputMinEl = document.querySelector('#input-min');
const inputMaxEl = document.querySelector('#input-max');

btnIncrementEl.addEventListener('click', () => {
  const number =
    parseInt(txtCountEl.textContent) + parseInt(inputStepEl.value || '1');
  const max = parseInt(inputMaxEl.value || '0');

  txtCountEl.textContent = Math.min(number, max);
});

btnDecrementEl.addEventListener('click', () => {
  const number =
    parseInt(txtCountEl.textContent) - parseInt(inputStepEl.value || '1');
  const min = parseInt(inputMinEl.value || '0');

  txtCountEl.textContent = Math.max(number, min);
});

btnResetEl.addEventListener('click', () => {
  txtCountEl.textContent = 0;
  inputMinEl.value = 0;
  inputMaxEl.value = 10;
  inputStepEl.value = 1;
});
