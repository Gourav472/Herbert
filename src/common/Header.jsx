import React, { useLayoutEffect, useState } from 'react';
import { NAV_ITEMS_DATA } from './Helper';
import herbertLogo from '../assets/images/webp/herbert-logo.webp';
import menu from '../assets/images/svg/menu.svg';
import closeMenu from '../assets/images/svg/close-menu.svg';
import PrimaryButton from './PrimaryButton';
import { gsap } from "gsap";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        if (window.innerWidth < 768) {
            setShow(false);
        }
    };
    useLayoutEffect(() => {
        var tl = gsap.timeline();
        tl.to(".header-down", {
            delay:"2",
            opacity: "1",
            y:"0",
            stagger :"0.2"
        })
    });

    return (
        <div className='py-[14px] sm:py-[23px]'>
            <nav className='flex items-center justify-between'>
                <a href="/"><img className='max-sm:w-[117px] header-down translate-y-[-75px] opacity-0 max-sm:h-[36px] relative z-40' width={180} height={54} src={herbertLogo} alt="brand-logo" /></a>
                <div className={`flex sm:flex-row duration-300 justify-center ease-linear bg-white z-30 flex-col items-center gap-[49px] sm:gap-11 absolute top-0 -right-full w-full min-h-screen sm:w-fit sm:bg-transparent sm:relative sm:min-h-fit sm:right-auto sm:top-auto ${show ? "right-0" : ""}`}>
                    <span className='bg-lightGray max-w-[327px] sm:hidden w-full absolute top-[40%] h-[1px]'></span>
                    <span className='bg-lightGray max-w-[327px] sm:hidden w-full absolute top-[50%] h-[1px]'></span>
                    {NAV_ITEMS_DATA.map((items, index) => (
                        <a key={index} href={items.url} onClick={(e) => handleClick(e, items.url.substring(1))} className='font-normal translate-y-[-75px] opacity-0 text-sm header-down leading-[21px] sm:text-base sm:leading-6 text-offGray hover:text-offBlack duration-300 ease-linear after:absolute after:bg-offBlack after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>{items.text}</a>
                    ))}
                    <PrimaryButton className="mt-[-17px] text-nowrap sm:hidden max-w-[302px] w-full h-[45px] max-sm:text-sm max-sm:leading-4" text="Start your conversation with Herbert" />
                </div>
                <div
                    aria-label="Toggle Navigation Menu"
                    className="cursor-pointer relative z-40 sm:hidden"
                    onClick={() => setShow(!show)}>
                    <img
                        width={24}
                        height={24}
                        src={show ? closeMenu : menu}
                        alt={show ? "close menu" : "open menu"}
                    />
                </div>
            </nav>
        </div>
    );
};

export default Header;
