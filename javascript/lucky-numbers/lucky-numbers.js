// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const sum = (a, b) => Number(a.join("")) + Number(b.join(""));
  return sum(array1, array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reverse = (str) => String(str).split("").reverse().join("");
  return Number(reverse(value)) === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  return (input === '' || input == null) ? 'Required field' : (Number.isNaN(+input) || +input === 0 ? 'Must be a number besides 0' : '');
}
