import React, { useEffect, useState } from 'react';
import upArrow from "../assets/images/webp/arrow-up.webp";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1920);
    const Scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const toggleVisible = () => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 400);
    };
    const checkScreenWidth = () => {
        setIsLargeScreen(window.innerWidth >= 1920);
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        window.addEventListener('resize', checkScreenWidth);
        checkScreenWidth();
        toggleVisible();
        return () => {
            window.removeEventListener('scroll', toggleVisible);
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <button
            onClick={Scroll}
            className="animate-bounce bg-white place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[2%] bottom-[2%] sm:bottom-[3%] sm:right-[3%] lg:bottom-[3%] cursor-pointer shadow-4xl duration-300 ease-linear z-30"
            style={{
                display: visible ? 'grid' : 'none',
                right: isLargeScreen ? 'calc((100vw - 1920px) / 2 + 30px)' : '3%',
            }}>
            <img
                src={upArrow}
                alt="upArrow"
                className='max-sm:max-w-[25px] sm:max-w-[30px] md:max-w-[35px] lg:max-w-[40px]'
            />
        </button>
    );
};

export default ScrollToTop;
