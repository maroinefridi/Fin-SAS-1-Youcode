// Projet Fin SAS 1 Youcode: Gestion d’un train en console “Railway Manager”

prompt = require(`prompt-sync`)()

do {
    
    console.log(`
=================================
     ||RAILWAY MANAGER||
=================================

1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter
`)
    let choix = +prompt("votre choix : ")
    switch (choix) {
        case 1 :
            console.log("afficher les trajet ")
            break;
        case 2 :
            console.log("Acheter un ticket ")
            break;
        case 3 :
            console.log("Afficher les tickets ")
            break;
        case 4 :
            console.log(" Annuler un ticket")
            break;
        case 5 :
            console.log("Rechercher un ticket")
            break;
        case 6 :
            console.log("Filtrer les trajets")
            break;
        case 7 :
            console.log("Trier les trajets")
            break;
        case 0 :
            console.log("tu annules le programme, on t'attend ")
        default:
            console.log("choix invalide")
    }
}
while (choix !== 0);
