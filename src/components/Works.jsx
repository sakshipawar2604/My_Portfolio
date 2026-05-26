import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { FaGithub } from 'react-icons/fa';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  points,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className='w-full h-full flex'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col shadow-card border border-white/5'
      >
        <div className='green-pink-gradient p-[2px] rounded-2xl shadow-2xl shrink-0 w-full'>
          <div className='bg-black-100 rounded-2xl p-2 w-full flex items-center justify-center min-h-[240px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-auto max-h-[360px] object-contain rounded-xl contrast-[1.1] brightness-[1.08] saturate-[1.05]'
            />
          </div>
        </div>

        <div className='mt-5 flex-1 flex flex-col min-h-0'>
          <h3 className='text-white font-bold text-[20px] leading-snug line-clamp-2 min-h-[3.25rem]'>
            {name}
          </h3>
          {points ? (
            <ul className='mt-2 flex-1 flex flex-col gap-1.5 list-none min-h-[200px]'>
              {points.map((point, i) => (
                <li
                  key={`${name}-point-${i}`}
                  className='flex flex-1 gap-2 text-secondary text-[12px] leading-[1.4] text-justify'
                >
                  <span className='text-[#915EFF] font-bold shrink-0 leading-[1.45]'>
                    •
                  </span>
                  <span className='flex-1'>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className='mt-2 text-secondary text-[14px] leading-relaxed min-h-[4.75rem]'>
              {description}
            </p>
          )}
        </div>

        <div className='mt-auto pt-4 shrink-0'>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {source_code_link && source_code_link !== 'https://github.com/' && (
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 flex items-center justify-center gap-2 text-white text-[14px] font-semibold hover:text-[#915EFF] transition-colors'
            >
              <FaGithub className='w-5 h-5' />
              View on GitHub
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[16px] w-full max-w-none leading-[28px] text-justify'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 items-stretch'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');
