import React from 'react'
import { useTheme} from "../features/ThemeContext";

const About = () => {
    const darkMode = useTheme();
    return (
        <div  className={darkMode? "dark" : " "}>
            <section className=" px-20 dark:bg-white  bg-[#000814]">
                <h2 className="text-4xl font-bold text-white ">About Me</h2>
                <p className="text-xl text-[#edf6f9] py-6 px-10">
                I’m a tech enthusiast currently pursuing my bachelor’s degree. An organized and motivated individual capable of time management and working under pressure in all environments. Seeking an internship to use my skills against Real Time challenges.
                </p>
            </section>
        </div>
    )
}

export default About