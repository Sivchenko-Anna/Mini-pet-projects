const RATES = {
  USD: 0.013,
  EUR: 0.012,
  THB: 0.45,
};

function convert({RUB, currency}) {
  if(!RATES[currency]) {
    return null;
  }

  return RUB * RATES[currency];
}