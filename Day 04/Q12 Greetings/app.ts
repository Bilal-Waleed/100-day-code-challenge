// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
let friends: string[] =[`Zenat`,`Baba`, `Saqib`, `Jiya`,`Muaaz`];
let message: string =`treat kab dy rhe yr:`;
for(let i=0; i<friends.length; i++){
    console.log(message + friends[i])
}