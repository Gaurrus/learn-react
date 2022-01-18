import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductList } from '../product-list';
import { Nav } from '../nav';
import { Modal } from '../modal';
import { Cart } from '../cart';
import { Main } from '../main';

import styles from './market.module.css';

const INITIAL_STATE = {
  tv: { value: 0, cost: 0, image: '' },
  fridge: { value: 0, cost: 0, image: '' },
  washingMashine: { value: 0, cost: 0, image: '' },
};

export const Market = ({ products }) => {
  const [summ, setSumm] = useState(0);
  const [state, setState] = useState(INITIAL_STATE);
  const [cartValue, setСartValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const visibleModal = () => setIsModalVisible(true);

  const addInCart = (name, value, cost, image) => {
    setState((prevState) => ({
      ...prevState,
      [name]: {
        value: +value + +state[name].value,
        cost: +state[name].cost + cost,
        image: image,
      },
    }));
    setSumm((prevSumm) => prevSumm + cost);
  };

  const cleanCart = () => {
    setState(INITIAL_STATE);
    setСartValue(0);
    setSumm(0);
  };

  const closeMessage = () => {
    setIsModalVisible(false);
  };

  const Buy = () => {
    setIsModalVisible(true);
    if (summ <= 3000) {
      setState(INITIAL_STATE);
      setСartValue(0);
      setSumm(0);
    }
  };

  const addingInCartSum = (summInCart) => setСartValue(cartValue + +summInCart);

  return (
    <div className={styles.market}>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Main products={products} />} />
          <Route
            exact
            path="/market"
            element={<ProductList products={products} addInCart={addInCart} addingInCartSum={addingInCartSum} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart inCart={state} cleanCart={cleanCart} Buy={Buy} addingInCartSum={addingInCartSum} summ={summ} />
            }
          />
        </Routes>
        <Nav
          cartValue={cartValue}
          cleanCart={cleanCart}
          visibleModal={visibleModal}
          closeMessage={closeMessage}
          summ={summ}
        />
        {isModalVisible && (
          <Modal closeMessage={closeMessage}>
            {summ <= 3000 ? <div>Поздравляем с покупками!</div> : <div>Не достаточно средств</div>}
          </Modal>
        )}
      </BrowserRouter>
    </div>
  );
};

Market.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      description: PropTypes.string,
      imgSrc: PropTypes.string,
      key: PropTypes.number,
      cost: PropTypes.number,
    }),
  ).isRequired,
};
