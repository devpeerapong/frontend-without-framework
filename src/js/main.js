const btnMinDOM = document.querySelector("#btn-min");
const btnMaxDOM = document.querySelector("#btn-max");
const btnIncrementDOM = document.querySelector("#btn-inc");
const btnDecrementDOM = document.querySelector("#btn-dec");
const txtCountDOM = document.querySelector("#txt-count");
const inputStepDOM = document.querySelector("#input-step");

const options = {
  min: 0,
  max: 10,
};

btnIncrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = Math.min(
    options.max,
    parseInt(txtCountDOM.innerText) + parseInt(inputStepDOM.value)
  );
});

btnDecrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = Math.max(
    options.min,
    parseInt(txtCountDOM.innerText) - parseInt(inputStepDOM.value)
  );
});

btnMinDOM.addEventListener("click", () => {
  txtCountDOM.innerText = options.min;
});

btnMaxDOM.addEventListener("click", () => {
  txtCountDOM.innerText = options.max;
});
