// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let personName: string =`\n\tBILAL WALEED\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);  