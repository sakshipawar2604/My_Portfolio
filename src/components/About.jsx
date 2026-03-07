import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
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
      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div> */}

      <h1 className='text-white font-black lg:text-[52px] sm:text-[44px] xs:text-[38px] text-[34px] lg:leading-[60px] mt-10'>
        Hi, I'm <span className='text-[#915EFF]'>Sakshi Pawar</span>
      </h1>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[16px] w-full max-w-none leading-[28px] text-justify'
      >
        I&apos;m an M.S. Computer Science student at the University of Texas at
        Arlington building high-performance, cloud-native applications across
        React, TypeScript, Spring Boot, Python, and AWS. I focus on measurable
        impact — optimizing latency, improving reliability, and shipping systems
        that scale in production. My core strengths lie in building
        high-performance user interfaces and designing scalable backend
        services. I focus on creating reliable APIs, optimizing database
        performance through efficient querying and indexing strategies, and
        improving overall system responsiveness. I have hands-on experience
        deploying and monitoring applications in live production environments,
        managing secure access controls, and troubleshooting issues through
        structured log analysis. I continue to deepen my expertise in
        containerization and modern, cloud-native architectures.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-6 items-start justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
