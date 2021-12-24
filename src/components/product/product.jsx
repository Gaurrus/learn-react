import React from "react";

import styles from "./product.module.css";

export class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = { someState: {
      productIncartid: {}
    }}
    this.addInCart = this.addInCart.bind(this)

  }

  addInCart = (e) => {
    e.preventDefault();
    const howMany = document.querySelector('input').value
    console.log(howMany)
  }

  render() {

    return (

      this.props.products.map((product) => (
        <div className={styles.productCard}>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <img className={styles.img} src={product.imgSrc} alt={`Фото - ${product.title}`} />
          <input key={product.id} type="number" onChange={this.addInCart} />
        </div>
      ))

    );
  }
}
