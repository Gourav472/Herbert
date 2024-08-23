import footerLogo from '../assets/images/webp/footer-logo.webp'
import PrimaryParagraph from '../common/PrimaryParagraph'

const Footer = () => {
    return (
        <div className='pt-[212px] bg-offOrange'>
            <div className='container'>
                <div className="flex flex-row flex-wrap -mx-3 pb-[50px]">
                    <div className="w-5/12 px-3">
                        <div className='flex flex-col'>
                            <a href="home"><img className='max-w-[326px]' src={footerLogo} alt="herbert-logo" /></a>
                            <PrimaryParagraph className="text-start pt-[15px]" text="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." />
                        </div>
                    </div>
                    <div className='w-2/12 px-3'>
                        <ul className='flex flex-col gap-2F'>
                            <li className='pb-2 opacity-90 font-medium text-base leading-[19px] text-offBlack'></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer