import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addProduct, clearProduct } from '../../store/product-state';
import { productSelector } from '../../selectors';

import styles from './product.module.css';

export const Product = ({ product, addInCart, addingInCartSum, name, storage }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const { value, cost, image } = useSelector((state) => productSelector(state, name));

  useEffect(() => {
    if (value > 0 && value <= storage[name]) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [value]);

  const handleChange = (e) => {
    if (e.target.value >= 0 && e.target.value <= storage[name]) {
      setIsDisabled(false);
      dispatch(
        addProduct({
          value: e.target.value,
          cost: +e.target.value * product.cost,
          image: product.imgSrc,
          name,
        }),
      );
    } else setIsDisabled(true);
  };

  const buttonClick = () => {
    addInCart(name, +value, +cost, image);
    addingInCartSum(+value);
    dispatch(clearProduct());
  };

  return (
    <div className={styles.productCard}>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>На складе - {storage[product.id]}шт.</div>
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
  name: PropTypes.string.isRequired,
  storage: PropTypes.shape({
    tv: PropTypes.number,
    fridge: PropTypes.number,
    washingmashine: PropTypes.number,
  }).isRequired,
};
