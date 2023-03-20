const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const selectOperationNode = document.querySelector(".js-select-operation");
const resultBtnNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");

resultBtnNode.addEventListener('click', function() {
  const a = Number(inputANode.value);
  const b = Number(inputBNode.value);
  const operation = selectOperationNode.value;
  const result = calculate({a, b, operation});

  result == Infinity ? outputNode.innerHTML = 'На 0 делить нельзя!' : (outputNode.innerHTML = result);
})