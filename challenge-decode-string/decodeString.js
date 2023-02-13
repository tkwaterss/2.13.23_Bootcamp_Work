// Write your code below this line

let test1 = "1a";
let test2 = "3ce";
let test3 = "2fcjjm";
let test4 = "9abcxyz";

const decoder = string => {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let shift = Number(string[0]);
    let array = string.split('');
    array.shift();

    for (let i = 0; i < array.length; i++) {
        let index = (alphabet.indexOf(array[i]) + shift);
        if (index > 25) {index -= 25};
        array[i] = alphabet[index];
    }
    return array.join('') 
}
// console.log(decoder(test1));
// console.log(decoder(test2));
// console.log(decoder(test3));
// console.log(decoder(test4));
//charCodeAt(index) returns character code at said index
const decoder2 = string => {
    let solution = ``;
    for (let i = 1; i < string.length; i++) {
        solution += String.fromCharCode(string[i].charCodeAt() + Number(string[0]));
    }
    return solution;
}
console.log(decoder2(test1));
console.log(decoder2(test2));
console.log(decoder2(test3));
console.log(decoder2(test4));



/*
To allow for larger input numbers we could add a few components
first check for what index the string swtiches from numbers to letters.
Next pull out the entire starting number regardless of length (.splice.join;
Last run a while loop that will coninue subracting 26 from the number until it is less than 26 at which point it can be evaluated against the string.
*/

//Solution 2 - from Kyle
function ceaserCipher(code){
    let decoder = Number(code[0])
    let solution = ``
    for(let i = 1; i < code.length; i++){
let newLetterVal = code[i].charCodeAt() + decoder
solution += String.fromCharCode(newLetterVal)
    }
    return solution
}

// console.log(ceaserCipher(test1))
// console.log(ceaserCipher(test2))
// console.log(ceaserCipher(test3))
// console.log(ceaserCipher(test4))

//Solution 3 - Instructor