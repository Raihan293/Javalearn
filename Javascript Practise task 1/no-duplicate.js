/**
 * array has some duplicate elements
 */

const biryanikhor = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'babul', 'cabul'];

const numbers = [42, 13, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function noDuplicate(array) {
    const unique = [];
    for(const item of array){
        if(unique.includes(item)== false){
            unique.push(item);
        }
    }
    return unique;
}

const unique = noDuplicate(biryanikhor);

console.log( unique);