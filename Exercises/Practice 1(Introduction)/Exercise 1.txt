//Escribe la funcion que determine si una palabra es un palindromo o frase es un palindromo(se lee igual de izquierda a derecha que de derecha a izquierda), ignorando espacios y caracteres no alfabeticos.
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('Anita lava la tina')); // true