"use strict";
// Ejercicio funciones orden superior
let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" },
];
const userFullNames = users.map(e => e.firstName + " " + e.lastName);
console.log(userFullNames);
