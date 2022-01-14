import PropTypes from 'prop-types';
import React from 'react';

import styles from './countdown.module.css';

export class Countdown extends React.Component {
  componentDidMount() {
    const { startTimer } = this.props;
    startTimer();
  }

  componentWillUnmount() {
    const { stopTimer } = this.props;
    stopTimer();
  }

  render() {
    const { state } = this.props;
    return (
      <div className={styles.countWrapper}>
        <span className={styles.timer}>{Math.floor(state.timer / 60)}</span>
        <span className={styles.timer}>:</span>
        <span className={styles.timer}>{state.timer % 60}</span>
      </div>
    );
  }
}

Countdown.propTypes = {
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
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
};
