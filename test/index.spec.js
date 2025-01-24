const { expect } = require('chai');
const sinon = require('sinon')
const functions = require('../index');

describe('Tests pour les fonctions', function () {

  describe('addition()', function () {
    it('doit additionner deux nombres', function () {
      expect(functions.addition(2, 3)).to.equal(5);
    });
  });

  describe('soustraction()', function () {
    it('doit soustraire deux nombres', function () {
      expect(functions.soustraction(5, 3)).to.equal(2);
    });
  });

  describe('multiplication()', function () {
    it('doit multiplier deux nombres', function () {
      expect(functions.multiplication(3, 4)).to.equal(12);
    });
  });

  describe('division()', function () {
    it('doit diviser deux nombres', function () {
      expect(functions.division(6, 3)).to.equal(2);
    });

    it('doit lancer une erreur pour la division par zéro', function () {
      expect(() => functions.division(6, 0)).to.throw('Division par zéro');
    });
  });

  describe('maximum()', function () {
    it('doit retourner le plus grand des deux nombres', function () {
      expect(functions.maximum(3, 7)).to.equal(7);
      expect(functions.maximum(9, 5)).to.equal(9);
    });
  });

  describe('inverserChaine()', function () {
    it('doit inverser une chaîne de caractères', function () {
      expect(functions.inverserChaine('hello')).to.equal('olleh');
    });
  });

  describe('estPair()', function () {
    it('doit retourner true si le nombre est pair', function () {
      expect(functions.estPair(4)).to.be.true;
    });

    it('doit retourner false si le nombre est impair', function () {
      expect(functions.estPair(3)).to.be.false;
    });
  });

  describe('sommeTableau()', function () {
    it('doit retourner la somme des éléments du tableau', function () {
      expect(functions.sommeTableau([1, 2, 3, 4])).to.equal(10);
    });

    it('doit lancer une erreur si l\'entrée n\'est pas un tableau', function () {
      expect(() => functions.sommeTableau('not an array')).to.throw('Entrée doit être un tableau');
    });
  });

  describe('filtrerSuperieurA10()', function () {
    it('doit filtrer les nombres supérieurs à 10', function () {
      expect(functions.filtrerSuperieurA10([5, 12, 3, 19, 8])).to.deep.equal([12, 19]);
    });

    it('doit lancer une erreur si l\'entrée n\'est pas un tableau', function () {
      expect(() => functions.filtrerSuperieurA10('not an array')).to.throw('Entrée doit être un tableau');
    });
  });

  describe('premiersCarres()', function () {
    it('doit retourner les premiers carrés parfaits', function () {
      expect(functions.premiersCarres(5)).to.deep.equal([0, 1, 4, 9, 16]);
    });

    it('doit lancer une erreur si n est inférieur ou égal à 0', function () {
      expect(() => functions.premiersCarres(0)).to.throw('Le nombre doit être positif');
    });
  });

  describe.skip('calculateTotal function', () => {
    let calculateTaxSpy;
  
    beforeEach(() => {
      // Espionner directement la fonction calculateTax
      calculateTaxSpy = sinon.spy(functions, 'calculateTax');
    });
  
    afterEach(() => {
      // Restaurer après chaque test
      calculateTaxSpy.restore();
    });
  
    it('calculates the correct total', () => {
      const price = 10;
      const quantity = 2;
      const expectedTotal = 22;
  
      const result = functionscalculateTotal(price, quantity);
  
      expect(result).to.equal(expectedTotal);
      expect(calculateTaxSpy.calledOnce).to.be.true;
    });
  });
  
 
  
    describe('calculateTax function', () => {
      it('calculates the correct tax', () => {
        const price = 10;
        const expectedTax = 1;
  
        const result = functions.calculateTax(price);
  
        expect(result).to.equal(expectedTax);
      });
    });

 



});
