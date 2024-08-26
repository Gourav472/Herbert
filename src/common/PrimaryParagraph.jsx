import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react';

const PrimaryParagraph = ({ text, className }) => {
    const paragraphRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (!paragraphRef.current) return;
            const rect = paragraphRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementInView = rect.top < windowHeight && rect.bottom >= 0;

            if (elementInView && !hasAnimated) {
                setHasAnimated(true);
                gsap.to(paragraphRef.current, {
                    delay: 0.9,
                    duration: 0.7,
                    x: 0,
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
        <p
            ref={paragraphRef}
            className={`${className} translate-x-[-100%] opacity-0 max-sm:text-sm paragraph-animation max-sm:leading-[21px] font-normal sm:text-base sm:leading-6 text-center text-offGray`}
        >
            {text}
        </p>
    );
};

export default PrimaryParagraph;
