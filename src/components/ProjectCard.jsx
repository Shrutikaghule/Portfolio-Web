import React from 'react';
import { work } from "../constants";
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTheme } from "../features/ThemeContext";

const ProjectCard = () => {
  const darkMode = useTheme();
  return (
    <div className={darkMode ? "dark" : " "} >

      <div className='p-20  dark:bg-white bg-[#000814] '>
        <h1 className="text-3xl font-bold dark:text-black">Projects</h1>
        <div className='flex flex-row flex-wrap gap-10 my-16 px-10'>

          {work.map((proj) => (
            <div key={proj.name}>

              <Project
                icon={proj.icon}
                name={proj.name}
                description={proj.description}
                tech={proj.tech}
              />
            </div>

          ))}
        </div>
      </div>
    </div>

  );
};

const Project = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXspring = useSpring(x);
  const mouseYspring = useSpring(y);

  const rotateX = useTransform(mouseYspring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXspring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }


  return (
    
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className='relative h-72 w-60 bg-[#3038536a] rounded-l '
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
          
        }
      }
        className='absolute inset-4 place-content-center bg-[#ffffffc4]  rounded-l '
      >
        <div className='absolute inset-0  rounded-l '>

          <img
            src={props.icon}
            alt="project"
            className='absolute m-1 place-content-center w-[12.35rem] rounded-l '
          />
          <div className="absolute  mt-[6.5rem] w-full bg-[#c3c3c400] flex  ml-2">
            {props.tech.map((techIcon, index) => (
              <img
                key={index}
                src={techIcon}
                alt={`tech-${index}`}
                className='w-6 h-6 text-sm bg-[#c3c3c400]'
              />
            ))}
          </div>
          <h1 className='bg-[#c3c3c400] absolute mt-32  text-black font-semibold text-center w-full text-lg'>
            {props.name}
          </h1>
          <p className='bg-[#c3c3c400] absolute mt-40 text-[#2B2C28] m-1 w-full text-[0.85rem]'>
            {props.description}
          </p>


        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
