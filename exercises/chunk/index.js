// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let i = 0;

    let oArr = [];

    while(i < array.length) {
        oArr.push(array.slice(i, i+size));
        i = i+size;
    }
    return oArr;

}

module.exports = chunk;
    /* first attempt*/
    // const oArr = [];
    // let iArr = [];

    // for(let i =0; i < array.length; i++) {
    //     if(iArr.length == size) {
    //         oArr.push(iArr);
    //         iArr = [];
    //     } 
    //     //if this is the last number push it anyway
    //     if (i+1 == array.length) {
    //         iArr.push(array[i]);
    //         oArr.push(iArr);
    //     }
    //     else {
    //         //add element to array
    //         iArr.push(array[i]);
    //     }

    // }
    // return oArr;

/* slightly more consolidated */ 
    // const oArr = [];

    // for (let element of array) {
    //     const last = oArr[oArr.length - 1];
        
    //    if(!last || last.length === size) {
    //        oArr.push([element]);
    //    }
    //    else {
    //        last.push(element);
    //    }
    // }
    // return oArr;