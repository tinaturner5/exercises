/*
1. Easy: Check Even or Odd: Write a JavaScript function that takes an integer as input and returns "Even" if the number is even and "Odd" if it's odd.

2. Easy: Temperature Classifier: Create a function that takes a temperature in Celsius as input and returns a message based on the temperature:
If the temperature is less than 0, return "Freezing".
If the temperature is between 0 and 15 (inclusive), return "Cold".
If the temperature is between 16 and 25 (inclusive), return "Moderate".
If the temperature is greater than 25, return "Hot".

3. Medium: Validate Email Format: Write a function that takes an email address as input and returns true if the email address is valid based on a simple format check (e.g., it contains an "@" symbol and a domain).

4. Medium: Leap Year Checker: Create a function that takes a year as input and returns true if it's a leap year and false if it's not. A leap year is divisible by 4 but not by 100 unless it is also divisible by 400.

5. Medium: Find the Greatest Number: Write a JavaScript function that takes three numbers as input and returns the greatest number among them.

6. Hard: Palindrome Checker: Create a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
7. Hard: Prime Number Checker: Write a JavaScript function that takes an integer as input and returns true if it's a prime number and false if it's not.
8. Hard: Anagram Checker: Implement a function that takes two strings as input and returns true if they are anagrams of each other (contain the same characters in any order) and false otherwise.
9. Advanced: Password Strength Checker: Create a function that takes a password as input and returns a strength rating based on the following criteria:
Weak: Less than 8 characters.
Medium: 8 or more characters but doesn't contain both uppercase and lowercase letters.
Strong: 8 or more characters and contains both uppercase and lowercase letters.
 */

//1.
/*
const prompt = require('prompt-sync')();
let vstup = prompt('Vloz cislo: ');

if (vstup % 2 === 0) {
    console.log("Number is even")
} else {console.log("Number is odd")
}

 */

//2. cant use switch hever because it cant process logical statements 0 < temp <= 15
/*
const prompt = require('prompt-sync')();
let temp = prompt('Whats the current temperature?: ');
temp = parseInt(temp)                 // this makes the input temp a number, otherwise it is string

if (temp < 0) {
    console.log('Freezing');
}

else if (0 < temp <= 15) {
    console.log('Cold');
}

else if (16 < temp <= 25) {
    console.log('Moderate');
}

else if (temp > 25) {
    console.log('Hot');
}
else {
    console.log('Unknown value');

}

 */

//3.

const prompt = require('prompt-sync')();
let email = prompt('Enter your email: ');

function mailValidity ("@" && "\.")





//4..









//5. input 3numbers and find the greatest one
/*
function max(numbers) {
    let max = numbers[0];
    numbers.forEach((el) => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}
*/
//6. palindrom
/*
function palindrom(text) {
    let isPalindrom = true;
    for(let i = 0; i < text.length; i++){
        if(text[i] === text[text.length - 1 - i]) {
            console.log(text[i])
            console.log(text[text.length - 1 - i]);
        } else {
            isPalindrom = false
            return isPalindrom;
        }
    }
    return isPalindrom;

}
console.log(palindrom("radar"));   //input here the word you need to check
*/



