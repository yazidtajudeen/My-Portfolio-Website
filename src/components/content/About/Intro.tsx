import { useContext } from 'react';
import sider from '../../../assets/sider.png';
import forImage from '../../../assets/for.png';
import { ThemeContext } from '../../../theme/ThemeContext';

export default function Intro() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("Intro must be used within a ThemeProvider");
    }

    const { isDarkMode } = themeContext;

    const siderStyle = {
        height: '35vh',
    }

    const textColor = isDarkMode ? '#ffff' : '#161B27';
    const helloColor = '#3690CC';

    return (
        <div>
            <section className='main' style={{display:'flex'}}>
            <div style={{marginTop:'8em',marginLeft:'5em'}}>
              <img src={sider} alt="sider icon" style={siderStyle} />
                </div>
                <div className='' style={{marginTop:'8.2em'}}>
                    <img src={forImage} alt="icon" style={{marginLeft:'18px'}}/>
                </div>
                <div style={{width:"200px"}}>
                    <p style={{ marginTop:'4.8em',marginLeft:'3px', fontSize:'26px' }}>
                        <span style={{ color: helloColor }}>Hello</span> <span style={{ color: textColor }}>I`m Yazid</span>
                    </p>
                </div>
                <div className='user-image' style={{}}>

                </div>
            </section>
        </div>
        
              
    );
}