// filter med objekt
// 1. Skapa en ny array filtrerad på folk äver 30
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

let adults = people.filter((person) => person.age > 30);
console.log(adults); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// ******************************************************************************
// map med strängar
// 2. Skapa en ny array där samtliga namn står i versaler

let names = ["Alice", "Bob", "Charlie"];

let uppercasedNames = names.map((name) => name.toUpperCase());
console.log(uppercasedNames); // ["ALICE", "BOB", "CHARLIE"]

// ******************************************************************************
// find med objekt
let people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// 3. Hitta den första person med namnet 'Bob'
let personNamedBob = people2.find((person) => person.name === "Bob");
console.log(personNamedBob); // { name: "Bob", age: 30 }

// ******************************************************************************
// forEach med tal
// 4. Skriv samtliga siffror till consolen
let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => console.log(num));

// ******************************************************************************
// some med strängar
// 5. Returnerar true om 'något' innehåller ett 'A'
let names2 = ["Alice", "Bob", "Charlie"];
let hasNameWithA = names2.some((name) => name.includes("A"));
console.log(hasNameWithA); // true

// ******************************************************************************
// every med tal
// 6. Är samtliga tal större än 0?
let numbers = [0, 1, 2, 3, 4, 5];
let allNumbersGreaterThanZero = numbers.every((num) => num > 0);
console.log(allNumbersGreaterThanZero); // false

// ******************************************************************************
// includes med strängar
// 7. Finns det någon som heter 'Alice'?
let names3 = ["Alice", "Bob", "Charlie"];
let includesAlice = names3.includes("Alice");
console.log(includesAlice); // true
