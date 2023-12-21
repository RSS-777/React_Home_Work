import { PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "./actions";
const initionState = {
    products: [],
    loading: false,
    error: null
};

export const productsReducer = (state = initionState, action) => {
   switch(action.type) {
    case PRODUCTS_LOADING: 
        return {...state, loading: true};
    case PRODUCTS_SUCCESS:
        return {...state, loading: false, products: action.payload, error: null};
    case PRODUCTS_FAIL:
        return {...state, loading: false, error: action.payload}    

    default:
        return state;
   }
}