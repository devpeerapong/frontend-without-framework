export function SimpleCounterView(
  dom,
  { count, onIncrement, onDecrement, onMin, onMax },
) {
  const html = `
    <section class="container p-4">
      <button data-id="btn-max" class="btn btn-primary">
        <i class="fas fa-angle-double-up"></i>
      </button>
      <button data-id="btn-increment" class="btn btn-primary">
        <i class="fas fa-arrow-up"></i>
      </button>
      <h2 data-id="txt-count" class="d-inline-block ml-2 mr-2">0</h2>
      <button data-id="btn-decrement" class="btn btn-danger">
        <i class="fas fa-arrow-down"></i>
      </button>
      <button data-id="btn-min" class="btn btn-danger">
        <i class="fas fa-angle-double-down"></i>
      </button>
    </section>
`;

  dom.innerHTML = html;

  const txtCountEl = dom.querySelector('[data-id="txt-count"]');
  const btnIncrementEl = dom.querySelector('[data-id="btn-increment"]');
  const btnDecrementEl = dom.querySelector('[data-id="btn-decrement"]');
  const btnMinEl = dom.querySelector('[data-id="btn-min"]');
  const btnMaxEl = dom.querySelector('[data-id="btn-max"]');

  function render() {
    txtCountEl.textContent = count;
  }

  btnIncrementEl.addEventListener('click', () => onIncrement?.());
  btnDecrementEl.addEventListener('click', () => onDecrement?.());
  btnMinEl.addEventListener('click', () => onMin?.());
  btnMaxEl.addEventListener('click', () => onMax?.());

  render();
}
