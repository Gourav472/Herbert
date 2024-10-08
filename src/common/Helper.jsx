import applicationIcon from '../assets/images/svg/application.svg'
import basicIcon from '../assets/images/svg/basic.svg'
import checklistIcon from '../assets/images/svg/checklist.svg'
import languageIcon from '../assets/images/svg/language.svg'
import number1Icon from '../assets/images/svg/number1.svg'
import number2Icon from '../assets/images/svg/number2.svg'
import number3Icon from '../assets/images/svg/number3.svg'
import number4Icon from '../assets/images/svg/number4.svg'
import number5Icon from '../assets/images/svg/number5.svg'
import number6Icon from '../assets/images/svg/number6.svg'
import premiumIcon from '../assets/images/svg/premium.svg'
import standerdIcon from '../assets/images/svg/standerd.svg'

export const NAV_ITEMS_DATA = [
    {
        path: "/",
        text: "Herbert"
    },
    {
        path: "/sources",
        text: "Sources"
    },
    {
        path: "/vision",
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
    {
        numberIcon: number5Icon,
        text: "Practice your German interactively with Herbert",
    },
];
export const WORK_DATA = [
    {
        numberIcon: number2Icon,
        text: "Receive a checklist with all necessary documents",
    },
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
export const FAQS = [
    {
        question: "What is Herbert?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "How accurate is the information provided by Herbert?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "How can I access Herbert?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "How can Herbert help me with my visa application?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "Is Herbert available in multiple languages?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "Can Herbert help me fill out my visa application forms?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    }
];
export const FOOTER_LINKS_DATA = [
    { text: "Services", url:"#services", },
    { text: "About Us", url:"#about", },
    { text: "Features", url:"#features", },
    { text: "Plans", url:"#plans", },
];
export const FOOTER_SUPPORT_DATA = [
    { text: "Help Center" },
    { text: "Term & Conditions" },
    { text: "Privacy Policy" },
];