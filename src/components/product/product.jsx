import React from "react";

import styles from "./product.module.css";

const INITIAL_STATE = { value: 0, cost: 0 }

export class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.handleChange = this.handleChange.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value, cost: +e.target.value*this.props.product.cost })
  }

  buttonClick = () => {
    this.props.addInCart(this.props.product.id, +this.state.value, this.state.cost)
    this.setState(INITIAL_STATE)
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
        <span>{product.cost} за</span>
        <input
          name={product.id}
          type="number"
          value={this.state.value}
          onChange={this.handleChange}

        />

        <span>{this.state.cost} зайчиков</span>
        <button onClick={this.buttonClick}>В корзину</button>


      </div>
    );
  }
}
