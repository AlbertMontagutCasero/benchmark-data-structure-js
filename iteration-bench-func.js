const benchmark = require("benchmark");

module.exports = {main: function main(list, obj, map1, set1, async = true)
{

  (
    new benchmark.Suite()
  )
  .add('listForI', function () {
    let count = 0
    for (let i = 0; i < list.length; i++) {
      let object = list[i]
      ++count
    }
  })
  .add('listForICacheLength', function () {
    let count = 0
    const length = list.length
    for (let i = 0; i < length; i++) {
      let object = list[i]
      ++count
    }
  })
  .add('listForIReversed', function () {
    let count = 0
    for (let i = list.length - 1; i >= 0; i--) {
      let object = list[i]
      ++count
    }
  })
  .add('listForIReversedCacheLength ', function () {
    let count = 0
    let length = list.length
    for (let i = length - 1; i >= 0; i--) {
      let object = list[i]
      ++count
    }
  })
  .add('listForOf', function () {
    let count = 0
    for (let listElement of list) {
      ++count
    }
  })
  .add('listWhile', function () {
    let count = 0
    let i = 0
    while (i < list.length) {
      let object = list[i]
      ++count
      i++
    }
  })
  .add('listForIn', function () {
    let count = 0
    for (let i in list) {
      let object = list[i]
      ++count
    }
  })
  .add('listForEach', function () {
    let count = 0
    list.forEach((val, i) => {
      ++count
    })
  })
  .add('listMap', function () {
    let count = 0
    list.map((val, i) => {
      ++count
    })
  })
  .add('objectForIn', function () {
    let count = 0
    for (let objKey in obj) {
      let object = obj[objKey]
      ++count
    }
  })
  .add('objectForInHasOwnProperty', function () {
    let count = 0
    for (const objKey in obj) {
      if (obj.hasOwnProperty(objKey)) {
        let object = obj[objKey]
        ++count
      }
    }
  })
  .add('objectKeysForeach', function () {
    let count = 0
    let keys = Object.keys(obj)
    keys.forEach((objKey, i) => {
      let object = obj[objKey]
      ++count
    })
  })
  .add('objectKeysFor', function () {
    let count = 0
    for (let i = 0, keys = Object.keys(obj); i < keys.length; i++) {
      let object = obj[keys[i]]
      ++count
    }
  })
  .add('objectKeysWhile', function () {
    let count = 0
    let keys = Object.keys(obj), i = keys.length;

    while (i--) {
      let object = obj[keys[i]]
      ++count
    }
  })
  .add('objectValuesForeach', function () {
    let count = 0
    let values = Object.values(obj)
    values.forEach((value, i) => {
      let object = value
      ++count
    })
  })
  .add('objectEntriesForeach', function () {
    let count = 0
    let entries = Object.entries(obj)
    entries.forEach(([key, value], i) => {
      ++count
    })
  })
  .add('mapForOf', function () {
    let count = 0
    for (let [key, value] of map1) {
      ++count
    }
  })
  .add('mapForeach', function () {
    let count = 0
    map1.forEach(function (value, key) {
      ++count
    })
  })
  .add('mapToListAndForI', function () {
    let count = 0
    let arr = Array.from(map1);
    for (let i = 0; i < arr.length; i++) {
      let object = arr[i]
      ++count
    }
  })
  .add('setForOf', function () {
    let count = 0
    for (let element of set1) {
      ++count
    }
  })
  .add('setForEach', function () {
    let count = 0
    set1.forEach(val => {
      ++count
    })
  })
  .on('cycle', function cycle(e, b, c, d, i) {
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