import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return (
    <div style={appStyle}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
