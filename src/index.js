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
  let string = '';
  let letterCode = '';
  let i = 0;

  while(i <= expr.length)
  {

    if(i && !(i%10))
    {
      if(letterCode === '**********')
      {
        string += ' ';
      }
      else
      {
        string += MORSE_TABLE[letterCode.replace(/10/gi, '.').replace(/11/gi, '-').replace(/0/gi, '')];
      }

      letterCode = '';
    }

    letterCode += expr[i];
    i++;
  }

  return string;
}

module.exports = {
    decode
}