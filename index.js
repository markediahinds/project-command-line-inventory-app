const inform = console.log
const { writeJsonFile, readJsonFile } = require('./src/helpers')
const { index, create, show, edit, destroy} = require('./src/inventoryController')

function run() {
    const action = process.argv[2]
    const inventoryItem = process.argv[3]
    let inventory = readJsonFile('./data', 'inventory.json')
    let writeToFile = false
    let updatedInventory = []

    switch(action) {
        case "index":
            inform(index(inventory))
            break;
        case "create":
            inform(action, inventory)
    }
}

run ()