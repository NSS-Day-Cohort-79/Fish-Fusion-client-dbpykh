// import monger inventory 
const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (dailyPriceLimit) => {
    const mongerInv = mongerInventory(dailyPriceLimit)

    let menuString = `
        <h1>Menu</h1>

        <article class="menu">
        `

    for (const fish of mongerInv) {
        menuString += `
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
            `
    }

    menuString += `</article>`

    return menuString
}

module.exports = { fishMenu }

//define a function that returns the HTML string fishMenu