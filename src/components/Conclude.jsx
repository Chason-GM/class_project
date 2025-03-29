import React from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { SunCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {


    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'

            // className="mt-[300px]"
            >
                <h2 className={`${styles.sectionHeadText}`}>Conclusion</h2>
                {/* <p className={`${styles.sectionSubText} `}>overall</p> */}
                <div className='mt-5 text-secondary text-[17px] max-w-4xl leading-[30px]'>
                    After dedicating <span className=" text-orange-600 font-bold">days</span> and <span className=" text-yellow-600 font-bold">hours</span> to this project, I’ve spent a significant amount of time researching models, learning tools, frameworks, and techniques from <span className=" text-red-600 font-bold">Youtube</span>, and <span className=" text-green-500 font-bold">reviving</span> an old project from nearly <span className=" text-white font-bold">two</span> years ago. This involved troubleshooting version compatibility issues, adjusting dependencies, and carefully outlining and designing the project. I clearly explain my <span className=" text-blue-500 font-bold">thought</span> process and <span className=" text-red-600 font-bold">challenges</span> across various sections of the website. Additionally, I invested more time searching for suitable <span className=" text-orange-600 font-bold">3D</span> models, <span className=" text-pink-400 font-bold">music</span>, and continuously fixing numerous <span className=" text-red-600 font-bold">errors</span> over and over, making adjustments until everything came together perfectly in the end. It's not just me <span className=" text-green-500 font-bold">reviving</span> this project, this project is also <span className=" text-green-500 font-bold">reviving</span> me, rekindling my <span className=" text-purple-500 font-bold">passion</span> for web development and bringing me back to the craft. Also I’ve decided not to include a recording because, in my view, if the quality of the work is strong enough, there’s no need for a presenter narrating over it. The project should be able to speak for itself.
                </div>
            </motion.div>
            {/* <div className='w-full flex mt-[30px]'>
                <motion.p
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
                >
                </motion.p>
            </div> */}

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <SunCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
