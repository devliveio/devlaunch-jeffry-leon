const mariasFavoriteFood = "Pizza"
const pepesFavoriteFood = "Chicken"
const malvernsFavoriteFood = "Fish"

const situation1 = mariasFavoriteFood === pepesFavoriteFood && mariasFavoriteFood == malvernsFavoriteFood
const situation2 = mariasFavoriteFood === pepesFavoriteFood || mariasFavoriteFood == malvernsFavoriteFood
const situation3 = !(mariasFavoriteFood === pepesFavoriteFood && mariasFavoriteFood == malvernsFavoriteFood)

console.log(`Does Maria shares the same favorite food as both Pepe and Malvern ? : ${situation1}`)
console.log(`Does Maria's favorite food matches either Pepe's or Malvern's ?: ${situation2}`)
console.log(`Does Maria's preference differs from both Pepe's and Malvern's?: ${situation3}`)


