export const Conversor = {
  baseLibras: 2.20462,
  baseKilogramos: 0.453592,

  librasToKilogramos(_libras){
    return _libras * this.baseKilogramos
  },

  kilogramosToLinbras(_kilogramos){
    return _kilogramos * this.baseLibras
  }
}



