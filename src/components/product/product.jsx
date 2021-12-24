import React from "react";

import styles from "./product.module.css";

export class Product extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className={styles.produsctList}>
        {this.props.products.map((product) => (
          <>
            <div>{this.props.title}</div>
            <div>{this.props.description}</div>
            <img src={this.props.imgSrc} alt={`Фото - ${this.props.title}`} />
          </>
        ))}
      </div>
    );
  }
}
