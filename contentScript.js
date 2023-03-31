let inputs = document.querySelectorAll('input');
let l33tType = {};
let intermediateL33t =  {
    'b' : 'I3',
    'c' : '[',
    'd' : '|)',
    'f' : '|=',
    'g' : '6',
    'h' : '#',
    'j' : ']',
    'k' : '|<',
    'l' : '1',
    'm' : '/\\/\\',
    'n' : '|\\|',
    'p' : '|>',
    'q' : '0_',
    'r' : 'I2',
    's' : '5',
    't' : '7',
    'v' : '\\/',
    'w' : '\\/\\/',
    'x' : '><',
    'y' : 'j',
    'z' : '2',
    'a' : '4',
    'e' : '3',
    'i' : '1',
    'o' : '0',
    'u' : '(_)'
}
let basicL33t = {
    'a' : '4',
    'e' : '3',
    'i' : '1',
    'o' : '0',
    'u' : 'u',
    't' : '7',
    'b' : '8'
}

const determineL33tType = (option) => {
    switch(option){
        case 'intermediate':
            l33tType = intermediateL33t;
        break;
        default:
            l33tType = basicL33t;
        break;
    }
}
const l33tConverter = (val) => {
    let content = val.target.value.toLowerCase();
    determineL33tType('');
    if(!content || /^ *$/.test(content)) return;
    let newString = '';
    for(let i = 0; i < content.length; i++){
        let currChar = content.charAt(i);
        if(l33tType.hasOwnProperty(currChar)) newString += l33tType[currChar];
        else newString += currChar;
    }
    val.target.value = newString;
}

inputs.forEach(x => {
    x.addEventListener('input', l33tConverter)
});