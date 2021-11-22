// document.getElementById("count-el").innerText = 5;

let count = 0, save
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

function Increment(){

    count+=1
    countEl.textContent = count
}

function Decrement(){

    if(count>0){
        count-=1
        countEl.textContent = count
    }
}

function Save(){

    saveEL.textContent += count + " - " //textContent reads not only characters
    countEl.textContent = count = 0;
}

function Reset(){
    saveEL.textContent = "Previous entries: "
}


