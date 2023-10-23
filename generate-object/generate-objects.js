const fsPromises = require('fs').promises

const initialObject = require("../data-structure/data")
const objectToGenerate =   {
  "id": "paytableSymbol",
  "type": "paytableSymbol",
  "depth": {
  "layer": "helpPage1",
    "zIndex": 3
},
  "paytableSymbol_image_image_CC_paytable_0": {
    "id": "paytableSymbol_image_image_CC_paytable_0",
      "basicType": "image",
      "texture": "",
      "frame": "",
      "x": 770,
      "y": 455,
      "width": 1,
      "height": 1,
      "alpha": "1.0",
      "blendMode": 0,
      "origin": {
      "x": 0.5,
        "y": 0.5
    },
    "idBasicType": "paytableSymbolImage"
  }
}
const idTemplate = "paytableSymbol"
const startId = 10
const amount = 5000

for (let i = 0; i < amount; i++){
  const finalId = `${idTemplate}${startId + i}`
  initialObject[finalId] = JSON.parse(JSON.stringify(objectToGenerate))
  initialObject[finalId].id = finalId
}

fsPromises.writeFile('./generated.json', JSON.stringify(initialObject))