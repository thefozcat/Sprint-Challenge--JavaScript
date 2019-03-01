// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(input) {
        this.length = input.length;
        this.width = input.width;
        this.height = input.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

// Stretch Task

class CubeMaker extends CuboidMaker {
    constructor(input) {
        super(input);
    }

    cubeSurfaceArea() {
        return (6 * (this.length * this.width));
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
});

// Stretch Task

const cube = new CubeMaker({
    length: 15, 
    width: 15,
    height: 15
});

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.volume()); // 3375
console.log(cube.cubeSurfaceArea()); //1350