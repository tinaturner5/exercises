
//Conditions
/*
0. Vypiste cislo, ktore vam uzivatel zadal v tvare "Uzivatel zadal cislo: CISLO SEM a to je peklne cislo
 1. Vypis cisla od 1 - 20
 2. Vypis cisla od 20 - 1
 3. Vypis cisla, ktore su delitelne 3
 4. Vypis cisla, ktore su delitelne 4 a 6
 */

const prompt = require('prompt-sync')();  //prompt je nazov mojej funkcie, ktoru som si sem nahrala externe
let vstup = prompt('Vloz cislo: '); //input sa zmeni na variable vstup
console.log(vstup);
console.log(`"Uzivatel zadal cislo: ${vstup} a to je pekne cislo`)


for(let i= 1; i <= 20; i++) {
    console.log(i)
}

for(let i= 20; i >= 1; i--) {
    console.log(i)
}

const prompt = require('prompt-sync')();
let vstup = prompt('Vloz cislo: ');
if (vstup % 3 === 0)
{console.log('cislo delitelne 3')}
else {console.log('cislo neni delitelne 3')}



const prompt = require('prompt-sync')();
let vstup = prompt('Vloz cislo: ');
if ((vstup % 4 === 0) && (vstup % 6 === 0))
{console.log('cislo delitelne 4,6')}
else {console.log('cislo neni delitelne 4,6')}




const prompt = require('prompt-sync')();
let vstup = prompt('Vloz cislo: ');


for(let i = 0; i <= vstup; i++) {
    if ((i % 4 === 0) && (i % 6 === 0)) {
        console.log(i);
    }
}

//If your country's population is greater than 33 million, log a string like this to the console:
// "Portugal's population is 22 million below average"
// (the 22 is the average of 33 minus the country's population).


const country = 'Portugal';
const averagePop = 33; //In millions
const prompt = require('prompt-sync')();
let vstup = prompt('Vloz populaciu v milionoch: ');
const calculatedPop = averagePop - vstup;


if (calculatedPop < averagePop) {
    console.log(`Country population is ${calculatedPop} milions below average.`);
}
else (ako sem do else zahrniem aby to bolo vynasobene -1?) ?????????????
{
    console.log(`Country population is ${calculatedPop} milions above average.`);
}

//Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> he knows its a integer?
console.log('19' - '13' + '17'); // -> here he knows it is an integer at the begining but then he forgets it?
console.log('19' - '13' + 17); // -> ok
console.log('123' < 57); // -> he treated the string as a string?! wtf
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ok

//prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
//Change == to ===, and test the code again. See the result when numNeughbors ===1!


const prompt = require('prompt-sync')();
let numNeighbours = prompt('How many neighbour countries does your contry have? ');
if (numNeighbours == 1) {
    console.log('Only 1 neighbour');
}
else if (numNeighbours > 1) {
    console.log('More than 1 neighbour');
}
else {
    console.log('No borders');
}


//Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English,
// has less than 50 million people and is not an island.
// Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria.
// Take your time with this, and check part of the solution if necessary.

const prompt = require('prompt-sync')();

// Zero prompt
let countryName = prompt('What is the name of the country you are thinking of? ');

// First prompt
let language = prompt('Does the country speak english? Reply yes/no ');

// Second prompt
let peopleInMilions = prompt('How many ppl live in the country in milions? ');

// Third prompt
let IsIsland = prompt('Is it an island country? yes/no ');

if (language === 'yes' &&
    peopleInMilions < 50 &&
    IsIsland === 'no') {
    console.log(`You should live in ${countryName} :)`);
} else {
    console.log(`${countryName} does not meet all the criteria :(`)
}


//Use a switch statement to log the following string for the given language:
//chinese or mandarin: 'MOST number of native speakers!';
//spanish: '2nd place in number of native speakers';
//english: '3rd place';
//hindi: 'Number 4';
//arabic: '5th most spoken language';
//for all other simply log 'Great language too :D'.

const prompt = require('prompt-sync')();
let languageOfChoice = prompt('What language you want to check?');

switch (languageOfChoice) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3.place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

//Conditional (Tenary) operator:
//If your country's population is greater than 33 million,
// use the ternary operator to log a string like this to the console:
// "Portugal's population is above average".
// Otherwise, simply log "Portugal's population is below average".
// Notice how only one word change between these two sentences!


???


//Blanka, Katka and Tina are trying to compare their BMI
    // Store Blankas's, Tina’s and Katkas's mass and height in variables.
    //Calculate both their BMIs using the formula, and store the results in three variables called BMIBlanka and BMIKatka and BMITina.
    //Log the value of BMIBlanka, BMITina and BMIKatka to the console.
    //BONUS: Create a boolean variable nameHasHigherBMI containing information about whether Blanka,
// Tina or Katka has a the highest BMI Log it to the console too


const prompt = require('prompt-sync')();

// Blanka
let heightBlanka = prompt('What is Blankas height in m? ');

let weightBlanka = prompt('What is Blankas weight in kg?');

// Tina
let heightTina = prompt('What is Tinas height in m? ');

let weightTina = prompt('What is Tinas weight in kg?');

// Katka
let heightKatka = prompt('What is Katkas height in m? ');

let weightKatka = prompt('What is Katkas weight in kg?');

let BMIBlanka = weightBlanka/(heightBlanka * heightBlanka);
console.log(`Blankas BMI is ${BMIBlanka}`);

let BMITina = weightTina/(heightTina * heightTina);
console.log(`Tinas BMI is ${BMITina}`);

let BMIKatka = weightKatka/(heightKatka * heightKatka);
console.log(`Katkas BMI is ${BMIKatka}`);


