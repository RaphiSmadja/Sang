// Suppression des doublons
// Écrivez une fonction qui prend un tableau d'entiers en entrée et renvoie un nouveau tableau où tous les doublons sont supprimés.

function removeDouble(arrayDouble) {
    let uniqueArray = [];
    for (let i = 0; i < arrayDouble.length; i++) {
        if (uniqueArray.indexOf(arrayDouble[i]) === -1) {
            uniqueArray.push(arrayDouble[i])
        }
    }
    return uniqueArray
}

console.log(removeDouble([1, 2, 3, 2, 5, 2, 1]))
console.log(removeDouble([1, 2, 3, 2, 5, 2, 1]))