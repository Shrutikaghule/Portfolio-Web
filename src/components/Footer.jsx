import React from 'react'

import { useTheme , useThemeUpdate} from "../features/ThemeContext";

const Footer = () => {
  const darkMode=useTheme();
  return (
    <div className={darkMode ? "dark" : " "}>

      <div className='w-full  h-28 dark:bg-white bg-[#000814] '>
        <div className='flex justify-center items-center h-full bg-[#001d3d]'>
          <p className='text-white bg-[#001d3d] '> Shrutika Ghule</p>

        </div>
      </div>
    </div>
  )
}

export default Footer