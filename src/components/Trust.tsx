import React from 'react';

const Trust: React.FC = () => {
  const trustPoints = [
    {
      title: "Global reach, local expertise",
      description: "Serving clients worldwide with deep market understanding"
    },
    {
      title: "Secure and ethical AI", 
      description: "Enterprise-grade security with responsible AI practices"
    },
    {
      title: "Tailored to your business goals",
      description: "Custom solutions designed for your unique challenges"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921262936_31aa839b.webp"
              alt="Global Business Team"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Why Companies <span className="text-amber-500">Choose Us</span>
            </h2>
            
            <div className="space-y-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
                    <p className="text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;