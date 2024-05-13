import React from 'react'

const KartuFiloLogo = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='font-lato text-2xl lg:text-3xl font-extrabold text-cust-yellow'>
            {props.title}
            {/*Buat SubJudul*/}
        </div>
        <img className='max-w-[270px] lg:max-w-[320px] mb-2' src={props.imgsrc} alt=''></img>
        <div className='flex flex-col justify-center items-center font-lato h-[180px] lg:h-[130px] text-center text-base lg:text-xl text-cust-white2 rounded-[22px] bg-cust-orange p-5 max-w-[456px]'>
            {props.desc}
            {/*Buat Deskripsi*/}
        </div>
    </div>
  )
}

KartuFiloLogo.defaultProps = {
    title: 'Burung',
    desc: 'Lalalalalalalalalalalalalalalalalalalalalalalal',
}

export default KartuFiloLogo