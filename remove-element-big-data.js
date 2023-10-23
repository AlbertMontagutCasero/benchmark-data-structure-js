'use strict';

var {main} = require("./remove-bench-func");

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
  htmlDivElement.addEventListener("click", () =>{
    console.log("Starting remove element big data test...")
    main(list, bigObj, map1, set1, true)
  })
  htmlDivElement.textContent = "Remove Element Big Data"

  document.body.appendChild(htmlDivElement)
} else{
  console.log("Starting remove element big data test...")
  main(list, bigObj, map1, set1, false)
}