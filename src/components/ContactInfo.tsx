import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <a 
              href="https://wa.me/33638931970" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105 mb-4"
            >
              <img 
                src="https://res.cloudinary.com/dstravtwb/image/upload/v1767963853/whatsapp-logo-icon-isolated-on-transparent-background-free-png_zzvyy8.webp" 
                alt="WhatsApp" 
                className="w-12 h-12 object-contain cursor-pointer mx-auto block"
              />
            </a>
            <h3 className="text-lg font-semibold text-slate-900">Phone</h3>
            <a 
              href="https://wa.me/33638931970" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-amber-600 transition-colors cursor-pointer inline-block"
            >
              +33 6 38 93 19 70
            </a>
            <p className="text-xs text-slate-500 mt-1">Click to chat on WhatsApp</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Email</h3>
            <p className="text-slate-600">benjamin.cadic@getonow.com</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Headquarters</h3>
            <p className="text-slate-600">75015 Paris, France</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;