import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.css';

const INITIAL_STATE = { value: 0, cost: 0, image: '' };

export const Product = ({ product, addInCart, addingInCartSum }) => {
  const [marketProduct, setMarketProduct] = useState(INITIAL_STATE);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (marketProduct.value > 0) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [marketProduct.value]);

  const handleChange = (e) => {
    if (e.target.value >= 0) {
      setIsDisabled(false);
      setMarketProduct({
        value: e.target.value,
        cost: +e.target.value * product.cost,
        image: product.imgSrc,
      });
    } else setIsDisabled(true);
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
        disabled={isDisabled}
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
