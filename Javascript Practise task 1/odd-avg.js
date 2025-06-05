/**
 * fucntion takes an array as parameter 
 * give me the average of the odd numbers in the array
 */

function oddAvg(numbers){
    //console.log(numbers);
    const odds = [];
    for(const number of numbers){
        if(number %2 !=0 ){
            //console.log(number);
             odds.push(number);
        }
    }
      console.log(odds);
      let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13 , 7, 8, 9, 10, 11, 12, 13, 14, 15];
const avg = oddAvg(numbers);
console.log('average of the odd numbers is:', avg);
 