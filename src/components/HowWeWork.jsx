import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We dive deep into your business challenge, assess technical feasibility, evaluate data readiness, and quantify potential ROI.",
      duration: "1-2 weeks",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: "We develop a comprehensive AI strategy, design custom architecture, and create a detailed implementation roadmap with clear milestones.",
      duration: "1-2 weeks",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Build & Iterate",
      description: "Our engineering team builds your custom AI solution using agile sprints, with continuous testing, validation, and refinement.",
      duration: "4-12 weeks",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Deploy & Optimize",
      description: "We deploy to production, integrate with your systems, train your team, and continuously optimize based on real-world performance data.",
      duration: "Ongoing",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#f8f7f4] to-[#fafaf8]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(113,147,52,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(113,147,52,0.02),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-4 sm:mb-5 shadow-sm text-brand-green">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Our Process
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
            How We{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Work
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-body">
            A proven methodology that delivers results, fast
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop View - Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              {/* <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div> */}
              
              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative pt-6">
                    {/* Number Badge */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 z-10" style={{ background: 'linear-gradient(to bottom right, #719334, #719334)' }}>
                      {step.number}
                    </div>
                    
                    {/* Step Card */}
                    <div className="relative bg-white rounded-2xl p-6 sm:p-7 pt-8 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(113,147,52,0.15)] hover:-translate-y-2 group overflow-hidden h-full flex flex-col">
                      

                      {/* Icon */}
                      <div className="mt-4 mb-4 flex justify-center">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.2))', color: '#719334' }}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center font-body flex-grow">
                        {step.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center justify-center gap-2 text-xs font-semibold mt-auto" style={{ color: '#719334' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{step.duration}</span>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), rgba(113, 147, 52, 0.05))' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View - Vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pt-2">
                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-green-500/30 to-green-500/10 -z-10"></div>
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(113,147,52,0.15)] group overflow-visible">
                  <div className="flex gap-4">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 z-10" style={{ background: 'linear-gradient(to bottom right, #719334, #719334)' }}>
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-heading font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ml-2" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.2))', color: '#719334' }}>
                          {step.icon}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed mb-3 font-body">
                        {step.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#719334' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), rgba(113, 147, 52, 0.05))' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
