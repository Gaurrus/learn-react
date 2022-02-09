import { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { ProductList } from '../product-list';
import { Nav } from '../nav';
import { Modal } from '../modal';
import { Cart } from '../cart';
import { Main } from '../main';

import { marketSelector } from '../../selectors';
import { buyProducts, cleanMarket } from '../../store/market/actions';

import styles from './market.module.css';

export const Market = ({ products }) => {
  const dispatch = useDispatch();
  const [cartValue, setСartValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const state = useSelector(marketSelector);
  console.log(state);

  const visibleModal = () => setIsModalVisible(true);

  const addInCart = (name, value, cost, image) => {
    dispatch(buyProducts({ name, value, cost, image }));
  };

  const cleanCart = () => {
    dispatch(cleanMarket());
    setСartValue(0);
  };

  const closeMessage = () => {
    setIsModalVisible(false);
  };

  const Buy = () => {
    setIsModalVisible(true);
    if (state.summ <= 3000) {
      dispatch(cleanMarket());
      setСartValue(0);
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
            element={<Cart cleanCart={cleanCart} Buy={Buy} addingInCartSum={addingInCartSum} />}
          />
        </Routes>
        <Nav cartValue={cartValue} cleanCart={cleanCart} visibleModal={visibleModal} closeMessage={closeMessage} />
        {isModalVisible && (
          <Modal closeMessage={closeMessage}>
            {state.summ <= 3000 ? <div>Поздравляем с покупками!</div> : <div>Не достаточно средств</div>}
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
