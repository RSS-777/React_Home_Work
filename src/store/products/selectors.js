import { useSelector } from "react-redux";

export const useProductorSelector = () => useSelector((state) => state.products);
   