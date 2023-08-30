let cart = []; // Création du panier virtuelle representé par la liste vide

function getChoix() {       // fonction pour enregistrer les choix de l'utilisateur
    console.log("Choisissez parmi les 5 options suivantes:");
    console.log("1- Ajouter un article dans le panier");
    console.log("2- Afficher tous les articles");
    console.log("3- Supprimer un article du panier");
    console.log("4- Vider le panier");
    console.log("5- Quitter");
    return prompt("Quel est votre choix?");   // le message retourné par la fonction avant le choix du user
}

while (true) {
    const choix = getChoix(); // création de la variable choix qui fait appelle à la fonction qui getChoix
    
    if (choix === null || choix === "" || isNaN(choix)) { // condition de mauvaise entrée 
        console.log("Mauvaise entrée, veuillez entrer une valeur entre 1 et 5.");
        continue; // pour rappeler la fonction getChoix et afficher le question "Quel est votre choix ?"
    }

    const choixNumerique = parseInt(choix); // convertion de la valeur de la variable choix en entier

    if (choixNumerique >= 1 && choixNumerique <= 5) {
        if (choixNumerique === 1) {
            const nomProduit = prompt("Entrez le nom du produit :");
            if (nomProduit.trim() === "") { // supprimer les espaces vides avant et après le nom du produit
                console.log("Vous devez entrer un nom de produit valide.");
            } else {
                cart.push(nomProduit); // ajouter le produit à la fin du panier (à la fin de la liste cart)
                console.log("L'article a été bien ajouté dans votre panier.");
            }
        } else if (choixNumerique === 2) {
            if (cart.length === 0) { // vérifie si le panier est vide
                console.log("Votre panier est vide."); 
            } else {
                console.log("Voici la liste des articles du panier :");
                for (const article of cart) {
                    console.log(article);
                }
            }
        } else if (choixNumerique === 3) {
            const nomProduit = prompt("Entrez le nom du produit à supprimer :");
            const indexArticle = cart.indexOf(nomProduit);
            if (indexArticle !== -1) {
                cart.splice(indexArticle, 1);
                console.log("L'article a été bien supprimé de votre panier.");
            } else {
                console.log("Cet article ne se trouve pas dans votre panier.");
            }
        } else if (choixNumerique === 4) {
            cart = [];
            console.log("Votre panier a bien été supprimé.");
        } else if (choixNumerique === 5) {
            console.log("Merci pour votre visite!!!");
            break;
        }
    } else {
        console.log("Mauvaise entrée, veuillez entrer une valeur entre 1 et 5.");
    }
}
