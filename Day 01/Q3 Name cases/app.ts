//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// lower case
let personName: string ="Bilal";
console.log("lowercase:", personName.toLowerCase());
// upper case 
console.log("uppercase:", personName.toLocaleUpperCase());
// title case 
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));  