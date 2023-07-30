// Ubisoft 
// Créer un jeu de bagarre des personnages de différentes catégories qui doivent se battre
// le jeu s'arrete a partir du moment ou y'a un mort
// 3 catégories de personnages :
// 1 viking = 120pv + 50points d'attack + nom + lancer des haches 
// 1 sorcier = 100pv + 30points d'attack + nom + guerrir
// 1 guerrier = 140pv + 40points d'attack + nom + bouclier

// pv, point dattack, nom, 1 particularité

class Personnage {
    constructor(pv, pointDattack, nom) {
        this.pv = pv
        this.pointDattack = pointDattack
        this.nom = nom
    }

    // le guerrier 20pt d'attack qui attack le sorcier 100pv
    // la mort arrive seulement si on se fait attaquer
    // this || cible
    // OPRESSEUR || VICTIME
    attaquer(cible) {
        console.log(`${this.nom} attaque ${cible.nom} avec ${this.pointDattack}`)
        cible.pv -= this.pointDattack
        this.mort(cible)
    }

    mort(cible) {
        if (cible.pv === 0) {
            console.log(`${cible.nom} est mort !`)
        } else {
            console.log(`${cible.nom} lui reste ${cible.pv}`)
        }
    }
}

// 2 personnages 
// John il a 100 pv 20pt dattack
// Raphael il a 120pv et 5pt dattack
// Qui va mourrir le 1er

const perso1 = new Personnage(100, 20, "John");
const perso2 = new Personnage(120, 5, "Raphael");

perso1.attaquer(perso2);
perso2.attaquer(perso1);