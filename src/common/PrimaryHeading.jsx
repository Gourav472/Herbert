import React from 'react'

const PrimaryHeading = ({ text, redText, className }) => {
    return (
        <h2 className={`font-rubik capitalize max-sm:text-2xl max-sm:leading-7 font-semibold sm:text-2xl sm:leading-8 md:leading-9 md:text-3xl lg:text-5xl lg:leading-[56.88px] text-center ${className}`}>{text} <span className='text-darkRed font-rubik'>{redText}</span></h2>
    )
}

export default PrimaryHeading