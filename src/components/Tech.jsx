import React from "react";

import BallCanvas from "./Ball";
import { technologies } from "../constants";
import { useTheme , useThemeUpdate} from "../features/ThemeContext";

const Tech = () => {
  const darkMode=useTheme();
  return (
    <div className={darkMode? "dark" : " "}>
    <div className="p-20 w-full my-15 dark:bg-white bg-[#000814]" >
      <p className="  text-3xl font-bold"> 
        Tech Stack</p>
      <div className="mx-[8rem]">
        <div className='flex flex-row flex-wrap justify-center gap-10 '>

          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}

        </div>
      </div>
    </div>
    </div>


  );
};

export default Tech;