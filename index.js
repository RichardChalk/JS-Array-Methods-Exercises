// filter med objekt
// 1. Skapa en ny array filtrerad på folk äver 30
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// kod här!
console.log(adults); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// ******************************************************************************
// map med strängar
// 2. Skapa en ny array där samtliga namn står i versaler

let names = ["Alice", "Bob", "Charlie"];

// kod här!
console.log(uppercasedNames); // ["ALICE", "BOB", "CHARLIE"]

// ******************************************************************************
// find med objekt
let people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// 3. Hitta den första person med namnet 'Bob'
// kod här!
console.log(personNamedBob); // { name: "Bob", age: 30 }

// ******************************************************************************
// forEach med tal
// 4. Skriv samtliga siffror till consolen
let numbers2 = [1, 2, 3, 4, 5];
// kod här!

// ******************************************************************************
// some med strängar
// 5. Returnerar true om 'något' innehåller ett 'A'
let names2 = ["Alice", "Bob", "Charlie"];
// kod här!
console.log(hasNameWithA); // true

// ******************************************************************************
// every med tal
// 6. Är samtliga tal större än 0?
let numbers = [0, 1, 2, 3, 4, 5];
// kod här!
console.log(allNumbersGreaterThanZero); // false

// ******************************************************************************
// includes med strängar
// 7. Finns det någon som heter 'Alice'?
let names3 = ["Alice", "Bob", "Charlie"];
// kod här!
console.log(includesAlice); // true
