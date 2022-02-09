import { initialMarketState } from './initial-state';
import { TYPES } from '../action-types';

export const marketReducer = (prevState = initialMarketState, action = {}) => {
  switch (action.type) {
    case TYPES.BUY_PRODUCTS: {
      const { name, value, cost, image } = action.payload;
      return {
        ...prevState,
        [name]: {
          image: image,
          cost: prevState[name].cost + cost,
          value: prevState[name].value + value,
        },
        summ: prevState.summ + cost,
      };
    }
    case TYPES.CLEAR_CART:
      return initialMarketState;
    default:
      throw prevState;
  }
};
