import { combineReducers } from 'redux';

import { productReducer } from './product-state/index';
import { marketReducer } from './market-state/index';

export const reducer = combineReducers({
  productReducer,
  marketReducer,
});
