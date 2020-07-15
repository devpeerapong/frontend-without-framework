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

const state = {
  count: 0,
  step: 1,
};

btnIncrementDOM.addEventListener("click", () => {
  state.count = Math.min(options.max, state.count + state.step);

  txtCountDOM.innerText = state.count;
});

btnDecrementDOM.addEventListener("click", () => {
  state.count = Math.max(options.min, state.count - state.step);

  txtCountDOM.innerText = state.count;
});

btnMinDOM.addEventListener("click", () => {
  state.count = options.min;

  txtCountDOM.innerText = state.count;
});

btnMaxDOM.addEventListener("click", () => {
  state.count = options.max;

  txtCountDOM.innerText = state.count;
});

inputStepDOM.addEventListener("change", (e) => {
  state.step = e.target.value;
});
