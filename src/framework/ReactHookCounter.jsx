import React, { useState } from 'react';

export function useCounter() {
  const [state, _setState] = useState({
    count: 0,
    min: 0,
    max: 10,
    step: 1,
  });

  function setState(newState) {
    _setState({ ...state, ...newState });
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

  return {
    ...state,
    onChangeMin: actions.changeMin,
    onChangeMax: actions.changeMax,
    onChangeStep: actions.changeStep,
    onReset: actions.reset,
    onDecrement: actions.decrement,
    onIncrement: actions.increment,
    onMax: actions.maxCount,
    onMin: actions.minCount,
  };
}

export function Counter() {
  const { count, onIncrement, onDecrement, onMin, onMax } = useCounter();

  return (
    <section className="container p-4">
      <button data-id="btn-max" className="btn btn-primary" onClick={onMax}>
        <i className="fas fa-angle-double-up"></i>
      </button>
      <button
        data-id="btn-increment"
        className="btn btn-primary"
        onClick={onIncrement}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      <h2 data-id="txt-count" className="d-inline-block ml-2 mr-2">
        {count}
      </h2>
      <button
        data-id="btn-decrement"
        className="btn btn-danger"
        onClick={onDecrement}
      >
        <i className="fas fa-arrow-down"></i>
      </button>
      <button data-id="btn-min" className="btn btn-danger" onClick={onMin}>
        <i className="fas fa-angle-double-down"></i>
      </button>
    </section>
  );
}
