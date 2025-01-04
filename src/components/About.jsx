import React from 'react'
import { Tilt } from 'react-tilt';
import{ motion, spring } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Indroduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    As a passionate software developer and Android developer, I am a graduate of Dr. APJ Abdul Kalam Technical University with a strong foundation in Java, Data Structures, and Algorithms (DSA). Over the course of my academic journey, I have actively worked on solving 250+ problems on Leetcode, sharpening my problem-solving skills and focusing on time and space optimization.

I am particularly interested in building efficient and scalable applications, with experience in both Android development and backend technologies. My expertise in Java has enabled me to work on various projects, from implementing core algorithms to designing user-friendly mobile apps.

I am committed to continuous learning and am constantly exploring new technologies and frameworks to enhance my skill set. As I look for new opportunities, I am eager to collaborate in dynamic environments where I can contribute to innovative solutions and grow as a developer.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
       <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")