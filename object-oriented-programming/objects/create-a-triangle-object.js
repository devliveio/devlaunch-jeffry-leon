const triangle = {
    isTriangle: function(sideA, sideB, sideC) {
        return (
            sideA + sideB > sideC &&
            sideA + sideC > sideB &&
            sideB + sideC > sideA
        );
    },

    printTriangle: function(sideA, sideB, sideC) {
        if (this.isTriangle(sideA, sideB, sideC)) {
            console.log('The triangle is valid.');
        } else {
            console.log('The triangle is not valid.');
        }
    }
};

console.log(triangle.printTriangle(7, 5, 10));