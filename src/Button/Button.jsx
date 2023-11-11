export const Button = ({ backgroundColor, textColor, borderRadius, text }) => {
    const buttonStyles = {
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: borderRadius,
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
    };
    return (
        <button style={buttonStyles}>
            {text}
        </button>
    );
};