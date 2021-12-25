import React from "react";
import { ProductList } from "../product-list";

import styles from "./market.module.css";

export class Market extends React.Component {
  constructor() {
    super();
    this.state = [
      {
        id: "tv",
        howMany: 0,
      },
      {
        id: "fridge",
        howMany: 0,
      },
      {
        id: "washingMashine",
        howMany: 0,
      },
    ];
    this.addInCart = this.addInCart.bind(this);
  }

  addInCart = (id, value) => {
    const newState = {
      id: id,
      howMany: value
    }
    console.log(newState)
  };
  render() {
    return (
      <div className={styles.market}>
        <ProductList
          products={this.props.products}
          addInCart={this.addInCart}
        />
        {console.log(this.addInCart, `market`)}
      </div>
    );
  }
}
