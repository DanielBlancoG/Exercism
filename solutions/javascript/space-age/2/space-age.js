//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const age = (planet, age_seconds) => {
  const year_earth_second = 31557600; 
  switch (planet.toLowerCase()) {
    case "mercury":
      return parseFloat((age_seconds / (year_earth_second * 0.2408467)).toFixed(2));
    case "venus":
      return parseFloat((age_seconds / (year_earth_second * 0.61519726)).toFixed(2));
    case "earth":
      return parseFloat((age_seconds / (year_earth_second)).toFixed(2));
    case "mars":
      return parseFloat((age_seconds / (year_earth_second * 1.8808158)).toFixed(2));
    case "jupiter":
      return parseFloat((age_seconds / (year_earth_second * 11.862615)).toFixed(2));
    case "saturn":
      return parseFloat((age_seconds / (year_earth_second * 29.447498)).toFixed(2));
    case "uranus":
      return parseFloat((age_seconds / (year_earth_second * 84.016846)).toFixed(2));
    case "neptune":
      return parseFloat((age_seconds / (year_earth_second * 164.79132)).toFixed(2));
    default:
      throw new Error(`not a planet`);
  }

};

/* console.log(age('mercury', 2134835688)); */
