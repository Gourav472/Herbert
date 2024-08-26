import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const PrimaryButton = ({ text, className }) => {
    const buttonRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (!buttonRef.current) return;
            const rect = buttonRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementInView = rect.top < windowHeight && rect.bottom >= 0;
            if (elementInView && !hasAnimated) {
                setHasAnimated(true);
                gsap.to(buttonRef.current, {
                    delay: 0.6,
                    duration: 0.7,
                    y: "0",
                    opacity: 1,
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);

    return (
        <button
            ref={buttonRef}
            className={`${className} hover:bg-transparent translate-y-[100%] opacity-0 hover:border-lightOrange duration-300 hover:text-lightOrange hover:shadow-3xl ease-linear py-[13.7px] px-[23px] text-white border border-transparent bg-lightOrange rounded-lg font-rubik font-semibold text-base leading-[18px]`}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
