export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL = 'PRODUCTS_FAIL';

const productsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
};

const productsSuccess = (products) => {
    return {
        type: PRODUCTS_SUCCESS,
        payload: products
    }
};

const productsFail = (error) => {
    return {
        type: PRODUCTS_FAIL,
        payload: error
    }
};

export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(productsLoading())
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            dispatch(productsSuccess(data.products))
        })
        .catch((error) => {
            dispatch(productsFail(error))
        })
    }
}