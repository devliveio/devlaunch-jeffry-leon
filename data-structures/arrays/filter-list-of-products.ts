type Product = {

    name: string
    price: number
    inStock: boolean
    category: `technology` | `home` | `clothing`| `food`;
}

const products: Product[] = [
    { name: "Laptop", price: 200, inStock: true, category: 'technology' },
    { name: "Toaster", price: 45, inStock: true, category: 'home' },
    { name: "Shirt", price: 35, inStock: false, category: 'clothing' },
    { name: "Smartphone", price: 100, inStock: true, category: 'technology' },
    { name: "Bread", price: 2, inStock: true, category: 'food' },
    { name: "Lamp", price: 60, inStock: true, category: 'home' },
]

const filterProducts: Product [] = products.filter(product => (
    product.inStock &&
    (product.price >= 50 && product.price <= 150) &&
    (product.category === `technology` || product.category === `home`)
))

console.log(filterProducts)



