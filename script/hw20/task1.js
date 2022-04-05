'use strict'

const potatoWeight = 75;
let potatoesPricePerKg = 13;

function getPotatoesPrice (borschVolume) {
    if (borschVolume < 1) return 'Invalid borsch volume';

    const potatoesWeightPerLitter = Math.round((borschVolume * potatoWeight * 4) / 1000);
    return potatoesWeightPerLitter * potatoesPricePerKg;
}

console.log(getPotatoesPrice(25));

