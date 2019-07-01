// number variables
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let fullstop = document.querySelector('#fullstop');
let enter = document.querySelector('#enter');

// operator variables
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let divide = document.querySelector('#divide');
let clear = document.querySelector('#clear');

// screen variables
let result = document.querySelector('#result');
let processing = document.querySelector('#processing');
let calculatorBody = document.querySelector('#calculator');

// synchronous application
// document.body.addEventListener('mousemove', changeBackground);

// event handlers
one.addEventListener('click', bringOwnValue);
two.addEventListener('click', bringOwnValue);
three.addEventListener('click', bringOwnValue);
four.addEventListener('click', bringOwnValue);
five.addEventListener('click', bringOwnValue);
six.addEventListener('click', bringOwnValue);
seven.addEventListener('click', bringOwnValue);
eight.addEventListener('click', bringOwnValue);
nine.addEventListener('click', bringOwnValue);
zero.addEventListener('click', bringOwnValue);
fullstop.addEventListener('click', bringOwnValue);

plus.addEventListener('click', bringOwnValue);
minus.addEventListener('click', bringOwnValue);
times.addEventListener('click', bringOwnValue);
divide.addEventListener('click', bringOwnValue);

enter.addEventListener('click', getEnter);

clear.addEventListener('click', erase);

// event functions
function bringOwnValue(event) {
    console.log(this.textContent);
    processing.innerText += this.textContent;
}

function getEnter(event) {
    let calculating = processing.innerText.split('');
    let num = '';
    if (calculating[0] === '-') {
        calculating[1] = calculating[0] + calculating[1];
        calculating.splice(0, 1);
    }
    for (let i = 0; i <= calculating.length; i++) {
        if (!isNaN(Number(calculating[i])) && calculating[i] !== undefined) {
            num += calculating[i];
            // console.log(num);
            calculating.splice(i, 1);
            i--;
        } else {
            calculating.splice(i, 0, num);
            num = '';
            i++;
        }
    }
    // console.log(calculating);
    for (let i = 0; calculating.length >= 1; i++) {
        if (calculating.length === 1) {
            num = calculating[0];
            calculating.splice(0, 1);
        } else if (calculating[i] === '.') {
            calculating[i + 1] = Number(calculating[i - 1] + '.' + calculating[i + 1]);
            calculating.splice(0, i + 1);
            i -= 2;
        } else if (calculating[i] === '+') {
            calculating[i + 1] = Number(calculating[i - 1]) + Number(calculating[i + 1]);
            calculating.splice(0, i + 1);
            i -= 2;
        } else if (calculating[i] === '-') {
            calculating[i + 1] = Number(calculating[i - 1]) - Number(calculating[i + 1]);
            calculating.splice(0, i + 1);
            i -= 2;
        } else if (calculating[i] === '*') {
            calculating[i + 1] = Number(calculating[i - 1]) * Number(calculating[i + 1]);
            calculating.splice(0, i + 1);
            i -= 2;
        } else if (calculating[i] === '/') {
            calculating[i + 1] = Number(calculating[i - 1]) / Number(calculating[i + 1]);
            calculating.splice(0, i + 1);
            i -= 2;
        } 
    }
    // console.log(num);
    // processing.innerText = '';
    result.innerText = num;
}

function erase(event) {
    result.innerText = '';
    processing.innerText = '';
}