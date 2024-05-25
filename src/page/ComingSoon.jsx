import React from "react";
import awanIjoBawahCS from "../assets/awanIjoBawahCS.svg";
import textComingSoon from "../assets/textComingSoon.svg";
import daunKiri from "../assets/daunKiri.svg";
import daunKanan from "../assets/daunKanan.svg";
import bgcorak from "../assets/bgcorak.svg"

const ComingSoon = () => {
  return (
  <div className="flex flex-col w-full h-full p-0 my-0 bg-cust-background items-center justify-center">
    <div className="flex flex-col items-center m-0 p-0 justify-center w-full text-4xl bg-contain text-cust-green font-bold font-lato" style={{backgroundImage:`url(${bgcorak})`}}>
      <div className='w-screen lg:w-full h-screen mt-0 px-0 pt-[6vh] lg:pt-0 pb-48'>
        <div className='flex flex-row w-full items-start justify-between'>
            <img src={daunKiri} alt="" className='w-[30vw] lg:w-2/12 mt-0'/>
            <img src={daunKanan} alt="" className='w-[30vw] lg:w-2/12 mt-0'/>
        </div>
        <div className="">
        <img src={textComingSoon} alt="" className='mx-auto mt-[25vh] lg:mt-0 w-[100vw] lg:w-6/12' />
        </div>
      </div>
    </div>
    <img src={awanIjoBawahCS} alt="" className="relative -mt-20 w-full h-auto"/>
  </div>
  );
};

export default ComingSoon;