import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import styles from './countdown.module.css';

export const Countdown = ({ cleanCart }) => {
  const [count, setCount] = useState(30);
  const timerIdRef = useRef();

  useEffect(() => {
    if (count === 0) {
      cleanCart();
      clearInterval(timerIdRef.current);
    }
  }, [count, cleanCart]);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      if (count === 1) {
        cleanCart();
      }
    }, 1000);
    timerIdRef.current = timerId;
    return () => clearInterval(timerIdRef.current);
  }, []);

  const createButyTimers = (num) => {
    if (num < 10) return `0${num}`;
    return num;
  };

  return (
    <div className={styles.countWrapper}>
      <span className={styles.timer}>{createButyTimers(Math.floor(count / 60))}</span>
      <span className={styles.timer}>:</span>
      <span className={styles.timer}>{createButyTimers(count % 60)}</span>
    </div>
  );
};

Countdown.propTypes = {
  cleanCart: PropTypes.func.isRequired,
};
