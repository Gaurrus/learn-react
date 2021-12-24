import React from "react";
import { Product } from "../product";

import styles from './product-list.module.css'

export class ProductList extends React.Component {
  render() {
    return (
      <div className={styles.produsctList}>
        <Product products={this.props.products}/>
      </div>
    );
  }
}
