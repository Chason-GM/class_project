import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

// animated timeline
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { argcon } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'



const contentMap = {
  "Attendance": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      I <span className="text-green-600 font-bold">attend</span> every class (except for the first one), not because there is no attendance
      <span className="text-yellow-600 font-bold"> requirements</span>, but because I genuinely want to <span className="text-green-600 font-bold">learn</span> every lesson.
      For me, learning is about actively engaging with the <span className="text-blue-500 font-bold">material</span>, gaining new perspectives,
      and <span className="text-red-600 font-bold">challenging</span> my understanding. I believe that being present in class allows me to absorb
      knowledge more effectively, ask questions in my <span className="text-red-600 font-bold">HEAD</span>, and deepen my critical thinking skills.
      The backed evidence of this is you see me every class.
    </span>
  ),
  "Discipline": (
    <span className="mt-5 space-y-2 text-[#f3f3f3] tracking-wider">
      I always arrive <span className="text-blue-500 font-bold">early </span>
      to class because I have the discipline of waking up at <span className="text-orange-600 font-bold">4:00 </span>
      am every single day. This makes it <span className="text-green-600 font-bold">easy </span>
      for me to be on time. While waiting for teacher, I usually spend time <span className="text-red-600 font-bold">self-studying</span>,
      working on homework or projects, or playing online chess. The backed evidence of this is you see me everytime before class.
    </span>
  ),
  "Pay Attention": (
    <span>
      I always pay close <span className="text-red-600 font-bold">attention</span> to the teacher and rarely use my phone unless it's to note down
      <span className="text-pink-400 font-bold"> keywords</span> from the class. I usually prefer <span className="text-red-600 font-bold">not</span> to take notes during the lecture, as I believe that
      actively listening, thinking critically, and questioning the content in the real-time is <span className="text-blue-500 font-bold">sufficient</span>.
      If needed, I take notes after class to help recall my thought process. The backed evidence of this is you see me paying attention in every class.
    </span>
  ),
  "Urban Zombie Apocalypse": (
    <span>
      I always put significant <span className="text-blue-500 font-bold">effort</span> into every project or classwork, especially this final project.
      For example, the <span className="text-green-700 font-bold">"Urban Zombie Apocalypse"</span> homework took me around <span className="text-orange-600 font-bold">6</span> hours
      to brainstorm multiple plans, merge them into a single,
      solid <span className="text-green-400 font-bold">Plan A</span>,
      and design the slides. Even though the slides contained a lot of text,
      I wanted to thoroughly explain the <span className="text-red-600 font-bold">reasoning</span> behind selecting or rejecting certain items,
      as well as the overall plan. I also used <span className="text-blue-500 font-bold">counterexamples</span> to <span className="text-red-600 font-bold">challenge</span> and adjust the plan until
      it felt as reasonable as possible. The backed evidence of this is the project in the google classroom.
    </span>
  ),
  "The Evergreen High Mystery": (
    <span>
      I Dedicating a lot of time to the midterm exam,
      <span className="text-green-600 font-bold">"The Evergreen High Mystery"</span>, even
      though I still don’t fully understand the <span className="text-green-600 font-bold">truth</span>,
      and many <span className="text-purple-500 font-bold">components</span>&nbsp;
      didn’t seem to add up. I spent <span className="text-orange-600 font-bold">hours</span>&nbsp;
      discussing with a friend, <span className="text-blue-500 font-bold">questioning</span>&nbsp;
      whether my assumptions were <span className="text-green-600 font-bold">correct</span>.
      I also designed detailed slides, including a timeline, evidence, hypotheses, and conclusions,
      while applying <span className="text-red-600 font-bold">critical thinking</span> throughout the process.
      In the end, I trusted my friend to record and present the video (choosing not to watch it because I trust in his abilities).
      The backed evidence of this is the project in the google classroom.

    </span>
  ),
  "This 3D Website": (
    <span>
      This <span className="text-red-600 font-bold">final </span>3D Object Movable Web project took me about <span className="text-orange-600 font-bold">43</span> hours which is over <span className="text-orange-600 font-bold">5</span> days continuously doing this <span className="text-blue-500 font-bold">(used a timer)</span> while also
      managing my time for upcoming exams in other subjects. I chose to take on this <span className="text-red-600 font-bold">challenge</span> to
      <span className="text-green-600 font-bold"> revive</span> an old project and <span className="text-blue-500 font-bold">refresh</span> my skills in modifying it. Throughout the process, I faced
      many difficulties, including numerous <span className="text-red-600 font-bold">RED ERROR</span>s, <span className="text-yellow-600 font-bold">WARNING</span>s, and the pressure of other project
      and exam <span className="text-red-600 font-bold">DEADLINE</span>s approaching. Despite the challenges, I have no regrets. I believe this <span className="text-green-600 font-bold">experience </span>
      was the best way for me to develop my thought process, as well as my <span className="text-red-600 font-bold">critical</span> and creative thinking
      skills. The backed evidence of this is what you are viewing right now.
    </span>
  )

};

// Dynamically add content to args


const args = argcon.map((exp) => ({
  ...exp,
  content: contentMap[exp.title] || <p>No content available.</p>,
}));

const ArgumentCard = ({ arg }) => {
  return (<VerticalTimelineElement // create structure
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={arg.date}
    iconStyle={{ background: arg.iconBg }}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img
        src={arg.icon}
        alt={arg.company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {arg.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {arg.subtitle}
      </p>
      <p className='mt-[5px] '>
        {arg.content}
      </p>
    </div>
  </VerticalTimelineElement>)
}
const Argument = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Argument and Evidence</h2>
        <p className={`${styles.sectionSubText} text-center`}>Showing arguments backed by evidence</p>

      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            args.map((arg, index) => (
              <ArgumentCard key={index} arg={arg}/>


            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Argument, "argument")