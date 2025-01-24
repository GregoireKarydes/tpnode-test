// Fonction qui additionne deux nombres
function addition(a, b) {
    return a + b;
  }
  
  // Fonction qui soustrait deux nombres
  function soustraction(a, b) {
    return a - b;
  }
  
  // Fonction qui multiplie deux nombres
  function multiplication(a, b) {
    return a * b;
  }
  
  // Fonction qui divise deux nombres
  function division(a, b) {
    if (b === 0) throw new Error('Division par zéro');
    return a / b;
  }
  
  // Fonction qui retourne le plus grand des deux nombres
  function maximum(a, b) {
    return a > b ? a : b;
  }
  
  // Fonction qui inverse une chaîne de caractères
  function inverserChaine(str) {
    return str.split('').reverse().join('');
  }
  
  // Fonction qui vérifie si un nombre est pair
  function estPair(n) {
    return n % 2 === 0;
  }
  
  // Fonction qui calcule la somme d'un tableau de nombres
  function sommeTableau(arr) {
    if (!Array.isArray(arr)) throw new Error('Entrée doit être un tableau');
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // Fonction qui filtre les éléments supérieurs à 10 dans un tableau
  function filtrerSuperieurA10(arr) {
    if (!Array.isArray(arr)) throw new Error('Entrée doit être un tableau');
    return arr.filter(num => num > 10);
  }
  
  // Fonction qui renvoie un tableau de n premiers carrés parfaits
  function premiersCarres(n) {
    if (n <= 0) throw new Error('Le nombre doit être positif');
    return Array.from({ length: n }, (_, i) => i * i);
  }

  // Fonction qui ajoute 10% de tax
  function calculateTax(price) { return price * 0.1; };

  // Fonction qui calcul un prix
  function calculateTotal(price, quantity) {
    const total = price * quantity
    const tax = this.calculateTax(total)
    return total + tax
  };
  
  
  module.exports = { 
    addition, 
    soustraction, 
    multiplication, 
    division, 
    maximum, 
    inverserChaine, 
    estPair, 
    sommeTableau, 
    filtrerSuperieurA10, 
    premiersCarres,
    calculateTax,
    calculateTotal
  };
  