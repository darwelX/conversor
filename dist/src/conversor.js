"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.librasToKilogramos = librasToKilogramos;
exports.kilogramosToLinbras = kilogramosToLinbras;
var baseLibras = 2.20462;
var baseKilogramos = 0.453592;

function librasToKilogramos(_libras) {
    return _libras * baseKilogramos;
}

function kilogramosToLinbras(_kilogramos) {
    return _kilogramos * baseLibras;
}