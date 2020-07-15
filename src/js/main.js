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

let state = {
  count: 0,
  step: 1,
};

const actions = {
  increment() {
    setState({ count: Math.min(options.max, state.count + state.step) });
  },
  decrement() {
    setState({ count: Math.max(options.min, state.count - state.step) });
  },
  changeStep(step) {
    setState({ step });
  },
  setCountToMin() {
    setState({ count: options.min });
  },
  setCountToMax() {
    setState({ count: options.max });
  },
};

function render() {
  txtCountDOM.innerText = state.count;
  inputStepDOM.value = state.step;
}

function setState(newState) {
  state = { ...state, ...newState };

  render();
}

btnIncrementDOM.addEventListener("click", actions.increment);
btnDecrementDOM.addEventListener("click", actions.decrement);
btnMinDOM.addEventListener("click", actions.setCountToMin);
btnMaxDOM.addEventListener("click", actions.setCountToMax);
inputStepDOM.addEventListener("change", (e) => {
  actions.changeStep(parseInt(e.target.value));
});
