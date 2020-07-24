export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) { throw 'Creating list from undefined array'; }
  if (array.length === 0) { throw 'Creating list from empty array' }

  class LinkedList {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

  let head = new LinkedList(array[0]);
  let result = head;
  let i = 1;
  while (i < array.length) {
    head.next = new LinkedList(array[i]);
    head = head.next;
    i += 1;
  }
  return result;
  
}
