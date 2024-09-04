abstract class Transportation {
  abstract move(): void
}

class Car extends Transportation {
move() {
    console.log("Calculating time and distance of a trip based on the speed and traffic")
  }
}

class Bike extends Transportation {
    move() {
      console.log("Calculating time and distance of a trip based on the speed and terrain")
    }
  }

  class Bus extends Transportation {
    move() {
      console.log("Calculating time and distance of a trip based on the bus route and schedule")
    }
  }

const carInstance = new Car()
carInstance.move()

const bikeInstance = new Bike()
bikeInstance.move()

const busInstance = new Bus()
busInstance.move()
