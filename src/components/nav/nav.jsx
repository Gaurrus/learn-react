import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./nav.module.css";

export class Nav extends React.Component {
  render() {
    return (
      <ul className={styles.navList}>
        <li>
          <NavLink to="">На главную</NavLink>
        </li>
        <li>
          <NavLink to="">Магазин</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Корзина({this.props.state.cartValue.value})
          </NavLink>
        </li>
      </ul>
    );
  }
}
