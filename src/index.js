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
    const arr = expr.split(``).map(item => getKeyByValue(MORSE_TABLE, item));

    const newArr = arr.map(item => item === undefined ? `**********` : item);

    const result = newArr.map(item => {
        const secondArr = [];
        for (let i = 0; i < item.length; i++) {
            if (item[i] === `*`) {
                secondArr.push(`*`);
            }

            if (item[i] === `-`) {
                secondArr.push(11);
            }
            if (item[i] === `.`) {
                secondArr.push(10);
            }
        }
        const thirdArr = secondArr.join(``);
        let fourthArr = new Array(thirdArr);

        const sixArr = fourthArr.map(item => {
            if (item.length < 10) {
                let seventhArr = item.split(``);

                for (let i = 0; i < 10 - seventhArr.length; i) {
                    seventhArr.unshift(`0`);
                }
                return seventhArr.join(``);
            } else {
                return item;
            }

        });
        return sixArr;
    });
    return result.join(``);
}

module.exports = {
    decode
}