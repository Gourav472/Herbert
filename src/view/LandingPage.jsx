import Hero from '../components/Hero';
import MainFeatures from '../components/MainFeatures';
import PricingPlans from '../components/PricingPlans';
import Team from '../components/Team';
import Faqs from '../components/Faqs';
import NeedHelp from '../components/NeedHelp';
import Footer from '../components/Footer';
import ScrollToTop from '../common/ScrollToTop';
import PreLoader from '../common/PreLoader';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <MainFeatures />
            <PricingPlans />
            <Team />
            <Faqs />
            <NeedHelp />
            <Footer />
            <ScrollToTop />
            <PreLoader />
        </div>
    )
}

export default LandingPage