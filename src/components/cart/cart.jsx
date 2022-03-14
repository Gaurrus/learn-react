import { Button } from 'antd';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { marketSelector, productSelector } from '../../selectors';

import styles from './cart.module.css';

export const Cart = ({ cleanCart, Buy }) => {
  const state = useSelector(marketSelector);
  return (
    <div className={styles.cart}>
      {state.tv.value >= 1 ? (
        <div className={styles.cartItem}>
          <img src={state.tv.image} alt="img" className={styles.img} />
          <span>
            {state.tv.value}шт. - на сумму: {state.tv.cost} зай
          </span>
        </div>
      ) : (
        <div> </div>
      )}

      {state.fridge.value >= 1 ? (
        <div className={styles.cartItem}>
          <img src={state.fridge.image} alt="img" className={styles.img} />
          <span>
            {state.fridge.value}шт. - на сумму: {state.fridge.cost} зай
          </span>
        </div>
      ) : (
        <div />
      )}

      {state.washingMashine.value >= 1 ? (
        <div className={styles.cartItem}>
          <img src={state.washingMashine.image} alt="img" className={styles.img} />
          <span>
            {state.washingMashine.value}шт. - на сумму: {state.washingMashine.cost} зай
          </span>
        </div>
      ) : (
        <div />
      )}

      <div className={styles.buttonBlock}>
        <Button type="primary" className={styles.button} onClick={cleanCart}>
          Очистить корзину
        </Button>
        <Button type="primary" className={styles.button} onClick={Buy}>
          Оформить покупку
        </Button>
      </div>

      {state.summ ? <span>Общая сумма: {state.summ}</span> : <span />}
    </div>
  );
};

Cart.propTypes = {
  cleanCart: PropTypes.func.isRequired,
  Buy: PropTypes.func.isRequired,
};
