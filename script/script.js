var produits = [
  {
    nom: "Blouson Cuir Homme OSX",
    image:
      "https://s1.rockagogostatic.com/ref/pls/pls15/blouson-cuir-mec-marque-osx-brando-jacket-pr.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 225,
  },
  {
    nom: "POLO CINTRE SLIM FIT EN COTON BASIC Bleu",
    image:
      "https://media.istockphoto.com/id/1317905872/fr/photo/maquette-de-chemise-%C3%A0-col-vierge-dans-les-vues-avant-lat%C3%A9rales-et-arri%C3%A8re.jpg?s=612x612&w=0&k=20&c=XVtGOUELvqJqlkbzAMXAJ73Mmg_AD2uV7FbCdVCPlNY=",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 75,
  },
  {
    nom: "Robe rose croisée à boucler",
    image:
      "https://m1.quebecormedia.com/emp/emp/A1_2_1_d64e884e-d21e-41ab-8eb0-2baf6b656c00_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=802&h=1086&width=925&height=925",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 50,
  },
  {
    nom: "Sneakers Adidas Original Homme",
    image:
      "https://www.kiffoo.com/7220-large_default/basket-adidas-original-homme.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 159,
  },
  {
    nom: "Pantalon jogging Nike Just Do It - Noir",
    image:
      "https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 27,
  },
  {
    nom: "Sportwear Femme Gris",
    image:
      "https://contents.mediadecathlon.com/p1691566/k$863fad91e6bb4a2de8373ca10dfc3a53/sq/sous-vetements-thermique.jpg?format=auto&f=800x0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 20,
  },
  {
    nom: "Doudoune Rouge Homme",
    image:
      "https://www.cdiscount.com/pdt2/2/7/7/1/700x700/mp40057277/rw/doudoune-rouge-homme-marque-duvet-de-canard-blanc.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 60,
  },
  {
    nom: "UNDER ARMOUR BLITZING 3.0 MARINE",
    image:
      "https://medias.go-sport.com/media/resized/340x/catalog/product/01/50/71/39/blitzing-30-marine_1_v1.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.",
    prix: 22,
  },
];

let myCart = [];
let bagdeNbreItems = $("#numberItems")[0];

/**********************************************************************************************************************************/
/****************************** construction et injection des cartes produit dans la vue principale ********************************/
produits.forEach((element) => {
  const card = document.createElement("div");
  const divCardImage = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardTextDescription = document.createElement("p");
  const cardTextPrix = document.createElement("p");
  const cardButton = document.createElement("button");

  card.classList.add("card");
  card.classList.add("m-2");
  card.classList.add("text-center");
  card.style.width = "18rem";
  divCardImage.classList.add("h-100");
  divCardImage.classList.add("m-2");
  divCardImage.classList.add("d-flex");
  divCardImage.classList.add("align-items-center");
  cardImage.classList.add("card-img-top");
  cardImage.classList.add("w-100");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardTextDescription.classList.add("card-text");
  cardTextPrix.classList.add("card-text");
  cardButton.classList.add("btn");
  cardButton.classList.add("btn-primary");
  cardButton.classList.add("add-cart-button");

  cardImage.setAttribute("src", element.image);
  divCardImage.append(cardImage);
  cardTitle.append(document.createTextNode(element.nom.toUpperCase()));
  cardTextDescription.append(document.createTextNode(element.description));
  cardTextPrix.append(document.createTextNode(`Prix : ${element.prix}€`));
  cardButton.append(document.createTextNode("Ajouter au panier"));
  cardBody.append(cardTitle);
  cardBody.append(cardTextDescription);
  cardBody.append(cardTextPrix);
  cardBody.append(cardButton);
  card.append(divCardImage);
  card.append(cardBody);
  $(".container").append(card);
});
/***********************************************************************************************************/
/************************************************ gestion des événements ********************************* */

