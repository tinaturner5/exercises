/*
Implementuj Array metódu find
Implementuj Array metódu forEach - vypis vsetky hodnoty pola bez pouzitia for Each metody
x Implementuj Array metódu filter
Implementuj Array metódu reverse
Implementuj Array metódu sort
Nacitaj od uzivatela 10 mien a vypis len tie, ktoré obsahujú písmeno R
Vytvor 2D pole s hodnotami 1 - 10 a vypíš ich
Vytvor 2D pole a najdi max hodnotu v poli
Vytvor 2D pole a spocitaj celkovu hodnotu pola



//1. metoda find:


//2. vypisujes elementy cez index bez pouzitia forEach
const arr = [17, 44, 32];
function arrayForEach(arr) {
    for(let i =0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrayForEach(arr);

//3.


//4. reverse

const arr = [17, 44, 32];

for (let i = arr.length - 1; i >= 0; i--) {    //chcem vypisat cisla odzadu, posledny element -1 pretoze zacinam od 0
    console.log(arr[i]);                       //a posledny element by bol mimo [], pokracujem kym i>0 a uberam elementy odzadu
}



//5. sort, metodou include() - vyhladaj mena ktore obsahuju "r"

let names = ['Roman', 'Peter', 'Karol', 'Katka', 'Blanka'];    //tolowercase nebude fungovat na array, musim k tomu pristupovat iteracne

names.forEach((el) => {
    let result =el.toLowerCase().includes('r');         //cekne ci element (meno) obsahuje "r/R",
    if (result === true) {                              //command a klik na danu cast kodu mi otvory navod
        console.log(el)                                 //result mi dava boolean, preto logujem element po splneni podmienky
    }
});

//6.



//7.

let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for (let i = 0; i < array2d.length; i++) {
    for ( let j = 0; j < array2d[i].length; j++) {          //najprv sa vykona najvnutornejsi cyklus,
        console.log(array2d[i][j]);
    }
}



//8. Vytvor 2D pole a najdi max hodnotu v poli

let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

let max = array2d[0][0];                                    //do premennej dosadim hodnotu na pozicii 00
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {          //najprv sa vykona najvnutornejsi cyklus,
        if (array2d[i][j] > max) {
            max = array2d[i][j];
        }
    }
}
console.log(max);
*/

//9. zcitaj vsetky hodnoty pola

let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

let sum = 0;                                    //do premennej dosadim hodnotu na pozicii 00
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {          //najprv sa vykona najvnutornejsi cyklus,
        sum = sum + array2d[i][j];
    }
}

console.log(sum);


//10. sucet cisel v 3D poli:

let array3d =
    [
        [
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ],
        [
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ],
        [
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ]
    ];

let sum = 0;
for (let i = 0; i < array3d.length; i++) {
    for (let j = 0; j < array3d[i].length; j++) {
        for(let k = 0; k < array3d[i][j].length; k++){
            sum = sum + array3d[i][j][k];
        }
    }
}