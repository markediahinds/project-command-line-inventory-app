// readJsonFile & write (2 func) (pull appropriate files)
// file path, utf, etc. 

const { writeFileSync, readFileSync } = require('node:fs')

const writeJsonFile = (path, fileName, data) => {
    data = JSON.stringify(data, 0, 2)
    return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
}

const readJsonFile = (path, fileName) => {
    const data = readFileSync(`${path}/${fileName}`, "utf-8") 
    return data ? JSON.parse(data) : []
}

module.exports = { writeJsonFile, readJsonFile }