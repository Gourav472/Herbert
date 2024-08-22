import Hero from './components/Hero';
import './App.css';
import MainFeatures from './components/MainFeatures';
import PricingPlans from './components/PricingPlans';

function App() {
  return (
    <div className=' relative overflow-hidden'>
      <Hero />
      <MainFeatures />
      <PricingPlans />
    </div>
  );
}

export default App;
