let firstCard = 11;
let secondCard = 11;
let sum;
let age;
let ageState = false;
let handState = false;
let isAlive = true;
let message = "";
let ageMsg = "";

const ageObject = document.getElementById("age");
const ageEl = document.getElementById("age-el");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const start = document.getElementById('start-el');

function sumCards(firstCard, secondCard){
    sum = firstCard + secondCard;
    sumEl.textContent += sum;
}

function ageCheck(age){
    ageEl.style.display = "block";
    age = ageObject.value;
    if(age >= 21){
        start.style.display = "inline";
        ageMsg = "Welcome to the Club. Enjoy your visit 😊"
    }
    else if(age > 0 &&  age < 21){
        ageMsg = "We're sorry. You're not allowed to enter this club 🥲"
    }
    else{
        ageMsg = "Inavlid Input. Please try again"
    }    
    ageEl.textContent = ageMsg;
}

function checkHand(sum){
    if (sum === 21){
        handState = true;
        message = "Congratulations, you won."
    }
    else if(sum > 21){
        isAlive = false;
        message = "You've losen your hand.";
    }
    else{
        message = "You've got one more chance.";
    }
}

function startGame(){
    ageEl.style.display = "none";
    cardsEl.textContent += firstCard + " , " + secondCard;
    sumCards(firstCard, secondCard);
    checkHand(sum);
    messageEl.textContent = message;
    cardsEl.textContent += "";
}