import { JSX } from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaServicestack, FaProjectDiagram, FaTools } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import Mode from './Mode';
import RageButton from './RageButton';

import { useTheme } from '../../theme/ThemeContext';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const links: { name: string; href: string; icon: JSX.Element }[] = [
  { name: "Home", href: "home", icon: <AiFillHome /> },
  { name: "Services", href: "services", icon: <FaServicestack /> },
  { name: "Skills", href: "skills", icon: <FaTools /> }, 
  { name: "Projects", href: "projects", icon: <FaProjectDiagram /> },  
  { name: "Contact", href: "contact", icon: <MdConnectWithoutContact /> }, 
];

const Header = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation(); 

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, linkName: string, href: string) => {
    event.preventDefault();
    const targetSection = document.getElementById(href);
    if (targetSection) {
        console.log(`Scrolling to ${linkName} section`);
        gsap.to(window, { duration: 1, scrollTo: { y: targetSection, offsetY: 90 }, ease: 'power2.out' });
    } else {
        console.warn(`${linkName} section not found.`);
    }
  };

  return (
    <div>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        height: "90px",
        padding: "2rem 3.8rem",
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isDarkMode ? '#090A15' : '#ffffff',
      }}>
        <div className="logo"></div>
        <div className="links" style={{ flexGrow: 2, marginLeft: '25em', textAlign: 'center' }}>
          <ul style={{ display: "inline-flex", listStyle: "none", gap: "2.8rem", color: isDarkMode ? '#fff' : '#000' }}>
            {links.map((link) => (
              <li key={link.href} style={{ fontSize: "18px" }}>
                <a 
                  href={`#${link.href}`} 
                  onClick={(event) => handleNavigation(event, link.name, link.href)}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.8rem", 
                    color: location.hash === `#${link.href}` || (link.name === "Home" && location.hash === "") ? '#5967D8' : isDarkMode ? '#fff' : '#000',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#A0C4FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = location.hash === `#${link.href}` || (link.name === "Home" && location.hash === "") ? '#5967D8' : isDarkMode ? '#fff' : '#000'}
                >
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hire-button" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <Mode/>
          <RageButton/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
