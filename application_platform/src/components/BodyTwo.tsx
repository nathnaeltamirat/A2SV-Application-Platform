'use client'
import React from 'react'
const BodyTwo = () => {
  return (
    <>
        <div className='h-[60vh] flex flex-col items-center bg-white text-black'>
            <div className='pt-20'> 
                <div className='font-bold text-3xl'>Your Journey to Silcon Valley</div>
                <div className='font-light text-[16px] pt-4 text-gray-500 pl-20'>A proven path from Learning to Leadership</div>
            </div>
            <div className='pt-14 flex flex-row space-x-5'>
                <div className='flex flex-row space-x-4'>
                    <div><img src='/images/download.svg' alt="Your Icon" width={40} height={40} /></div>
                    <div className='w-[200px]'>
                        <div className='font-bold'>Phase 1: Foundations</div>
                        <div className='text-gray-500 pt-3'>
                            Master Data Structures, 
                            algorithms and problem-
                            solving techniques in an
                            intensive 3-month
                            bootcamp
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div><img src='/images/download2.svg' alt="Your Icon" width={40} height={40} /></div>
                    <div className='w-[200px]'>
                        <div className='font-bold'>Phase 2: Real-World Projects</div>
                        <div className='text-gray-500  pt-3'>
                            Apply your skills to build
                            complex Projects,
                            collaborate in team, and
                            prepare for technical 
                            interviews
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div><img src='/images/download3.svg' alt="Your Icon" width={40} height={40} /></div>
                    <div className='w-[200px]'>
                        <div className='font-bold'>Phase 3: Internship Placement</div>
                        <div className='text-gray-500  pt-3'>
                            We help you secure
                            internships at top global
                            tech companies to gain
                            invaluable experience.
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div><img src='/images/download5.svg' alt="Your Icon" width={40} height={40} /></div>
                    <div className='w-[200px]'>
                        <div className='font-bold'>Phase 4: Full-time Conversion</div>
                        <div className='text-gray-500  pt-3'>
                            Excel in your internship and
                            convert it into full-time 
                            offer,launching global-career.
                        </div>
                    </div>
                </div>
                
            </div>
     
        </div>
        
    </>
  )
}

export default BodyTwo
