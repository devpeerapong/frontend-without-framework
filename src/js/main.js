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

const actions = {
  increment() {
    state.count = Math.min(options.max, state.count + state.step);
  },
  decrement() {
    state.count = Math.max(options.min, state.count - state.step);
  },
  changeStep(step) {
    state.step = step;
  },
  setCountToMin() {
    state.count = options.min;
  },
  setCountToMax() {
    state.count = options.max;
  },
};

btnIncrementDOM.addEventListener("click", () => {
  actions.increment();

  txtCountDOM.innerText = state.count;
});

btnDecrementDOM.addEventListener("click", () => {
  actions.decrement();

  txtCountDOM.innerText = state.count;
});

btnMinDOM.addEventListener("click", () => {
  actions.setCountToMin();

  txtCountDOM.innerText = state.count;
});

btnMaxDOM.addEventListener("click", () => {
  actions.setCountToMax();

  txtCountDOM.innerText = state.count;
});

inputStepDOM.addEventListener("change", (e) => {
  actions.changeStep(parseInt(e.target.value));
});
