import React from 'react'
import CardFiloWarL from './CardFiloWarL.jsx'
import CardFiloWarR from './CardFiloWarR.jsx'
import HeadFiloWarna from '../../../assets/HeadFiloWarna.svg'
import WarIjoK from '../../../assets/WarIjoK.png'
import WarIjoB from '../../../assets/WarIjoB.png'
import WarOrange from '../../../assets/WarOrange.png'
import WarBiru from '../../../assets/WarBiru.png'

const SegmentFiloWarna = () => {
  return (
    <div className="flex flex-col w-full mx-auto bg-cover lg:max-w-[1920px] bg-cust-background h-auto my-0 justify-center">
        <div className='flex flex-col w-full bg-cover h-full justify-center pt-16 lg:pt-28 pb-40 px-10 bg-[url("https://res.cloudinary.com/dnoqmou6x/image/upload/v1715442347/bgFiloWarna_kijs7z.png")]'>
            <div className='w-full'>
                <img src={HeadFiloWarna} className='mx-auto w-72 lg:w-[600px] mb-16'/>
            </div>
            <div className='w-full grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-y-[60px] gap-x-8 px-2 lg:px-10'>
                <CardFiloWarL srcimg={WarIjoK}/>
                <CardFiloWarR srcimg={WarOrange}/>
                <CardFiloWarL srcimg={WarIjoB}/>
                <CardFiloWarR srcimg={WarBiru}/>
            </div>
        </div>
    </div>
  )
}

export default SegmentFiloWarna