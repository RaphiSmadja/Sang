// nombre premier 
// divisable par 1 ou lui meme 
// 1 2 3 5 7 11 13 

function nbPremier(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(nbPremier(7))
console.log(nbPremier(10))
console.log(nbPremier(11))
