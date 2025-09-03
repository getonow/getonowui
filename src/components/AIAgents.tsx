import React from 'react';

const AIAgents: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              AI Agents for <span className="text-red-600">Efficiency</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Powered M&A</h3>
                  <p className="text-slate-600">Identify better deals, faster.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sales Optimization</h3>
                  <p className="text-slate-600">Boost pipeline and close rates.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Lean Management</h3>
                  <p className="text-slate-600">Cut waste and accelerate workflows.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/6824f1e74792863c7aa3b60f_1756921189106_845982d8.png"
              alt="AI Technology - Robot Hand"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;