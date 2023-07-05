const meorizedData = [];
const addNumbers = (a, b) => {
  let result;
  if (meorizedData[[a,b]] === undefined) {
    console.log("Computing");
    result = a + b;
    meorizedData[[a,b]] = result
  }
  return result ?? meorizedData[[a,b]]
};
console.log(addNumbers(4, 5));
console.log(addNumbers(4, 5));