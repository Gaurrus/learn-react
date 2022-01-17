/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './nav.module.css';
import { Countdown } from '../countdown';

export const Nav = ({
  state,
  state: { cartValue },
  cleanCart,
  visibleModal,
  closeMessage,
  startTimer,
  stopTimer,
  timerSet,
}) => (
  <ul className={styles.navList}>
    <li>
      <NavLink to="">На главную</NavLink>
    </li>
    <li>
      <NavLink to="">Магазин</NavLink>
    </li>
    <li>
      <NavLink to="/cart">Корзина({cartValue.value})</NavLink>
    </li>
    <li>
      <Countdown
        state={state}
        cleanCart={cleanCart}
        visibleModal={visibleModal}
        closeMessage={closeMessage}
        startTimer={startTimer}
        stopTimer={stopTimer}
        timerSet={timerSet}
      />
    </li>
  </ul>
);

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
    timer: PropTypes.number.isRequired,
  }).isRequired,
  cleanCart: PropTypes.func.isRequired,
  visibleModal: PropTypes.func.isRequired,
  closeMessage: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  timerSet: PropTypes.func.isRequired,
};
