const data = require("./data")
const bigData = require("./big-data")
const { ComplexClass } = require("./complex-class");


function createComplexObject() {
  const complexObject = {}

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
    complexObject[finalId] = new ComplexClass(finalId)
  }

  return complexObject
}


module.exports = {
  obj: data,
  bigObj: bigData,
  createComplexObject
}
