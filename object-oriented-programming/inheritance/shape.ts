abstract class Shape {

 private numberOfSides: number

 constructor (numberOfSides: number){
    this.numberOfSides = numberOfSides
 }

 abstract calculateArea(): number
 abstract calculatePerimeter(): number

}

class Rectangle extends Shape {
    private length: number
    private width: number
    private static readonly RECTANGLE_SIDES = 4

    constructor(length: number, width: number) {
        super(Rectangle.RECTANGLE_SIDES)
        this.length = length
        this.width = width
      }

      calculateArea(): number {
        return this.length * this.width
      }

      calculatePerimeter(): number {
        return 2 * (this.length + this.width)
      }

      isSquare(): boolean {
        return this.length === this.width
      }
}

class Circle extends Shape {
    private radius: number
    private static readonly CIRCLE_SIDES = 0

    constructor (radius: number){
        super (Circle.CIRCLE_SIDES)
        this.radius = radius
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius
      }

      circumference(): number {
        return 2 * Math.PI * this.radius
      }
    }

const rectangle = new Rectangle(5, 4)
console.log("Rectangle Area:", rectangle.calculateArea())
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter())
console.log("Is Rectangle a Square?", rectangle.isSquare())

const circle = new Circle(3)
console.log("Circle Area:", circle.calculateArea().toFixed(2))
console.log("Circle Circumference:", circle.circumference().toFixed(2))






    


    
