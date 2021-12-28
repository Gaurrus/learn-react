import React from "react";

import styles from './cart-item.module.css'

export class CartItem extends React.Component {

  render() {
    return (
      <div className={styles.cart}>
        {this.props.cartItems.map((cartItem) => (<span>
          {cartItem.value}, {cartItem.cost}
        </span>
        ))}
        <div className={styles.cartItem}>
          <span>
            Купить:
          </span>
          <img src={this.props.inCart.tv.image} alt="img" className={styles.img} />
          <span>
            {this.props.inCart.tv.value}шт. - на сумму: {this.props.inCart.tv.cost} зай
          </span>
        </div>
        <div className={styles.buttonBlock}>
          <button className={styles.button} onClick={this.props.cleanCart}>Очистить корзину</button>
          <button className={styles.button} onClick={this.props.Buy}>Оформить покупку</button>
        </div>
        <span>Общая сумма: {+this.props.inCart.tv.cost + +this.props.inCart.fridge.cost + +this.props.inCart.washingMashine.cost}</span>
      </div>
    )
  }
}