/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.css';

const INITIAL_STATE = { value: 0, cost: 0, image: '' };

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      cost: +e.target.value * this.props.product.cost,
      image: this.props.product.imgSrc,
    });
  };

  buttonClick = () => {
    this.props.addInCart(this.props.product.id, +this.state.value, this.state.cost, this.state.image);
    this.props.addingInCartSum(+this.state.value);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { product } = this.props;
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
          value={this.state.value}
          onChange={this.handleChange}
        />

        <span>{this.state.cost} зайчиков</span>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            this.buttonClick();
          }}
        >
          В корзину
        </button>
      </div>
    );
  }
}

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
