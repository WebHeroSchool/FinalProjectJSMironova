let arrayCard = [];
let bag = "/img/bagcard.png";
let noBag = "/img/gameovercard.png";
let easy = document.getElementById('simple-game');
let medium = document.getElementById('medium-game');
let hard = document.getElementById('hard-game');
let clickButtom = document.getElementById('startGame');
function gameSimpleLevel() {
  level = 3;
  easy.classList.add('menu-list-romb');
  medium.classList.remove('menu-list-romb');
  hard.classList.remove('menu-list-romb');
}

function gameMediumLevel() {
  level = 6;
  easy.classList.remove('menu-list-romb');
  medium.classList.add('menu-list-romb');
  hard.classList.remove('menu-list-romb');
}

function gameHardLevel() {
  level = 10;
  easy.classList.remove('menu-list-romb');
  medium.classList.remove('menu-list-romb');
  hard.classList.add('menu-list-romb');
}
