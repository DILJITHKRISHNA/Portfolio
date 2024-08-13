import React from 'react';
import {
    SiJavascript, SiReact, SiMongodb, SiExpress, SiNextdotjs,
    SiNodedotjs, SiRedux, SiTypescript, SiTailwindcss, SiGithub,
    SiPostgresql, SiFigma, SiHtml5
} from 'react-icons/si';
import { motion } from 'framer-motion'; 

const skillsData = [
    { icon: <SiJavascript className="text-6xl transition-transform duration-500 transform hover:scale-105 hover:text-[#34d399]" />, name: 'JavaScript' },
    { icon: <SiReact className="text-6xl transition-transform duration-500 transform hover:scale-105" />, name: 'React' },
    { icon: <SiMongodb className="text-6xl transition-transform duration-500 transform hover:scale-105" />, name: 'MongoDB' },
    { icon: <SiExpress className="text-6xl transition-transform duration-500 transform hover:scale-105" />, name: 'Express' },
    { icon: <SiNodedotjs className="text-6xl transition-transform duration-500 transform hover:scale-105" />, name: 'Node.js' },
    { icon: <SiPostgresql className="text-6xl transition-transform duration-500 transform hover:scale-105" />, name: 'PostgreSQL' },
];

const Skills = () => {
    return (
        <div className='skills-side bg-gradient-to-r py-12 px-6 sm:px-0 '>
            <div className='flex justify-start items-center flex-row gap-2 mt-2 sm:p-10 p-2 mb-10'>
            <h1 className="text-[#aaaaaa] font-mono text-2xl">TOP SKILLS</h1>
            <div className='border-b-2 border-[#34d399] w-[10rem] sm:mr-10 mr-4'></div>
            </div>
            <div className="bg-white bg-opacity-10 text-white p-10 rounded-lg shadow-2xl backdrop-blur-md">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="text-center flex flex-col items-center p-4 bg-black bg-opacity-70  rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:bg-opacity-80"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {skill.icon}
                            <span className='font-medium mt-2 text-lg'>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
