export const productSelector = (state, name) => state.productReducer[name];

export const marketSelector = (state) => state.marketReducer;

export const storageSelector = (state) => state.storageReducer;

export const storageSagaSelector = (state) => state.storageSagaReducer;

export const formSagaSelector = (state) => state.formSagaReducer;
