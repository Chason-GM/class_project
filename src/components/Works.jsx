import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My Creativity</h2>
        <p className={`${styles.sectionSubText} `}>explanation of thought</p>

      </motion.div>

      <div className='w-full flex mt-[30px]'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          I chose <span className=" text-blue-400 font-bold">"a relaxing jazz saxophone music"</span> because I believe that when we're working on something, listening to calm jazz music can be incredibly soothing and inspiring. Although I usually prefer not to listen to anything while working, but <span className=" text-pink-400 font-bold">jazz</span> you know is just an exception. in my opinion It gives off this <span className=" text-purple-600 font-bold">classic</span> detective  vibe, like sitting at a desk, deep in thought, solving <span className="text-yellow-500 font-bold">mystery</span> cases. That’s why I searched for a <span className="text-red-600 font-bold">"detective desk model"</span> and it fits the theme perfectly. like Imagine using critical thinking to crack a fictional murder case, which I thought would align well with the theme of the <span className="text-red-600 font-bold">Critical Thinking</span>’s class. And logo as a cat representing "C" from my name <span className="font-bold text-white">"Check"</span>

        </motion.p>
      </div>



      {/* <motion.div variants={textVariant()}
        className="mt-[300px]"
      >
        <h2 className={`${styles.sectionHeadText}`}>Conclusion</h2>
        <p className={`${styles.sectionSubText} `}>overall</p>
      </motion.div>

      <div className='w-full flex mt-[30px]'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          After dedicating countless days and hours to this project, I’ve spent a significant amount of time researching models, learning tools, frameworks, and techniques from YouTube, and reviving an old project from nearly two years ago. This involved troubleshooting version compatibility issues, adjusting dependencies, and carefully outlining and designing the project. I clearly explain my thought process and challenges across various sections of the website. Additionally, I invested a lot of time searching for suitable 3D models, music, and continuously fixing numerous import errors, making adjustments until everything came together perfectly in the end. It's not just me reviving this project—this project is also reviving me, rekindling my passion for web development and bringing me back to the craft.
        </motion.p>
      </div> */}









    </>
  );
};

export default SectionWrapper(Works, "conclusion");