import React from 'react';

const CTA: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921262145_8f3b3a45.webp')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Let's explore how we can unlock value together.
        </p>
        
        <button 
          onClick={scrollToContact}
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;