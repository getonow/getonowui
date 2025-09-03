import React from 'react';

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      title: "M&A Consulting",
      description: "Maximize value creation.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921255418_a8ee5206.webp"
    },
    {
      title: "Sales Optimization", 
      description: "Unlock growth with AI insights.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921256171_f3bb3717.webp"
    },
    {
      title: "Purchasing Solutions",
      description: "Smarter, faster sourcing.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921256981_348e89b6.webp"
    },
    {
      title: "Lean Management",
      description: "Efficiency at scale.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b87d7430bde3e8f95c3c82_1756921257751_0515b4b5.webp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-red-600">Expertise</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                <img 
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{area.title}</h3>
              <p className="text-slate-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;