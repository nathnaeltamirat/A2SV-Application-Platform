import React from 'react'

const BodyFour = () => {
  return (
    <div className='h-[60vh]' style={{background : 'rgb(249, 250, 251)'}}>
      <div className='text-3xl font-bold text-black pt-12 pl-[600px]'>Hear From Our Alumni</div>
      <div className='flex flex-row pl-[350px] pt-14 not-visited:space-x-6'>
        <div className='h-[230px] w-[300px] border-white shadow-2xl shadow-gray-300 bg-white rounded-[7px]'>
            <div className='pl-[20px] pt-[40px] pr-[20px] font-light text-[14px] text-gray-500 h-[150px]'>
                "A2SV completely changed the trajectory of my career. The training is insane, but the community 
                and the opportunities are unparalleled. I'm now at my dream company, and I owe it all to A2SV."
            </div>
            <div className='text-black flex flex-row space-x-3 pl-[20px] pt-[20px]'>
                <div><img className='rounded-full h-[40px] w-[40px] object-cover 'src="/Images/person1.jpeg" alt="" /></div>
                <div>
                    <div className='text-[14px]'>Abel Tadesse</div>
                    <div className='text-gray-500 text-[13px]' >Software Engineer,Google</div>
                </div>
            </div>
        </div>
        <div className='pl-[20px] pr-[20px] pt-[40px] h-[230px] w-[300px] text-[14px] border-white shadow-2xl shadow-gray-300 bg-white rounded-[7px]'>
            <div className=' font-light text-[14px] text-gray-500 h-[100px]'>
                "The problem-solving skills I learned at A2SV are invaluable. The mentors push you to be your best, 
                and you're surrounded by people who are just as passionate as you are."
            </div>
            <div className='text-black flex flex-row space-x-3 pl-[20px] pt-[20px]'>
                <div><img className='rounded-full h-[40px] object-cover w-[40px]' src="/Images/person2.jpeg" alt="" /></div>
                <div>
                    <div className='text-[14px]'>Bethlem Tadesse</div>
                    <div className='text-gray-500 text-[13px]'>Software Engineer,Amazon</div>
                </div>
            </div>
        </div>
        <div className='pl-[20px] pr-[20px] pt-[40px] h-[230px] w-[300px] text-[14px] border-white shadow-2xl shadow-gray-300 bg-white rounded-[7px]'>
            <div className=' font-light text-[14px] text-gray-500 h-[100px]'>
                "A2SV is more than a bootcamp. It's a family that supports you long after youve graduated. 
                The network you build here is for life."
            </div>
            <div className='text-black flex flex-row space-x-3 pl-[20px] pt-[20px]'>
                <div><img className='rounded-full h-[40px] object-cover w-[40px] ' src="/Images/person3.jpg" alt="" /></div>
                <div>
                    <div className='text-[14px]'>Caleb Alemayehu</div>
                    <div className='text-gray-500 text-[13px]'>Software Engineer,Palantir</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BodyFour
