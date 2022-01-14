/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './nav.module.css';
import { Countdown } from '../countdown';

export class Nav extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <ul className={styles.navList}>
        <li>
          <NavLink to="">На главную</NavLink>
        </li>
        <li>
          <NavLink to="">Магазин</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Корзина({state.cartValue.value})</NavLink>
        </li>
        <li>
          <Countdown />
        </li>
      </ul>
    );
  }
}

Nav.propTypes = {
  state: PropTypes.shape({
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
