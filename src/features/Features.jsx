import {React, useState } from 'react';
import {motion} from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

function Features({icon, title}) {
  const variant = {
    true: {
      transform: 'scale(1)',
    },
    false: {
      tranform: 'scale(0)',
    }
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);
  return (
    <VisibilitySensor
    onChange={(isVisible) => setElementIsVisible(isVisible)}
    >
    <div className='feature flex items-center justify-center flex-col relative text-center mx-12'>
        <motion.div 
        variants={variant}
        transition={{duration: 1, type: 'ease-out'}}
        animate={`${elementIsVisible}`}
        className='icon bg-[#081730] rounded-2xl p-4'>
            <img 
            src={require(`../img/${icon}.png`)}
            alt=''
            className='w-[3rem]'
            />
        </motion.div>
        <span className='mt-5'>{title}</span>
        <span className='text-[#707070] mt-4'>
        wefwrferjgoetkgorkthpprtkhpelrgpkrgperkgperkfpwkrfpwkvpwv,
        ewjfiwejfer wejfierjfer wjefpwjfpwejf
        </span>
        <span className='text-[#E600FF] underline mt-[3rem] hover:cursor-pointer'>Learn More</span>
    </div>
    </VisibilitySensor>
  )
}

export default Features