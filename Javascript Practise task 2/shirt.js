/**
 * shirt Price --> 500
 * Pant price --> 300
 * Shoe Price --> 900
 */

function moneyNeed(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtprice = 500;
    const perPantprice = 300;
    const perShoeprice = 900;
    
    const shirtTotalprice = shirtQuantity  * perShirtprice;
    const pantTotalprice  = pantQuantity * perPantprice; 
    const shoeTotalprice = shoeQuantity * perShoeprice;

    const totalPrice = shirtTotalprice + pantTotalprice + shoeTotalprice; 

    return totalPrice;
}

const price = moneyNeed(10, 20, 0 );

console.log('Total Price is ', price);