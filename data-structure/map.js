const data = require("./data")
const bigData = require("./big-data")
const { ComplexClass } = require("./complex-class");

function createMap() {
  const map = new Map()
  for (let objectKey in data) {
    map.set(objectKey, data[objectKey])
  }

  return map
}

function createBigMap() {
  const map = new Map()
  for (let objectKey in bigData) {
    map.set(objectKey, bigData[objectKey])
  }

  return map
}


function createComplexMap() {
  const map = new Map()

  const idTemplate = "paytableSymbol"
  const startId = 10
  const amount = 1000

  let center = Math.ceil(amount / 2)
  for (let i = 0; i < amount; i++) {
    let finalId = `${idTemplate}${startId + i}`
    if (center === i) {
      finalId = "paytableSymbol6"
    }
    if (center - 1 === i) {
      finalId = "paytableSymbol5"
    }
    map.set(finalId, new ComplexClass(finalId))
  }

  return map
}


module.exports = {createMap, createBigMap, createComplexMap}