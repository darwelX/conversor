"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Conversor = exports.Conversor = {
  baseLibras: 2.20462,
  baseKilogramos: 0.453592,

  librasToKilogramos: function librasToKilogramos(_libras) {
    return _libras * this.baseKilogramos;
  },
  kilogramosToLinbras: function kilogramosToLinbras(_kilogramos) {
    return _kilogramos * this.baseLibras;
  }
};