"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = void 0;
function add(a, b) {
    return a + b;
}
exports.default = add;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
