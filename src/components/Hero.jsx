import gsap from 'gsap'
import { useLayoutEffect, } from 'react'
import helloMan from '../assets/images/webp/hero-hello-man.webp'
import heroImage from '../assets/images/webp/hero-image.webp'
import secondMan from '../assets/images/webp/hero-second-man.webp'
import Header from '../common/Header'
import PrimaryButton from '../common/PrimaryButton'
import PrimaryParagraph from '../common/PrimaryParagraph'

const Hero = () => {
  useLayoutEffect(() => {
    var tl = gsap.timeline();
    tl.to(".hello-man", {
      delay: "2",
      duration: "0.9",
      scale: 1,
    }, "<")
  });

  return (
    <div id='home' className='bg-hero-bg bg-full flex flex-col relative lg:h-[810px] xl:max-w-[1920px] xl:mx-auto'>
      <div className='container relative z-20'>
        <Header />
        <div className='pt-[72px] sm:pt-24 md:pt-28 lg:pt-32 xl:pt-[139px] pb-[78px] flex flex-col items-center'>
          <h1 className='max-sm:max-w-[320px] hello-man scale-0 font-rubik overflow-hidden sm:max-w-[420px] md:max-w-[550px] lg:max-w-[716px] text-center font-bold max-sm:text-custom-2xl leading-[33px] sm:text-4xl sm:leading-10 md:leading-[55px] md:text-5xl lg:text-custom-4xl lg:leading-[66px] text-offBlack'> Navigating <span className='text-darkRed font-rubik'>German Bureaucracy</span> with ease</h1>
          <div className='overflow-hidden'><PrimaryParagraph className="pt-[14px] sm:pt-4 max-sm:text-sm max-sm:leading-[21px]" text="Herbert Visa: Your AI-powered assistant for German visa and immigration processes" /></div>
          <PrimaryButton className="mt-8 sm:mt-9 md:mt-[42px] max-sm:max-w-[302px] max-sm:text-sm max-sm:leading-4 max-w-[338px] w-full" text="Start your conversation with Herbert" />
        </div>
      </div>
      <img className='max-w-[330px] max-sm:min-h-[372px] md:max-w-[360px] hero-image-position hello-man scale-0 lg:hidden w-full ps-[14px]' src={heroImage} alt="hero-image" />
      <img className='z-10 max-lg:hidden max-w-[329px] absolute top-[155px] lg:left-1 xl:left-[7%] hello-man scale-0' src={helloMan} alt="hero-man" />
      <img className='z-10 max-lg:hidden hello-man scale-0 max-w-[324px] absolute top-[212px] lg:right-1 xl:right-[4%]' src={secondMan} alt="hero-man" />
    </div>
  )
}

export default Hero