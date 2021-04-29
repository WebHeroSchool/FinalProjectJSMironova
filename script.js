let arrayCard = [];
let level=3;
let target='';
let easy = document.getElementById('simple-game');
let medium = document.getElementById('medium-game');
let hard = document.getElementById('hard-game');
let buttonGame = document.getElementById('startGame');
let mainGame=document.getElementById('game');
let menu=document.getElementById('menu');
let numberClick = 0;
function gameEasyLevel() {
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
function removeMenu(){
  menu.classList.add('visible');
}
function clickCard(e){
  ++numberClick;
  if (numberClick %2 !== 0) {
  random (e) ===0 ? e.currentTarget.classList.add('gameoverCard') : e.currentTarget.classList.add ('bagCard');
  e.currentTarget.classList.remove ('Card');
  } else {
  window.location.reload();
  }
}
function createCard() {
    for(let i = 0; i < level; i++) {
      const card = document.createElement('div');
            card.className = 'card';
      if (level===10){
        const   arrayCard = document.getElementsByClassName('cardPageHard')[0];
                arrayCard.classList.remove('cardPage');
                arrayCard.appendChild(card);
      } else {
        const   arrayCard = document.getElementsByClassName('cardPage')[0];
                arrayCard.classList.remove('cardPageHard');
                arrayCard.appendChild(card);
      }
      card.addEventListener('click', clickCard);
    }
}
function removeMenu(){
  menu.classList.add('visible');
}
function clickButton(){
  removeMenu();
  createCard();
}
function random() {
   return Math.round(Math.random());
 }
gameEasyLevel();
buttonGame.addEventListener('click',(e) => clickButton (e.target));
easy.addEventListener('click',gameEasyLevel);
medium.addEventListener('click',gameMediumLevel);
hard.addEventListener('click',gameHardLevel);
