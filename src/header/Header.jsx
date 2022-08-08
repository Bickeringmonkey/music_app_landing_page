import React from 'react'
import CenterMenu from '../centermenu/CenterMenu';

import MusicLogo from '../img/MuzicLogo.png';

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[6px]'
  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem]
     pt-[2.4rem] text-[0.8rem]'>
        <img src={MusicLogo} alt='' 
        className='logo w-[42px] h-[42px]'/>
        <CenterMenu />
        <div className='buttons flex'>
            <button className={`mr-[35px] hover:bg-[#232A4E] ` +buttonStyle}>Sign up</button>
            <button className={buttonStyle+` bg-[#232A4E]`}>Log in</button>
        </div>
    </div>
  )
}

export default Header