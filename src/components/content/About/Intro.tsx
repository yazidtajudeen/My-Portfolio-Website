import { useContext, useEffect, useRef } from 'react';
import sider from '../../../assets/sider.png';
import forImage from '../../../assets/for.png';
import { FaDownload } from "react-icons/fa6";
import { ThemeContext } from '../../../theme/ThemeContext';
import { gsap } from 'gsap';

export default function Intro() {
    const themeContext = useContext(ThemeContext);
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    if (!themeContext) {
        throw new Error("Intro must be used within a ThemeProvider");
    }

    const { isDarkMode } = themeContext;

    const siderStyle = {
        height: '32vh',
    }

    const textColor = isDarkMode ? '#ffff' : '#161B27';
    const helloColor = '#3690CC';
    const description = isDarkMode ? '#ffff' : '#161B27';

    const gradientTextStyle = {
        background: 'linear-gradient(to right, #5967D8 40%, #3690CC 40%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'Barlow, sans-serif',
        fontWeight: '400',
        fontSize: '45px',
        marginTop:'-0.5em',
    };

    const descriptionStyle = {
        color: description,
        letterSpacing: '0.8px',
    };

    useEffect(() => {
        if (sectionRef.current) {
            gsap.to(sectionRef.current, {
                background: isDarkMode ? 'linear-gradient(to right, #000000, #434343)' : 'linear-gradient(to right, #ffffff, #e0e0e0)',
                duration: 2,
                ease: 'power2.inOut',
            });
        }

        gsap.fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' });
        gsap.fromTo(buttonRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power2.out' });
        gsap.fromTo(imageRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' });

    }, [isDarkMode]);

    return (
        <div>
            <section ref={sectionRef} className='main' style={{display:'flex'}}>
                <div ref={imageRef} style={{marginTop:'8em',marginLeft:'5em'}}>
                    <img src={sider} alt="sider icon" style={siderStyle} />
                </div>
                <div className='' style={{marginTop:'8.2em'}}>
                    <img src={forImage} alt="icon" style={{marginLeft:'18px'}}/>
                </div>
                <div ref={textRef} style={{width:"550px"}}>
                    <p style={{ marginTop:'4.8em',marginLeft:'3px', fontSize:'26px' }}>
                        <span style={{ color: helloColor }}>Hello</span> <span style={{ color: textColor }}>I`m Yazid</span>
                    </p> <br />
                    <h2 style={gradientTextStyle}>Software Engineer</h2><br />
                    <p style={descriptionStyle}>
                        Hi, I'm a software engineer specializing in mobile app development and UI/UX design. I create intuitive, user-friendly applications <br />
                        with a strong focus on seamless experiences. Explore my work and let's build something great together
                    </p> <br />
                    <div style={{display:'flex',marginTop:'2em'}}>
                        <button ref={buttonRef} style={{
                            display: 'flex',
                            backgroundColor: "#5967D8",
                            width: "266px",
                            height: "53px",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "12px",
                            fontWeight: "400",
                            fontSize: "16px",
                            cursor: "pointer",
                            position: 'relative',
                        }}>
                            <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                Download CV
                            </span>
                            <FaDownload style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}/>
                        </button>
                        
                   </div>
                </div>
                <div className='user-image' style={{}}>

                </div>
            </section>
        </div>
    );
}