function getMax(num1, num2, num3){
    if(num1 > num2){
        return num1;
    }
    else if(num2> num3){
        return num2;
    }
    else if (num3 > num2 ){
        return num3;
    }
}

const max = getMax(56, 90, 55);
console.log('Max of three is', max);