/* import React, { useEffect } from 'react'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './views/Home/Home';
import { Dashboard } from './features/Dashboard/Dashboard';
import { useTheme } from './services/theme';

function App() {
  const { theme } = useTheme();

 /*  useEffect(() => {
    import('bootstrap');
  }, []);
 */
  return (
    <BrowserRouter>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App