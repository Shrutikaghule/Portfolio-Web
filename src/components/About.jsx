import React from 'react'
import { useTheme} from "../features/ThemeContext";

const About = () => {
    const darkMode = useTheme();
    return (
        <div  className={darkMode? "dark" : " "}>
            <section className=" px-20 dark:bg-white  bg-[#000814]">
                <h2 className="text-4xl font-bold text-white ">About Me</h2>
                <p className="text-xl text-[#edf6f9] py-6 px-10">
                    I am a software developer with a passion for web development. I am currently working as a software developer at a startup. I have experience in building web applications using React, Node.js, and MongoDB. I am also familiar with AWS and Azure. I am always eager to learn new technologies and improve my skills. I am passionate about building products that are user-friendly and accessible.
                </p>
            </section>
        </div>
    )
}

export default About