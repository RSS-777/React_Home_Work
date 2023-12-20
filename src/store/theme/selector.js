import { useSelector } from "react-redux";

export const useThemeSelector = () => {
    return (
        useSelector((state) => {
         return state.theme
        })
    )
}