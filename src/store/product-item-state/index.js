import { initialProductState } from './initial-state';
import { TYPES } from '../action-types';

export const productReducer = (prevState, action) => {
  switch (action.type) {
    case TYPES.ADD_IN_CART: {
      const { value, cost, image } = action.payload;
      return {
        value,
        cost,
        image,
      };
    }
    case TYPES.CLEAR_PRODUCT:
      return initialProductState;
    default:
      throw new Error();
  }
};
