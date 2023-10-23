const data = require("./data")
const bigData = require("./big-data")
const { ComplexClass } = require("./complex-class");

function createSet() {
  const set = new Set()
  for (let objectKey in data) {
    set.add(data[objectKey])
  }

  return set
}

function createBigSet() {
  const set = new Set()
  for (let objectKey in bigData) {
    set.add(bigData[objectKey])
  }

  return set
}


function createComplexSet() {
  const complexSet = new Set()

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

    complexSet.add(new ComplexClass(finalId))
  }

  return complexSet
}

module.exports = { createSet, createBigSet, createComplexSet }