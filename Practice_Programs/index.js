const msg = "Something went wrong, please try again";
let errorEl = document.getElementById("error");

function purchase(){
    errorEl.textContent = msg;
}