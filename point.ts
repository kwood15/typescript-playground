// modules
export class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    
    drawPoint() {
        console.log(`x: ${this._x}, y: ${this._y}`);
    }
}