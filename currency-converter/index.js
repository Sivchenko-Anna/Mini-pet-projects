const valueInputNode = document.querySelector(".js-value-input");
const currencySelectorNode = document.querySelector(".js-currency-selector");
const outputNode = document.querySelector(".js-output");

valueInputNode.addEventListener('input', function() {
  const RUB = Number(valueInputNode.value);
  const currency = currencySelectorNode.value;

  const result = convert(RUB, currency);
  outputNode.innerText = result;
})