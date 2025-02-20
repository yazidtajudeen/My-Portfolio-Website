import './index.css'
import Header from './components/Navbar/Header';
import { ThemeProvider, useTheme } from "./theme/ThemeContext"; 
import About from './components/content/About/About';
import MyService from './components/content/serve/MyService';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )
}

function ThemedApp() {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '90px' }}>
    
      
      <div className='background-object-small' style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          backgroundColor: '#5967D8',
          borderRadius: '50%',
          top: '10px',
          right: '10px',
          zIndex: 0,
          boxShadow: '0 0 15px 5px #5967D8',
      }}></div>


      <div style={{ position: 'relative', zIndex: 1, backgroundColor: isDarkMode ? '#090A15' : '#ffff' }}>
        <Header />
        <About />
        <MyService />
      </div>
    </div>
  )
}

export default App
