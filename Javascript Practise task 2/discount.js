/**
 * Upto 100: --> 100
 * 
 */


function discountedPrice(quantity){
    if(quantity){
        const total = quantity* 100;
        return total;
    }
    else if(quantity <=200){
        const total = quantity *90;
        return total;
    }
    else{
        const total = quantity* 70;
        return total;
    }
}

const total = discountedPrice(5);
console.log('You need to pay', total);