// Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

// Defining the list of guests
let guests: string[] = [`Zenat`,`Saqib`, `Baba`];

// Printing invitation messages to each guest
guests.forEach(guest => {
    console.log(`Dear ${guest}, \nyou are invited to dinner. Please join us for an evening of great conversation.\n`);
});

// Printing the total number of guests invited to dinner
console.log(`You are inviting ${guests.length} people to dinner.`);
