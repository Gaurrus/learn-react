import { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductList } from '../product-list';
import { Nav } from '../nav';
import { Modal } from '../modal';
import { Cart } from '../cart';
import { Main } from '../main';

import styles from './market.module.css';
import { initialMarketState } from '../../store/products-state/initial-state';
import { marketReducer } from '../../store/products-state/index';
import { buyProducts, cleanMarket } from '../../store/products-state/actions';

export const Market = ({ products }) => {
  // const [summ, setSumm] = useState(0);
  // const [state, setState] = useState(INITIAL_STATE);
  const [state, dispatch] = useReducer(marketReducer, initialMarketState);
  const [cartValue, setСartValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const visibleModal = () => setIsModalVisible(true);

  const addInCart = (name, value, cost, image) => {
    dispatch(buyProducts({ name, value, cost, image }));
    // dispatch((prevSumm) => prevSumm + cost);
  };

  const cleanCart = () => {
    dispatch(cleanMarket());
    setСartValue(0);
    // dispatch({ summ: 0 });
  };

  const closeMessage = () => {
    setIsModalVisible(false);
  };

  const Buy = () => {
    setIsModalVisible(true);
    if (state.summ <= 3000) {
      dispatch(cleanMarket());
      setСartValue(0);
      // dispatch({ summ: 0 });
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
              <Cart
                inCart={state}
                cleanCart={cleanCart}
                Buy={Buy}
                addingInCartSum={addingInCartSum}
                summ={state.summ}
              />
            }
          />
        </Routes>
        <Nav
          cartValue={cartValue}
          cleanCart={cleanCart}
          visibleModal={visibleModal}
          closeMessage={closeMessage}
          summ={state.summ}
        />
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
