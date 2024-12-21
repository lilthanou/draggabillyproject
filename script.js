let draggableElem = document.querySelector('.draggable');
let object = document.querySelector('.object');
let perso = document.querySelector('.perso');
let win = document.querySelector('.win');
let bigwin = document.querySelector('.bigwin');
let pokemon1 = document.querySelector('.pokemon1');
let pokemon2 = document.querySelector('.pokemon2');
let draggie = new Draggabilly( draggableElem, { containment: '.invisible'});
let newPositionX = screenX + draggie.position.x;
let newPositionY = screenY + draggie.position.y;

draggie.on('pointerUp', function(){
  draggie.setPosition(0, 0);
})

function updatePosition(){
  if (newPositionX > newPositionX + draggie.position.x/10){
    perso.style.scale = '1 1';
  }
  if (newPositionX < newPositionX + draggie.position.x/10){
    perso.style.scale = '-1 1';
  }
  newPositionX += draggie.position.x/10;
  newPositionY += draggie.position.y/10;
  object.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`;
  findPokemon();
}

function findPokemon(){
  if (520< newPositionX && newPositionX < 560 && 298 < newPositionY && newPositionY < 338){
    win.style.visibility = 'visible';
    pokemon1.style.visibility = 'visible';
  }
  if (-420 > newPositionX && newPositionX < -400 && 130 < newPositionY && newPositionY < 150){
    win.style.visibility = 'visible';
    pokemon2.style.visibility = 'visible';
  }
  if (pokemon1.style.visibility == 'visible' && pokemon2.style.visibility == 'visible'){
    bigwin.style.visibility = 'visible';
    win.style.visibility = 'hidden';
  }
  else{
    win.style.visibility = 'hidden';
  }
}

setInterval(updatePosition, 5);