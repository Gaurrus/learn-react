/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductList } from '../product-list';
import { Nav } from '../nav';
import { Modal } from '../modal';
import { Cart } from '../cart';

import styles from './market.module.css';

const INITIAL_STATE = {
  tv: { value: '0', cost: '0', image: '' },
  fridge: { value: '0', cost: '0', image: '' },
  washingMashine: { value: '0', cost: '0', image: '' },
  cartValue: { value: '' },
  isModalVisible: false,
  summ: 0,
};

export class Market extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  getState = () => this.state;

  addInCart = (name, value, cost, image) => {
    this.setState({
      [name]: {
        value: +value + +this.getState()[name].value,
        cost: +this.getState()[name].cost + cost,
        image: image,
      },
      summ: this.getState().summ + cost,
    });
  };

  cleanCart = () => {
    this.setState(INITIAL_STATE);
  };

  closeMessage = () => {
    this.setState({ isModalVisible: false });
  };

  Buy = () => {
    if (this.state.summ <= 3000) this.setState(INITIAL_STATE);
    this.setState({ isModalVisible: true });
  };

  getCartValue = () => this.state.cartValue;

  addingInCartSum = (summInCart) => {
    this.setState({
      cartValue: { value: +this.getCartValue().value + +summInCart },
    });
  };

  render() {
    return (
      <div className={styles.market}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path=""
              element={
                <ProductList
                  products={this.props.products}
                  // cart={this.props.cart}
                  addInCart={this.addInCart}
                  addingInCartSum={this.addingInCartSum}
                />
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  inCart={this.state}
                  cleanCart={this.cleanCart}
                  Buy={this.Buy}
                  addingInCartSum={this.addingInCartSum}
                />
              }
            />
          </Routes>
          <Nav state={this.state} />
          {this.state.isModalVisible && (
            <Modal closeMessage={this.closeMessage}>
              {this.state.summ < 3000 ? <div>Поздравляем с покупками!</div> : <div>Не достаточно средств</div>}
            </Modal>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

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
  // cart: PropTypes.element.isRequired,
};
