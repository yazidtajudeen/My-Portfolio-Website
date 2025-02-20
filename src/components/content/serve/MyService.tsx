import { useTheme } from '../../../theme/ThemeContext';
import line from '../../../assets/line.png';

const MyService = () => {
    const { isDarkMode } = useTheme();

    return (
        <div style={{
            backgroundColor: isDarkMode ? '#090A15' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            minHeight: '90vh',
            padding: '20px',
        }}>
            <section className="services" id="services">
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
                <div className='flex' style={{}}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default MyService;