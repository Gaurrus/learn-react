import React from "react";
import { ProductList } from "../product-list";

import styles from "./market.module.css";
import { Cart } from './../cart';

const INITIAL_STATE = {
  tv: { value: 0, cost: 0 },
  fridge: { value: 0, cost: 0 },
  washingMashine: { value: 0, cost: 0 },
}

export class Market extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE
    this.addInCart = this.addInCart.bind(this)
  }

  addInCart = (name, value, cost) => {
    this.setState({
      [name]: {
        value: value + this.state[name].value,

        cost: this.state[name].cost + cost
      }
    })
  }

  cleanCart = () => {
    this.setState(INITIAL_STATE)
  }

  Buy = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className={styles.market}>
        <ProductList
          products={this.props.products}
          cart={this.props.cart}
          addInCart={this.addInCart}
        />
        <Cart inCart={this.state} cleanCart={this.cleanCart}  Buy={this.Buy}/>
      </div>
    );
  }
}
