import { useTheme } from '../../../theme/ThemeContext';
import line from '../../../assets/line.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from 'react';

const MyService = () => {
    const { isDarkMode } = useTheme();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div style={{
            backgroundColor: isDarkMode ? '#090A15' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            minHeight: '90vh',
            padding: '20px',
            position: 'relative',
        }}>
            <section className="services" id="services" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <div className="flex ml-20">
                    <img className='mr-3 w-10' src={line} alt="divider" />
                    <p className='text-[#16A394]' style={{ fontSize: '16px', fontWeight: 'normal' }}>
                        My Services
                    </p>
                </div>
                <span className='p-20'>
                    <h2 className='ml-32 font-normal' style={{ fontFamily: 'Barlow, sans-serif', fontSize:'40px',marginTop:'-0.2em'}}>
                        What I Do
                    </h2>
                </span>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
                    <button onClick={() => scroll('left')} style={{
                        position: 'absolute',
                        left: '-40px',
                        backgroundColor: 'transparent',
                        border: '1px solid #16A394',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '16px',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        transition: 'transform 0.3s ease',
                    }}>
                        <FaArrowLeft />
                    </button>
                    <div className='flex overflow-x-auto' ref={scrollContainerRef} style={{ display: 'flex', gap: '20px', padding: '20px 0' }}>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} style={{
                                width: '289px',
                                height: '307px',
                                backgroundColor: '#161B27',
                                borderRadius: '8px',
                                border: '1px solid #4381D1',
                                flexShrink: 0,
                            }}></div>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} style={{
                        position: 'absolute',
                        right: '-40px',
                        backgroundColor: 'transparent',
                        border: '1px solid #16A394',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '16px',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        transition: 'transform 0.3s ease',
                    }}>
                        <FaArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MyService;