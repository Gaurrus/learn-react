import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Image, InputNumber } from 'antd';

import { addProduct, clearProduct } from '../../store/product-state';
import { productSelector } from '../../selectors';

import styles from './product.module.css';

export const Product = ({ product, addInCart, addingInCartSum, name, storage }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const { value: valueState, cost, image } = useSelector((state) => productSelector(state, name));

  useEffect(() => {
    if (valueState > 0 && valueState <= storage[name]) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [valueState]);

  const handleChange = (value) => {
    if (valueState >= 0 && valueState <= storage[name]) {
      setIsDisabled(false);
      dispatch(
        addProduct({
          value: value,
          cost: +value * product.cost,
          image: product.imgSrc,
          name,
        }),
      );
    } else setIsDisabled(true);
  };

  const buttonClick = () => {
    addInCart(name, +valueState, +cost, image);
    addingInCartSum(+valueState);
    dispatch(clearProduct());
  };

  return (
    <div className={styles.productCard}>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>На складе - {storage[product.id]}шт.</div>
      <Image className={styles.img} src={product.imgSrc} alt={`Фото - ${product.title}`} />
      <span>{product.cost} за</span>
      <InputNumber
        name={product.id}
        type="number"
        prefix="#"
        value={valueState}
        onChange={handleChange}
        min={0}
        defaultValue={0}
      />

      <span>{cost} зайчиков</span>
      <Button
        className={styles.button}
        onClick={() => {
          buttonClick();
        }}
        disabled={isDisabled}
      >
        В корзину
      </Button>
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
