class Rectangle {
    constructor(width, height) {
        if (typeof width !== 'number' || typeof height !== 'number') {
            throw new Error('Width and height must be numbers');
        }
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive');
        }
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        if (typeof side !== 'number') {
            throw new Error('Side must be a number');
        }
        if (side <= 0) {
            throw new Error('Side must be positive');
        }
        super(side, side);
    }

    getPerimeter() {
        return this.width * 4;
    }
}

document.getElementById('create-rectangle-button').addEventListener('click', function() {
    try {
        const rectangle = new Rectangle(5, 10);
        console.log(rectangle.width);
        console.log(rectangle.height);
        console.log(rectangle.getArea());
    } catch (error) {
        console.error(error.message);
    }
});

document.getElementById('create-square-button').addEventListener('click', function() {
    try {
        const square = new Square(7);
        console.log(square.width);
        console.log(square.height);
        console.log(square.getArea());
        console.log(square.getPerimeter());
    } catch (error) {
        console.error(error.message);
    }
});