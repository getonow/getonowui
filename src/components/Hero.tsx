import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921254261_a5f13c7a.webp')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Business Strategic &<br />
          <span className="text-red-400">Consulting Services</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Smarter decisions • Faster growth • AI Digital Workforce builders
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Work With Us
          </button>
          <button 
            onClick={() => scrollToSection('akunai')}
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            See AkunAI in Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;