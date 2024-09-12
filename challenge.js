/*
Declare variables called country, continent and population and assign their values according to your own country
(population in millions).

Log their values into console

Declare a variable called isIsland and set its value according to your country.
The variable should hold a Boolean value.
Also declare a variable language, but don't assign it any value yet.

Log the types of isIsland, population, country and language to console


Set the value of language to the language spoken where you live
(some countries have multiple languages, but just choose one).

Think about which variables should be const variables
(which values will never change, and which might change?).
Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens

If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak Portuguese'.


 */

var country = 'Czechia';
const continent = 'Europe';
var czechPopulation = 10;
var isIsland = false;
var language = 'czech';
var splitInHalf = czechPopulation/2;
var popIncrease = czechPopulation + 1;
var portugalStatement = 'Portugal is in Europe, and its 11 million people speak Portuguese'


var finPopulation = 6;
var displayMessage;
if (finPopulation > czechPopulation) {
        displayMessage = 'Finland has bigger population.';
    } else {
        displayMessage = 'Czechia has bigger population.';
    }


var averageCountry = 33;
var popCalc;
if (averageCountry > czechPopulation) {
    popCalc = 'Average country has bigger population than Czechia.';
} else {
    popCalc = 'Average country has less population than Czechia.';
}



console.log(country);
console.log(continent);
console.log(czechPopulation);
console.log(isIsland);
console.log(language);
console.log(splitInHalf);
console.log(popIncrease);
console.log(finPopulation);
console.log(displayMessage);
console.log(popCalc);
console.log(portugalStatement)

