// Recherche du plus grand nombre fait
// Écrivez un algorithme qui demande à l'utilisateur de saisir trois nombres 
// et affiche le plus grand des trois.

function numberTall(nb1, nb2, nb3) {
    if (nb1 > nb2 && nb1 > nb3) {
        console.log(nb1)
    } else if (nb2 > nb1 && nb2 > nb3) {
        console.log(nb2)
    } else {
        console.log(nb3)
    }
}

numberTall(1, 2, 3)
numberTall(10, 2, 3)
numberTall(10, 20, 3)

let a = 5
let b = "5"

if (a == b) {
    console.log("hello")
} else {
    console.log("world")
}



// Supposons que tu as les listes suivantes :
let taches_principales = ["Tache A", "Tache B", "Tache C"]
let sous_taches = ["Sous-tache 1", "Sous-tache 2", "Sous-tache 3"]
let i = 0
while (i < 5) {
    if (i % 2 === 0) {
        console.log("a")
    } else {
        console.log("b")
    }
    i++
}

let message = "Bonjour tout"
console.log(message.substring(3,8).toUpperCase());



let tableau = [];
let tableau2 = new Array();

tableau.push("a");
tableau2.push("b");

let set = new Set();
set.add("a");
set.add("a");

console.log(set.size);