// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // let arr = n.toString().split("");
    // if(arr[0] === '-') {
    //     let neg = arr.shift();
        
    //     return parseInt(neg + arr.reverse().join(""));
    // }
    // else {
    //     return parseInt(arr.reverse().join(""));
    // }

    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
    
}

module.exports = reverseInt;
