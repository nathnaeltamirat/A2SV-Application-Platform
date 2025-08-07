'use client'
import React from 'react'
import  HorizontalBarChart from '../../components/chartComponents/HorizontalBarChart'
import  PieChart from '../../components/chartComponents/PieChart'
import  BarChart from '../../components/chartComponents/BarChart'

const Analytics = () => {
    const chartData = {
        labels: ['Applied' ,'Under Review' , 'Interview' ,'Accepted'],
        values: [1204,750,250,54],
    };
    const barData = {
        labels: ['Ethiopia' ,'Kenya' , 'Ghana' ,'Nigeria'],
        values: [900,150,100,82],
    };
    const pieData = {
    labels: ['AAU' ,'AASTU' , 'ASTUw'],
    values: [47.62, 23.81, 28.57], 
    };


    
  return (
    <div className='h-auto text-black pl-[150px] pt-[50px]' style={{background : 'rgb(243, 244, 246)'}}>
        <div className='flex flex-col space-x-3'>
            <div className='font-medium text-3xl'>Application Analytics</div>
            <div className='font-light text-gray-500 text-[16px]'>Insights for the G7 November Intake</div>
        </div>
        
        <div className='flex flex-col md:flex-row mt-6 md:space-x-6 space-y-6 md:space-y-0'>
            <div className='w-full max-w-sm bg-white rounded-[7px] shadow-2xl shadow-gray-300 p-5'>
                <div className='text-gray-500 text-sm font-light mb-1'>
                    Total Applicants
                </div>
                <div className='text-2xl font-semibold'>1,204</div>
            </div>

            <div className='w-full max-w-sm bg-white rounded-[7px] shadow-2xl shadow-gray-300 p-5'>
                <div className='text-gray-500 text-sm font-light mb-1'>
                    Acceptance Rate
                </div>
                <div className='text-2xl font-semibold'>6.8%</div>
            </div>

            <div className='w-full max-w-sm bg-white rounded-[7px] shadow-2xl shadow-gray-300 p-5'>
                <div className='text-gray-500 text-sm font-light mb-1'>
                    Avg. Review Time
                </div>
                <div  className='text-2xl font-semibold'>3.2 Days</div>
            </div>
            
        </div>
        <div className='flex flex-col md:flex-row mt-6 md:space-x-6 space-y-6 md:space-y-0'>
            <div className='w-full max-w-[589px]  bg-white rounded-[7px] shadow-2xl shadow-gray-300 p-5'>
                <div className='text-[20px] font-semibold'>Application Funnel</div>
                <div className='font-light text-gray-500 text-[14px]'>The chart visualizes the applicant's journey from submission to acceptance.</div>
                <HorizontalBarChart data={chartData}/>
            </div>
            <div className='w-full max-w-[589px]  bg-white rounded-[7px] shadow-2xl shadow-gray-300 p-5'>
                <div className='text-[20px] font-semibold'>University Distribution</div>
                <div className='font-light text-gray-500 text-[14px]'>Breakdown of Applicants by their Univeristy</div>
                <div className=''><PieChart data={pieData}/></div>
            </div>
        </div>
        <div className='w-full max-w-[1178px] mt-[50px] bg-white rounded-[7px] shadow-2xl shadow-gray-300 p-5'>
            <div className='text-[20px] font-semibold'>University Distribution</div>
            <div className='font-light text-gray-500 text-[14px]'>Breakdown of Applicants by their Univeristy</div>
            <div  className="h-[500px]"><BarChart data = {barData}/></div>
            
        </div>
      
    </div>
  )
}

export default Analytics
