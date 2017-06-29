const expect = require('chai').expect;
const librasToKilogramos = require('..').librasToKilogramos;
const kilogramosToLinbras = require('..').kilogramosToLinbras;

describe('#conversor', function(){

  it('convirtiendo libras a kilogramos', function(){
    expect(librasToKilogramos(20).toFixed(2)).to.equal('9.07');
  });

  it('convirtiendo kilogramos a libras', function(){
    expect(kilogramosToLinbras(9).toFixed(2)).to.equal('19.84');
  });
});