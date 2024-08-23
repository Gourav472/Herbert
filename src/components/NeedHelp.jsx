import PrimaryHeading from '../common/PrimaryHeading'
import PrimaryParagraph from '../common/PrimaryParagraph'

const NeedHelp = () => {
    return (
        <div className='container'>
            <div className='max-w-[1140px] w-full px-5 bg-lightOrange rounded-xl max-sm:py-5 sm:py-10 md:py-14 lg:py-16 flex flex-col items-center translate-y-[134px] mt-[-14px]'>
                <PrimaryHeading className="text-white max-w-[632px]" text="Need Help in Your Visa? Ask Herbert Now!" />
                <PrimaryParagraph className="max-w-[528px] sm:pt-4 max-sm:pt-3 text-white" text="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." />
                <div className='flex max-sm:flex-col items-center gap-3 sm:gap-4 max-sm:pt-8 sm:pt-[42px]'>
                    <button className='py-[14px] max-sm:max-w-[287px] max-sm:w-full px-[23.6px] max-sm:text-sm max-sm:leading-4 rounded-lg bg-white text-lightOrange font-semibold font-rubik sm:text-base sm:leading-[18px] border border-transparent hover:shadow-[0px_-12px_10px_-10px_#FFFFFF_inset] hover:border-white duration-300 ease-linear hover:text-white hover:bg-transparent'>Start your conversation</button>
                    <button className='py-[14px] max-sm:max-w-[287px] max-sm:w-full px-[23.6px] max-sm:text-sm max-sm:leading-4 rounded-lg hover:bg-white hover:text-lightOrange font-semibold font-rubik sm:text-base sm:leading-[18px] border hover:shadow-[0px_-15px_10px_-10px_#FF9748_inset] border-white duration-300 ease-linear text-white hover:bg-transparent'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default NeedHelp