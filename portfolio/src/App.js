
import Header from './components/Header'
import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    if (isDarkTheme) {
      root.style.setProperty('--primary-color', '#3498db'); // Light theme primary color
      root.style.setProperty('--background-color', '#f1f1f1'); // Light theme background color
    } else {
      root.style.setProperty('--primary-color', '#F0ECE5'); // Dark theme primary color
      root.style.setProperty('--background-color', '#161A30'); // Dark theme background color
    }
  };

  return (
    <div className='App'>
      <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Header />
    </div>
  );
}

export default App;
