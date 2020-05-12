function Counter(dom) {
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

  const html = `
    <section class="container p-4">
      <h2>Counter: <span data-id="txt-count">0</span></h2>
      <h5>Remaining: <span data-id="txt-remaining">0</span></h5>
      <div class="form-inline mb-4">
        <label class="label mr-2">Min</label>
        <input data-id="input-min" type="text" class="form-control mr-4" />

        <label class="label mr-2">Max</label>
        <input data-id="input-max" type="text" class="form-control" />
      </div>
      <label class="label mr-2">Step</label>
      <input data-id="input-step" type="number" class="form-control mb-2 w-25" />
      <button data-id="btn-increment" class="btn btn-primary">
        <i class="fas fa-arrow-up"></i>
      </button>
      <button data-id="btn-decrement" class="btn btn-danger">
        <i class="fas fa-arrow-down"></i>
      </button>
      <button data-id="btn-reset" class="btn btn-success mr-5">
        <i class="fas fa-redo-alt"></i>
      </button>
      <button data-id="btn-max" class="btn btn-primary">
        <i class="fas fa-angle-double-up"></i>
      </button>
      <button data-id="btn-min" class="btn btn-danger">
        <i class="fas fa-angle-double-down"></i>
      </button>
    </section>
`;

  dom.innerHTML = html;

  const txtCountEl = dom.querySelector('[data-id="txt-count"]');
  const txtRemainingEl = dom.querySelector('[data-id="txt-remaining"]');
  const btnIncrementEl = dom.querySelector('[data-id="btn-increment"]');
  const btnDecrementEl = dom.querySelector('[data-id="btn-decrement"]');
  const btnResetEl = dom.querySelector('[data-id="btn-reset"]');
  const btnMinEl = dom.querySelector('[data-id="btn-min"]');
  const btnMaxEl = dom.querySelector('[data-id="btn-max"]');
  const inputStepEl = dom.querySelector('[data-id="input-step"]');
  const inputMinEl = dom.querySelector('[data-id="input-min"]');
  const inputMaxEl = dom.querySelector('[data-id="input-max"]');

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
  inputMinEl.addEventListener('change', e =>
    actions.changeMin(+e.target.value),
  );
  inputMaxEl.addEventListener('change', e =>
    actions.changeMax(+e.target.value),
  );

  render();
}

Array.from({ length: 5 }).forEach((_, i) => {
  const dom = document.createElement('div');

  Counter(dom);

  document.body.appendChild(dom);
});
