const benchmark = require("benchmark");

module.exports = {
  main: function main(list, obj, map1, set1, async = true) {

    (
      new benchmark.Suite()
    )
    .add('listForICacheLength', function () {
      const length = list.length

      for (let i = 0; i < length; i++) {
        if (list[i].id === "paytableSymbol6") {
          return list[i]
        }
      }
    })
    .add('listForIReversedCacheLength', function () {
      let length = list.length

      for (let i = length - 1; i >= 0; i--) {
        if (list[i].id === "paytableSymbol6") {
          return list[i]
        }
      }
    })
    .add('listFilter', function () {
      return list.filter((value, index) => {
        return value.id === "paytableSymbol6"
      })[0]
    })
    .add('listFindIndex', function () {
      let index = list.findIndex((value, index) => {
        return value.id === "paytableSymbol6"
      })
      return list[index]
    })
    .add('objectDirectAccess', function () {
      return obj["paytableSymbol6"]
    })
    .add('mapDirectAccess', function () {
      map1.get("paytableSymbol6")
    })
    .add('setForOf', function () {
      for (const element of set1) {
        if (element.id === "paytableSymbol6") {
          return element
        }
      }
    })
    .on('cycle', function cycle(e) {
      console.log(e.target.toString());
    }).on('complete', function completed() {

      let finalString = ""
      for (let i = 0; i < this.length; i++){
        const element = this[i]
        finalString += `${element.name} ${element.hz} \n`
      }

      console.log("-------------------------")
      console.log(finalString)
      console.log('Fastest is %s', this.filter('fastest').map('name'));
    }).run({async: async});
  }
}