'use strict'

const potatoWeight = 75;
let potatoesPricePerKg = 13;

function getPotatoesPrice (borschVolume) {
    if (borschVolume < 1) return 'Invalid borsch volume';

    const potatoesWeightPerLitter = (borschVolume * potatoWeight * 4) / 1000;
    let totalPotatoesPrice = potatoesWeightPerLitter * potatoesPricePerKg;

    return Math.round(totalPotatoesPrice);
}

console.log(getPotatoesPrice(2));