// Gestion du click sur le bouton "Voir le panier de la nav bar"
$("#nav-btn-cart").on("click", function () {
  const cartView = $("#cart-items");
  // Avant d'afficher quoi que ce soit, on vide la vue
  cartView.empty();
  //Si le panier est vide
  if (myCart.length == 0) {
    const emptyCartImage = document.createElement("img");
    const emptyCartText = document.createElement("p");
    emptyCartImage.setAttribute("src", "../assets/empty-cart.png");
    emptyCartImage.style.width = "100%";
    emptyCartText.append(
      document.createTextNode("Votre panier est tristement vide")
    );
    emptyCartText.classList.add("fs-5", "ms-3");
    cartView.append(emptyCartImage);
    cartView.append(emptyCartText);
  } else {
    const synthesisCommand = document.createElement("div");
    const firstRowSynthesisCommand = document.createElement("div");
    const secondRowSynthesisCommand = document.createElement("div");
    const totalCommand = document.createElement("div");
    const validCommandButton = document.createElement("button");

    firstRowSynthesisCommand.classList.add("px-2");
    firstRowSynthesisCommand.append(
      document.createTextNode(
        "Voici la liste de vos produits (vous pouvez modifier la quantité de chaque produit, voir le supprimer)"
      )
    );
    secondRowSynthesisCommand.classList.add("p-2");
    secondRowSynthesisCommand.classList.add("d-flex");
    secondRowSynthesisCommand.classList.add("justify-content-around");
    totalCommand.classList.add("col-6", "fs-2", "w-50");
    totalCommand.setAttribute("id", "prixTotal");
    validCommandButton.classList.add("btn", "btn-primary", "col-6");
    validCommandButton.setAttribute("onclick", "validationCommande()");
    validCommandButton.append(
      document.createTextNode("Valider votre commande")
    );

    secondRowSynthesisCommand.append(totalCommand);
    secondRowSynthesisCommand.append(validCommandButton);

    synthesisCommand.append(firstRowSynthesisCommand);
    synthesisCommand.append(secondRowSynthesisCommand);
    cartView.append(synthesisCommand);
    // sinon on affiche les produits
    myCart.forEach((element) => {
      const viewProductCard = document.createElement("div");
      const firstRowViewCard = document.createElement("div");
      const designation = document.createElement("div");
      const deleteProductButton = document.createElement("button");
      const secondRowViewCard = document.createElement("div");
      const quantityLabel = document.createElement("label");
      const quantityNumber = document.createElement("input");
      const thirdRowViewCard = document.createElement("div");

      viewProductCard.classList.add("card");
      firstRowViewCard.classList.add("row", "ps-3", "pt-3");
      designation.classList.add("col-8");
      deleteProductButton.classList.add(
        "col-3",
        "btn",
        "btn-danger",
        "p-0",
        "delete-button"
      );
      deleteProductButton.setAttribute("onclick", "deleteClick()");
      secondRowViewCard.classList.add(
        "row",
        "d-flex",
        "col-10",
        "ps-3",
        "py-2"
      );
      quantityLabel.classList.add("w-25");
      quantityLabel.setAttribute("for", "quantityNumber");
      quantityNumber.classList.add("w-25");
      quantityNumber.setAttribute("type", "number");
      quantityNumber.setAttribute("min", "1");
      quantityNumber.setAttribute("name", "quantityNumber");
      quantityNumber.setAttribute("onchange", "quantityChange(this)");
      quantityNumber.setAttribute("value", parseInt(element.get("quantity")));
      thirdRowViewCard.classList.add("row", "col-10", "m-0", "ps-3", "pb-3");

      designation.innerHTML = `Désignation : <b>${element.get("name")}</b>`;
      deleteProductButton.append(document.createTextNode("Supprimer"));
      firstRowViewCard.append(designation);
      firstRowViewCard.append(deleteProductButton);
      quantityLabel.append(document.createTextNode("Quantité : "));
      secondRowViewCard.append(quantityLabel);
      secondRowViewCard.append(quantityNumber);
      thirdRowViewCard.innerHTML = `Prix : <b class="w-25">${element.get(
        "price"
      )}€</b>`;

      viewProductCard.append(firstRowViewCard);
      viewProductCard.append(secondRowViewCard);
      viewProductCard.append(thirdRowViewCard);
      cartView.append(viewProductCard);
    });
    updateTotalPrice();
  }
  $("#view-cart").css("left", "calc(100vw - 500px)");
});

// Gestion du click sur le cross button de la vue du panier
$("#view-cart-exit").on("click", function () {
  $("#view-cart").css("left", "100vw");
});

//Gestion du click sur le bouton "dans mon panier" sur les cartes produits
$(".add-cart-button").on("click", function () {
  const nameSelectedProduct =
    $(this)[0].offsetParent.children[1].children[0].textContent;
  const priceSelectedProduct =
    $(this)[0].offsetParent.children[1].children[2].textContent; //prix au format String
  let isInMyCart = false;

  bagdeNbreItems.textContent = "" + (parseInt(bagdeNbreItems.textContent) + 1);

  // On teste pour savoir si le produit est déjà présent dans le panier
  // Si oui, on augmente la quantité de 1
  myCart.forEach((item) => {
    if (nameSelectedProduct.toUpperCase() === item.get("name")) {
      isInMyCart = true;
      item.set("quantity", item.get("quantity") + 1);
    }
  });

  //S'il n'y a pas encore de produit ou si leproduit n'est pas présent dans
  //le panier, on l'ajoute à ce dernier
  if (myCart.length == 0 || !isInMyCart) {
    const product = new Map();
    product.set("name");
    product.set("name", nameSelectedProduct);
    product.set("price", parseInt(priceSelectedProduct.match(/\d{1,3}/)[0]));
    product.set("quantity", 1);

    myCart.push(product);
    isInMyCart = false;
  }

  // Gestion du bagde au dessus du bouton "Voir mon panier" de la nav bar
  if (bagdeNbreItems.textContent === "0") {
    bagdeNbreItems.style.visibility = "hidden";
  } else {
    bagdeNbreItems.style.visibility = "visible";
  }
});

//Gestion du changement des quantités dans la vue du panier
function quantityChange(element) {
  const nameInputProduct =
    element.parentNode.parentNode.children[0].children[0].children[0]
      .textContent;
  const quantityInputProduct = element.value;

  myCart.forEach((product) => {
    if (product.get("name").toUpperCase() === nameInputProduct) {
      product.set("quantity", quantityInputProduct);
    }
    updateTotalPrice();
  });
}
//Destion du bouton de supression article dans la vue panier
function deleteClick() {
  console.log("Je supprime");
}

function validationCommande() {
  console.log("Ja valide ma commande");
}

function updateTotalPrice() {
  let totalPrice = 0;
  myCart.forEach((element) => {
    totalPrice += parseInt(element.get("quantity")) * element.get("price");
  });
  $("#prixTotal")[0].innerHTML = `<b>Total: ${totalPrice}€</b>`;
}
