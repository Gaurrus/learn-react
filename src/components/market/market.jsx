import React from "react";
import { ProductList } from "../product-list";


import styles from './market.module.css'

export class Market extends React.Component {

  render() {
    return (
      <div className={styles.market}>
        <ProductList products={this.props.products}/>
      </div>
    );
  }
}
