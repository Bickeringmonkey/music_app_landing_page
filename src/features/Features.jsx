import React from 'react'

function Features({icon, title}) {
  return (
    <div className='feature flex items-center justify-center flex-col relative text-center mx-12'>
        <div className='icon bg-[#081730] rounded-2xl p-4'>
            <img 
            src={require(`../img/${icon}.png`)}
            alt=''
            className='w-[3rem]'
            />
        </div>
        <span className='mt-5'>{title}</span>
        <span className='text-[#707070] mt-4'>
        wefwrferjgoetkgorkthpprtkhpelrgpkrgperkgperkfpwkrfpwkvpwv,
        ewjfiwejfer wejfierjfer wjefpwjfpwejf
        </span>
        <span className='text-[#E600FF] underline mt-[3rem] hover:cursor-pointer'>Learn More</span>
    </div>
  )
}

export default Features