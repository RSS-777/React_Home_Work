import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./store/themeSlice";

export const Navigation = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    const handlerChangeTheme = () => {
        const newTheme = (theme === 'light') ? 'dark' : 'light'
        dispatch(changeTheme(newTheme))
    }
    return(
        <section>

            <button onClick={handlerChangeTheme}>&#9728; &#127770;</button>
        </section>
    )
}