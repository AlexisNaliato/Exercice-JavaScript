//Exercice JavaScript pour la suite de Fibonacci//

const nombre = prompt("Entré une valeur");

// Tableau qui prend en paramètre le résultat du prompt//
const fibonacci = new Array(nombre);

fibonacci[0] = 0;
fibonacci[1] = 1;

for(let i = 2; i < nombre; i = i + 1) {
    fibonacci[i] = fibonacci[ i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

