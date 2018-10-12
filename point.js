"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// modules
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log("x: " + this._x + ", y: " + this._y);
    };
    return Point;
}());
exports.Point = Point;
