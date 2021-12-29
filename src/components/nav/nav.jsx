import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./nav.module.css"


export class Nav extends React.Component {
  render() {

    return (
      <ul className={styles.navList}>
        <li>
          <NavLink to="/products">В магазин</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Перейти в Корзину</NavLink>
        </li>
      </ul>
    )
  }

}