import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import ContactMe from './ContactMe';
import './Home.css'

const Home = () => {
    const useScrollAnimation = () => {
        const controls = useAnimation();
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        });

        useEffect(() => {
            if (inView) {
                controls.start('visible');
            }
        }, [controls, inView]);

        return [ref, controls];
    };

    const [aboutRef, aboutControls] = useScrollAnimation();
    const [projectsRef, projectsControls] = useScrollAnimation();
    const [educationRef, educationControls] = useScrollAnimation();
    const [skillsRef, skillsControls] = useScrollAnimation();
    const [contactRef, contactControls] = useScrollAnimation();

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (

        <div className='bg-black max-w-screen'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
            >

                <div className='flex items-end justify-end opacity-100'>
                    <a
                        href="public/DiljithKrishna's_Resume.pdf"
                        download
                        className="mt-6 text-white px-4 py-1 mr-4 bg-green-500 
        bg-opacity-10 border hover:border-green-300 rounded-md font-semibold border-[#34d399] 
        transition-transform duration-500 transform hover:scale-110"
                    >
                        RESUME ↓
                    </a>
                </div>

            </motion.div>
            <div className="min-h-screen bg-black text-white font-sans">
                <header className="max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                        }}
                    >
                        <h1 className="text-2xl font-semibold font-sans">HEY I'M</h1>
                        <h2 className="text-5xl mb-7 font-extrabold">Diljith Krishna</h2>
                        <p className="mt-4 text-sm max-w-4xl font-medium font-sans text-[#aaaaaa]">
                            Passionate MERN Stack Developer driven by a relentless pursuit of crafting high-quality, scalable
                            web solutions. With an innate curiosity and over 1.6 years of hands-on experience, I thrive in
                            dynamic, fast-paced environments. My strengths lie in my ability to efficiently utilize Express,
                            MongoDB, React, and Node.js to create dynamic and responsive web applications.
                        </p>
                        <div className="mt-10 flex space-x-4">
                            <motion.a
                                href="https://github.com/DILJITHKRISHNA?tab=repositories"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="text-2xl transition-transform duration-500 transform hover:scale-110 hover:text-[#34d399]"
                            >
                                <i className="fab fa-github"></i>
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/diljith.krishna_/"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="text-2xl transition-transform duration-500 transform hover:scale-110 hover:text-[#34d399]"
                            >
                                <i className="fab fa-instagram"></i>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/diljith-krishna-952a822b4/"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="text-2xl transition-transform duration-500 transform hover:scale-110 hover:text-[#34d399]"
                            >
                                <i className="fab fa-linkedin"></i>
                            </motion.a>
                        </div>
                    </motion.div>
                </header>

                <motion.div ref={aboutRef} initial="hidden" animate={aboutControls} variants={sectionVariants}>
                    <About />
                </motion.div>

                <motion.div ref={projectsRef} initial="hidden" animate={projectsControls} variants={sectionVariants}>
                    <Projects />
                </motion.div>

                <motion.div ref={educationRef} initial="hidden" animate={educationControls} variants={sectionVariants}>
                    <Education />
                </motion.div>

                <motion.div ref={skillsRef} initial="hidden" animate={skillsControls} variants={sectionVariants}>
                    <Skills />
                </motion.div>

                <motion.div ref={contactRef} initial="hidden" animate={contactControls} variants={sectionVariants}>
                    <ContactMe />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
