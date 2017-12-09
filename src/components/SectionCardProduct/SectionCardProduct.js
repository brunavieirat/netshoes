import React from "react";
import CardProduct from "../CardProduct/CardProduct";


function cards(products) {

  var itens = [];

  for (var i = 0; i < products.length; i++) {
    itens.push(<CardProduct image={products[i].image} price={products[i].price} name={products[i].name} />);
  }
  return itens;
}


export default (props) =>(

    <section className="section-product">

    {cards(props.products)}
    
        </section>

)