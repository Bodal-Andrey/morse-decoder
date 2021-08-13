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
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };
    const arr = getKeyByValue(MORSE_TABLE, `m`);
console.log(arr)
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === `-`) {
            newArr.push(11);
        }
        if (arr[i] === `.`) {
        newArr.push(10);
        }
    }
    const joinArr = newArr.join(``);
    console.log(joinArr)
    if (joinArr.length < 10) {
        const bebe = joinArr.split(``);
        console.log(bebe.length)
        for (let i = 0; i < 10 - bebe.length; i) {
            bebe.unshift(`0`);
        }
        return bebe.join(``);
    }
    return bebe;
}

module.exports = {
    decode
}