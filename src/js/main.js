const btnIncrementDOM = document.querySelector("#btn-inc");
const btnDecrementDOM = document.querySelector("#btn-dec");
const txtCountDOM = document.querySelector("#txt-count");

btnIncrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = parseInt(txtCountDOM.innerText) + 1;
});

btnDecrementDOM.addEventListener("click", () => {
  txtCountDOM.innerText = parseInt(txtCountDOM.innerText) - 1;
});
