let sum = 0;
let age;
let ageState = false;
let handState = false;
let isAlive = true;
let message = "";
let ageMsg = "";
let cards = [];
const messages = [
    "Welcome to the Club. Enjoy your visit 😊", 
    "We're sorry. You're not allowed to enter this club 🥲",
    "Inavlid Input. Please try again",
    "Congratulations, you won.",
    "You've losen your hand.",
    "You've got one more chance.",
    " Click RESTART to play again",
    "Enter your age to check your eligibility."
]

const ageObject = document.getElementById("age");
const ageEl = document.getElementById("age-el");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const start = document.getElementById('start-el');
const newCardObj = document.getElementById("newCard");
const restartObj = document.getElementById("restartGame");

messageEl.textContent = messages[7];
sumEl.style.display = 'none';
cardsEl.style.display = 'none';
start.style.display = 'none';
newCardObj.style.display = 'none';
restartObj.style.display = 'none';

function ageCheck(){
    age = ageObject.value;
    if(age >= 21){
        messageEl.textContent = messages[0];
        start.style.display = 'block';
    }
    else if(age>0 && age<21){
        messageEl.textContent = messages[1];
    }
    else{
        messageEl.textContent = messages[2];
    }
}

function startGame(){
    newCardObj.style.display = 'block';
}

function newCard(){
    sumEl.style.display = 'block';
    cardsEl.style.display = 'block';
}