/// <reference path="./global.d.ts" />
// @ts-check

/* Determine whether the lasagne is done */
export function cookingStatus (remainingTime){
    return remainingTime === 0 || remainingTime === !Number ? 'Lasagna is done.' : remainingTime > 0 ? 'Not done, please wait.' : 'You forgot to set the timer.'
}

/* Estimate the preparation time */
export function preparationTime(layers, timePerLayer){
    return layers.length * (timePerLayer === undefined ? 2 : timePerLayer);
}



