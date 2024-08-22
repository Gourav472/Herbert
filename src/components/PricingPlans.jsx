import PrimaryHeading from "../common/PrimaryHeading"
import PrimaryParagraph from "../common/PrimaryParagraph"

const PricingPlans = () => {
    return (
        <div className=' py-[64px] lg:py-20 bg-offOrange'>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <PrimaryHeading text="Friendly Pricing" redText="Plans" />
                    <PrimaryParagraph className="pt-4 max-sm:pt-[14px] max-w-[515px]" text="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." />
                </div>
            </div>
        </div>
    )
}

export default PricingPlans