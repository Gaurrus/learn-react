import { PropTypes } from 'prop-types';
import styles from './main.module.css';

export const Main = ({ products }) => (
  <div className={styles.wrapper}>
    <span className={styles.mainText}>Welcome!</span>
    <div className={styles.imgWrapper}>
      {products.map((product) => (
        <img key={product.id} className={styles.img} src={product.imgSrc} alt="" />
      ))}
    </div>
  </div>
);

Main.propTypes = {
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
};
