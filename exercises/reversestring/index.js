// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return arr = str.split("").reverse().join("");
    
    return str.split('').reduce((rev, el) =>  el + rev, '');
}

module.exports = reverse;