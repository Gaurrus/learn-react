/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './nav.module.css';

export class Nav extends React.Component {
  render() {
    return (
      <ul className={styles.navList}>
        <li>
          <NavLink to="">На главную</NavLink>
        </li>
        <li>
          <NavLink to="">Магазин</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Корзина({this.props.state.cartValue.value})</NavLink>
        </li>
      </ul>
    );
  }
}

Nav.propTypes = {
  state: PropTypes.shape({
    tv: PropTypes.shape({
      value: PropTypes.string,
      cost: PropTypes.string,
      image: PropTypes.string,
    }),
    fridge: PropTypes.shape({
      value: PropTypes.string,
      cost: PropTypes.string,
      image: PropTypes.string,
    }),
    washingMashine: PropTypes.shape({
      value: PropTypes.string,
      cost: PropTypes.string,
      image: PropTypes.string,
    }),
    cartValue: PropTypes.shape({
      value: PropTypes.string,
    }),
    isModalVisible: PropTypes.bool.isRequired,
    summ: PropTypes.number.isRequired,
  }).isRequired,
};
