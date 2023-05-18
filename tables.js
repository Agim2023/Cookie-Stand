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
}
console.log(Store);


//create a prototype inside the function loop through state.stores and loop through the hours 



let store = new Store("seattle", 23, 65, 6.3);
let store2 = new Store("toyko", 23, 65, 6.3);
let store3 = new Store("dubai", 23, 65, 6.3);
let store4 = new Store("paris", 23, 65, 6.3);
let store5 = new Store("lima", 23, 65, 6.3);
//console.log(store, store2, store3, store4, store5);

state.stores.push(store);
state.stores.push(store2);
state.stores.push(store3);
state.stores.push(store4);
state.stores.push(store5);

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
