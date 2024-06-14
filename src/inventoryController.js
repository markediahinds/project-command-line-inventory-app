const { nanoid } = require('nanoid')
const inventory = require('../src/data/inventory.json') // ???
const inventoryPrices = require('.//data/inventoryPrices.json')
const cart = require('../src/data/cart.json')
const inform = console.log

const create = (inventory, inventoryItemName, priceInCents) => {
    const inventoryItem = {
        name: inventoryItemName,
        id: nanoid(3),
        priceInCents: inventoryPrices[priceInCents] || Math.floor(Math.random() * 3000),
        inStock: false
    }
    inventory.push(inventoryItem)
    return inventory
}

const index = (inventory) => {
    return inventory.map((inventoryItem) => `${inventoryItem.id}: ${inventoryItem.name} ${inventoryItem.priceInCents} ${inventoryItem.inStock}`).join('\n')
}