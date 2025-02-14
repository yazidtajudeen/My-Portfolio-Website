import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../theme/ThemeContext"; 

export default function ModeButton() {
    const { isDarkMode, toggleTheme } = useTheme();

    const buttonStyle = {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        backgroundColor: "transparent",
        border: "none",
        color: isDarkMode ? "#fff" : "#000",
        fontSize: "16px",
        marginRight: '3em',
        marginTop:'0.8em',
    };

    const iconStyle = {
        width: "21px",
        height: "21px",
        marginRight: "0.5em", 
        marginBottom:'2px',
    };

    return (
        <button onClick={toggleTheme} style={buttonStyle}>
            {isDarkMode ? <FiMoon style={iconStyle} /> : <FiSun style={iconStyle} />}
            {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
    );
}
