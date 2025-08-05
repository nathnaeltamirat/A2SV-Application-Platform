import React from 'react'

const BodyThree = () => {
  return (
    <div className='h-[60vh] flex flex-row items-center text-black ' style = {{backgroundColor : 'rgb(243, 244, 246)'}}>
      <div className='flex flex-col pl-[250px] w-[750px]'>
        <div className='text-4xl font-bold'>Built by Engineers, for Engineers</div>
        <div className='pt-4 text-gray-500'>
            A2SV is not just a program; it's a community.We're on a mission to
            identify Africa's most brilliant minds and provide them with the 
            resources,mentorship, and opportunities to solve humanity's
            greatest challenges.
        </div>
      </div>
      <div className='pl-[30px]'>
        <img src="/Images/image-43.webp" className='h-[300px] w-[450px] rounded-2xl' alt="" />
      </div>
    </div>
  )
}

export default BodyThree
