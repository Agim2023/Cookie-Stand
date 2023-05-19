"use strict";

let hours = 
   ['8am', '9am', '10am', '11am', '12noon', '1pm', '2pm', '3pm', '4pm']
   
let customer = 0;

let Location = "Seattle"
let min = 23;
let max = 65;
let avg = 6.3;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let Seattle8am = getRandomInt(23, 65);
let Total8am = 6.3 * Seattle8am;

let SeattleXam = getRandomInt(min, max);
    let totalXam = avg * SeattleXam;
    console.log("Seattle",totalXam);
let parent= document.getElementById("Sales Page");


let seattleH2 = document.createElement("h2")
seattleH2.textContent = "seattle"; //total for each hour
parent.appendChild(seattleH2);
let liElm = document.createElement("li")
for (let i = 0; i < 9; i++) {
    let SeattleXam = getRandomInt(min, max);
    let totalXam = Math.round(avg * SeattleXam);
    console.log("Seattle",totalXam);
    let parent = document.getElementById("Sales Page")
    let liElm = document.createElement("li")
liElm.textContent = `${hours[i]} ${totalXam}`; //total for each hour
parent.appendChild(liElm);
}

let Location2 = "Toyko"
let min2 = 3;
let max2 = 24;
let total2 = 1.2;

let Toyko8am = getRandomInt(min2, max2);
let total8am = total2 * Toyko8am;

console.log(total8am);

let toykoH2 = document.createElement("h2")
toykoH2.textContent = "toyko"; //total for each hour
parent.appendChild(toykoH2);
for (let i = 0; i < 9; i++) {
    let ToykoXam = getRandomInt(min2, max2);
    let totalXam = Math.round(total2 * ToykoXam);
    console.log("Toyko",totalXam);
    let parent = document.getElementById("Sales Page")
    let liElm = document.createElement("li")
    liElm.textContent = `${hours[i]} ${totalXam}`; //total for each hour
    parent.appendChild(liElm);

}

let Location3 = "Dubai"
let min3 = 11;
let max3 = 38;
let total3 = 3.7;

let Dubai9am = getRandomInt(min3, max3);
let total9am = total3 * Dubai9am;

console.log(total9am);

let dubaiH2 = document.createElement("h2")
dubaiH2.textContent = "dubai"; //total for each hour
parent.appendChild(dubaiH2);
for (let i = 0; i < 9; i++) {
    let DubaiXam = getRandomInt(min3, max3);
    let totalXam = Math.round(total3 * DubaiXam);
    console.log("Dubai",totalXam);
let parent = document.getElementById("Sales Page")
let liElm = document.createElement("li")
liElm.textContent = `${hours[i]} ${totalXam}`; //total for each hour
parent.appendChild(liElm);
} 

let Location4 = "Paris"
let min4 = 20;
let max4 = 38;
let total4 = 2.3;

let Paris10am = getRandomInt(min4, max4);
let total10am = total4 * Paris10am;

console.log(total10am);

let parisH2 = document.createElement("h2")
parisH2.textContent = "paris"; //total for each hour
parent.appendChild(parisH2);
for (let i = 0; i < 9; i++) {
    let ParisXam = getRandomInt(min4, max4);
    let totalXam = Math.round(total3 * ParisXam);
    console.log("Paris",totalXam);
    let parent = document.getElementById("Sales Page")
    let liElm = document.createElement("li")
    liElm.textContent = `${hours[i]} ${totalXam}`; //total for each hour
    parent.appendChild(liElm);

}

let Location5 = 'Lima'
let min5 = 2;
let max5 = 16;
let total5 = 4.6;

let Lima11am = getRandomInt(min5, max5);
let total11am = total5 * Lima11am;

console.log(total11am);

let limaH2 = document.createElement("h2")
limaH2.textContent = "lima"; //total for each hour
parent.appendChild(limaH2);
for (let i = 0; i < 9; i++) {
    let LimaXam = getRandomInt(min5, max5);
    let totalXam = Math.round(total5 * LimaXam);
    console.log("Lima",totalXam);
let parent = document.getElementById("Sales Page")
let liElm = document.createElement("li")
liElm.textContent = `${hours[i]} ${totalXam}`; //total for each hour
parent.appendChild(liElm);
    
}

