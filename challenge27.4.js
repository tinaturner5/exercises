
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
console.log(`"Uzivatel zadal cislo: ${vstup} a to je peklne cislo`)


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

