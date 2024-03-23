// import logo from '../logo.svg';
// import './App.css';
import {Features } from '../components/Features';
import {LandingPageHeader} from '../components/Header/LandingPageHeader';
import { Hero } from '../components/Hero';
import { PricingSection } from '../components/prices';
export  function LandingPage() {
  return (
    <div>
   <LandingPageHeader />
   < Hero title='Get Premium free for 1 month
'
amount={'$232'}
/>
<Features />
<PricingSection />
   </div>
  );
}

export default LandingPage;
