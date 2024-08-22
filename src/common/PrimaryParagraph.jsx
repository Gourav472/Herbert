import React from 'react'

const PrimaryParagraph = ({ text, className }) => {
    return (
        <p className={`${className} max-sm:text-sm max-sm:leading-[21px] font-normal sm:text-base sm:leading-6 text-center text-offGray`}>{text}</p>
    )
}

export default PrimaryParagraph