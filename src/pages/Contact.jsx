import { useThemeSelector } from "../store/theme/selector";

export const Contact = () => {
    const theme = useThemeSelector();
    return(
        <div className={theme}>
            <h2>Contact</h2>
            <p>This is contact page</p>
        </div>
    )
}