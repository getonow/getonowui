import React from 'react';
import Hero from './Hero';
import AkunAI from './AkunAI';
import AIAgents from './AIAgents';
import Expertise from './Expertise';
import Trust from './Trust';
import CTA from './CTA';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/6824f1e74792863c7aa3b60f_1756922613809_350ed27a.png" 
            alt="Getonow Logo" 
            className="h-32 w-auto"
          />
        </div>
      </header>
      
      <Hero />
      <AkunAI />
      <AIAgents />
      <Expertise />
      <Trust />
      <CTA />
      
      {/* CEO & Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our CEO & Founder</h2>
          <div className="max-w-2xl mx-auto">
            <img 
              src="/ceo-portrait new.jpg" 
              alt="Ben Cadic - CEO & Founder" 
              className="w-80 h-96 object-cover rounded-lg mx-auto mb-6 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ben Cadic</h3>
            <p className="text-lg text-gray-600 mb-4">CEO & Founder</p>
            <p className="text-gray-700 leading-relaxed">
              Leading the vision of transforming business operations through innovative AI solutions, 
              Ben brings years of experience in technology and entrepreneurship to drive Getonow's mission forward.
            </p>
          </div>
        </div>
      </section>
      
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default AppLayout;
