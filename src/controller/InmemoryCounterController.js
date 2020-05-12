export function InmemoryCounterController(dom, View) {
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

  function render() {
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
