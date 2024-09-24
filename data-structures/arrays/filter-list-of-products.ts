type Product = {
    name: string,
    price: number,
    inStock: boolean,
    category: 'technology' | 'home' | 'clothing' | 'food';
}

const products: Product[] = [
    { name: "TV", price: 400, inStock: true, category: 'technology' },
    { name: "Microwave", price: 80, inStock: true, category: 'home' },
    { name: "Pant", price: 35, inStock: false, category: 'clothing' },
    { name: "Iphone", price: 110, inStock: true, category: 'technology' },
    { name: "Protein", price: 30, inStock: true, category: 'food' },
    { name: "Couch", price: 70, inStock: true, category: 'home' },
] 

const filteredProducts: Product[] = products.filter(product => (product.inStock && 
    (product.price >= 50 || product.price <= 150) && (product.category === 'technology' || product.category === 'home' )))

    console.log(filteredProducts)


