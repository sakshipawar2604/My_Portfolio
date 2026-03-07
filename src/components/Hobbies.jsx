import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { activities } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Leadership & Achievements</p>
        <h2 className={styles.sectionHeadText}>Activities & Honors</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        A few highlights from leadership roles and recognitions that reflect my
        impact beyond core engineering work.
      </motion.p>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            className='bg-tertiary rounded-[20px] p-6 shadow-card'
          >
            <h3 className='text-white text-[18px] font-bold'>
              {activity.title}
            </h3>
            <p className='mt-2 text-secondary text-[15px] leading-[26px]'>
              {activity.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, '');
