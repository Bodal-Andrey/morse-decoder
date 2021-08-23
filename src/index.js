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
    const firstArr = expr.split(``);

    const secondArr = firstArr.reduce(function (result, value, index) {
        if (index % 10 === 0)
            result.push(firstArr.slice(index, index + 10));

        return result;
    }, []);

    const thirdArr = secondArr.map(item => + item.join(``));

    const fourthArr = thirdArr.join().split(`,`).map(item => item === `NaN` ? `**` : item);

    const fifthArr = fourthArr.map(item => item.match(/.{1,2}/g));
    
    const firstFun = (data) => {
        let seventhArr = [];
        for (let i = 0; i < data.length; i++) {
            
            if (data[i] === `10`) {
                seventhArr.push(`.`);
            }
            if (data[i] === `11`) {
                seventhArr.push(`-`);
            }
            if (data[i] === `**`) {
                seventhArr.push(``);
            }
        }
        return seventhArr.join(``);
    };

    const sixArr = fifthArr.map(item => firstFun(item));
    
    const eighthArr = sixArr.map(item => MORSE_TABLE[item]);
    
    const phraze = eighthArr.map(item => item === undefined ? ` ` : item).join(``);

    return phraze;
}

module.exports = {
    decode
}