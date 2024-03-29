import React, { useRef, useEffect } from 'react';
import { useTheme } from "../features/ThemeContext";
import { motion, useScroll } from "framer-motion";

const About = () => {
    const darkMode = useTheme();
    const element = useRef(null);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.75', 'start 0.4'],
    })

    useEffect(() => {
        scrollYProgress.on("change", e => console.log(e))
    }, [])

    return (
        <div
            className={darkMode ? "dark" : ""}

        >
            <section className="px-20 dark:bg-white bg-[#000814]">
                <h2 className="text-4xl font-bold text-white ">About Me</h2>
                <motion.p
                    className="text-xl text-[#edf6f9] py-6 px-10"
                    ref={element}
                    style={{ opacity: scrollYProgress }}
                >
                    I’m a tech enthusiast currently pursuing my bachelor’s degree. An organized and motivated individual capable of time management and working under pressure in all environments. Seeking an internship to use my skills against Real Time challenges.
                </motion.p>
            </section>
        </div>
    );
};

export default About;
