let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"]
};
for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}
////Bracket Syntax
console.log(tortoiseOne["species"])
///
console.log(tortoiseOne.diet)
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
//
let tortoiseTwo = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseThree = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};
console.log(tortoiseTwo==tortoiseThree)
Math.floor(-3.87)
Math.random(-3.87)
Math.round(-3.87)
Math.trunc(-3.87)
let num = Math.floor(Math.random()*10);
console.log(num);
let num1 = Math.round(Math.random()*10);
console.log(num1);

////
//combining math Method
function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}

let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
}