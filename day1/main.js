// go through iterations, go through backend, general react

const { merge, mergeSort } = require("./mergeSort");

let test = [1, 5, 3, 2, 6, 0, 8, 12, 11, 63, 23];

// const result = mergeSort(test);
// console.log(result);

// forEach, map, filter, reduce;

const beers = [
  {id: 1, name: "stella"},
  {id: 2, name: "corona"},
  {id: 3, name: "budlight"},
  {id: 4, name: "new castle"},
  {id: 5, name: "dogfish"},
  {id: 6, name: "lagunitas IPA"},
  {id: 7, name: "Patagonia"},
  {id: 8, name: "Guiness"},
  {id: 9, name: "Modelo Negra"}
];

console.log("Before ", beers);

// for(let i = 0; i < beers.length; i++) {
//   console.log(beers[i]);
// }

// beers.forEach((beer) => {
//   console.log(beer);
// })

// beers.map(element => console.log(element))

let beerNames = beers.map((element) => {
  return element.name;
});

// let beerNames2 = []; 

// beers.forEach(element => {
//   beerNames2.push(element.name);
// }); 



// console.log("After: ", beerNames);
// console.log("After: ", beerNames2);

// 
// let oddBeers = beers.map(beer => {
//   if (beer.id % 2 != 0) {
//     return beer.name;
//   } 
// });

let oddBeers = beers.filter(beer => {
  return beer.id % 2 == 1 ? beer : null;
})
.map(beer => beer.name);

// let oddBeers = beers.filter(beer => beer.id % 2 == 1 ? beer : null)
//   .map(beer => beer.id);

console.log("Odd Beers ", oddBeers);
// console.log("Odd Beers ", beers);
