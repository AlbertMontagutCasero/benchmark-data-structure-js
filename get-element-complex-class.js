'use strict';

var {main} = require("./get-element-bench-func");

var {createComplexMap} = require('./data-structure/map')
  , {createComplexList} = require('./data-structure/list')
  , {createComplexSet} = require('./data-structure/set')
  , {createComplexObject} = require('./data-structure/obj');


var map1 = createComplexMap()
  , set1 = createComplexSet()
  , list = createComplexList()
  , bigObj = createComplexObject();


global.document ??= undefined
if (document) {
  let htmlDivElement = document.createElement('div');
  htmlDivElement.addEventListener("click", () =>{
    console.log("Starting get element complex class test...")
    main(list, bigObj, map1, set1, true)
  })
  htmlDivElement.textContent = "Get Element Complex Class"

  document.body.appendChild(htmlDivElement)
} else {
  console.log("Starting get element complex class test...")
  main(list, bigObj, map1, set1, false)
}