"use strict";

let hours = 
   ['8am, 9am, 10am, 11am, 12noon, 1pm, 2pm, 3pm, 4pm']
   
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

console.log(getRandomInt(23,65));
console.log(Seattle8am);
console.log(Total8am);

let Seattle9am = getRandomInt(23, 65);
let Total9am = 6.3 * Seattle9am;

console.log(getRandomInt(23,65));
console.log(Seattle9am);
console.log(Total9am);

let Seattle10am = getRandomInt(23, 65);
let Total10am = 6.3 * Seattle10am;

console.log(getRandomInt(23,65));
console.log(Seattle10am);
console.log(Total10am);

let Seattle11am = getRandomInt(23, 65);
let Total11am = 6.3 * Seattle11am;

console.log(getRandomInt(23,65));
console.log(Seattle11am);
console.log(Total11am);

let Seattle12noon = getRandomInt(23, 65);
let Total12noon = 6.3 * Seattle12noon;

console.log(getRandomInt(23,65));
console.log(Seattle12noon);
console.log(Total12noon);

let Seattle1pm = getRandomInt(23, 65);
let Total1pm = 6.3 * Seattle1pm;

console.log(getRandomInt(23,65));
console.log(Seattle1pm);
console.log(Total1pm);

let Seattle2pm = getRandomInt(23, 65);
let Total2pm = 6.3 * Seattle2pm;

console.log(getRandomInt(23,65));
console.log(Seattle2pm);
console.log(Total2pm);

let Seattle3pm = getRandomInt(23, 65);
let Total3pm = 6.3 * Seattle3pm;

console.log(getRandomInt(23,65));
console.log(Seattle3pm);
console.log(Total3pm);

let Seattle4pm = getRandomInt(23, 65);
let Total4pm = 6.3 * Seattle4pm;

console.log(getRandomInt(23,65));
console.log(Seattle4pm);
console.log(Total4pm);

let Location2 = "Toyko"
let min2 = 3;
let max2 = 24;
let total2 = 1.2;

let Toyko8am = getRandomInt(min2, max2);
let total8am = total2 * Toyko8am;

console.log(total8am);

for (let i = 0; i < 9; i++) {

    console.log(getRandomInt(3, 24));
    console.log(Toyko8am);
    console.log(total2);
}

let Location3 = "Dubai"
let min3 = 11;
let max3 = 38;
let total3 = 3.7;

let Dubai9am = getRandomInt(min2, max2);
let total9am = total3 * Dubai9am;

console.log(total9am);

for (let i = 0; i < 9; i++) {
    let DubaiXam = getRandomInt(min2, max2);
    let totalXam = total3 * DubaiXam;
    console.log("Dubai",totalXam);
let parent = document.getElementById("dubai")
let liElm = document.createElement("li")
liElm.textContent = totalXam; //total for each hour
parent.appendChild(liElm);
} 

let Location4 = "Paris"
let min4 = 20;
let max4 = 38;
let total4 = 2.3;

let Paris10am = getRandomInt(min4, max4);
let total10am = total4 * Paris10am;

console.log(total10am);

for (let i = 0; i < 9; i++) {
    console.log(getRandomInt(20, 38));
    console.log(Paris10am);
    console.log(total4); 
}

let Location5 = 'Lima'
let min5 = 2;
let max5 = 16;
let total5 = 4.6;

let Lima11am = getRandomInt(min5, max5);
let total11am = total5 * Lima11am;

console.log(total11am);

for (let i = 0; i < 9; i++) {
    console.log(getRandomInt(11, 38));
    console.log(Lima11am);
    console.log(total5);
}

