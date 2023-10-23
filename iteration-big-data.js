'use strict';

var {main} = require("./iteration-bench-func");

var {createBigMap} = require('./data-structure/map')
  , {createBigList} = require('./data-structure/list')
  , {createBigSet} = require('./data-structure/set')
  , {bigObj} = require('./data-structure/obj');


var map1 = createBigMap()
  , set1 = createBigSet()
  , list = createBigList();


global.document ??= undefined
if (document) {
  let htmlDivElement = document.createElement('div');
  htmlDivElement.addEventListener("click", () => {
    console.log("Starting Iteration big data test...")
    main(list, bigObj, map1, set1, true)
  })
  htmlDivElement.textContent = "Iteration Big Data"

  document.body.appendChild(htmlDivElement)
} else {
  console.log("Starting Iteration big data test...")
  main(list, bigObj, map1, set1, false)
}
