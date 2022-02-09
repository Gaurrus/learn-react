import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { productSelector } from '../../selectors';

import styles from './cart.module.css';

export const Cart = ({ cleanCart, Buy }) => {
  const { tv, fridge, washingMashine, summ } = useSelector(productSelector);
  return (
    <div className={styles.cart}>
      {tv.value >= 1 ? (
        <div className={styles.cartItem}>
          <img src={tv.image} alt="img" className={styles.img} />
          <span>
            {tv.value}шт. - на сумму: {tv.cost} зай
          </span>
        </div>
      ) : (
        <div> </div>
      )}

      {fridge.value >= 1 ? (
        <div className={styles.cartItem}>
          <img src={fridge.image} alt="img" className={styles.img} />
          <span>
            {fridge.value}шт. - на сумму: {fridge.cost} зай
          </span>
        </div>
      ) : (
        <div />
      )}

      {washingMashine.value >= 1 ? (
        <div className={styles.cartItem}>
          <img src={washingMashine.image} alt="img" className={styles.img} />
          <span>
            {washingMashine.value}шт. - на сумму: {washingMashine.cost} зай
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
};

Cart.propTypes = {
  cleanCart: PropTypes.func.isRequired,
  Buy: PropTypes.func.isRequired,
};
