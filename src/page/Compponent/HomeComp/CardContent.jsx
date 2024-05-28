import React from "react";


const CardContent = ({ card }) => {
    const { id, img, tanggal, judul, link } = card;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div key={id} className="card bg-red-50 w-[9rem] h-[8.875rem] xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5 p-2 rounded-xl active:scale-110">
                <div className=' xl:rounded-3xl w-full h-full'>
                    <img src={img} alt="" className='xl:rounded-[.625rem]' />
                    <p className='font-poppins xl:text-sm text-[6px] text-cust-gray xl:w-full text-start mt-3 xl:mb-2'>{tanggal}</p>
                    <h3 className='font-poppins xl:w-full text-start xl:leading-normal font-bold xl:text-base text-[7px]'>{judul}</h3>
                </div>
            </div>
        </a >
    );
};

export default CardContent;
