import { products } from "../../constants";
import { Cart } from "../cart";
import { Market } from "../market";

import styles from "./app.module.css";

export const App = () => (
  <>
    <Market products={products} />
    <Cart />
  </>
);
