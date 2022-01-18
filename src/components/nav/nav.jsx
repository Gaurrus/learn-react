import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './nav.module.css';
import { Countdown } from '../countdown';

export const Nav = ({ cartValue, cleanCart, summ }) => (
  <ul className={styles.navList}>
    <li>
      <NavLink to="">На главную</NavLink>
    </li>
    <li>
      <NavLink to="/market">Магазин</NavLink>
    </li>
    <li>
      <NavLink to="/cart">Корзина({cartValue})</NavLink>
    </li>
    <li>
      <Countdown cleanCart={cleanCart} summ={summ} cartValue={cartValue} />
    </li>
  </ul>
);

Nav.propTypes = {
  cleanCart: PropTypes.func.isRequired,
  cartValue: PropTypes.number.isRequired,
  summ: PropTypes.number.isRequired,
};
