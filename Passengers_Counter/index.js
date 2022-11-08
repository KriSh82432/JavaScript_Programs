let count = 0
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let countFinal;

function increment(){
    count ++;
    countEl.textContent = count;
}

function decrement(){
    if(count > 0){
        count --;
        countEl.textContent = count;
    }
    else{
        alert("Invalid Action");
    }
}

function save(){
    if(count > 0){
        countFinal = count + " - ";
        saveEl.textContent += countFinal;
    }
    else{
        alert("Please make an entry!!!");
    }
    count = 0;
    countEl.innerText = count;
}