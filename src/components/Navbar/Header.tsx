import { JSX } from "react";
import Button from "./button";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaServicestack, FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import ModeButton from "./modeButton";
import { useTheme } from '../../theme/ThemeContext';

const links: { name: string; href: string; icon: JSX.Element }[] = [
  { name: "Home", href: "/", icon: <AiFillHome /> },
  { name: "About", href: "/about", icon: <BsInfoCircleFill /> },
  { name: "Services", href: "/services", icon: <FaServicestack /> },
  { name: "Skills", href: "/skills", icon: <FaTools/> }, 
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },  
  { name: "Contact", href: "/contact", icon: <MdConnectWithoutContact/> }, 
];

const Header = () => {
  const { isDarkMode } = useTheme();

  const ulStyle = {
    color: isDarkMode ? '#fff' : '#000', 
  };

  return (
    <div>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        height: "90px",
        padding: "3.5rem"
      }}>
        <div className="logo"></div>
        <div className="links" style={{ flexGrow: 2, marginLeft:'25em', textAlign:'center' }}>
          <ul style={{ display: "inline-flex", listStyle: "none", gap: "2.8rem", ...ulStyle }}>
            {links.map((link) => (
              <li key={link.href} style={{fontSize:"18px"}}>
                <a href={link.href} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem"
                }}>
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hire-button" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <ModeButton />
          <Button />
        </div>
      </nav>
    </div>
  );
};

export default Header;
