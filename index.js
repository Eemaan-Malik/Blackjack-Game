let cards = [];
let sum = 0;
let message = " ";
let hasBlackJack = false;
let isAlive = false;

let cardsEL = document.getElementById("cards-el");
let sumEL = document.getElementById("sum-el");
let messageEL = document.getElementById("message-el");

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function renderGame() {
  
  cardsEL.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + "  ";
  }

  sumEL.textContent = "Sum: " +  sum

  if (sum < 21) {
    message = "Do you want to draw a new card?";
    messageEL.textContent = message;
    isAlive = true
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    messageEL.textContent = message;
  } else {
    message = "You're out of game.";
    isAlive = false;
    messageEL.textContent = message;
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
