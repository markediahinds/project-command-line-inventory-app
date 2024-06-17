const inform = console.log
import { writeJsonFile, readJsonFile } from './src/helpers.js'
import { index, create } from './src/inventoryController.js'



function run() {
    const action = process.argv[2]
    let inventoryItem = '' 
    let inventory = readJsonFile('./src/data', 'inventory.json')
    let writeToFile = false
    let updatedInventory = []
    
    switch(action) {
        case "index":
            const inventoryList = index(inventory)
            inform(inventoryList)
            break;
        case "create":
            inventoryItem = process.argv[3]
            updatedInventory = create(inventory, inventoryItem)
            writeToFile = true
            break;
        case "show":
            inventoryItem = process.argv[3] 
            const displayInventoryItem = show(inventory, inventoryItem)
            inform(displayInventoryItem)
            break;
        case "edit":
            inventoryItem = process.argv[3] 
            updatedInventory = edit(inventory, inventoryItem, process.argv[4])
            writeToFile = true
            break;
        case "destroy":
            updatedInventory = destroy(inventory, inventoryItem)
            writeToFile = true
            break;
        // case "total": 
        //      const total = 
                inform
        default: 
        inform('There was an error')
    }
    if(writeToFile) {
        writeJsonFile('./src/data', 'inventory.json', updatedInventory)
    }
}

run ()