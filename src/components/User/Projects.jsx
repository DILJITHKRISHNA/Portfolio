import React from 'react';
import { FiLink2 } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'Varlet',
        description: 'Varlet, an Ecommerce platform for selling shoes for the users. Using a combination of Node.js and MongoDB for the backend, and incorporating Bootstrap, CSS, JavaScript, EJS, Chart.js, and AJAX for the frontend, Varlet provides a dynamic and feature-rich online shopping experience.',
        technologies: ['NodeJS', 'EJS', 'MongoDB', 'ExpressJS'],
        github: 'https://github.com/DILJITHKRISHNA/VarLet',
        live: 'https://varlet.onrender.com',
    },
    {
        name: 'Aurora',
        description: 'Introducing Aurora - a Premier Destination for Effortless Property Rentals. Built on a robust foundation of React, Tailwind CSS, Node.js, MongoDB, and Redux, Aurora Rentals offers a comprehensive suite of functionalities designed to streamline the property rental experience for landlords and tenants alike.',
        technologies: ['MongoDB', 'ReactJS', 'NodeJS', 'ExpressJS', 'Tailwind', 'Redux'],
        github: 'https://github.com/DILJITHKRISHNA/Realestate-backend',
        live: 'https://varlet.vercel.app',
    },
    {
        name: 'OLX Clone',
        description: 'Introducing Olx Clone, an all-in-one marketplace solution designed to revolutionize the way you buy and sell goods online. Crafted with precision using cutting-edge technologies like React, Node.js, Firebase, and polished with the elegance of Tailwind CSS, MarketMate promises an unparalleled user experience.',
        technologies: ['ReactJS', 'Tailwind', 'NodeJS', 'Firebase', 'Restful API'],
        github: 'https://github.com/DILJITHKRISHNA/Olx-Clone',
    },
    {
        name: 'Netflix Clone',
        description: 'Introducing Netflix Clone - an Ultimate Entertainment Destination. Crafted with precision and powered by cutting-edge technologies, Netflix offers a seamless and immersive streaming experience that rivals even the biggest names in the industry.',
        technologies: ['ReactJS', 'Restful API', 'CSS'],
        github: 'https://github.com/DILJITHKRISHNA/Netflix',
    },
    {
        name: 'Todo App',
        description: 'Introducing To-Do App - Your Simple and Stylish Todo Companion. Crafted with care using React and Tailwind CSS, TaskEase offers a minimalist yet powerful solution for managing your tasks and staying organized with ease.',
        technologies: ['Tailwind', 'ReactJS', 'NodeJS'],
        github: 'https://github.com/DILJITHKRISHNA/React_todolist',
    },
    {
        name: 'Weatheria',
        description: 'Weatheria is a user-friendly weather application built using React.js and Tailwind CSS, providing users with up-to-date weather information in a sleek and intuitive interface. With Weathery, users can quickly access current weather conditions, including temperature, humidity, wind speed, and atmospheric pressure, for any location worldwide.',
        technologies: ['ReactJS', 'ReduxJS', 'NodeJS', 'Restful API', 'MongoDB'],
        github: 'https://github.com/DILJITHKRISHNA/Viscan-Task-backend',
        frontend: 'https://github.com/DILJITHKRISHNA/Viscan-Task-frontend',
    },
];

const Projects = () => {
    return (
        <div className="project-side p-4">
            <div className="flex justify-start items-center flex-row gap-2 mt-10 sm:p-10 p-2 mb-10">
                <h1 className="text-[#aaaaaa] font-mono text-2xl">PROJECTS</h1>
                <div className="border border-b border-[#34d399] w-[10rem] sm:mr-10 mr-4"></div>
            </div>
            <div className="flex flex-wrap justify-around gap-10 sm:px-10 px-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#09090b] w-full max-w-[20rem] sm:max-w-[30rem] h-auto mx-auto p-4 sm:p-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-xl text-[#34d399]">{project.name}</h1>
                            <p className="text-[#aaaaaa] font-medium">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="text-white px-4 py-1 bg-green-500 bg-opacity-10 border hover:border-green-300 rounded-full font-semibold border-[#34d399]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-5 mt-5 font-medium">
                            <a href={project.github} className="flex items-center gap-2 text-[#34d399] text-opacity-60 hover:text-opacity-100 transition">
                                <FaGithub />
                                <p>View Project</p>
                            </a>
                            {project.live && (
                                <a href={project.live} className="flex items-center gap-2 text-[#34d399] text-opacity-60 hover:text-opacity-100 transition">
                                    <FiLink2 />
                                    <p>Live</p>
                                </a>
                            )}
                            {project.frontend && (
                                <a href={project.frontend} className="flex items-center gap-2 text-[#34d399] text-opacity-60 hover:text-opacity-100 transition">
                                    <FaGithub />
                                    <p>Frontend</p>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
