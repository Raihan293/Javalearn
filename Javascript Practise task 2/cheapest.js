const phones= [
    {name: 'samsung', price: 20000, camera:'12mp', color: 'black' },
    {name: 'xoami', price: 18000, camera:'12mp', color: 'black' },
    {name: 'oppo', price: 30000, camera:'12mp', color: 'black' },
    {name: 'iphone', price: 100000, camera:'12mp', color: 'black' },
    {name: 'walton', price: 31000, camera:'12mp', color: 'black' },
    {name: 'HTC', price: 2700, camera:'12mp', color: 'black' },
] 

function getCheapestPhone(phones){
    const min = phones[0];
    for(const phone of phones){
        if(phone < min){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest Phone is: ', cheap);