import React from "react";

import styles from "./product.module.css";

export class Product extends React.Component {
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
            this.props.addInCart(product.id, e.currentTarget.value);
          }}
        />
        {console.log(this.props.addInCart, `prod`)}
      </div>
    );
  }
}
