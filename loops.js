/*Výpis čísel od 1 do 10: Použite cyklus na výpis čísel od 1 do 10.
    Výpis párnych čísel od 1 do 20: Použite cyklus na výpis len párnych čísel od 1 do 20.
    Výpis nepárnych čísel od 1 do 20: Použite cyklus na výpis len nepárnych čísel od 1 do 20.
    Súčet čísel od 1 do 100: Spočítajte súčet všetkých čísel od 1 do 100.
    5. Súčet len párnych čísel od 1 do 100: Spočítajte súčet iba párnych čísel od 1 do 100.
    Výpočet faktoriálu čísla: Napíšte funkciu, ktorá vypočíta faktoriál zadaného čísla.
    Zoradenie pola: Zoraďte dané pole čísel od najmenšieho po najväčšie.
    Generovanie prvých n čísel Fibonacciovej postupnosti: Napíšte funkciu, ktorá vygeneruje prvých n čísel Fibonacciovej postupnosti.
    9. Vyhľadanie prvku v poli: Nájdite zadaný prvok v danom poli čísel.
    10. Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla.
*/
/*
//1. vypis cisla od 1 do 10:
for (let i = 0; i < 11; i++) {
    console.log(i);
}

//2. parne 1-20:
for(let i = 2; i < 21; i = i + 2) {
    console.log(i);
}

//3.neparne 1-20:
for(let i = 1; i < 21; i = i + 2) {
    console.log(i);
}

//4.sucet cisiel 1-100:
let sum = 0;
for(let i = 0; i < 101; i++) {
    sum = sum + i;
}
console.log(sum);


//5.sucet parnych cisel 1-100:
let sum = 0;
for(let i = 2; i < 101; i = i + 2) {
    sum = sum + i;
}
console.log(sum);


//6.Napíšte funkciu, ktorá vypočíta faktoriál zadaného čísla

const prompt = require('prompt-sync')();

let cislo = prompt('Text');
cislo = parseInt(cislo);

//bez funkcie
let fac = 1;
for (let i= cislo; i > 0; i--) {
    fac = fac * i;
}

//ako funkcia:
function factorial (number) {
    let fac = 1;
    for (let i= cislo; i > 0; i--) {
        fac = fac * i;
    }
    return fac
}
console.log(factorial(cislo));



//9. Vyhľadanie prvku v poli: Nájdite zadaný prvok v danom poli čísel, vysledok je true alebo false, pouzi:  for of
// prompt mi nefunguje na totmto brenchi tak si to neviem ako zkontrolovat 😕
const prompt = require('prompt-sync')();
let cislo = prompt('Text');
cislo = parseInt(cislo);

let pole = [1, 3, 3, 4, 5];
for(let nr of pole) {
    if (cislo === nr) {
        console.log(`True`);
    } else {
        console.log('False');
    }

}
*/

//10. Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla.

const prompt = require('prompt-sync')();
let cislo = parseInt(prompt('Zadaj cislo ktoreho mocninu mam pocitat: '));

function mocnina (nr) {
    return nr ** 2;
}
console.log(mocnina(cislo));


