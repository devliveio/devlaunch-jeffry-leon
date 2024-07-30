const productName = (milk, bread, ham, banana, notebook, pasta)
const productType = (perishable, non-perishable)


function discountPerishable(price){
    return price => 5 && price >= 10 ? "5%":
    price => 10 && price <= 15 ? "15%": "Not discount"


}

function discountNoPerishable (price){
    return price => 10 ? "7%":
    price <= 10 ? "25%": "Not discount"  

  
}

console.log((price, productName, productType, discountNoPerishable))