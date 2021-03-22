
document.addEventListener('DOMContentLoaded', () => {

    let fruits = [];

    for(let i = 1; i<=60; i++){
        fruits.push(i);

    }    

    let myDiv = document.getElementById("app");

    for (let i = 0; i < fruits.length; i++) {
        let p = document.createElement("p");
        p.innerHTML = fruits[i];
        myDiv.appendChild(p);
    }


})


