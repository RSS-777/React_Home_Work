export const Button = (props) => {
    const { color, width, height, border, text, fontSize, padding, colorStyleFunc, buttonStyle } = props;
    const wrepperStyle = {
        border: border,
        width: width,
        height: height,
        padding: padding
    }
    return (
        <div style={wrepperStyle}>
            <p style={{ fontSize: fontSize, color: color }}>{text}</p>
            <button onClick={colorStyleFunc} style={buttonStyle}>Change color</button>
            {props.children}
        </div>
    )
}