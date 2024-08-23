import Hero from './components/Hero';
import './App.css';
import MainFeatures from './components/MainFeatures';
import PricingPlans from './components/PricingPlans';
import Team from './components/Team';
import Faqs from './components/Faqs';
import NeedHelp from './components/NeedHelp';
import Footer from './components/Footer';

function App() {
  return (
    <div className=' relative overflow-hidden'>
      <Hero />
      <MainFeatures />
      <PricingPlans />
      <Team />
      <Faqs />
      <NeedHelp />
      <Footer />
    </div>
  );
}

export default App;
