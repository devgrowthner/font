import React from 'react';

const FooterCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(122,130,80,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(122,130,80,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(113, 147, 52, 0.2)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #719334, #719334, #719334)' }}></div>

            <div className="p-8 sm:p-12 lg:p-16">
              {/* Icon Badge */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #719334, #719334)' }}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground text-center mb-4 sm:mb-6 leading-tight">
                Ready to Build Your{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AI Advantage?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-body">
                Whether you need a feasibility analysis, competitive strategy, or full custom AI development, 
                we're ready to help you achieve measurable results. Let's start the conversation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center mb-8 sm:mb-10">
                <button className="group inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto" style={{ background: 'linear-gradient(to right, #719334, #719334)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(113, 147, 52, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'; }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book a Discovery Call</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* <button className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border-2 border-[#0ea5e9]/40 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/10 hover:-translate-y-1 w-full sm:w-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Submit a Use Case</span>
                </button> */}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">No Commitment Required</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Free Consultation</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Rapid Response</span>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
          </div>

          {/* Bottom Contact Info */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-2 font-body">
              Prefer email?
            </p>
            <a 
              href="mailto:contact@zynextech.com" 
              className="inline-flex items-center gap-2 transition-colors duration-300 text-base sm:text-lg font-semibold group text-brand-green hover:opacity-80"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="border-b-2 border-transparent group-hover:border-green-500 transition-all duration-300">
                contact@zynextech.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
