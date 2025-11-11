const { boatInventory } = require("./fishingBoat.js")

// get fishingBoat inventory
const boatInv = boatInventory()
// create mongerInventory 

const mongerInventory = (dailyPriceLimit) => {
    const mongersInventory = []
    for (const fish of boatInv) {
        if (fish.amount >= 10 && fish.price <=7.50 && fish.price <= dailyPriceLimit) {
            let fishForChef = fish
            fishForChef.amount = 5
            mongersInventory.push(fishForChef)
        }
    }

    return mongersInventory
}


module.exports = { mongerInventory }


// fish monger purchasing rules
// buys 10 of each fish
// if amount is > 10, do not purchase
// price must be <= 7.50 per fish

// return array of fish


