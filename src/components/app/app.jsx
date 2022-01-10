import { Market } from "../market";
import { ErrorBoundary } from './../error-boundary';

import { products } from "../../constants";
import "./app.module.css";


export const App = (props) => (
  <ErrorBoundary>
    <Market products={products} />
  </ErrorBoundary>
);
