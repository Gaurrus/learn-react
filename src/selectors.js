export const productSelector = (state) => state.productReducer;

export const marketSelector = (state, name) => state.marketReducer[name];
