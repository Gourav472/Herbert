import applicationIcon from '../assets/images/svg/application.svg'
import checklistIcon from '../assets/images/svg/checklist.svg'
import languageIcon from '../assets/images/svg/language.svg'
import number1Icon from '../assets/images/svg/number1.svg'
import number2Icon from '../assets/images/svg/number2.svg'
import number3Icon from '../assets/images/svg/number3.svg'
import number4Icon from '../assets/images/svg/number4.svg'
import number5Icon from '../assets/images/svg/number5.svg'
import number6Icon from '../assets/images/svg/number6.svg'
import basicIcon from '../assets/images/svg/basic.svg'
import standerdIcon from '../assets/images/svg/standerd.svg'
import premiumIcon from '../assets/images/svg/premium.svg'

export const NAV_ITEMS_DATA = [
    {
        url: "#herbert",
        text: "Herbert"
    },
    {
        url: "#sources",
        text: "Sources"
    },
    {
        url: "#vision",
        text: "Our Vision"
    }
];
export const FEATURES_CARDS_DATA = [
    {
        icon: applicationIcon,
        heading: "Interactive Forms",
        text: "Simplify visa application forms",
    },
    {
        icon: checklistIcon,
        heading: "Document Checklist",
        text: "Personalized document preparation",
    },
    {
        icon: languageIcon,
        heading: "Language Assistance",
        text: "German language skills assessment",
    },
];
export const TOURISM_DATA = [
    {
        numberIcon: number1Icon,
        text: "Find out which visa you might want",
    },
    {
        numberIcon: number2Icon,
        text: "Receive a checklist with all necessary documents",
    },
    {
        numberIcon: number3Icon,
        text: "Write your CV / Motivation Letter with Herbert",
    },
];
export const WORK_DATA = [
    {
        numberIcon: number4Icon,
        text: "Help prepare for your visa interview",
    },
    {
        numberIcon: number5Icon,
        text: "Practice your German interactively with Herbert",
    },
    {
        numberIcon: number6Icon,
        text: "Let Herbert guide you through your fresh start in Germany once you get there.",
    },
];
export const PRICING_PLANS_DATA = [
    {
        heading: "$5/mo",
        quality: basicIcon,
        text: "Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.",
        messages: "10 messages",
        button: "Upgrade to Basic",
    },
    {
        heading: "$10/mo",
        quality: standerdIcon,
        text: "Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.",
        messages: "25 messages",
        button: "Upgrade to Standard",
    },
    {
        heading: "$20/mo",
        quality: premiumIcon,
        text: "Have Herbert accompany you throughout your entire visa application journey. With extensive message credits, you can ask questions whenever you need, ensuring a smooth and informed experience.",
        messages: "50 messages",
        button: "Upgrade to Premium",
    },
];