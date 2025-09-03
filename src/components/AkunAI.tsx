import React from 'react';

const AkunAI: React.FC = () => {
  return (
    <section id="akunai" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet <span className="text-red-600">AkunAI</span>
          </h2>
        </div>
        
        <div className="bg-slate-50 rounded-2xl p-8 shadow-xl">
          <div className="aspect-video bg-slate-900 rounded-xl mb-6 overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://d64gsuwffb70l.cloudfront.net/6824f1e74792863c7aa3b60f_1756921189106_845982d8.png"
            >
              <source 
                src="https://res.cloudinary.com/dstravtwb/video/upload/v1748594342/The_Future_is_here__Empower_Your_Negotiation_team_with_AkunAI_wwkuhz.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-slate-600 mb-6">
              Empower your negotiation team with real-time AI-driven insights.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkunAI;