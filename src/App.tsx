import './index.css'
import Header from './components/Navbar/Header'
import { ThemeProvider, useTheme } from "./theme/ThemeContext"; 


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
    <div style={{ backgroundColor: isDarkMode ? '#090A15' : '#ffff', minHeight: '100vh' }}>
      <Header />
    </div>
  )
}

export default App
