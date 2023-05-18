'use strict'

let hours =
    ['8am', '9am', '10am', '11am', '12noon', '1pm', '2pm', '3pm', '4pm']

let state = {
    stores: []

}
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customers = []
}
console.log(Store);


//create a prototype inside the function loop through state.stores and loop through the hours 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

Store.prototype.render = function () {
    let storeRow = document.createElement('tr');

    let cityNameTD = document.createElement('td');
    seattleNameTD.textContent = this.name;
    storeRow.appendChild(cityNameTD);

}

Store.prototype.calcuate = function () {
    for (let i = 0; i < 9; i++) {
        let townXam = getRandomInt(this.min, this.max);
        let totalXam = Math.round(this.avg * townXam);
        this.customers.push(totalXam);
        console.log(this.name, totalXam);
    }
}

let store = new Store("seattle", 23, 65, 6.3);
let store2 = new Store("toyko", 3, 24, 1.2);
let store3 = new Store("dubai", 11, 38, 3.7);
let store4 = new Store("paris", 20, 38, 2.3);
let store5 = new Store("lima", 2, 16, 4.8);
//console.log(store, store2, store3, store4, store5);

state.stores.push(store);
state.stores.push(store2);
state.stores.push(store3);
state.stores.push(store4);
state.stores.push(store5);

console.log(state.stores);

for (let store of state.stores) {
    store.calcuate();
}

console.log(state.stores);
//Store.prototype.render = () {
    // /let storeRow = document.createElement('tr');

    // let seattle = document.createElement('td');
    // seattle.textContent = this.name;
    // storeRow.appendChild(seattle);

    // let toyko= document.createElement('td');
    // seattle.textContent = this.name;
    // storeRow.appendChild(toyko);

    // let dubai = document.createElement('td');
    // seattle.textContent = this.name;
    // storeRow.appendChild(dubai);

//     let paris = document.createElement('td');
//     seattle.textContent = this.name;
//     storeRow.appendChild(paris);

//     let lima = document.createElement('td');
//     seattle.textContent = this.name;
//     storeRow.appendChild(lima);

//     state.tableElm.appendChild(storeRow);

// }
