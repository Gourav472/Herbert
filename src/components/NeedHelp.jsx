import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import PrimaryParagraph from '../common/PrimaryParagraph';

const NeedHelp = () => {
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
    const sectionRef = useRef(null);
    const animations = () => {
        gsap.timeline()
            .fromTo(".button-animation", {
                y: 1000,
            },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.4,
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
        <div id='vision' className='container relative z-30'>
            <div className='max-w-[1140px] w-full px-5 bg-lightOrange rounded-xl max-sm:py-5 sm:py-10 md:py-14 lg:py-16 flex flex-col items-center max-sm:translate-y-[186px] sm:translate-y-[134px] max-sm:mt-[-120px] sm:mt-[-14px]'>
                <h2 ref={headingRef} animate="true" className='font-rubik overflow-hidden text-white max-w-[632px] capitalize max-sm:text-[22px] max-sm:leading-7 font-semibold sm:text-2xl sm:leading-8 md:leading-9 md:text-3xl lg:text-5xl lg:leading-[56.88px] text-center'>Need Help in Your Visa? <span className='font-rubik overflow-hidden'>Ask Herbert Now!</span></h2>
                <PrimaryParagraph className="max-w-[528px] sm:pt-4 max-sm:pt-3 text-white" text="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." />
                <div ref={sectionRef} className='flex overflow-hidden max-sm:flex-col items-center gap-3 sm:gap-4 max-sm:pt-8 sm:pt-[42px]'>
                    <button className='py-[14px] opacity-0 button-animation max-sm:max-w-[287px] max-sm:w-full px-[23.6px] max-sm:text-sm max-sm:leading-4 rounded-lg bg-white text-lightOrange font-semibold font-rubik sm:text-base sm:leading-[18px] border border-transparent hover:shadow-[0px_-12px_10px_-10px_#FFFFFF_inset] hover:border-white duration-300 ease-linear hover:text-white hover:bg-transparent'>Start your conversation</button>
                    <button className='py-[14px] opacity-0 button-animation max-sm:max-w-[287px] max-sm:w-full px-[23.6px] max-sm:text-sm max-sm:leading-4 rounded-lg hover:bg-white hover:text-lightOrange font-semibold font-rubik sm:text-base sm:leading-[18px] border hover:shadow-[0px_-15px_10px_-10px_#FF9748_inset] border-white duration-300 ease-linear text-white hover:bg-transparent'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default NeedHelp