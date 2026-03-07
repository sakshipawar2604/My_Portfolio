import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className='text-white font-black lg:text-[64px] sm:text-[52px] xs:text-[44px] text-[40px] lg:leading-[72px] mt-2'>
            Hi, I'm <span className='text-[#915EFF]'>Sakshi Pawar</span>
          </h1>
          <p className='text-[#dfd9ff] font-medium lg:text-[22px] sm:text-[18px] xs:text-[16px] text-[15px] lg:leading-[34px] mt-3 max-w-[600px]'>
            Software Engineer focused on full-stack development,
            <br className='sm:block hidden' />
            cloud systems, and applied AI/ML solutions
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
