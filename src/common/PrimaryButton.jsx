import React from 'react'

const PrimaryButton = ({ text, className }) => {
    return (
        <button className={`${className} hover:bg-transparent hover:border-lightOrange duration-300 hover:text-lightOrange hover:shadow-3xl ease-linear py-[13.7px] px-[23px] text-white border border-transparent bg-lightOrange rounded-lg font-rubik font-semibold text-base leading-[18px]`}>{text}</button>
    )
}

export default PrimaryButton