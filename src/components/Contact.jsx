'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefdfb] to-[#faf9f6] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
            GET IN TOUCH
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 mb-4 sm:mb-6 text-foreground leading-tight px-2">
            Ready to <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transform</span> Your Business?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-body">
            Let's discuss how our AI solutions can accelerate your growth. Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-foreground mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-5 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base text-foreground mb-1 font-heading">Email</div>
                    <a href="mailto:hello@zanextech.com" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-body break-all">
                      contact@zynextech.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base text-foreground mb-1 font-heading">Phone</div>
                    <a className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                      +61 435044671
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base text-foreground mb-1 font-heading">Location</div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-body">
                      Victoria, Australia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-foreground mb-2 font-body">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2 font-body">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-foreground mb-2 font-body">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2 font-body">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and how we can help..."
                  rows="5"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none font-body"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.5)] shadow-[0_4px_15px_rgba(59,130,246,0.3)] min-h-[48px] sm:min-h-[56px]"
              >
                Send Message
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
