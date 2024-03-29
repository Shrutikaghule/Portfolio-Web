import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme , useThemeUpdate} from "../features/ThemeContext";

export default function Home() {
  const darkMode=useTheme();
  const toggleTheme=useThemeUpdate();
  return (
    <div className={darkMode? "dark" : " "} >
    <main className=" px-20 dark:bg-white  bg-[#000814]">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-customIcon dark:text-custombtn1">shrutika.co</h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill onClick={toggleTheme} 
                className="cursor-pointer text-xl "/>
              </li>
              <li>
                <a 

                  className="bg-gradient-to-r from-custombtn1 to-custombtn2 text-white px-4 py-2 rounded-md" 
                  href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-customText font-medium dark:text-[#05668d]">Shrutika Ghule</h2>
            <h3 className="text-2xl py-2">Developer</h3>
           
          </div>
          <div className="text-2xl flex justify-center gap-16 py-3 text-customIcon ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMail />
          </div>
        </section>
        {/* <section className="w-full  ">
          <h2 className="text-4xl font-bold text-white ">About Me</h2>
          <p className="text-xl text-[#edf6f9] py-6 px-10">
            I am a software developer with a passion for web development. I am currently working as a software developer at a startup. I have experience in building web applications using React, Node.js, and MongoDB. I am also familiar with AWS and Azure. I am always eager to learn new technologies and improve my skills. I am passionate about building products that are user-friendly and accessible.
          </p>
        </section> */}
        </main>
  </div>
  );
}

