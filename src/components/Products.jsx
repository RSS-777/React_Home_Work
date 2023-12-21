import { useDispatch } from "react-redux";
import { fetchProduct } from "../store/products/actions";
import { useProductorSelector } from "../store/products/selectors";

export const Producuts = () => {
    const dispatch = useDispatch()
    const products = useProductorSelector();
    console.log( products )
    return (
        <section>
            <h2>Products</h2>
            <button
                onClick={() => {
                    dispatch(fetchProduct());
                }}
            >
                Load Products
            </button>
        </section>
    )
}