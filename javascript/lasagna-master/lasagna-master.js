/// <reference path="./global.d.ts" />
// @ts-check

/* Determine whether the lasagne is done */
export function cookingStatus(remainingTime) {
  return remainingTime === 0 || remainingTime === !Number
    ? "Lasagna is done."
    : remainingTime > 0
    ? "Not done, please wait."
    : "You forgot to set the timer.";
}

/* Estimate the preparation time */
export function preparationTime(layers, timePerLayer) {
  return layers.length * (timePerLayer === undefined ? 2 : timePerLayer);
}

/* Calculate the amount of sauce and noodles needed */
export function quantities(ingredients) {
  const count = ingredients.reduce(
    (acc, ingredient) => {
      if (ingredient === "noodles") acc.noodles += 50;
      if (ingredient === "sauce") acc.sauce += 0.2;
      return acc;
    },
    {
      noodles: 0,
      sauce: 0,
    }
  );

  return count;
}

/* Add the secret ingredient */
export function addSecretIngredient(friendList, myOwnRecipe) {
  myOwnRecipe.push(friendList[friendList.length - 1]);
}

/* Scale the recipe */
export function scaleRecipe(recipe_2_portions, number_portions){
  return Object.fromEntries(
    Object.entries(recipe_2_portions).map(([k, v]) => [
      k,
      (v * number_portions) / 2,
    ])
  );
}

