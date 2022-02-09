import { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { productReducer } from '../../store/product/index';
import { initialProductState } from '../../store/product/initial-state';

import styles from './product.module.css';
import { addProduct, clearProduct } from '../../store/product/actions';

export const Product = ({ product, addInCart, addingInCartSum }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const [{ value, cost, image }, dispatch] = useReducer(productReducer, initialProductState);

  useEffect(() => {
    if (value > 0) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [value]);

  const handleChange = (e) => {
    if (e.target.value >= 0) {
      setIsDisabled(false);
      dispatch(
        addProduct({
          value: e.target.value,
          cost: +e.target.value * product.cost,
          image: product.imgSrc,
        }),
      );
    } else setIsDisabled(true);
  };

  const buttonClick = () => {
    addInCart(product.id, +value, +cost, image);
    addingInCartSum(+value);
    dispatch(clearProduct());
  };

  return (
    <div className={styles.productCard}>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <img className={styles.img} src={product.imgSrc} alt={`Фото - ${product.title}`} />
      <span>{product.cost} за</span>
      <input className={styles.input} name={product.id} type="number" value={value} onChange={handleChange} />

      <span>{cost} зайчиков</span>
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
