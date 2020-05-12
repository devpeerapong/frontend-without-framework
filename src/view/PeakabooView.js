export function PeakabooView(dom, { title, ChildView }) {
  let state = {
    isOpen: false,
  };

  function setState(newState) {
    state = { ...state, ...newState };

    render();
  }

  const actions = {
    toggle() {
      setState({ isOpen: !state.isOpen });
    },
  };

  const html = `
    <div data-id="parent" style="
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      
      display: flex;
      align-items: center;
    ">
      <div style="
        writing-mode: vertical-lr;
        text-orientation: upright;
        background: lightgray;
        padding: 20px;
      ">${title}</div>
      <div data-id="children"></div>
  </div>
  `;

  dom.innerHTML = html;

  const parentEl = dom.querySelector('[data-id="parent"]');
  const childrenEl = dom.querySelector('[data-id="children"]');

  function render() {
    ChildView(childrenEl);

    const display = state.isOpen ? null : 'none';

    childrenEl.style.display = display;
  }

  render();

  parentEl.addEventListener('mouseenter', actions.toggle);
  parentEl.addEventListener('mouseleave', actions.toggle);
}
