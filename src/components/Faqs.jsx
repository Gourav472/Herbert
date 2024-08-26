import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import faqBg from '../assets/images/webp/faq-bg.webp';
import { FAQS } from '../common/Helper';
import PrimaryButton from '../common/PrimaryButton';
import PrimaryHeading from '../common/PrimaryHeading';
import PrimaryParagraph from '../common/PrimaryParagraph';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
    const faqRefs = useRef([]);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setHeight(0);
            setActiveIndex(null);
        } else {
            setHeight(contentRef.current.scrollHeight);
            setActiveIndex(index);
        }
    };
    const animations = () => {
        const tl = gsap.timeline();
        faqRefs.current.forEach((faqItem, index) => {
            if (faqItem) {
                tl.fromTo(faqItem, {
                    x: index % 2 === 0 ? -2000 : 2000,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.2,
                    ease: 'power2.out',
                    stagger: 0.4,
                });
            }
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
        const sectionRef = document.getElementById('services');
        if (sectionRef) {
            observer.observe(sectionRef);
        }
        return () => {
            if (sectionRef) {
                observer.unobserve(sectionRef);
            }
        };
    }, []);
    const headingRef = useRef(null);
    useEffect(() => {
        if (headingRef.current) {
            const typeSplit = new SplitType(headingRef.current, {
                types: 'lines, words, chars',
                tagName: 'span'
            });
            headingRef.current.querySelectorAll('.char').forEach(el => {
                el.classList.add('font-rubik');
            });
            gsap.from(headingRef.current.querySelectorAll('.char'), {
                y: '-100%',
                opacity: 1,
                duration: 0.3,
                ease: "power3.in",
                stagger: 0.04,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top center',
                },
            });
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.killTweensOf(headingRef.current.querySelectorAll('.char'));
            };
        }
    }, []);

    return (
        <div id='services' className='relative xl:max-w-[1920px] xl:mx-auto'>
            <div className='container relative z-20'>
                <div className='flex flex-col items-center'>
                    <h2 ref={headingRef} className='font-rubik overflow-hidden text-offBlack capitalize max-sm:text-[22px] max-sm:leading-7 font-semibold sm:text-2xl sm:leading-8 md:leading-9 md:text-3xl lg:text-5xl lg:leading-[56.88px] text-center sm:text-nowrap'>Frequently Asked <span className='font-rubik max-sm:!overflow-hidden sm:!inline text-darkRed'>Questions</span></h2>
                    <PrimaryParagraph className="max-w-[622px] sm:pt-4 max-sm:pt-[14px]" text="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes." />
                    <div className='row flex flex-wrap flex-row -mx-3 pt-4 sm:pt-10 max-sm:pb-8 sm:pb-12'>
                        {FAQS.map((faq, index) => (
                            <div key={index} className='w-full lg:w-6/12 px-3'>
                                <div
                                    ref={(el) => faqRefs.current[index] = el}
                                    className={`overflow-hidden opacity-0 ease-linear rounded-lg ${activeIndex === index ? "z-30 border-transparent shadow-4xl" : "border-[1px] border-lightGray"} ${activeIndex === index ? "faq-left-animation" : "faq-left-animation"} bg-white max-sm:mt-4 sm:mt-6`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`${activeIndex === index ? "z-30 max-sm:p-[14px_14px_0px_14px] p-[18px_24px_0px_24px] border-transparent" : "max-sm:p-[15px_16px_14px_14px] p-[18px_24px]"} w-full text-left flex max-sm:items-start items-center justify-between`}
                                    >
                                        <span className="z-30 font-normal sm:text-base max-sm:text-sm max-sm:leading-[21px] sm:leading-6 text-offBlack">{faq.question}</span>
                                        <span className="float-right z-30">
                                            <svg className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} max-sm:w-[20px] max-sm:h-[20px] sm:w-[24px] md:h-[24px]`}
                                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="#5F5F5F" />
                                            </svg>
                                            <svg className={`${activeIndex === index ? "block" : "hidden"} max-sm:w-[20px] max-sm:h-[20px] sm:w-[24px] md:h-[24px]`}
                                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 12.998H18C18.2652 12.998 18.5196 12.8927 18.7071 12.7052C18.8946 12.5176 19 12.2633 19 11.998C19 11.7328 18.8946 11.4785 18.7071 11.2909C18.5196 11.1034 18.2652 10.998 18 10.998H12.6986H6C5.73478 10.998 5.48043 11.1034 5.29289 11.2909C5.10536 11.4785 5 11.7328 5 11.998C5 12.2633 5.10536 12.5176 5.29289 12.7052C5.48043 12.8927 5.73478 12.998 6 12.998H13Z" fill="#5F5F5F" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        ref={contentRef}
                                        className={`overflow-hidden transition-all duration-300 ease-linear`}
                                        style={{ maxHeight: activeIndex === index ? `${height}px` : '0px' }}
                                    >
                                        <div className={`font-normal sm:text-base max-sm:text-sm max-sm:leading-[21px] sm:leading-6 text-offGray max-sm:p-[8px_14px_14px_14px] p-[12px_24px_18px_24px]`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PrimaryButton className="sm:max-w-[109px] max-sm:max-w-[101px] w-full max-sm:text-sm max-sm:leading-4" text="View All" />
                </div>
            </div>
            <img src={faqBg} className='w-[1920px] h-[686px] absolute bottom-[-70%] pointer-events-none object-cover z-10 right-0' alt="bg" />
        </div>
    );
};

export default Faqs;
