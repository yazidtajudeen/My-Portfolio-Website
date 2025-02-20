import { useContext, useEffect, useRef } from 'react';
import sider from '../../../assets/sider.png';
import forImage from '../../../assets/for.png';
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ThemeContext } from '../../../theme/ThemeContext';
import userImage from '../../../assets/user-image.png';
import { gsap } from 'gsap';

export default function Intro() {
    const themeContext = useContext(ThemeContext);
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const socialButtonsRef = useRef<HTMLDivElement>(null);

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
                duration: 2,
                ease: 'power2.inOut',
            });
        } else {
            console.warn('GSAP target sectionRef not found.');
        }

        if (textRef.current) {
            gsap.fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' });
        } else {
            console.warn('GSAP target textRef not found.');
        }

        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power2.out' });
        } else {
            console.warn('GSAP target buttonRef not found.');
        }

        if (imageRef.current) {
            gsap.fromTo(imageRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' });
        } else {
            console.warn('GSAP target imageRef not found.');
        }

        const userImage = document.querySelector('.user-image');
        if (userImage) {
            gsap.fromTo(userImage, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, delay: 2, ease: 'power2.out' });
            gsap.to(userImage, {
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        } else {
            console.warn('GSAP target .user-image not found.');
        }

        const backgroundObject = document.querySelector('.background-object');
        if (backgroundObject) {
            gsap.fromTo(backgroundObject, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 0.5, duration: 2, delay: 1, ease: 'power2.out' });
        } else {
            console.warn('GSAP target .background-object not found.');
        }

        const backgroundObjectSmall = document.querySelector('.background-object-small');
        if (backgroundObjectSmall) {
            gsap.to(backgroundObjectSmall, {
                scale: 1.2, 
                boxShadow: '0 0 30px 15px rgba(54, 144, 204, 0.9)', 
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        } else {
            console.warn('GSAP target .background-object-small not found.');
        }

        if (socialButtonsRef.current) {
            gsap.fromTo(socialButtonsRef.current.children, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, delay: 2.5, stagger: 0.2, ease: 'power2.out' }
            );
        } else {
            console.warn('GSAP target socialButtonsRef not found.');
        }

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            if (imageRef.current) {
                const { offsetWidth, offsetHeight } = imageRef.current;
                const xRotation = ((clientY / offsetHeight) - 0.5) * 20; 
                const yRotation = ((clientX / offsetWidth) - 0.5) * 20; 
                gsap.to(imageRef.current, {
                    rotationX: xRotation,
                    rotationY: yRotation,
                    transformPerspective: 500,
                    ease: 'power3.out',
                    duration: 0.5,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDarkMode]);

    return (
        <div>
            <section ref={sectionRef} className='main' style={{
                display: 'flex', 
                height: '65vh', 
                position: 'relative',
                width: 'auto',
            }}>
                <div className='background-object-small' style={{
                    position: 'fixed',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#3690CC',
                    borderRadius: '50%',
                    top: '10px',
                    left: '10px',
                    zIndex: 0,
                    boxShadow: '0 0 15px 5px #3690CC',
                }}></div>
                <div ref={imageRef} style={{marginTop:'8em',marginLeft:'5em', zIndex: 1}}>
                    <img src={sider} alt="sider icon" style={siderStyle} />
                </div>
                <div className='' style={{marginTop:'8.2em'}}>
                    <img src={forImage} alt="icon" style={{marginLeft:'18px'}}/>
                </div>
                <div ref={textRef} style={{width:"550px"}}>
                    <p style={{ marginTop:'4.9em',marginLeft:'3px', fontSize:'26px' }}>
                        <span style={{ color: helloColor }}>Hello</span> <span style={{ color: textColor }}>I`m Yazid</span>
                    </p> <br />
                    <h2 style={gradientTextStyle}>Software Engineer</h2><br />
                    <p style={descriptionStyle}>
                        Hi, I'm a software engineer specializing in mobile app development and UI/UX design. I create intuitive, user-friendly applications <br />
                        with a strong focus on seamless experiences. Explore my work and let's build something great together
                    </p> <br />
                    <div style={{ display: 'flex', marginTop: '2em' }}>
                        <a 
                            href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
                            style={{
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
                                textDecoration: 'none',
                                color: 'white',
                            }}
                            download
                        >
                            <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                Download CV
                            </span>
                            <FaDownload style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}/>
                        </a>
                        <div ref={socialButtonsRef} style={{ display: 'flex', marginLeft: '1em', marginTop: '0.5em' }}>
                            <button 
                                className='social' 
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid #16A394',
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                    transition: 'transform 0.3s ease',
                                }}
                                onClick={() => window.open('https://www.linkedin.com/in/yazid-tajudeen-b803b326b/', '_blank')}
                                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.3 })}
                                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
                            >
                                <FaLinkedin color="#16A394"/>
                            </button>
                            <button 
                                className='social' 
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid #16A394',
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                    transition: 'transform 0.3s ease',
                                }}
                                onClick={() => window.open('https://x.com/NoimonX', '_blank')}
                                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1 })}
                                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
                            >
                                <FaXTwitter color="#16A394"/>
                            </button>
                            <button 
                                className='social' 
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid #16A394',
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                }}
                                onClick={() => window.open('https://github.com/yazidtajudeen', '_blank')}
                                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1 })}
                                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
                            >
                                <FaGithub color="#16A394"/>
                            </button>
                        </div>
                   </div>
                </div>
                <div className='user-image-container' style={{
                    position: 'relative',
                    marginLeft: '45em',
                    marginTop: '3em',
                    zIndex: 1,
                }}>
                    <div className='user-image hover-effect' style={{
                        borderRadius: '0 60px 0 60px',
                        overflow: 'hidden',
                        width: '590px', 
                        height: '570px',
                        backgroundColor: isDarkMode ? '#161B27' : '#161B27',
                        filter: isDarkMode ? 'grayscale(1%)' : 'none',  
                        transition: 'background-color 0.5s ease, filter 0.6s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <img src={userImage} alt="user-image" style={{ width: '130%', height: '140%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
        </div>
    );
}