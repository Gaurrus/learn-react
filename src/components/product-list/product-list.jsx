/* eslint-disable react/prefer-stateless-function */

import PropTypes from 'prop-types';
import React from 'react';
import { Product } from '../product';

import styles from './product-list.module.css';

export class ProductList extends React.Component {
  render() {
    const { products, addInCart, addingInCartSum } = this.props;
    return (
      <div className={styles.produsctList}>
        {products.map((product) => (
          <Product key={product.key} product={product} addInCart={addInCart} addingInCartSum={addingInCartSum} />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
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
  addInCart: PropTypes.func.isRequired,
  addingInCartSum: PropTypes.func.isRequired,
};
