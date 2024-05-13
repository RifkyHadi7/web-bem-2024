import React from 'react'

const CardFiloWarR = (props) => {
  return (
    <div className='flex flex-row max-w-96 max-h-64 lg:max-w-[610px] lg:max-h-[192px] rounded-[36px] lg:rounded-[50px] shadow-lg bg-cust-background items-center p-4'>
        <img src={props.srcimg} alt={props.alt} className='mr-1 max-w-28 lg:max-w-[200px]'/>
        <div className='text-left font-lato font-medium text-sm lg:text-xl'>
            {props.desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
    </div>
  )
}

CardFiloWarR.defaultProps = {
    desc: 'Lorem ipsum dolor sit amet, consect',
    alt: 'Warna Logo',
}

export default CardFiloWarR