let draggableElems = document.querySelectorAll('.draggable');
let draggies = [];

for ( var i=0; i < draggableElems.length; i++ ) {
  let draggableElem = draggableElems[i];
  let draggie = new Draggabilly( draggableElem, {
    containment: '.main'
  });
  draggies.push( draggie );
}
