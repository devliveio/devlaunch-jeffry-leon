interface Product {
    id: number;
    name: string;
    category: string,
    tags: string [];
}

function filterProductsByTags(products: Product[], selectedTags: string[]): Product[] {
    const selectedTagsSet = new Set(selectedTags);

    return products.filter(product => {
    const productTagsSet = new Set(product.tags);
        
        return [...selectedTagsSet].every(tag => productTagsSet.has(tag));
    });
}

const products: Product[] = [
    { id: 1, name: "Apple", category: "Fruit", tags: ["Red", "Healthy", "Juicy"] },
    { id: 2, name: "Carrot", category: "Vegetable", tags: ["Orange", "Healthy", "Crunchy"] },
    { id: 3, name: "Bread", category: "Bakery", tags: ["Brown", "Carbs", "Fresh"] },
    { id: 4, name:  "Cheese", category: "Dairy", tags: ["Yellow", "Protein", "Melty" ]},
];

const selectedTags = ["Healthy", "Orange"];

const filteredProducts = filterProductsByTags(products, selectedTags);
console.log(filteredProducts);






