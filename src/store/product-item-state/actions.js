import { TYPES } from '../action-types';

export const addProduct = (payload) => ({
  type: TYPES.ADD_IN_CART,
  payload,
});

export const clearProduct = () => ({ type: TYPES.CLEAR_PRODUCT });
