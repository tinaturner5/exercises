const country = 'Portugal';
const averagePop = 33; //In millions
const prompt = require('prompt-sync')();
let vstup = prompt('Vloz populaciu v milionoch: ');
const calculatedPop = averagePop - vstup;


if (calculatedPop < averagePop) {
    console.log(`Country population is ${calculatedPop} milions below average.`);
}
else //(ako sem do else zahrniem aby to bolo vynasobene -1?) ?????????????
    {
        console.log(`Country population is ${calculatedPop} milions above average.`);
    }

