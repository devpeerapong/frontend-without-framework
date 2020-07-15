const btnMinDOM = document.querySelector("#btn-min");
const btnMaxDOM = document.querySelector("#btn-max");
const btnIncrementDOM = document.querySelector("#btn-inc");
const btnDecrementDOM = document.querySelector("#btn-dec");
const txtCountDOM = document.querySelector("#txt-count");
const inputStepDOM = document.querySelector("#input-step");
const inputMinDOM = document.querySelector("#input-min");
const inputMaxDOM = document.querySelector("#input-max");

let state = {
  count: 0,
  step: 1,
  min: 0,
  max: 10,
};

const actions = {
  increment() {
    setState({ count: Math.min(state.max, state.count + state.step) });
  },
  decrement() {
    setState({ count: Math.max(state.min, state.count - state.step) });
  },
  changeStep(step) {
    if (step > state.max - state.min) {
      setState({ step: state.step });
      return;
    }

    setState({ step });
  },
  changeMin(min) {
    if (min >= state.max) {
      setState({ min: state.min });
      return;
    }

    setState({ min, count: Math.max(min, state.count) });
  },
  changeMax(max) {
    if (max <= state.min) {
      setState({ max: state.max });
      return;
    }

    setState({ max, count: Math.min(max, state.count) });
  },
  setCountToMin() {
    setState({ count: state.min });
  },
  setCountToMax() {
    setState({ count: state.max });
  },
};

function render() {
  txtCountDOM.innerText = state.count;
  inputStepDOM.value = state.step;
  inputMinDOM.value = state.min;
  inputMaxDOM.value = state.max;
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
inputMinDOM.addEventListener("change", (e) => {
  actions.changeMin(parseInt(e.target.value));
});
inputMaxDOM.addEventListener("change", (e) => {
  actions.changeMax(parseInt(e.target.value));
});

render();
