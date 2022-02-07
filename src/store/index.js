import { combineRedicer } from 'redux';

import { productReducer } from './product-item-state';
import { marketReducer } from './products-state';

export const reducer = combineRedicer({
  productReducer,
  marketReducer,
});
