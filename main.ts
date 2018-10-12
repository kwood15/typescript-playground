import { Point } from './point';

// var message = 'Good afternoon';


// function log(message) {
//     console.log(message)
// }

// log(message);


// scoping
// function doSomething() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('finally', i);
// }

// doSomething();


// types
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a'];


// enums
// const ColourRed = 0;
// const ColourGreen = 1;
// const ColourBlue = 2;

// enum Colour { Red = 0, Green = 1, Blue = 2 }
// const backgroundColour = Colour.Red;


// type assertions
// let message;
// message = 'abc'; // any
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c'); // => tsc main.ts --target ES6 && node main.js
// let log = function(message) {
//     console.log(message);
// }


// arrow funcs
// let doLog = () => console.log(message);
// let doLog1 = (message) => console.log(message);
// let doLog2 = message => console.log(message);
// let doLog4 = (message) => {
//     console.log(message);
//     alert(message);
// }


// inline annotations
// let drawPoint = (point: { x: number, y: number }) => {
    
// }

// drawPoint({
//     x: 1,
//     y: 2
// });


// interface decalration - custom type => no cohesion
// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point: Point) => {
//     //...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     //...
// }

// drawPoint({
//     x: 1,
//     y: 2
// });


// classes
// class Point {
//     private x: number; // access modifiers => private/public/protected
//     private y: number;

//     constructor(x?: number, y?: number) { // => ? optional
//         this.x = x;
//         this.y = y;
//     }
    
//     drawPoint() {
//         console.log(`x: ${this.x}, y: ${this.y}`);
//     }
// }

// let point = new Point(1, 2); // => inferring type : Point
// point.drawPoint();


// cleaner classes
// class Point {
//     constructor(private _x?: number, private _y?: number) {
//     }
    
//     drawPoint() {
//         console.log(`x: ${this._x}, y: ${this._y}`);
//     }

//     get x() {
//         return this._x;
//     }

//     set x(value) { // => tsc main.ts --target ES5 && node main.js
//         if(value < 0 ) {
//             throw new Error('Value cannot be less than 0');
//         } else {
//             this._x = value;
//         }
//     }
// }

// let point = new Point(3, 4);
// let x = point.x; // getter
// point.x = 25; // setter
// point.drawPoint();


// Modules import
let point = new Point(6, 7);
point.drawPoint();







