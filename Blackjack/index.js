
let cardsArr = []; 

let sum = 0; 

let hasBlackJack = false; 
let isAlive = false;
let message = "";

function randomCard() {
  // return a value from 1 to 13; 
  let randomNum = Math.floor(Math.random()*13) + 1; 
  if (randomNum === 1) {
    return 11;
  } else if (randomNum >= 11 && randomNum <= 13) {
    return 10; 
  } else {
    return randomNum; 
    }  
}

function startGame() {
  isAlive = true;
  hasBlackJack = false; 
  let firstCard = randomCard(); 
  let secondCard = randomCard(); 
  cardsArr = [firstCard, secondCard]; 
  sum = cardsArr[0] + cardsArr[1];  
  renderGame(); 
}

function renderGame() {
   // document.getElementById("cards-el").textContent = "Cards: " + cardsArr[0] + "\xa0\xa0\xa0" + cardsArr[1]; 
  document.getElementById("cards-el").textContent = "Cards: "
    for (let i = 0; i < cardsArr.length; i++) {
      document.getElementById("cards-el").textContent += cardsArr[i] + "\xa0\xa0\xa0"
    }


  document.getElementById("sum-el").textContent = "Sum: " + sum; 


  if (sum < 21) {
    message = "Do you want to draw a new card?";
    document.getElementById("message-el").style.color = "#34e5eb";
    
  } else if (sum === 21) {
    message = "You've got Blackjack!"; 
    document.getElementById("message-el").style.color = "goldenrod";
    hasBlackJack = true;  
  } else {
    message = "You're out of the game!";   
    document.getElementById("message-el").style.color = "red";
    isAlive = false; 
    
  }

  document.getElementById("message-el").textContent = message;  
}


function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = randomCard(); 
    cardsArr.push(thirdCard); 
    sum += thirdCard; 
    renderGame();
  }
  
}





