import featuresBottomImage from '../assets/images/webp/features-bottom-image.webp'
import featuresImage from '../assets/images/webp/features-image.webp'
import { FEATURES_CARDS_DATA, TOURISM_DATA, WORK_DATA, } from '../common/Helper'
import PrimaryHeading from '../common/PrimaryHeading'
import PrimaryParagraph from '../common/PrimaryParagraph'
import featuresRightVector from '../assets/images/webp/features-vector-right.webp'
import featuresLeftVector from '../assets/images/webp/features-vector-left.webp'

const MainFeatures = () => {
    return (
        <div className='max-sm:pb-20 sm:pb-24 md:pb-28 lg:pb-[120px] pt-4 relative'>
            <div className='container relative z-30'>
                <div className='flex md:h-[238px] max-md:flex-wrap max-md:justify-center md:items-center max-sm:gap-3 sm:gap-6 max-sm:mt-4 sm:mt-7 md:mt-12 lg:mt-0 max-lg:mb-20 lg:translate-y-[-128px]'>
                    {FEATURES_CARDS_DATA.map((items, index) => (
                        <div key={index} className='px-5 flex flex-col border max-sm:max-h-[155px] md:max-h-[196px] md:hover:max-h-[238px] md:hover:py-[40px] bg-white border-gray rounded-lg max-sm:max-w-[327px] max-sm:py-[22px] sm:max-w-[284px] md:max-w-[364px] duration-300 ease-linear w-full hover:border-transparent hover:shadow-4xl py-5 items-center'>
                            <div className='sm:w-[56px] sm:h-[56px] max-sm:w-[48px] max-sm:h-[48px] rounded-full bg-gradientOrange flex justify-center items-center'>
                                <img width={24} height={24} src={items.icon} alt="application" />
                            </div>
                            <h3 className='font-medium max-sm:text-base max-sm:leading-[19px] text-xl leading-6 text-offBlack text-center max-sm:pt-[14px] pt-4'>{items.heading}</h3>
                            <p className='max-w-[196px] text-center max-sm:text-sm max-sm:leading-[21px] font-normal text-base leading-6 text-offGray max-sm:pt-2 pt-3'>{items.text}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    <PrimaryHeading text="Herbert Main" redText="Features" />
                    <PrimaryParagraph className="max-w-[556px] max-sm:pt-[14px] pt-4" text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed." />
                </div>
                <div className='flex justify-between max-lg:flex-wrap max-lg:justify-center gap-6 lg:gap-4 xl:gap-0 max-sm:pt-6 sm:pt-9 md:pt-12 pt-14 '>
                    <div className='lg:hidden max-lg:max-w-[500px] w-full flex justify-center'>
                        <img className='max-sm:max-w-[286px] w-full pointer-events-none lg:hidden sm:max-w-[300px]' src={featuresImage} alt="tourism" />
                    </div>
                    <div className='max-w-[151px] sm:max-w-[284px] md:max-w-[325px] max-lg:mt-5 w-full flex flex-col gap-[56px]'>
                        {TOURISM_DATA.map((items, index) => (
                            <div key={index} className='flex flex-col items-start lg:items-end gap-4'>
                                <img className='max-sm:w-[30px] max-sm:h-[30px] sm:w-[40px] sm:h-[40px]' src={items.numberIcon} alt="" />
                                <p className='font-medium text-base sm:text-xl leading-[19px] sm:leading-6 text-offBlack text-left lg:text-right'>{items.text}</p>
                            </div>
                        ))}
                    </div>
                    <img className='max-sm:max-w-[286px] pointer-events-none max-lg:hidden sm:max-w-[344px]' src={featuresImage} alt="tourism" />
                    <div className='max-w-[151px] sm:max-w-[284px] md:max-w-[325px] max-lg:mt-5 w-full flex flex-col gap-[56px]'>
                        {WORK_DATA.map((items, index) => (
                            <div key={index} className='flex flex-col items-start gap-4'>
                                <img className='max-sm:w-[30px] max-sm:h-[30px] sm:w-[40px] sm:h-[40px]' src={items.numberIcon} alt="" />
                                <p className='font-medium text-base sm:text-xl leading-[19px] sm:leading-6 text-offBlack text-left'>{items.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img className='absolute right-[-1px] top-0 pointer-events-none max-sm:hidden' src={featuresRightVector} alt="right-vector" />
            <img className='absolute left-[-1px] top-[35%] pointer-events-none max-sm:hidden' src={featuresLeftVector} alt="left-vector" />
            <img className='w-[1463px] max-sm:h-[288px] object-cover sm:h-[204px] absolute z-10 bottom-0 pointer-events-none' src={featuresBottomImage} alt="bottom-vector" />
        </div>
    )
}

export default MainFeatures