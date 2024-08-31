const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    // write your solution here
let letter = '';
let outString = '';
let newString = '1';
for (let i = 0; i < expr.length; i = i+10)  {
    newString = expr.slice(i, i+10);
    letter = '';
    for (let j = 0; j < newString.length; j = j + 2 ) {
        if (newString.slice(j, j+2) == '10') {letter = letter + '.';}
        if (newString.slice(j, j+2) == '11') letter = letter + '-';
        if (newString.slice(j, j+2) == '**') {letter = letter + ' '; break;}
    } 
    if (letter !== ' ' ) outString = outString + MORSE_TABLE[letter];
    else outString = outString + ' ';
    }
return outString;       
}

module.exports = {
    decode
}