import React from 'react';
// import CardProduct from "./components/CardProduct/CardProduct";
import SectionCardProduct from "./components/SectionCardProduct/SectionCardProduct"
import teste from "./img/teste.PNG";
import celular from "./img/celular.PNG"

var products = [
  {
    image: {
      src: teste,
      alt: "teste"
    },
    name: "Monitor",
    price: 427.66
  },
  {
    image: {

      src: celular,
      alt: "teste"
    },
    name: "Celular",
    price: 1200.00

  }


];

// var image = {

//   src: teste,
//   alt: "teste"
// }

// var image2 = {

//   src: celular,
//   alt: "teste"
// }

function cards() {

  var filtro = [];

  for (var i = 0; i < products.length; i++) {
    filtro.push(products[i]);
  }
  return filtro;
}

export default () => (

  <div className="App">

    <SectionCardProduct  products={cards()} />

  </div>

);
