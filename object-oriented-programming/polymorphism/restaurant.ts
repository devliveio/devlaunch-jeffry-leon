abstract class Restaurant {
    abstract serve(): void
}
class FastFood extends Restaurant {
    serve(){
        console.log("Serving burgers and fries")
    }}
class FineDining extends Restaurant {
    serve() {
        console.log("Serving gourmet dishes")
    }}
class Cafeteria extends Restaurant {
    serve() {
        console.log("Serving a variety of options")
    }}
    
    const fastFood = new FastFood()
    fastFood.serve()
    const fineDining = new FineDining()
    fineDining.serve()
    const cafeteria = new Cafeteria()
    cafeteria.serve()

