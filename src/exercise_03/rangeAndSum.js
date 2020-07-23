export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (start == end) { return []; }

  const dirction = end - start;
  const step = dirction > 0 ? 1 : -1;
  let result = [];
  for (let i = start; dirction > 0 ? i < end : i > end; i+=step) {
    result.push(i);
  }
  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
  }
  return result;
}
