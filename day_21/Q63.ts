// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = {
    radius?: number;
    width?: number;
    height?: number;
}

type Circle = Shape & {
    radius: number;
}

type Rectangle = Shape & {
    width: number;
    height: number;
}

let circle: Circle = {
    radius: 10
}

let rectangle: Rectangle = {
    width: 10,
    height: 20
}

console.log(circle);
console.log(rectangle);

