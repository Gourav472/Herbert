import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import manRight from '../assets/images/webp/hello-man-right.webp'
import teamImage from '../assets/images/webp/team-image.webp'
import teamVector from '../assets/images/webp/team-vector.webp'
import PrimaryButton from '../common/PrimaryButton'
import PrimaryHeading from '../common/PrimaryHeading'
import PrimaryParagraph from '../common/PrimaryParagraph'

const Team = () => {
    const sectionRef = useRef(null);
    const animations = () => {
        gsap.timeline()
            .fromTo(".team-animation", {
                x: -2000,
                opacity: 0,
            },
                {
                    x: 0,
                    delay: 0.9,
                    duration: 0.7,
                    stagger: 0.2,
                    opacity: 1,
                });
        gsap.timeline()
            .fromTo(".team-image-animation", {
                x: 2000,
                opacity: 0,
            },
                {
                    x: 0,
                    delay: 0.9,
                    duration: 0.8,
                    opacity: 1,
                });
        gsap.fromTo(".image-animation",
            {
                scale: 0,
            },
            {
                duration: 0.7,
                scale: 1,
                opacity: 1,
                delay: 0.8,
            }
        );
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
        <div ref={sectionRef} id='about' className='xl:pt-[283px] bg-team-bg bg-full bg-no-repeat bg-top pt-16 pb-[79px] sm:py-24 md:py-36 lg:py-52 xl:pb-[267px] xl:max-w-[1920px] xl:mx-auto relative'>
            <div className='container relative z-20'>
                <div className='flex justify-between max-lg:flex-wrap max-lg:flex-col-reverse sm:items-center gap-6'>
                    <div className='lg:pt-0 flex sm:items-center lg:items-start flex-col'>
                        <PrimaryHeading className="text-nowrap text-start sm:text-center lg:text-start" text="Team" redText="&" blackText="Resources" />
                        <PrimaryParagraph className="max-w-[470px] pt-[14px] sm:pt-4 text-start sm:text-center lg:text-start" text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus." />
                        <img className='max-w-[261px] w-full mt-[35px] mx-auto lg:hidden image-animation' src={manRight} alt="hello" />
                        <ul className='list-disc list-inside flex flex-col pt-8 lg:pt-3 '>
                            <li className='text-offGray team-animation sm:text-base font-normal max-sm:text-sm max-sm:leading-7 sm:leading-6'>Single entrepreneur (yourself)</li>
                            <li className='text-offGray team-animation sm:text-base font-normal max-sm:text-sm max-sm:leading-7 sm:leading-6'>Outsourced development to freelancers</li>
                            <li className='text-offGray team-animation sm:text-base font-normal max-sm:text-sm max-sm:leading-7 sm:leading-6'>Budget: $15,000</li>
                        </ul>
                        <PrimaryButton className="sm:max-w-[137px] max-sm:max-w-[126px] max-sm:py-[12px] max-sm:text-sm max-lg:leading-4 mt-8 sm:mt-[42px]" text="Learn more" />
                    </div>
                    <img className='max-w-[450px] lg:max-w-[500px] max-lg:hidden xl:hidden w-full' src={teamImage} alt="team" />
                </div>
            </div>
            <img className='max-w-[701px] max-xl:hidden w-full absolute right-0 top-[141px] team-image-animation' src={teamImage} alt="team" />
            <img className="max-sm:hidden absolute left-[-1px] top-[18%] pointer-events-none" src={teamVector} alt="left-vector" />
        </div>
    )
}

export default Team