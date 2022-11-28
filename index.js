let firstName = "Hardika";
let lastName = "Moradiya";

let fullName = firstName +" "+ lastName;
console.log("Hello, my name is",fullName);

let age = 26;
let currentYear = 2022;
let birthYear = currentYear - age;
console.log("Birth year is",birthYear);


// Extra Homework

// Carbonara recipe for 4 persons
let spaghetti = 400;
let guanciale = 250;
let eggYolks = 18;
let romanoCheese = 50;
let blackPepper = 4;
// this all ingredients in Grams

// Step-1 

 // cut the guanciale into 1cm layers, then into long strips
let eggYolksCheeseMixture = eggYolks + romanoCheese;
console.log("Egg yolks and chees mixture total", eggYolksCheeseMixture)

// Step-2 
//  fry the guanciale with black pepper and smallamount os eggyolkschees mixture

let halfAmountBlackPepper = (blackPepper * 50 )/100;
console.log("half amount of black pepper",halfAmountBlackPepper)

let smallAmountOfMixture = (eggYolksCheeseMixture *20) / 100;
console.log("small amount of yolks and chees mixture", smallAmountOfMixture);

let crispyGuanciale = halfAmountBlackPepper + smallAmountOfMixture + guanciale;
console.log("fry the strips of guanciale with pepper and mixture", crispyGuanciale)

// Step-3 
let cookedPasta = 300;
let hotWater = 12; // this hot water quantity will add in crispyGuancial

let creamyCrispyGuanciale = hotWater + crispyGuanciale;
console.log("add the pasta hot water in crispyGuanciale for creamy texture", creamyCrispyGuanciale);

// Add the pasta on same pan
let pastaGuanciale = cookedPasta + creamyCrispyGuanciale;
console.log("pasta and Guanciale Mixture", pastaGuanciale);

// Step-4 
// add the remaining egg yolks and chees mixture 

let creamyCarbonara = pastaGuanciale + (smallAmountOfMixture - eggYolksCheeseMixture);
console.log("for creamy texture of carbonara add the remaining egg yolks and chees mixture", creamyCarbonara);

// last Dressing step-5

let carbonara = halfAmountBlackPepper + creamyCarbonara;
//  add remaining roasted black pepper
console.log ("sum of all ingredients", carbonara);
