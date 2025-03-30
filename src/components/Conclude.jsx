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
                <div className="mt-5 text-secondary text-[17px] max-w-4xl leading-[30px]">
                    In this project, we successfully developed a
                    <span className="text-blue-400 font-semibold"> face recognition model </span>
                    using
                    <span className="text-yellow-400 font-semibold"> MobileNetV2 </span>
                    with
                    <span className="text-green-400 font-semibold"> high accuracy</span>. Through careful
                    <span className="text-purple-400 font-semibold"> dataset preparation</span>,
                    <span className="text-purple-400 font-semibold"> augmentation</span>, and
                    <span className="text-purple-400 font-semibold"> model fine-tuning</span>, our model was able to
                    <span className="text-pink-400 font-semibold"> effectively distinguish between different individuals</span>. The results showed that our approach was
                    <span className="text-green-400 font-semibold"> highly effective</span>, achieving
                    <span className="text-green-400 font-semibold"> excellent performance</span> on both training and validation data.
                    <br /><br />
                    However, this achievement did not come easily. The process involved
                    <span className="text-orange-400 font-semibold"> days of continuous effort</span>, from dealing with
                    <span className="text-red-400 font-semibold"> data conversion challenges</span> to
                    <span className="text-red-400 font-semibold"> debugging complex issues</span> in model training. There were
                    <span className="text-red-300 font-semibold"> moments of frustration</span>, especially when things didn’t work as expected, but
                    <span className="text-green-400 font-semibold"> overcoming these obstacles</span> made the success even more rewarding.
                    <span className="text-blue-400 font-semibold"> This project was not just about building a model</span>—it was a test of
                    <span className="text-yellow-300 font-semibold"> patience</span>,
                    <span className="text-yellow-300 font-semibold"> problem-solving</span>, and
                    <span className="text-yellow-300 font-semibold"> determination</span>.
                    <br /><br />
                    In the end, the experience of working on such a challenging task was
                    <span className="text-green-300 font-semibold"> invaluable</span>. It reinforced the importance of
                    <span className="text-pink-300 font-semibold"> persistence</span> and
                    <span className="text-pink-300 font-semibold"> continuous learning</span> in machine learning and deep learning. While the journey was tough, the results proved that
                    <span className="text-green-400 font-semibold"> hard work and dedication truly pay off</span>.
                    <span className="text-blue-400 font-semibold"> It would be really nice if I could add everyone in KDAI and use this on the 7th floor.</span>
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

export default SectionWrapper(Contact, "conclusion");
