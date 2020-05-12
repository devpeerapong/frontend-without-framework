export function LocalStorageCounterController(dom, View) {
  function setState(nextState) {
    const state = getState();

    localStorage.setItem(
      'counterState',
      JSON.stringify({ ...state, ...nextState }),
    );

    render();
  }

  const actions = {
    increment() {
      const state = getState();
      const number = state.count + state.step;
      const max = state.max;

      setState({ count: Math.min(number, max) });
    },
    decrement() {
      const state = getState();

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
      const state = getState();

      setState({ count: state.max });
    },
    minCount() {
      const state = getState();

      setState({ count: state.min });
    },
  };

  function render() {
    const state = getState();

    View(dom, {
      ...state,
      onChangeMin: actions.changeMin,
      onChangeMax: actions.changeMax,
      onChangeStep: actions.changeStep,
      onReset: actions.reset,
      onDecrement: actions.decrement,
      onIncrement: actions.increment,
      onMax: actions.maxCount,
      onMin: actions.minCount,
    });
  }

  render();
}

function getState() {
  const json = localStorage.getItem('counterState');

  return JSON.parse(json) ?? { count: 0, min: 0, max: 10, step: 1 };
}
