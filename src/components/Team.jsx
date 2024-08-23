import PrimaryHeading from '../common/PrimaryHeading'
import PrimaryParagraph from '../common/PrimaryParagraph'
import teamImage from '../assets/images/webp/team-image.webp'
import PrimaryButton from '../common/PrimaryButton'
import manRight from '../assets/images/webp/hello-man-right.webp'
import teamVector from '../assets/images/webp/team-vector.webp'

const Team = () => {
    return (
        <div className='xl:pt-[283px] pt-16 pb-[79px] sm:py-28 md:py-44 lg:py-52 xl:pb-[267px] relative'>
            <div className='container relative z-20'>
                <div className='flex justify-between max-lg:flex-wrap max-lg:flex-col-reverse sm:items-center gap-6'>
                    <div className='sm:pt-12 lg:pt-0 flex flex-col'>
                        <PrimaryHeading className="text-nowrap text-start" text="Team" redText="&" blackText="Resources" />
                        <PrimaryParagraph className="max-w-[470px] pt-[14px] sm:pt-4 text-start" text="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus." />
                        <img className='max-w-[261px] w-full mt-[35px] sm:hidden' src={manRight} alt="hello" />
                        <ul className='list-disc list-inside flex flex-col pt-8 sm:pt-3'>
                            <li className='text-offGray sm:text-base font-normal max-sm:text-sm max-sm:leading-7 sm:leading-6'>Single entrepreneur (yourself)</li>
                            <li className='text-offGray sm:text-base font-normal max-sm:text-sm max-sm:leading-7 sm:leading-6'>Outsourced development to freelancers</li>
                            <li className='text-offGray sm:text-base font-normal max-sm:text-sm max-sm:leading-7 sm:leading-6'>Budget: $15,000</li>
                        </ul>
                        <PrimaryButton className="sm:max-w-[137px] max-sm:max-w-[126px] max-sm:py-[12px] max-sm:text-sm max-lg:leading-4 mt-8 sm:mt-[42px]" text="Learn more" />
                    </div>
                    <img className='max-w-[450px] lg:max-w-[500px] max-sm:hidden xl:hidden w-full' src={teamImage} alt="team" />
                </div>
            </div>
            <img className='max-w-[701px] max-xl:hidden w-full absolute right-0 top-[141px]' src={teamImage} alt="team" />
            <img className="max-sm:hidden absolute left-[-1px] top-[18%] pointer-events-none" src={teamVector} alt="left-vector" />

        </div>
    )
}

export default Team