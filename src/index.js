let state = {
  count: 0,
  min: 0,
  max: 10,
  step: 1,
};

function setState(nextState) {
  state = { ...state, ...nextState };

  render();
}

const actions = {
  increment() {
    const number = state.count + state.step;
    const max = state.max;

    setState({ count: Math.min(number, max) });
  },
  decrement() {
    const number = state.count - state.step;
    const min = state.min;

    setState({ count: Math.max(number, min) });
  },
  reset() {
    setState({ count: 0, inputMaxEl: 10, inputMinEl: 0, inputStepEl: 1 });
  },
  changeStep(step) {
    setState({ step });
  },
  changeMin(min) {
    setState({ min });
  },
  changeMax(max) {
    setState({ max });
  },
  maxCount() {
    setState({ count: state.max });
  },
  minCount() {
    setState({ count: state.min });
  },
};

const txtCountEl = document.querySelector('#txt-count');
const txtRemainingEl = document.querySelector('#txt-remaining');
const btnIncrementEl = document.querySelector('#btn-increment');
const btnDecrementEl = document.querySelector('#btn-decrement');
const btnResetEl = document.querySelector('#btn-reset');
const btnMinEl = document.querySelector('#btn-min');
const btnMaxEl = document.querySelector('#btn-max');
const inputStepEl = document.querySelector('#input-step');
const inputMinEl = document.querySelector('#input-min');
const inputMaxEl = document.querySelector('#input-max');

function render() {
  const txtCountClassName =
    state.count > 0.75 * state.max
      ? 'text-success'
      : state.count > 0.5 * state.max
      ? 'text-warning'
      : 'text-danger';
  const remainingCount = state.max - state.count;

  txtCountEl.className = txtCountClassName;
  txtCountEl.textContent = state.count;
  txtRemainingEl.textContent = remainingCount;
  inputMinEl.value = state.min;
  inputMaxEl.value = state.max;
  inputStepEl.value = state.step;
}

btnIncrementEl.addEventListener('click', actions.increment);
btnDecrementEl.addEventListener('click', actions.decrement);
btnResetEl.addEventListener('click', actions.reset);
btnMinEl.addEventListener('click', actions.minCount);
btnMaxEl.addEventListener('click', actions.maxCount);
inputStepEl.addEventListener('change', e =>
  actions.changeStep(+e.target.value),
);
inputMinEl.addEventListener('change', e => actions.changeMin(+e.target.value));
inputMaxEl.addEventListener('change', e => actions.changeMax(+e.target.value));

render();
