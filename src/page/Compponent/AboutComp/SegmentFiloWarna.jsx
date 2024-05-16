import React from 'react'
import CardFiloWarL from './CardFiloWarL.jsx'
import CardFiloWarR from './CardFiloWarR.jsx'
import HeadFiloWarna from '../../../assets/HeadFiloWarna.svg'
import filOren from '../../../assets/filOren.png'
import filBiru from '../../../assets/filBiru.png'
import filkuning from '../../../assets/filkuning.png'
import filkrem from '../../../assets/filkrem.png'

const SegmentFiloWarna = () => {
  return (
    <div className="flex flex-col w-full mx-auto bg-cover lg:max-w-[1920px] bg-cust-background h-auto my-0 justify-center">
        <div className='flex flex-col w-full bg-cover h-full justify-center pt-16 lg:pt-28 pb-40 px-10 bg-[url("https://res.cloudinary.com/dnoqmou6x/image/upload/v1715442347/bgFiloWarna_kijs7z.png")]'>
            <div className='w-full'>
                <img src={HeadFiloWarna} className='mx-auto w-72 lg:w-[600px] mb-16'/>
            </div>
            <div className='w-full grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-y-[60px] gap-x-8 px-2 lg:px-10 text-cust-black'>
                <CardFiloWarL srcimg={filBiru} desc="Melambangkan stabilitas dalam profesionalisme kinerja BEM FILKOM UB 2024 untuk menjalankan tanggung jawabnya sebagai eksekutor di FILKOM UB."/>
                <CardFiloWarR srcimg={filOren} desc="Melambangkan keberanian dan vitalitas BEM FILKOM UB 2024 dalam menghadapi tantangan untuk melayani KBMFILKOM."/>
                <CardFiloWarL srcimg={filkuning} desc="Melambangkan kreativitas dan kapabilitas yang dimiliki oleh BEM FILKOM UB 2024 serta energi positif yang selalu menyertai seluruh fungsionaris."/>
                <CardFiloWarR srcimg={filkrem} desc="Melambangkan atmosfer internal yang penuh kehangatan dan antusias yang tertanam dalam setiap individu di BEM FILKOM UB 2024."/>
            </div>
        </div>
    </div>
  )
}

export default SegmentFiloWarna