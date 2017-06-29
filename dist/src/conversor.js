"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.Conversor = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.baseLibras = 2.20462;
    this.baseKilogramos = 0.453592;
  }

  _createClass(_class, [{
    key: "librasToKilogramos",
    value: function librasToKilogramos(_libras) {
      return _libras * this.baseKilogramos;
    }
  }, {
    key: "kilogramosToLinbras",
    value: function kilogramosToLinbras(_kilogramos) {
      return _kilogramos * this.baseLibras;
    }
  }]);

  return _class;
}();