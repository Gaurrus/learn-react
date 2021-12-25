import React from "react";

import styles from "./product.module.css";

export class Product extends React.Component {
  cart = (value) => {
    const number = value;
    return number;
  }
  render() {
    const product = this.props.product;


    return (
      <div className={styles.productCard}>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <img
          className={styles.img}
          src={product.imgSrc}
          alt={`Фото - ${product.title}`}
        />
        <input
          name={product.id}
          type="number"
          onChange={(e) => {
            this.cart(e.currentTarget.value);
          }}
        />

        <button onClick={(e) => { this.props.addInCart(product.id, this.cart()) }}>Add in cart</button>
        {console.log(this.props.addInCart, `prod`)}
      </div>
    );
  }
}
