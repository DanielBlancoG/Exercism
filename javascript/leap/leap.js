//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (date) => {
  return Number.isInteger(date / 4) && (Number.isInteger(date / 100) || Number.isInteger(date / 400));
};
