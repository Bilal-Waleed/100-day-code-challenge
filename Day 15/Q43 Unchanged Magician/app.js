"use strict";
// Define a function called show_magicians that prints the names of magicians
// Array of magician's names
let magicians = [`Zenat`, `Baba`, `Saqib`, `Abdullah`];
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Define a function called make_great that modifies the array of magicians by adding "the Great" to each name
function make_great(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
// Make a copy of the array of magicians
let unchanged_magicians = [...magicians];
// Modify the array of magicians by adding "the Great" to each name
magicians = make_great(magicians);
// Call the show_magicians function to print the modified list of magicians
show_magicians(magicians);
// Call the show_magicians function to print the original list of magicians
console.log("\nOriginal Magicians:");
show_magicians(unchanged_magicians);
