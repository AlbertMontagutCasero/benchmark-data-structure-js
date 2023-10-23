const benchmark = require("benchmark");

let setElementRef = {
  "backgroundFrame": {
    "id": "backgroundFrame",
    "type": "image",
    "depth": {
      "layer": "base",
      "zIndex": "2"
    },
    "backgroundFrame_image_image_CC_backgroundFrame_0": {
      "id": "backgroundFrame_image_image_CC_backgroundFrame_0",
      "basicType": "image",
      "texture": "",
      "frame": "",
      "x": 970,
      "y": 470,
      "width": 1,
      "height": 1,
      "alpha": "1.00",
      "blendMode": 0,
      "origin": {
        "x": 0.5,
        "y": 0.5
      },
      "idBasicType": "backgroundFrame",
      "z": "0"
    }
  },
}

module.exports = {main: function main(list, obj, map1, set1, async = true) {
    (
      new benchmark.Suite()
    )
    .add('listSplice', function() {
      const length = list.length
      for (let i = length - 1; i >= 0; i--) {
        if( list[i].id === "paytableSymbol6"){
          list.splice(i, 1)
          break
        }
      }
    })
    .add('listFilter', function() {
      list = list.filter(val => val.id !== "paytableSymbol6")
    })
    .add('objectDelete', function() {
      delete obj['paytableSymbol6']
    })
    .add('mapDelete', function() {
      map1.delete("paytableSymbol6")
    })
    .add('setDeleteForOf', function() {
      for (const element of set1) {
        if (element.id === "paytableSymbol6") {
          set1.delete(element)
          break
        }
      }
    })
    .add('listAddRemove', function() {
      list.push(setElementRef)
      const length = list.length
      for (let i = length - 1; i >= 0; i--) {
        if(list[i] === setElementRef){
          list.splice(i, 1)
          break
        }
      }
    })
    .add('setAddRemove', function() {
      set1.add(setElementRef)
      set1.delete(setElementRef)
    })
    .on('cycle', function cycle(e) {
      console.log(e.target.toString());
    })
    .on('complete', function completed() {
      let finalString = ""
      for (let i = 0; i < this.length; i++){
        const element = this[i]
        finalString += `${element.name} ${element.hz} \n`
      }

      console.log("-------------------------")
      console.log(finalString)
      console.log('Fastest is %s', this.filter('fastest').map('name'));
    })
    .run({ async: async });
  }
}