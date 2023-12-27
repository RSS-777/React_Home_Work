import { useSelector } from "react-redux"
import './Home.css'

export const Home = () => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <section className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <h2>Home</h2>
            <p>theme: {theme}</p>
        </section>
    )
}