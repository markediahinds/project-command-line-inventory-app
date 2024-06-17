import { nanoid } from 'nanoid'
import inventoryPrices from './/data/inventoryPrices.json' assert { type: 'json' };
const inform = console.log


const index = (inventory) => {
    return inventory.map((inventoryItem) => `${inventoryItem.id}: ${inventoryItem.name} ${inventoryItem.priceInCents} ${inventoryItem.inStock}`).join('\n')
}

const create = (inventory, inventoryItemName, priceInCents) => {
    const inventoryItem = {
        name: inventoryItemName,
        id: nanoid(3),
        priceInCents: inventoryPrices[priceInCents] || Math.floor(Math.random() * 3000),
        inStock: false
    }
    inventory.push(inventoryItem)
    console.log(inventory[inventory.length-1])
    return inventory
}

export {
    index, 
    create, 
    // show, 
    // edit, 
    // destroy
}


 // const dollars = (inventory[priceInCents] / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})

 // convert to BTC