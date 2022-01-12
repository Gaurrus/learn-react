/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './cart.module.css';

export class Cart extends React.Component {
  render() {
    return (
      <div className={styles.cart}>
        {this.props.inCart.tv.value >= 1 ? (
          <div className={styles.cartItem}>
            <img src={this.props.inCart.tv.image} alt="img" className={styles.img} />
            <span>
              {this.props.inCart.tv.value}шт. - на сумму: {this.props.inCart.tv.cost} зай
            </span>
          </div>
        ) : (
          <div> </div>
        )}

        {this.props.inCart.fridge.value >= 1 ? (
          <div className={styles.cartItem}>
            <img src={this.props.inCart.fridge.image} alt="img" className={styles.img} />
            <span>
              {this.props.inCart.fridge.value}шт. - на сумму: {this.props.inCart.fridge.cost} зай
            </span>
          </div>
        ) : (
          <div />
        )}

        {this.props.inCart.washingMashine.value >= 1 ? (
          <div className={styles.cartItem}>
            <img src={this.props.inCart.washingMashine.image} alt="img" className={styles.img} />
            <span>
              {this.props.inCart.washingMashine.value}шт. - на сумму: {this.props.inCart.washingMashine.cost} зай
            </span>
          </div>
        ) : (
          <div />
        )}

        <div className={styles.buttonBlock}>
          <button type="button" className={styles.button} onClick={this.props.cleanCart}>
            Очистить корзину
          </button>
          <button type="button" className={styles.button} onClick={this.props.Buy}>
            Оформить покупку
          </button>
        </div>

        {this.props.inCart.summ ? <span>Общая сумма: {this.props.inCart.summ}</span> : <span />}
      </div>
    );
  }
}

Cart.propTypes = {
  cleanCart: PropTypes.func.isRequired,
  Buy: PropTypes.func.isRequired,
  inCart: PropTypes.shape({
    tv: PropTypes.shape({
      value: PropTypes.number,
      cost: PropTypes.number,
      image: PropTypes.string,
    }),
    fridge: PropTypes.shape({
      value: PropTypes.number,
      cost: PropTypes.number,
      image: PropTypes.string,
    }),
    washingMashine: PropTypes.shape({
      value: PropTypes.number,
      cost: PropTypes.number,
      image: PropTypes.string,
    }),
    cartValue: PropTypes.shape({
      value: PropTypes.number,
    }),
    isModalVisible: PropTypes.bool.isRequired,
    summ: PropTypes.number.isRequired,
  }).isRequired,
};
