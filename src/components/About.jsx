const About = () => {
  const outcomes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '40% Faster Time-to-Market',
      description: 'Our rapid deployment methodology gets AI solutions into production weeks ahead of industry standards.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: '3x Average ROI',
      description: 'Clients consistently achieve triple their investment through efficiency gains and revenue growth.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '95% Client Satisfaction',
      description: 'Exceptional quality and support result in long-term partnerships and repeat engagements.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Production Support',
      description: 'Round-the-clock monitoring and support ensures your AI systems run flawlessly.'
    }
  ];

  const values = [
    {
      title: 'Measurable Impact',
      description: 'No vanity metrics. Every project delivers quantifiable business value.'
    },
    {
      title: 'Radical Transparency',
      description: 'Honest feasibility assessments, clear roadmaps, and real-time progress visibility.'
    },
    {
      title: 'Speed & Quality',
      description: 'We refuse to choose—rapid deployment without compromising engineering excellence.'
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            About Zynex
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4 sm:mb-6 leading-tight">
            Insights &{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Outcomes
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            Real results from real AI implementations
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {outcome.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                {outcome.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                {outcome.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Values & Motto Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 sm:p-10 lg:p-12">
            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-purple-500"></div>

            {/* Motto */}
            <div className="text-center mb-10 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Our Motto
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-primary leading-relaxed">
                "Move fast. Build right. Deliver value."
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12 text-center">
              <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span>Learn More About Us</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
