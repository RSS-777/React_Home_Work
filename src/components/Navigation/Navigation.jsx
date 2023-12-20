import { NavLink } from "react-router-dom";
import './Navigation.css';
import { useDispatch } from "react-redux";
import { useThemeSelector } from "../../store/theme/selector";
import { changeTheme } from "../../store/theme/action";

export const Navigation = () => {
    const dispach = useDispatch();
    const theme = useThemeSelector();

    const handleChangeTheme = () => {
        const newTheme = (theme === 'light' ? 'dark' : 'light')
        const action = changeTheme(newTheme)
        dispach(action)
    }

    return (
        <section>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
                <button onClick={handleChangeTheme}>{theme}</button>
            </nav>
        </section>
    )

}