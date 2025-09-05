//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (date) => {
  return date % 4 === 0 && (date % 100 !== 0 || date % 400 === 0);
};
