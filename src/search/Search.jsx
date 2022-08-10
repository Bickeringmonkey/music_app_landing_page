import { React, useState } from 'react'
import MusicPlayer from '../musicPlayer/MusicPlayer';
import {motion} from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

import BackGround from '../img/backgraphics.png';
import D1 from '../img/d1.png';
import D2 from '../img/d2.png';
import D3 from '../img/d3.png';
import D4 from '../img/d4.png';
import SearchIcon from '../img/search.png'; 
import Path318 from '../img/Path 318.png';

function Search() {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
          left: "-44rem",
        },
        false: {
          left: "-50rem",
        },
      };
      const redimg = {
        true: {
          left: "18rem",
        },
        false: {
          left: "16rem",
        },
      };
      const musicimg = {
        true: {
          left: "2rem",
        },
        false: {
          left: "6rem",
        },
      };
  return (
    <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] 
    mt-[-15rem] flex items-center justify-between rounded-b-[5rem]'>
        <div className='left flex-1'>
            <motion.img 
                variants={bg}
                animate={`${elementIsVisible}`}
                transition={{
                duration: 1,
                type: "ease-out",
                }}
                src={BackGround}
                alt=''
                className='absolute top-[16.5rem] left-[-70rem]'
            />
            <img 
                src={D1}
                alt=''
                className='absolute w-[16rem] top-[26rem]'
            />
            <img 
                src={D2}
                alt=''
                className='absolute w-[9rem] top-[32.7rem] left-[7rem]'
            />
            <motion.img 
                variants={redimg}
                animate={`${elementIsVisible}`}
                transition={{
                duration: 1.2,
                type: "ease-out",
                }}
                src={D3}
                alt=''
                className='absolute w-[9rem] top-[33rem] left-[17rem]'
            />
            <motion.img 
                variants={musicimg}
                animate={`${elementIsVisible}`}
                transition={{
                duration: 1,
                type: "ease-out",
                }}
                src={D4}
                alt=''
                className='absolute w-[17rem] top-[50rem] left-[2rem]'
            />
        </div>
        <div className='right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]'>
            <div className='searchbar flex justify-start w-[100%] z-[2]'>
                <input 
                    type="text"
                    placeholder="Enter keyword or URL"
                    className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'
                />
                <div className='searchIcon flex flex-1 items-center rounded-xl ml-4 
                bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]'>
                    <img 
                        src={SearchIcon}
                        alt=""
                        className='w-[1.5rem]'
                    />
                </div>
            </div>
            <div className='tild flex z-[1] justify-start mt-7 items-center w-[100%]'>
                <img 
                    src={Path318}
                    alt=""
                    className='w-[5rem]'
                />
            </div>
            <div className='detail z-[1] flex flex-col mt-5 text-4xl'>
                <span>Search Music By</span>
                <span>
                    <b>Name or Direct URL</b>
                </span>
                <span className='text-sm mt-3 text-[#4D586A]'>
                    sdfmkenfkermgknt. epfjregoehrtght, ewegfwhfwuehfwiehfwiehfwie
                    <br /> hewbfywebfwb wegfwegfwuiegfuwegf gweigwudhhdhwdiohqwid <br />
                    ewfbweufb wefwef ewfhwegfuwe.
                </span>
            </div>
            <VisibilitySensor
            onChange={(isVisible) => setElementIsVisible(isVisible)}
            >
            <MusicPlayer />
            </VisibilitySensor>
        </div>
    </div>
  )
}

export default Search