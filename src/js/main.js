const btnMinDOM = document.querySelector("#btn-min");
const btnMaxDOM = document.querySelector("#btn-max");
const btnIncrementDOM = document.querySelector("#btn-inc");
const btnDecrementDOM = document.querySelector("#btn-dec");
const txtCountDOM = document.querySelector("#txt-count");

btnIncrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = Math.min(10, parseInt(txtCountDOM.innerText) + 1);
});

btnDecrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = Math.max(0, parseInt(txtCountDOM.innerText) - 1);
});

btnMinDOM.addEventListener("click", () => {
  txtCountDOM.innerText = 0;
});

btnMaxDOM.addEventListener("click", () => {
  txtCountDOM.innerText = 10;
});
