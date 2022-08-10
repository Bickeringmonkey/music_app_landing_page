import {React, useState } from 'react'
import DownloadAds from '../downloadAds/DownloadAds';
import VisibilitySensor from 'react-visibility-sensor';
import {motion} from 'framer-motion';

import BackGraphic from '../img/backgraphics.png';
import P1 from '../img/p 1.png';
import P2 from '../img/p 2.png';
import P3 from '../img/p 3.png';
import P4 from '../img/p 4.png';


function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false)
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  }
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
    onChange={(isVisible)=>setElementIsVisible(isVisible)}
    minTopValue={300}
    >
    <div className='wrapper bg-[#081730] flex items-center justify-between
     px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]'>
        <div className='headings flex flex-col items-start justify-center h-[100%]
         text-[3rem]'>
            <span>Experience The</span>
            <span>
                <b>Best Quality Music</b>
            </span>
            <span className='text-[15px] text-[#525D6E]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <div>
                <span className='text-[13px]'>Download now on IOS and Android</span>
                <DownloadAds />
            </div>
        </div>
        <div className='images relative w-[50%]'>
            <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{duration:1, type:"ease-out"}}
            src={BackGraphic}
            alt=''
            className='mockup absolute top-[-8rem] left-[19rem]'
            />
            <img
            src={P1}
            alt=''
            className='absolute top-[-15rem] h-[34rem] left-[13rem]'
            />
            <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{duration:1, type:"ease-out"}}
            src={P2}
            alt=''
            className='absolute left-[235px] top-[94px] w-[175px]'
            />
            <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{duration:1, type:"ease-out"}}
            src={P3}
            alt=''
            className='absolute w-[5rem] left-[13rem] top-[12rem]'
            />
            <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{duration:1, type:"ease-out"}}
            src={P4}
            alt=''
            className='absolute w-[5rem] left-[12.5rem] top-[12rem]'
            />
        </div>
    </div>
    </VisibilitySensor>
  )
}

export default Hero