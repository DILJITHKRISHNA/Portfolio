import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import MyImg from '../../assets/Images/MyImg.jpg'

const About = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:gap-0 gap-10 mt-2 items-center sm:items-start">
            <motion.img
                src={MyImg}
                alt="Image"
                className="sm:w-[20rem] w-[15rem] rounded-full sm:ml-[6rem] ml-0 sm:mt-0 mt-10 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />
            <div className="flex flex-col sm:ml-[8rem] sm:items-start items-center">
                <motion.div
                    className="p-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-xl mb-2 text-[#34d399] font-extrabold text-center sm:text-left">MERN STACK DEVELOPER</h1>
                    <div className="border border-[#aaaaaa] rounded-xl p-6 bg-[#09090b] shadow-lg">
                        <p className="text-[#aaaaaa] font-medium font-sans text-center sm:text-left">
                            Hey there! I'm Diljith Krishna, a dynamic force in the world of web development,
                            specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. With a creative
                            mindset and a knack for problem-solving, I'm passionate about crafting immersive digital
                            experiences that leave a lasting impression.
                        </p>
                    </div>
                </motion.div>
                <div className="sm:ml-[1rem] pt-8 max-w-full w-auto">
                    <div className="border-b border-[#aaaaaa] opacity-50 w-full"></div>
                    <motion.div
                        className="flex items-center gap-2 mt-1 ml-0 sm:ml-0 p-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <IoIosMail className="text-[#aaaaaa] opacity-45 w-8 h-8" />
                        <a href="mailto:diljithkrishna327@gmail.com" className='font-medium text-lg sm:text-xl text-gray-700 hover:text-[#34d399] transition-colors'>diljithkrishna327@gmail.com</a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
