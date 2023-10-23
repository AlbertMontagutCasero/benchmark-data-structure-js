'use strict';

var {main} = require("./get-element-bench-func");


var {createMap} = require('./data-structure/map')
  , {createList} = require('./data-structure/list')
  , {createSet} = require('./data-structure/set')
  , {obj} = require('./data-structure/obj');


var map1 = createMap()
  , set1 = createSet()
  , list = createList();

global.document ??= undefined
if (document) {
  let htmlDivElement = document.createElement('div');
  htmlDivElement.addEventListener("click", () =>{
    console.log("Starting get element test...")
    main(list, obj, map1, set1, true)
  })
  htmlDivElement.textContent = "Get Element"

  document.body.appendChild(htmlDivElement)
} else {
  console.log("Starting get element test...")
  main(list, obj, map1, set1, false)
}