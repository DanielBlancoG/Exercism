//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const new_date = date.getTime() + (1e9 * 1000);
  return new Date (new_date)
};

