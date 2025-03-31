import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { useTheme } from './services/theme';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Initialize Bootstrap's JavaScript
    import('bootstrap');
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;