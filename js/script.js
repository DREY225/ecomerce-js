let cart = [];

function addToCart() {
    const nomProduit = prompt("Entrez le nom du produit :");
    if (nomProduit && nomProduit.trim() !== "") {
        cart.push(nomProduit);
        alert("L'article a été ajouté à votre panier.");
    }
}

function showCart() {
    if (cart.length === 0) {
        document.getElementById("cart-status").textContent = "Votre panier est vide.";
    } else {
        document.getElementById("cart-status").textContent = "Articles dans votre panier :";
        const cartList = document.createElement("ul");
        for (const article of cart) {
            const item = document.createElement("li");
            item.textContent = article;
            cartList.appendChild(item);
        }
        document.getElementById("cart-status").appendChild(cartList);
    }
}

function removeFromCart() {
    const nomProduit = prompt("Entrez le nom du produit à supprimer :");
    const indexArticle = cart.indexOf(nomProduit);
    if (indexArticle !== -1) {
        cart.splice(indexArticle, 1);
        alert("L'article a été supprimé de votre panier.");
    } else {
        alert("Cet article ne se trouve pas dans votre panier.");
    }
}

function clearCart() {
    cart = [];
    alert("Votre panier a été vidé.");
    document.getElementById("cart-status").textContent = "Votre panier est vide.";
}

function quitApplication() {
    alert("Merci pour votre visite!");
    window.close();
}
