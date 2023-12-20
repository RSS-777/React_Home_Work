import { useThemeSelector } from "../store/theme/selector";
import { ToDo } from "../components/ToDo/ToDo";
import './pages.css'

export const Home = () => {
    const theme = useThemeSelector();
    return (
        <div className={theme}>
            <h2>Home</h2>
            <p>This is home page</p>
            <ToDo />
        </div>
    )
};