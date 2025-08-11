import React from 'react';
import StartApplication from './buttonComponents/StartApplication';
import BodyTwo from './BodyTwo';
import BodyThree from './BodyThree';
import BodyFour from './BodyFour';
import BodyFive from './BodyFive';
import Link from 'next/link';
import Footer from '../footer/Footer';
import LandingHeader from './LandingHeader';



const LandingCompoundPage = () => {
  return (
    <>
      <LandingHeader />
      <div
        className="relative h-[78vh] flex items-center justify-center px-4 md:px-20 text-white"
        style={{
          backgroundImage:
            "url(https://media.licdn.com/dms/image/v2/D5612AQFhrt7YPQfXNQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690152312090?e=2147483647&v=beta&t=JQ1VHQl0A_A5Blkhbj0fmndJjuH-61SZoOVI3Ei4UUk)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Forge Your Future in Tech
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-light">
            Join an elite community of Africas brightest minds, and get
            fast-tracked to a software engineering career at the worlds leading
            tech companies.
          </p>
          <div className="mt-8">
            <Link href="/dashboard">
              <StartApplication />
            </Link>
          </div>
        </div>
      </div>

      <div className="min-h-[15vh] bg-gray-100 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-20 py-8">
        <div className="w-[120px]">
          <img
            src="http://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
            alt="Google Logo"
            className="w-full object-contain"
          />
        </div>
        <div className="w-[120px]">
          <img
            src="https://www.picng.com/upload/amazon/png_amazon_63353.png"
            alt="Amazon Logo"
            className="w-full object-contain"
          />
        </div>
        <div className="w-[130px] ">
          <img
            src="/Images/databricks.png"
            alt="Amazon Logo"
            className="w-full object-contain"
          />
        </div>
      </div>

      <BodyTwo />
      <BodyThree />
      <BodyFour />
      <BodyFive />
      <Footer />
    </>
  );
};

export default LandingCompoundPage;
