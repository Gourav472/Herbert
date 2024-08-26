import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import pricingVector from '../assets/images/webp/pricing-vector.webp';
import { PRICING_PLANS_DATA } from "../common/Helper";
import Icons from "../common/Icons";
import PrimaryButton from "../common/PrimaryButton";
import PrimaryHeading from "../common/PrimaryHeading";
import PrimaryParagraph from "../common/PrimaryParagraph";

const PricingPlans = () => {
    const sectionRef = useRef(null);
    const animations = () => {
        gsap.timeline()
            .fromTo(".pricing-cards-animation", {
                x: 2000,
            },
                {
                    x: 0,
                    delay: 0.7,
                    duration: 0.7,
                    stagger: 0.5,
                });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animations();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px 0px -300px 0px',
                threshold: 0
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className='bg-offOrange'>
            <div id='plans' className='py-16 sm:py-20 relative xl:max-w-[1920px] xl:mx-auto'>
                <div className='container'>
                    <div className='flex flex-col items-center relative'>
                        <PrimaryHeading text="Friendly Pricing" redText="Plans" />
                        <PrimaryParagraph className="pt-4 max-sm:pt-[14px] max-w-[515px]" text="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." />
                        <div className="flex max-lg:flex-wrap max-lg:justify-center max-sm:gap-16 sm:gap-7 md:gap-12 xl:gap-[54px] pt-8 sm:pt-12 md:pt-14">
                            {PRICING_PLANS_DATA.map((items, index) => (
                                <div key={index} className={`flex max-sm:max-w-[327px] pricing-cards-animation z-20 sm:max-w-[260px] md:max-w-[290px] lg:max-w-[308px] w-full flex-col ${index === 1 ? "xl:px-[54px] max-sm:border-x-0 max-lg:border-e-0 sm:ps-7 md:ps-10 lg:px-12 max-sm:max-w-[327px] sm:max-w-[288px] md:max-w-[330px] lg:!max-w-[416px] border-x-[1px] border-mediumGray" : ""}`}>
                                    <div className="flex justify-between items-center gap-2 md:gap-3">
                                        <h2 className="font-rubik max-sm:text-2xl max-sm:leading-7 font-semibold sm:text-3xl sm:leading-10 md:text-custom-3xl md:leading-[52px] text-offBlack">{items.heading}</h2>
                                        <img className={`${index === 0 ? "max-md:w-[44px] max-md:h-[28px]" : ""} ${index === 1 ? "max-md:w-[63px] max-md:h-[28px]" : ""} ${index === 2 ? "max-md:w-[63px] max-md:h-[28px]" : ""}`} src={items.quality} alt="qualityName" />
                                    </div>
                                    <p className="font-normal sm:text-base max-sm:text-sm max-sm:leading-[21px] sm:leading-6 text-offGray pt-[15px]">{items.text}</p>
                                    <p className="font-bold sm:text-base max-sm:text-sm max-sm:leading-4 max-sm:pt-8 sm:leading-[22px] text-offBlack sm:pt-6">What’s included?</p>
                                    <div className="flex gap-[5px] items-center max-sm:pt-6 sm:pt-[14px]">
                                        <Icons IconName="tickIcon" />
                                        <p className="text-offGray font-normal sm:text-base max-sm:text-sm max-sm:leading-[21px] sm:leading-6">{items.messages}</p>
                                    </div>
                                    <PrimaryButton className="max-sm:max-w-[326px] sm:max-w-[308px] w-full mt-8 max-sm:text-sm max-sm:leading-4" text={items.button} />
                                </div>
                            ))}
                        </div>
                        <div className="bg-mediumGray max-w-[327px] w-full h-[1px] absolute top-[39%] sm:hidden"></div>
                        <div className="bg-mediumGray max-w-[327px] w-full h-[1px] absolute top-[71%] sm:hidden"></div>
                    </div>
                </div>
                <img className="max-sm:hidden absolute right-[-1px] z-10 top-9 pointer-events-none" src={pricingVector} alt="right-vector" />
            </div>
        </div>
    );
}

export default PricingPlans;
