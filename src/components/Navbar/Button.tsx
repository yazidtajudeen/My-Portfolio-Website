import { IoArrowForward } from "react-icons/io5";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
}

export default function hireButton({ onClick, label = "Hire Me" }: ButtonProps) {
  const buttonStyle = {
    backgroundColor: "#5967D8",
    border: "none",
    width: "172px",
    height: "49px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "16px",
    fontFamily: "Barlow, sans-serif",
    cursor: "pointer",
    color: "#fff", 
  };

  const iconStyle = {
    marginLeft: "0.8em", 
    width: "20px",
    height: "20px",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
      <IoArrowForward style={iconStyle} />
    </button>
  );
}
