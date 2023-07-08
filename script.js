const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const products = [
    {
        title: "Blusa",
        price: "R$55,00",
        thumb: "./images/products/blusa02-55.png",

    },

    {
        title: "Blusa",
        price: "R$90,00",
        thumb: "./images/products/blusa03-90.png",

    },

    {
        title: "Blusa",
        price: "R$45,00",
        thumb: "./images/products/blusa04-45.png",

    },

    {
        title: "Calça",
        price: "R$110,00",
        thumb: "./images/products/calca01-110.png",

    },

    {
        title: "Calça",
        price: "R$120,00",
        thumb: "./images/products/calca02-120.png",

    },

    {
        title: "Calça",
        price: "R$90,00",
        thumb: "./images/products/calca03-90.png",

    },

    {
        title: "Calça",
        price: "R$110,00",
        thumb: "./images/products/calca04-110.png",

    },

    {
        title: "Conjunto",
        price: "R$130,00",
        thumb: "./images/products/conjunto01-130.png",

    },

    {
        title: "Conjunto",
        price: "R$140,00",
        thumb: "./images/products/conjunto02-140.png",

    },

    {
        title: "Conjunto",
        price: "R$120,00",
        thumb: "./images/products/conjunto03-120.png",

    },

    {
        title: "Conjunto",
        price: "R$130,00",
        thumb: "./images/products/conjunto04-130.png",

    },

    {
        title: "Cropped",
        price: "R$75,00",
        thumb: "./images/products/cropped01-75.png",

    },

    {
        title: "Cropped",
        price: "R$50,00",
        thumb: "./images/products/cropped02-50.png",

    },

    {
        title: "Cropped",
        price: "R$45,00",
        thumb: "./images/products/cropped03-45.png",

    },

    {
        title: "Cropped",
        price: "R$60,00",
        thumb: "./images/products/cropped04-60.png",

    },

    {
        title: "Macaquinho",
        price: "R$110,00",
        thumb: "./images/products/macaq01-110.png",

    },

    {
        title: "Macacão",
        price: "R$130,00",
        thumb: "./images/products/macaq02-130.png",

    },

    {
        title: "Macaquinho",
        price: "R$120,00",
        thumb: "./images/products/macaq03-120.png",

    },

    {
        title: "Macacão",
        price: "R$140,00",
        thumb: "./images/products/macaq04-140.png",

    },

    {
        title: "Short saia",
        price: "R$65,00",
        thumb: "./images/products/short01-65.png",

    },

    {
        title: "Vestido curto",
        price: "R$110,00",
        thumb: "./images/products/vestido01-110.png",

    },

    {
        title: "Vestido longo",
        price: "R$130,00",
        thumb: "./images/products/vestido02-130.png",

    },

    {
        title: "Vestido longo",
        price: "R$150,00",
        thumb: "./images/products/vestido03-150.png",

    },

    {
        title: "Vestido curto",
        price: "R$45,00",
        thumb: "./images/products/vestido04-45.png",

    },
]

products.map(product => {
    const cardClone = card.cloneNode(true);
    const imageElement = cardClone.querySelector(".image");
    imageElement.style.backgroundImage = `url(${product.thumb})`;
    cardClone.querySelector(".item-title").innerHTML = product.title;
    cardClone.querySelector(".price").innerHTML =
      product.price;
    sectionCards.appendChild(cardClone);
});

/* ScrollReveall */

window.sr = ScrollReveal({ reset: true });

sr.reveal('.card', { duration: 1500 });