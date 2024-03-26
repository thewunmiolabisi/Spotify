// src/app/Pages/LandingPage.jsx
import React from 'react';
// import logo from '../logo.svg';
// import './App.css';
import { Features } from '../components/Features';
import { LandingPageHeader } from '../components/Header/LandingPageHeader';
import { Hero } from '../components/Hero';
import { PricingSection } from '../components/prices';
import Footer from '../components/footer'; 

export function LandingPage() {
  return (
    <div>
      <LandingPageHeader />
      <Hero title='Get Premium free for 1 month' amount={'$232'}/>
      <Features />
      <PricingSection />
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default LandingPage;
