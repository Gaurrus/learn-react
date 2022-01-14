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
  tv: { value: 0, cost: 0, image: '' },
  fridge: { value: 0, cost: 0, image: '' },
  washingMashine: { value: 0, cost: 0, image: '' },
  cartValue: { value: 0 },
  isModalVisible: false,
  summ: 0,
  timer: 300,
};

export class Market extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  startTimer = () => {
    this.timerID = setInterval(() => this.timer(), 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerID);
  };

  visibleModal = () => this.setState({ isModalVisible: true });

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

  timer() {
    const { timer } = this.state;
    if (timer !== 1)
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    else {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
      this.cleanCart();
      clearInterval(this.timerID);
    }
  }

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
          <Nav
            state={this.state}
            cleanCart={this.cleanCart}
            visibleModal={this.visibleModal}
            closeMessage={this.closeMessage}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
          />
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
