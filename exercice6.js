// Écrivez une fonction qui prend un nombre entier positif N en entrée et renvoie sa factorielle (N!).
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorielle(nb) {
    let result = 1
    for (let i = nb; i > 0; i--) {
        result *= i
    }
    return result
}


console.log(factorielle(5));