const btnMinDOM = document.querySelector("#btn-min");
const btnMaxDOM = document.querySelector("#btn-max");
const btnIncrementDOM = document.querySelector("#btn-inc");
const btnDecrementDOM = document.querySelector("#btn-dec");
const txtCountDOM = document.querySelector("#txt-count");
const inputStepDOM = document.querySelector("#input-step");

btnIncrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = Math.min(
    10,
    parseInt(txtCountDOM.innerText) + parseInt(inputStepDOM.value)
  );
});

btnDecrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = Math.max(
    0,
    parseInt(txtCountDOM.innerText) - parseInt(inputStepDOM.value)
  );
});

btnMinDOM.addEventListener("click", () => {
  txtCountDOM.innerText = 0;
});

btnMaxDOM.addEventListener("click", () => {
  txtCountDOM.innerText = 10;
});
