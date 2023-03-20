const OPERATIONS = {
  sum: "+",
  subtraction: "-",
  multiply: "*",
  division: '/'
};

function calculator ({a, b, operation}) {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;

    case OPERATIONS.subtraction:
      result = subtraction(a, b);
      break;

    case OPERATIONS.multiply:
      result = multiply(a, b);
      break;

    case OPERATIONS.division:
      result = division(a, b);
      break;

    default: break;
  }
}