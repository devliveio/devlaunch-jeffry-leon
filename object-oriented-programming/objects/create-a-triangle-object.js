const triangle = {
    isTriangle: function (sideA, sideB, sideC){
        return (
            sideA + sideB > sideC &&
            sideA + sideC > sideB &&
            sideA + sideC > sideA
        );
    },

    printTriangle: function (sideA, sideB, sideC){
        if (this.isTriangle(sideA, sideB, sideC)){
            console.log ("Valid triangle");
        } else {
            console.log ("Not valid triangle");
    
        }
    }


};

console.log(triangle.printTriangle(7, 5, 10))