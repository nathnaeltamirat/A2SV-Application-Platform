import React from 'react';
import StartApplication from './StartApplication';
import BodyTwo from './BodyTwo';
import BodyThree from './BodyThree';
import BodyFive from './BodyFive';
import Footer from './Footer';
import BodyFour from './BodyFour';

const BodyOne = () => {
  return (
    <>
        <div
        className='relative h-[49vh] ml-0 mr-0 mt-0'
        style={{
            backgroundImage: `url(https://media.licdn.com/dms/image/v2/D5612AQFhrt7YPQfXNQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690152312090?e=2147483647&v=beta&t=JQ1VHQl0A_A5Blkhbj0fmndJjuH-61SZoOVI3Ei4UUk)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <div className='absolute inset-0 bg-blue-500 opacity-8'></div>
            <div className='relative z-10 ml-[280px] mr-[690px] pt-[50px] text-white'>
                <div className='font-extrabold text-4xl mt-[45px]'>
                Forge Your Future in Tech
                </div>
                <div className='font-light mt-[18px]'>
                Join an elite community of Africa's brightest minds, and get fast-tracked to a
                software engineering career at the world's leading tech companies.
                </div>
                <div className='pt-7'>
                <StartApplication />
                </div>
            </div>
        </div>

        <div className='h-[15vh] pl-[400px] flex flex-row space-x-[100px]' style = {{backgroundColor : 'rgb(243, 244, 246)'}}>
            <div className='w-[120px] pt-7'><img src="http://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png" alt="" /></div>
            <div className='w-[120px] pt-7'><img src="https://www.picng.com/upload/amazon/png_amazon_63353.png" alt="" /></div>
        </div>
        <div>
            <BodyTwo/>
        </div>
        <div>
            <BodyThree/>
        </div>
        <div>
            <BodyFour/>
        </div>
        <div>
            <BodyFive/>
        </div>
        <Footer/>
    </>
  );
};

export default BodyOne;
