const prompt = require('prompt-sync')();

let numbers = [];
let end = true;
while (end) {
    let val = prompt('Vloz hodnotu do pola, ak chces skoncit zadaj hodnotu false: ');

    if (val.toLowerCase() === 'false') {
        end = false;
    } else  {
        numbers.push(parseInt(val));
    }
}


//let numbers = [10, 5, 17, 27, 8, 12];          //vydefinujem si funkciu nums

function sum(nums) {
    let sum = 0;                     //musime si zadefinovat odkial funcia ma zacat, zacne od miesta 0 v poli, inicializovana premenna
    nums.forEach((el) => {            //funkciu volam takto: funkcia();
        sum = sum + el;
    });
    return sum;                      //sumu si nemusim dat vypisat, staci ked sa mi niekam ulozi via return
}
let summary = sum(numbers);          //vytvorim si premennu summary do ktorej vlozim vysledok sum


function min(nums) {
    let min = nums[0];                //neuvadzam ze zacinam od nuly, ale zacinam od miesta 0 v poli [0] = umiestnenie
    nums.forEach((el) => {             //funkciu volam takto: funkcia();
        el < min ? min = el : {};     //ternary operator: condition followed by ?, expression to execute, else je nahradene :, {} znamena ze nic dalej nerobim, nemozem nechat prazdne
    })
    return min;

}

function max(nums) {
    let max = nums[0];
    nums.forEach((el) => {           //funkciu volam takto: funkcia();
        el > max ? min = el : {};   //ternary operator: condition followed by ?, expression to execute, else je nahradene :, {} znamena ze nic dalej nerobim, nemozem nechat prazdne
    });

    return max;
}

function odd(nums) {
    let oddSum = 0;
    nums.forEach((el) => {
        el % 2 ? oddSum++ : {}
    })
    return oddSum;
}


function even(nums) {
    let evenSum = 0;
    nums.forEach((el) => {
        //oddSum = oddSum + 1 => oddSum++
        if(el % 2 === 0) {
            evenSum++;
        }
    });
    return evenSum;
}

function avg(sum, len) {
    return sum / len;
}

console.log(`Number Data: [${numbers}]`);
console.log(`Sum of numbers: ${summary}`);
console.log(`Highest Number: ${max(numbers)}`);
console.log(`Lowest Number: ${min(numbers)}`);
console.log(`Even Numbers: ${even(numbers)}`);
console.log(`Odd Numbers: ${odd(numbers)}`);
console.log(`Average on Numbers: ${avg(summary, numbers.length)}`);

//You are given an array of student grades (each grade is a number between 0 and 100). Your task is to create a JavaScript program that performs the following tasks:
    //Calculate the average grade of all the students.
    //Determine the highest and lowest grades in the array.
    //Count how many students passed (grades >= 60) and how many failed (grades < 60).
    //Identify the number of students in each grade range: 0-59, 60-69, 70-79, 80-89, 90-100.

let grades = [85, 72, 56, 90, 65, 78, 45, 88, 92, 70];

function sum(nums) {
    let sum = 0;                     //musime si zadefinovat odkial funcia ma zacat, zacne od miesta 0 v poli, inicializovana premenna
    nums.forEach((el) => {            //funkciu volam takto: funkcia();
        sum = sum + el;
    });
    return sum;                      //sumu si nemusim dat vypisat, staci ked sa mi niekam ulozi via return
}
let summaryGrades = sum(grades);


function avg(sum, len) {
    return sum / len;
}

let averageGrade = avg(summaryGrades, grades.length);
console.log(`Average Grade: ${averageGrade}`);


function min(nums) {
    let min = nums[0];                //neuvadzam ze zacinam od nuly, ale zacinam od miesta 0 v poli [0] = umiestnenie
    nums.forEach((el) => {             //funkciu volam takto: funkcia();
        el < min ? min = el : {};     //ternary operator: condition followed by ?, expression to execute, else je nahradene :, {} znamena ze nic dalej nerobim, nemozem nechat prazdne
    })
    return min;
}
console.log(`Lowest Grade: ${min}`);