import { TYPES } from '../action-types';

export const buyProducts = (payload) => ({
  type: TYPES.BUY_PRODUCTS,
  payload,
});

export const cleanMarket = () => ({ type: TYPES.CLEAR_CART });
