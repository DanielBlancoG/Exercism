//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (matrix) => {
  const max_lenght = Math.max(...matrix.map((row) => row.length));

  return Array.from({ length: max_lenght }, (_, col) => {
    return matrix.map((row) => row[col] || "").join("");
  });
};
