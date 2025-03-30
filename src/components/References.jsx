import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";


const ProjectCard = ({
  index,
  name,
  description,
  author,
  image,
  source_code_link,
  imgSource,
  bg
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => window.open(source_code_link, "_blank")}
      className="cursor-pointer"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'
        // onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={`${bg} w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
            >
              <img
                src={imgSource}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'> <span className="text-yellow-500 font-bold">Description:</span> {description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          <p className={`text-[14px]`}>
            Author: <span className="text-green-600 font-bold">{author}</span>
          </p>

        </div>
      </Tilt>
    </motion.div>
  );
};

const References = () => {
  return (
    <>
      <motion.div variants={textVariant()}
        className="mt-[300px]"
      >
        <h2 className={`${styles.sectionHeadText}`}>References</h2>
        <p className={`${styles.sectionSubText} `}>Big Thanks (click to navigate)</p>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-[20px] text-white text-lg font-medium">
        Big Thanks to{" "}
        <span className="text-pink-400 font-bold">Fame</span>,{" "}
        <span className="text-red-400 font-bold">Love</span>,{" "}
        <span className="text-yellow-400 font-bold">Nene</span>,{" "}
        <span className="text-green-400 font-bold">New</span>,{" "}
        <span className="text-blue-400 font-bold">Prin</span>,{" "}
        <span className="text-purple-400 font-bold">Scale</span>,{" "}
        <span className="text-teal-400 font-bold">Vic</span>, and{" "}
        <span className="text-orange-400 font-bold">Yorch</span> for training images
      </div>
    </>
  );
};

export default SectionWrapper(References, "");