let firstCard;
let secondCard;
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
const newCardObj = document.getElementById("newCard");

function sumCards(firstCard, secondCard){
    sum = firstCard + secondCard;
}

function ageCheck(age){
    ageEl.style.display = "block";
    age = ageObject.value;
    if(age >= 21){
        start.style.display = "inline";
        newCardObj.style.display = "inline";
        ageMsg = "Welcome to the Club. Enjoy your visit 😊"
    }
    else if(age > 0 &&  age < 21){
        cardsEl.style.display = "none";
        sumEl.style.display = "none";
        start.style.display = "none";
        newCardObj.style.display = "none";
        ageMsg = "We're sorry. You're not allowed to enter this club 🥲"
    }
    else{
        ageMsg = "Inavlid Input. Please try again"
    }    
    ageEl.textContent = ageMsg;
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
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

function newCard(){
    let random1 = Math.random();
    let random = Math.random();
    firstCard = Math.floor((random1 * 21)+1);
    secondCard = Math.floor((random * 21)+1);
    cardsEl.textContent = "Cards: "+ firstCard + " + " + secondCard;
    sumCards(firstCard, secondCard);
    checkHand(sum);
    messageEl.textContent = message;
    cardsEl.textContent += "";
    sumEl.textContent = "Sum: " + sum;
}

function startGame(){
    newCard();
    cardsEl.style.display = "block";
    sumEl.style.display = "block";
    newCardObj.style.display = "block"
    ageEl.style.display = "none";
    start.style.display = 'none';
}