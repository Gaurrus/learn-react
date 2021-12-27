import React from "react";

import styles from "./product.module.css";

export class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  handleChange = (e) => {
    this.setState = { value: e.target.value, name: this.props.product.title }
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
          value={this.setState.value}
          onChange={this.handleChange}

        />
        <button>В корзину</button>


      </div>
    );
  }
}
