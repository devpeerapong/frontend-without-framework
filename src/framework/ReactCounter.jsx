import React from 'react';

export function withInmemoryCounter(Component) {
  class WithInmemoryCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
        min: 0,
        max: 10,
        step: 1,
      };

      this.changeMin = this.changeMin.bind(this);
      this.changeMax = this.changeMax.bind(this);
      this.changeStep = this.changeStep.bind(this);
      this.reset = this.reset.bind(this);
      this.decrement = this.decrement.bind(this);
      this.increment = this.increment.bind(this);
      this.maxCount = this.maxCount.bind(this);
      this.minCount = this.minCount.bind(this);
    }

    increment() {
      const number = this.state.count + this.state.step;
      const max = this.state.max;

      this.setState({ count: Math.min(number, max) });
    }

    decrement() {
      const number = this.state.count - this.state.step;
      const min = this.state.min;

      this.setState({ count: Math.max(number, min) });
    }

    reset() {
      this.setState({ count: 0, inputMaxEl: 10, inputMinEl: 0, inputStepEl: 1 });
    }

    changeStep(step) {
      this.setState({ step });
    }

    changeMin(min) {
      this.setState({ min });
    }

    changeMax(max) {
      this.setState({ max });
    }

    maxCount() {
      this.setState({ count: this.state.max });
    }

    minCount() {
      this.setState({ count: this.state.min });
    }

    render() {
      const actions = {
        onChangeMin: this.changeMin,
        onChangeMax: this.changeMax,
        onChangeStep: this.changeStep,
        onReset: this.reset,
        onDecrement: this.decrement,
        onIncrement: this.increment,
        onMax: this.maxCount,
        onMin: this.minCount,
      };

      return <Component {...this.state} {...actions} />;
    }
  }

  return WithInmemoryCounter;
}

export function CounterView({
  min,
  max,
  step,
  count,
  onIncrement,
  onDecrement,
  onReset,
  onMin,
  onMax,
  onChangeStep,
  onChangeMin,
  onChangeMax,
}) {
  const txtCountClassName =
    count > 0.75 * max
      ? 'text-success'
      : count > 0.5 * max
      ? 'text-warning'
      : 'text-danger';
  const remainingCount = max - count;

  return (
    <section className="container p-4">
      <h2>
        Counter:{' '}
        <span data-id="txt-count" className={txtCountClassName}>
          {count}
        </span>
      </h2>
      <h5>
        Remaining: <span data-id="txt-remaining">{remainingCount}</span>
      </h5>
      <div className="form-inline mb-4">
        <label className="label mr-2">Min</label>
        <input
          data-id="input-min"
          type="text"
          className="form-control mr-4"
          onChange={e => onChangeMin(e.target.value)}
          value={min}
        />

        <label className="label mr-2">Max</label>
        <input
          data-id="input-max"
          type="text"
          className="form-control"
          onChange={e => onChangeMax?.(+e.target.value)}
          value={max}
        />
      </div>
      <label className="label mr-2">Step</label>
      <input
        data-id="input-step"
        type="number"
        className="form-control mb-2 w-25"
        onChange={e => onChangeStep?.(+e.target.value)}
        value={step}
      />
      <button
        data-id="btn-increment"
        className="btn btn-primary"
        onClick={onIncrement}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      <button
        data-id="btn-decrement"
        className="btn btn-danger"
        onClick={onDecrement}
      >
        <i className="fas fa-arrow-down"></i>
      </button>
      <button
        data-id="btn-reset"
        className="btn btn-success mr-5"
        onClick={onReset}
      >
        <i className="fas fa-redo-alt"></i>
      </button>
      <button data-id="btn-max" className="btn btn-primary" onClick={onMax}>
        <i className="fas fa-angle-double-up"></i>
      </button>
      <button data-id="btn-min" className="btn btn-danger" onClick={onMin}>
        <i className="fas fa-angle-double-down"></i>
      </button>
    </section>
  );
}
