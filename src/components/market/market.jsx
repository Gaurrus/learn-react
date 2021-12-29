import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProductList } from "../product-list";
import { Nav } from './../nav';

import styles from "./market.module.css";
import { Cart } from './../cart';

const INITIAL_STATE = {
  tv: { value: '0', cost: '0', image: '' },
  fridge: { value: '0', cost: '0', image: '' },
  washingMashine: { value: '0', cost: '0', image: '' },
  cartValue: { value: '' }
}

export class Market extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE
    this.addInCart = this.addInCart.bind(this)
    this.Buy = this.Buy.bind(this)
    this.cleanCart = this.cleanCart.bind(this)
    this.addingInCartSum = this.addingInCartSum.bind(this)
  }

  addInCart = (name, value, cost, image) => {
    this.setState({
      [name]: {
        value: +value + +this.state[name].value,
        cost: +this.state[name].cost + +cost,
        image: image
      }
    })
  }

  cleanCart = () => {
    this.setState(INITIAL_STATE)
  }

  Buy = () => {
    console.log(this.state)
    this.setState(INITIAL_STATE)
  }

  addingInCartSum = (summInCart) => {
    this.setState({ cartValue: { value: +this.state.cartValue.value + +summInCart } })

  }

  render() {
    return (
      <div className={styles.market}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/products" element={<ProductList
              products={this.props.products}
              cart={this.props.cart}
              addInCart={this.addInCart}
              addingInCartSum={this.addingInCartSum}
            />} />
            <Route exact path='/cart' element={<Cart inCart={this.state} cleanCart={this.cleanCart} Buy={this.Buy} addingInCartSum={this.addingInCartSum} />} />
          </Routes>
          <Nav state={this.state} />
        </BrowserRouter>
      </div>
    );
  }
}
