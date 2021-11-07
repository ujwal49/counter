const decrease_button = document.getElementById("decrease-btn");
const increase_button = document.getElementById("increase-btn");
const reset_button = document.getElementById("reset-btn");
const counter = document.getElementById("count");


function decrease(){
    return counter.innerHTML = counter.innerHTML - 1;
}

function increase(){
    return counter.innerHTML = Number(counter.innerHTML) + 1;
}

function reset(){
    return counter.innerHTML = 0;
}

decrease_button.addEventListener("click",decrease);
increase_button.addEventListener("click",increase);
reset_button.addEventListener("click",reset);