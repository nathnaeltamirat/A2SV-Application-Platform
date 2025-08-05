import React from 'react'
import ApplyNow from './ApplyNow'

const BodyFive = () => {
  return (
    <div className='h-[40vh] flex flex-col items-center justify-center text-center px-4' style={{ background: 'rgb(67, 56, 202)' }}>
      <div>
        <div className='font-extrabold text-3xl pt-[10px] text-white'>
          Ready to change your Life?
        </div>
        <div className='font-extralight  pt-[20px] max-w-[470px] mx-auto' style={{color : 'rgb(199, 210, 254)'}}>
          The next Application cycle is now open. Take the first step towards <span className="font-medium">your dream career</span>.
        </div>
        <div className='pt-7'>
          <ApplyNow/>
        </div>
      </div>
    </div>
  )
}

export default BodyFive
