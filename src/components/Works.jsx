import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import RocketCanvas from "./canvas/Rocket";

const Works = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left side with objectives text */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}

        className="flex-[0.75] bg-black-100 p-10 py-19 rounded-2xl"
      >
        <h2 className={styles.sectionHeadText}>Objectives</h2>

        <div className="mt-5 text-secondary text-[17px] max-w-4xl leading-[30px]">
          <ul>
            <li>
              1. To learn and implement the concept that we study in class into a real project.
            </li>
            <li>
              2. To deploy a predictive model into real-world scenarios and utilize it.
            </li>
            <li>3. To enhance the model performance.</li>
            <li>4. To explore ethical and security aspects of face recognition.</li>
            <li>5. To enhance teamwork, problem-solving, and presentation skills.</li>
          </ul>
        </div>
      </motion.div>

      {/* Right side with RocketCanvas */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}

        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <RocketCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "objective");
