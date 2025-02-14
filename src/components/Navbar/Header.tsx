import { JSX } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaServicestack, FaProjectDiagram, FaTools } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import Mode from './Mode';
import OneButton from './Hire';

import { useTheme } from '../../theme/ThemeContext';
import { useLocation } from 'react-router-dom';

const links: { name: string; href: string; icon: JSX.Element }[] = [
  { name: "Home", href: "/", icon: <AiFillHome /> },
  { name: "About", href: "/about", icon: <BsInfoCircleFill /> },
  { name: "Services", href: "/services", icon: <FaServicestack /> },
  { name: "Skills", href: "/skills", icon: <FaTools /> }, 
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },  
  { name: "Contact", href: "/contact", icon: <MdConnectWithoutContact /> }, 
];

const Header = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation(); 

  return (
    <div>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        height: "90px",
        padding: "3.8rem"
      }}>
        <div className="logo"></div>
        <div className="links" style={{ flexGrow: 2, marginLeft: '25em', textAlign: 'center' }}>
          <ul style={{ display: "inline-flex", listStyle: "none", gap: "2.8rem", color: isDarkMode ? '#fff' : '#000' }}>
            {links.map((link) => (
              <li key={link.href} style={{ fontSize: "18px" }}>
                <a 
                  href={link.href} 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.8rem", 
                    color: location.pathname === link.href ? '#5967D8' : isDarkMode ? '#fff' : '#000' 
                  }}
                >
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hire-button" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <Mode/>
          <OneButton/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
