/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.css';

const INITIAL_STATE = { value: 0, cost: 0, image: '' };

export const Product = ({ product, addInCart, addingInCartSum }) => {
  const [marketProduct, setMarketProduct] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setMarketProduct({
      value: e.target.value,
      cost: +e.target.value * product.cost,
      image: product.imgSrc,
    });
  };

  const buttonClick = () => {
    addInCart(product.id, +marketProduct.value, marketProduct.cost, marketProduct.image);
    addingInCartSum(+marketProduct.value);
    setMarketProduct(INITIAL_STATE);
  };

  return (
    <div className={styles.productCard}>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <img className={styles.img} src={product.imgSrc} alt={`Фото - ${product.title}`} />
      <span>{product.cost} за</span>
      <input
        className={styles.input}
        name={product.id}
        type="number"
        value={marketProduct.value}
        onChange={handleChange}
      />

      <span>{marketProduct.cost} зайчиков</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          buttonClick();
        }}
      >
        В корзину
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    key: PropTypes.number,
    cost: PropTypes.number,
  }).isRequired,
  addInCart: PropTypes.func.isRequired,
  addingInCartSum: PropTypes.func.isRequired,
};
