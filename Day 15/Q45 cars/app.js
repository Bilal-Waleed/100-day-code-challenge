"use strict";
// Define a function called createCar that stores information about a car in an Object
// Function to create a car object with flexible properties
function createCar(make, model, year, color, ...extras) {
    let car = { make, model, year, color };
    // Add flexible properties
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example usage:
let myCar = createCar("Toyota", "Camry", 2022, "Black", ["sunroof", true], ["navigation", false]);
console.log(myCar);
