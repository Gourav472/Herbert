import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import featuresBottomImage from '../assets/images/webp/features-bottom-image.webp';
import featuresImage from '../assets/images/webp/features-image.webp';
import featuresLeftVector from '../assets/images/webp/features-vector-left.webp';
import featuresRightVector from '../assets/images/webp/features-vector-right.webp';
import { FEATURES_CARDS_DATA, TOURISM_DATA, WORK_DATA } from '../common/Helper';
import PrimaryHeading from '../common/PrimaryHeading';
import PrimaryParagraph from '../common/PrimaryParagraph';
gsap.registerPlugin(ScrollTrigger);

const MainFeatures = () => {
    const sectionRef = useRef(null);
    useLayoutEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".feature-cards-animation",
                {
                    x: "4000",
                    opacity: 0,
                },
                {
                    duration: 0.9,
                    x: "0",
                    stagger: 0.4,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".feature-cards-animation",
                        start: "top 80%",
                        once: true,
                    },
                }
            );
            gsap.fromTo(".tousrism-data-animation",
                {
                    x: "-2000",
                    opacity: 0,
                },
                {
                    duration: 0.9,
                    x: "0",
                    stagger: 0.3,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".tousrism-data-animation",
                        start: "top 80%",
                        once: true,
                    },
                }
            );
            gsap.fromTo(".work-data-animation",
                {
                    x: "2000",
                    opacity: 0,
                },
                {
                    duration: 0.9,
                    x: "0",
                    stagger: 0.3,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".work-data-animation",
                        start: "top 80%",
                        once: true,
                    },
                }
            );
            gsap.fromTo(".features-image-animation",
                {
                    scale: 0,
                },
                {
                    duration: 0.7,
                    scale: 1,
                    opacity: 1,
                    delay: 0.8,
                    scrollTrigger: {
                        trigger: ".features-image-animation",
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div
            id='features'
            className='max-sm:pb-20 sm:pb-24 md:pb-28 lg:pb-[120px] max-sm:pt-7 pt-4 relative xl:max-w-[1920px] xl:mx-auto'
            ref={sectionRef}
        >
            <div className='container relative z-30'>
                <div className='flex md:h-[238px] max-md:flex-wrap max-md:justify-center md:items-center max-sm:gap-3 sm:gap-6 max-sm:mt-4 sm:mt-7 md:mt-12 lg:mt-0 max-lg:mb-20 lg:translate-y-[-128px]'>
                    {FEATURES_CARDS_DATA.map((items, index) => (
                        <div key={index} className='px-5 flex flex-col border max-sm:max-h-[155px] feature-cards-animation md:max-h-[196px] md:hover:max-h-[238px] md:hover:py-[40px] bg-white border-gray rounded-lg max-sm:max-w-[327px] max-sm:py-[22px] sm:max-w-[284px] md:max-w-[364px] duration-300 ease-linear w-full hover:border-transparent hover:shadow-4xl py-5 items-center'>
                                <img className='sm:w-[56px] sm:h-[56px] max-sm:w-[48px] max-sm:h-[48px]' src={items.icon} alt="icons" />
                            <h3 className='font-medium max-sm:text-base max-sm:leading-[19px] text-xl leading-6 text-offBlack text-center max-sm:pt-[14px] pt-4'>{items.heading}</h3>
                            <p className='max-w-[196px] text-center max-sm:text-sm max-sm:leading-[21px] font-normal text-base leading-6 text-offGray max-sm:pt-2 pt-3'>{items.text}</p>
                        </div>
                    ))}
                </div>
                <div id='herbert' className='flex flex-col items-center'>
                    <PrimaryHeading text="Herbert Main" redText="Features" />
                    <PrimaryParagraph className="max-w-[556px] max-sm:pt-[14px] pt-4" text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." />
                </div>
                <div className='flex justify-between max-lg:flex-wrap max-sm:pt-6 sm:pt-9 md:pt-12 pt-14 '>
                    <div className='lg:hidden max-lg:max-w-[640px] w-full flex justify-center'>
                        <img className='max-sm:max-w-[286px] features-image-animation w-full pointer-events-none lg:hidden sm:max-w-[300px]' src={featuresImage} alt="tourism" />
                    </div>
                    <div className='flex max-sm:justify-between w-full max-lg:justify-center xl:justify-between !gap-6 xl:gap-0 max-sm:mx-auto max-sm:max-w-[450px]'>
                        <div className='max-w-[151px] sm:max-w-[284px] md:max-w-[325px] max-lg:mt-5 w-full flex flex-col max-sm:gap-6 gap-[56px] max-lg:pt-6'>
                            {TOURISM_DATA.map((items, index) => (
                                <div key={index} className={`${index === 1 ? "hidden md:flex" : ""} ${index === 2 ? "max-md:mt-[19px]" : ""} ${index === 3 ? "md:hidden " : ""} flex flex-col tousrism-data-animation items-start lg:items-end max-sm:gap-2 sm:gap-4`}>
                                    <img className='max-sm:w-[30px] max-sm:h-[30px] sm:w-[40px] sm:h-[40px]' src={items.numberIcon} alt="number-icon" />
                                    <p className='font-medium text-base sm:text-xl leading-[19px] sm:leading-6 text-offBlack text-left lg:!text-right'>{items.text}</p>
                                </div>
                            ))}
                        </div>
                        <img className='max-sm:max-w-[286px] features-image-animation pointer-events-none max-lg:hidden sm:max-w-[344px]' src={featuresImage} alt="tourism" />
                        <div className='max-w-[151px] sm:max-w-[284px] md:max-w-[325px] max-lg:mt-5 w-full flex flex-col max-sm:gap-6 gap-[56px] max-lg:pt-6'>
                            {WORK_DATA.map((items, index) => (
                                <div key={index} className={`${index === 0 ? " md:hidden" : ""} ${index === 1 ? "block" : ""} ${index === 2 ? "hidden md:flex" : ""} ${index === 3 ? "block max-md:mt-[19px]" : ""} ${index === 4 ? "block" : ""} flex flex-col items-start max-sm:gap-2 sm:gap-4 work-data-animation `}>
                                    <img className='max-sm:w-[30px] max-sm:h-[30px] sm:w-[40px] sm:h-[40px]' src={items.numberIcon} alt="icon" />
                                    <p className='font-medium text-base sm:text-xl leading-[19px] sm:leading-6 text-offBlack text-left'>{items.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute right-[-1px] top-0 pointer-events-none max-sm:hidden' src={featuresRightVector} alt="right-vector" />
            <img className='absolute left-[-1px] top-[35%] pointer-events-none max-sm:hidden' src={featuresLeftVector} alt="left-vector" />
            <img className='w-[1920px] max-sm:h-[288px] object-cover sm:h-[204px] absolute z-10 bottom-0 pointer-events-none' src={featuresBottomImage} alt="bottom-vector" />
        </div>
    );
};

export default MainFeatures;
