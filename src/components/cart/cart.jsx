import React from "react";
// import { Product } from "../product";

import styles from "./cart.module.css";

export class Cart extends React.Component {
  render() {
    return (
      <div className={styles.cart}>
        {/* <Product /> */}
        <span>{this.props.howMany}</span>
      </div>
    );
  }
}
