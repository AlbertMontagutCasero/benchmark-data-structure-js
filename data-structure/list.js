const data = require("./data")
const bigData = require("./big-data")
const { ComplexClass } = require("./complex-class");

function createList() {
  const list = []
  for (let objectKey in data) {
    list.push(data[objectKey])
  }

  return list
}

function createBigList() {
  const list = []
  for (let objectKey in bigData) {
    list.push(bigData[objectKey])
  }

  return list
}

function createComplexList() {
  const list = []

  const idTemplate = "paytableSymbol"
  const startId = 10
  const amount = 1000

  let center = Math.ceil(amount / 2)
  for (let i = 0; i < amount; i++){
    let finalId = `${idTemplate}${startId + i}`
    if (center === i){
      finalId = "paytableSymbol6"
    }
    if (center - 1 === i){
      finalId = "paytableSymbol5"
    }
    list.push(new ComplexClass(finalId))
  }

  return list
}

module.exports = { createList, createBigList, createComplexList }