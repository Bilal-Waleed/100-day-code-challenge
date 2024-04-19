// Define a function called createCar that stores information about a car in an Object

// Define a type for car objects
type Car = {
    make: string;
    model: string;
    year: number;
    color: string;
    // Add any additional properties as needed
    [key: string]: any; // This allows for flexible properties
};

// Function to create a car object with flexible properties
function createCar(make: string, model: string, year: number, color: string, ...extras: [string, any][]): Car {
    let car: Car = { make, model, year, color };

    // Add flexible properties
    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Example usage:
let myCar = createCar("Toyota", "Camry", 2022, "Black", ["sunroof", true], ["navigation", false]);
console.log(myCar);

