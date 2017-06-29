const expect = require('chai').expect;
const Conversor = require('..').Conversor;

describe('#conversor', function(){

  it('convirtiendo libras a kilogramos', function(){
    conversor = new Conversor();
    expect(conversor.librasToKilogramos(20).toFixed(2)).to.equal('9.07');
  });

  it('convirtiendo kilogramos a libras', function(){
    conversor = new Conversor();
    expect(conversor.kilogramosToLinbras(9).toFixed(2)).to.equal('19.84');
  });
});