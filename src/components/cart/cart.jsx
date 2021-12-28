import React from "react";
// import { Product } from "../product";

import styles from "./cart.module.css";

export class Cart extends React.Component {

  render() {
    return (
      <div className={styles.cart}>
        Купить телевизоров: {this.props.inCart.tv.value} на сумму: {this.props.inCart.tv.cost}  <br />
        Купить холодильников: {this.props.inCart.fridge.value} на сумму: {this.props.inCart.fridge.cost}<br />
        Купить стиральных машин: {this.props.inCart.washingMashine.value} на сумму: {this.props.inCart.washingMashine.cost}<br />
        <div className={styles.buttonBlock}>
          <button className={styles.button} onClick={this.props.cleanCart}>Очистить корзину</button>
          <button className={styles.button} onClick={this.props.Buy}>Оформить покупку</button>
        </div>
        <span>Общая сумма: {this.props.inCart.tv.cost + this.props.inCart.fridge.cost + this.props.inCart.washingMashine.cost}</span>
      </div>
    )
  }
}
