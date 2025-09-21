//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (client_name) => {
  return client_name !== undefined
    ? `One for ${client_name}, one for me.`
    : `One for you, one for me.`;
};