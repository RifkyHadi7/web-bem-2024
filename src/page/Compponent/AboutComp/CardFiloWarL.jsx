import React from 'react'

const CardFiloWarL = (props) => {
  return (
    <div className='flex flex-row-reverse lg:flex-row w-full h-full max-w-[90dvw] max-h-[136px] lg:max-w-[80dvw] lg:max-h-[192px] rounded-[24px] lg:rounded-[50px] shadow-lg bg-cust-background items-center p-4'>
        <div className='text-left lg:text-right font-lato font-medium text-xs lg:text-xl'>
            {props.desc}
        </div>
        <img src={props.srcimg} alt={props.alt} className='mr-1 lg:ml-1 w-full max-w-[100px] lg:max-w-[200px]'/>
    </div>
  )
}

CardFiloWarL.defaultProps = {
    desc: 'Lorem ipsum dolor sit amet, consect',
    alt: 'Warna Logo',
}

export default CardFiloWarL