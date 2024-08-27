import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const PrimaryHeading = ({ text, redText, className, blackText }) => {
    const headingRef = useRef(null);
    useEffect(() => {
        if (headingRef.current) {
            const typeSplit = new SplitType(headingRef.current, {
                types: 'lines, words, chars',
                tagName: 'span'
            });
            const charElements = headingRef.current.querySelectorAll('.char');
            const charRefs = Array.from(charElements).map(() => React.createRef());
            charElements.forEach((el, index) => {
                charRefs[index].current = el;
            });
            gsap.from(charRefs.map(ref => ref.current), {
                y: '-100%',
                opacity: 1,
                duration: 0.3,
                ease: "power3.in",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top center',
                },
            });
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.killTweensOf(charRefs.map(ref => ref.current));
                typeSplit.revert();
            };
        }
    }, []);

    return (
        <h2
            ref={headingRef}
            className={`font-rubik overflow-hidden capitalize max-sm:text-2xl max-sm:leading-7 font-semibold sm:text-2xl sm:leading-8 md:leading-9 md:text-3xl lg:text-5xl lg:leading-[56.88px] text-center ${className}`}
        >
            {text} <span className='text-darkRed'>{redText}</span> <span className='text-offBlack'>{blackText}</span>
        </h2>
    );
};

export default PrimaryHeading;
