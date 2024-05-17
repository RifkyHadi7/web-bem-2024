import React from 'react'

const CardFiloWarR = (props) => {
  return (
    <div className='flex flex-row w-full max-w-[90dvw] max-h-[136px] lg:max-w-[610px] lg:max-h-[192px] rounded-[24px] lg:rounded-[50px] shadow-lg bg-cust-background items-center p-4'>
        <img src={props.srcimg} alt={props.alt} className='mr-1 w-full max-w-[100px] lg:max-w-[200px]'/>
        <div className='text-left font-lato font-medium text-xs lg:text-xl'>
            {props.desc}
        </div>
    </div>
  )
}

CardFiloWarR.defaultProps = {
    desc: 'Lorem ipsum dolor sit amet, consect',
    alt: 'Warna Logo',
}

export default CardFiloWarR