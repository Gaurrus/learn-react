import { PropTypes } from 'prop-types';

import styles from './cart.module.css';

export const Cart = ({ inCart, cleanCart, Buy, summ }) => (
  <div className={styles.cart}>
    {inCart.tv.value >= 1 ? (
      <div className={styles.cartItem}>
        <img src={inCart.tv.image} alt="img" className={styles.img} />
        <span>
          {inCart.tv.value}шт. - на сумму: {inCart.tv.cost} зай
        </span>
      </div>
    ) : (
      <div> </div>
    )}

    {inCart.fridge.value >= 1 ? (
      <div className={styles.cartItem}>
        <img src={inCart.fridge.image} alt="img" className={styles.img} />
        <span>
          {inCart.fridge.value}шт. - на сумму: {inCart.fridge.cost} зай
        </span>
      </div>
    ) : (
      <div />
    )}

    {inCart.washingMashine.value >= 1 ? (
      <div className={styles.cartItem}>
        <img src={inCart.washingMashine.image} alt="img" className={styles.img} />
        <span>
          {inCart.washingMashine.value}шт. - на сумму: {inCart.washingMashine.cost} зай
        </span>
      </div>
    ) : (
      <div />
    )}

    <div className={styles.buttonBlock}>
      <button type="button" className={styles.button} onClick={cleanCart}>
        Очистить корзину
      </button>
      <button type="button" className={styles.button} onClick={Buy}>
        Оформить покупку
      </button>
    </div>

    {summ ? <span>Общая сумма: {summ}</span> : <span />}
  </div>
);

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
  }).isRequired,
  summ: PropTypes.number.isRequired,
};
