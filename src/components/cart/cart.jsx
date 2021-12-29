import React from "react";

import styles from "./cart.module.css";

export class Cart extends React.Component {


  render() {
    const summ = +this.props.inCart.tv.cost + +this.props.inCart.fridge.cost + +this.props.inCart.washingMashine.cost
    if (this.props.inCart.tv.value >= 1 || this.props.inCart.fridge.value >= 1 || this.props.inCart.washingMashine.value >= 1) {

      return (
        <div className={styles.cart}>
          {this.props.inCart.tv.value >= 1 ? <div className={styles.cartItem}>
            <img src={this.props.inCart.tv.image} alt="img" className={styles.img} />
            <span>
              {this.props.inCart.tv.value}шт. - на сумму: {this.props.inCart.tv.cost} зай
            </span>
          </div> : <div> </div>}

          {this.props.inCart.fridge.value >= 1 ? <div className={styles.cartItem}>
            <img src={this.props.inCart.fridge.image} alt="img" className={styles.img} />
            <span>
              {this.props.inCart.fridge.value}шт. - на сумму: {this.props.inCart.fridge.cost} зай
            </span>
          </div> : <div></div>}

          {this.props.inCart.washingMashine.value >= 1 ? <div className={styles.cartItem}>
            <img src={this.props.inCart.washingMashine.image} alt="img" className={styles.img} />
            <span>
              {this.props.inCart.washingMashine.value}шт. - на сумму: {this.props.inCart.washingMashine.cost} зай
            </span>
          </div> : <div></div>}

          <div className={styles.buttonBlock}>
            <button className={styles.button} onClick={this.props.cleanCart}>Очистить корзину</button>
            <button className={styles.button} onClick={this.props.Buy}>Оформить покупку</button>


          </div>

          {summ ? <span>Общая сумма: {summ}</span> : <span></span>}
        </div>
      )
    } else return <div className={styles.cart}>
      <span>В корзине пусто!</span>
    </div>
  }
}
