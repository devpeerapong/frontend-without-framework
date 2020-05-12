export function RichCounterView(
  dom,
  {
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
  },
) {
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
      count > 0.75 * max
        ? 'text-success'
        : count > 0.5 * max
        ? 'text-warning'
        : 'text-danger';
    const remainingCount = max - count;

    txtCountEl.className = txtCountClassName;
    txtCountEl.textContent = count;
    txtRemainingEl.textContent = remainingCount;
    inputMinEl.value = min;
    inputMaxEl.value = max;
    inputStepEl.value = step;
  }

  btnIncrementEl.addEventListener('click', () => onIncrement?.());
  btnDecrementEl.addEventListener('click', () => onDecrement?.());
  btnResetEl.addEventListener('click', () => onReset?.());
  btnMinEl.addEventListener('click', () => onMin?.());
  btnMaxEl.addEventListener('click', () => onMax?.());
  inputStepEl.addEventListener('change', e => onChangeStep?.(+e.target.value));
  inputMinEl.addEventListener('change', e => onChangeMin?.(+e.target.value));
  inputMaxEl.addEventListener('change', e => onChangeMax?.(+e.target.value));

  render();
}
