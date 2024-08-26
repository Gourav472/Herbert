import React from 'react';
import footerLogo from '../assets/images/webp/footer-logo.webp';
import { FOOTER_LINKS_DATA, FOOTER_SUPPORT_DATA } from '../common/Helper';
import Icons from '../common/Icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='pt-[212px] bg-offOrange relative z-20 '>
            <div className='container'>
                <div className="flex flex-row flex-wrap max-sm:pt-[12px] -mx-3 pb-[42px] sm:pb-[50px]">
                    <div className="w-full lg:w-6/12 px-3">
                        <div className='flex flex-col'>
                            <a href="#home">
                                <img className='max-w-[210px] sm:max-w-[326px]' src={footerLogo} alt="herbert-logo" />
                            </a>
                            <p className="text-start max-sm:pt-3 max-sm:text-sm max-sm:leading-[21px] sm:pt-[15px] max-w-[600px] lg:max-w-[400px] font-normal sm:text-base sm:leading-6 text-offGray">Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor.</p>
                        </div>
                    </div>
                    <div className='w-6/12 sm:w-4/12 lg:w-2/12 mt-8 lg:mt-4 px-3 flex lg:justify-center'>
                        <ul className='flex flex-col gap-2'>
                            <li className='opacity-90 font-medium text-base leading-[19px] text-offBlack'>Quick Links</li>
                            {FOOTER_LINKS_DATA.map((item, index) => (
                                <li key={index}>
                                    <a onClick={(e) => handleClick(e, item.url.substring(1))} className='font-normal duration-300 ease-linear hover:text-lightOrange sm:text-base max-sm:text-sm max-sm:leading-[21px] sm:leading-6 text-offGray' href={item.url}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-6/12 sm:w-4/12 lg:w-2/12 px-3 mt-8 flex lg:mt-4 lg:justify-center'>
                        <ul className='flex flex-col gap-2'>
                            <li className='opacity-90 font-medium text-base leading-[19px] duration-300 ease-linear text-offBlack'>Support</li>
                            {FOOTER_SUPPORT_DATA.map((item, index) => (
                                <li key={index}>
                                    <a className='font-normal duration-300 ease-linear hover:text-lightOrange sm:text-base max-sm:text-sm max-sm:leading-[21px] sm:leading-6 text-offGray'>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full sm:w-4/12 lg:w-2/12 px-3 mt-8 flex lg:mt-4 sm:justify-center lg:justify-end'>
                        <div className='flex flex-col gap-4'>
                            <p className='opacity-90 font-medium sm:text-base max-sm:text-sm max-sm:leading-4 sm:leading-[19px] text-offBlack'>Follow Us</p>
                            <div className='flex items-center gap-3'>
                                <a className='hover:translate-y-2 duration-300 ease-linear' href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
                                    <Icons IconName="facebookIcon" />
                                </a>
                                <a className='hover:translate-y-2 duration-300 ease-linear' href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' rel='noopener noreferrer'>
                                    <Icons IconName="instagramIcon" />
                                </a>
                                <a className='hover:translate-y-2 duration-300 ease-linear' href="https://in.linkedin.com/" target='_blank' rel='noopener noreferrer'>
                                    <Icons IconName="linkedinIcon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1920px] mx-auto h-[1px] bg-lightGray'></div>
            <div className='px-6 py-4'>
                <p className='sm:text-base font-normal max-sm:text-[14px] max-sm:leading-[21px] sm:leading-6 text-offGray text-center'>
                    Copyright © {currentYear} herbert, All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
