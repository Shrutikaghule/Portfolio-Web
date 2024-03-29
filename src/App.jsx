import React from 'react';
import Tech from './components/Tech';
import Home from './components/Home';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import About from './components/About';
import './index.css'
import { ThemeProvider } from './features/ThemeContext';

const App = () => {
  
  return (
    <>
    <ThemeProvider >
      <Home  />
      <About />
      <Tech />
      <ProjectCard />
      <Footer/>
    </ThemeProvider>
    </>
  );
};


export default App;