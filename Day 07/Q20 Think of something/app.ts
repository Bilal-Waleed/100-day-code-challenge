//  Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Define an array of famous landmarks
let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Statue of Liberty",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "Sydney Opera House",
    "Petra",
    "Acropolis of Athens"
];

// Print the list of landmarks

console.log("\nList of Famous Landmarks:\n");
landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
});
