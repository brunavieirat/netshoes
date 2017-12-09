import React, { Component } from 'react';
import CardProduct from "./components/CardProduct/CardProduct";
import teste from "./img/teste.PNG";

// var products = [
//     {
//         image: {
//             src: teste, 
//             alt: "Notebook"
//         },
//         name: "teste",
//         price: 42.99,
//         offer: true
//     },


// ];

var image = {

  src: teste,
  alt: "teste"
}

export default () => (

  <div className = "App">
    <CardProduct name="teste"  price={2323.20} image={image} />
</div>

);
