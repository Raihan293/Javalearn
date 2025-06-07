const products = [300, 100, 700, 1200];

const product = [
    { name: 'Shampoo', price: 300},
    { name: 'Chiruni', price: 100},
    { name: 'Shirt', price: 700},
    { name: 'Pant', price: 1200}
]

function getShoppingTotal(products){
    let totalprice =0;
    for(const product of products){
        totalprice = totalprice+ product;
    }

    return totalprice;
}

const total = getShoppingTotal(products);
console.log('Total ajke Khosabe: ',total);