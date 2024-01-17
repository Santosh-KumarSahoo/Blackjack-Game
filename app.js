let player = {
  Name: "Santu",
  Chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
  let randomNumber =  Math.floor(Math.random()*13 + 1);
  if(randomNumber > 10) {
    return10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstcard = getRandomCard();
  let secondcard =  getRandomCard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}

function renderGame() {

  cardsEl.textContent = "Cards: ";

  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = ("Do you want to draw a new card? 🙂");
  } else if (sum === 21) {
    message = ("Wohoo! You've got Blackjack! 🥳");
    hasBlackJack = true;
  } else {
    message = ("You're out of the game! 😭");
    isAlive = false
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
