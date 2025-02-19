import './index.css'
import Header from './components/Navbar/Header';
import { ThemeProvider, useTheme } from "./theme/ThemeContext"; 
import About from './components/content/About/About';

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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: isDarkMode ? '#090A15' : '#ffff' }}>
        <Header />
        <About />
      </div>
    </div>
  )
}

export default App
