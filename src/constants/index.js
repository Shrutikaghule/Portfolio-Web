
import typescript from '../assets/typescript.png';
import css from '../assets/css.png';
import reactjs from '../assets/reactjs.png';
import tailwind from '../assets/tailwind.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import javascript from '../assets/javascript.png';
import three from '../assets/three.png';
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';

import portfolio from "../assets/thumbnail/portfolio.png";
import spotify from "../assets/thumbnail/spotify.png";

  
  
  const technologies = [
   
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ThreeJs",
      icon: three,
    },
    {
      name: "Cpp",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    }
  ];
  
  const work = [
   
    {
      name: "Portfolio",
      icon: portfolio,
      description: "This is my portfolio website which you are currently looking at.",
      tech: [reactjs,three,css,javascript,tailwind],
    },
    {
      name: "Spotify-Clone",
      icon: spotify,
      description: "This is a clone of the Spotify web app.",
      tech: [reactjs,css,javascript,tailwind],
    },
   
  ];
  
  
  
  export {technologies ,work};