import { products } from "../../constants";

import { Market } from "../market";

import "./app.module.css";

export const App = (props) => (
  <>
    <Market products={products} />
  </>
);
