import React from 'react';
import Tech from './components/Tech';
import Home from './components/Home';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import About from './components/About';
import './index.css'
import { ThemeProvider } from './features/ThemeContext';
import {AnimationProvider} from './features/Scroll';

const App = () => {
  
  return (
    <>
    <ThemeProvider >
      <Home  />
      <AnimationProvider >
      <About />
      </AnimationProvider>
      <Tech />
      <ProjectCard />
      <Footer/>
    </ThemeProvider>
    </>
  );
};


export default App;
