import { combineReducers } from 'redux';

import { productReducer } from './product';
import { marketReducer } from './market';

export const reducer = combineReducers({
  productReducer,
  marketReducer,
});
