'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerLinks = {
    solutions: [
      { name: 'AI Automation', href: '/ai-automation' },
      { name: 'ERP', href: '/odoo-erp-development-company-australia' },
      { name: 'AI Security', href: '/ai-security-services-australia' },
    ],
    resources: [
      { name: 'AI & ERP Blogs', href: '/blogs' },
      { name: 'News', href: '/news' },
      { name: 'AI FAQs', href: '/faq' },
    ],
    locations: [
      { name: 'Sydney', href: '/ai-development-company-sydney', isRoute: true },
      { name: 'Melbourne', href: '/ai-development-company-melbourne', isRoute: true },
      { name: 'Brisbane', href: '/ai-development-company-in-brisbane', isRoute: true },
      { name: 'Adelaide', href: '/ai-development-company-adelaide', isRoute: true },
      { name: 'Perth', href: '/custom-ai-development-company-in-perth', isRoute: true },
      { name: 'Canberra', href: '/ai-development-company-in-canberra', isRoute: true },
      { name: 'Gold Coast', href: '/ai-development-gold-coast', isRoute: true },
      { name: 'Darwin', href: '/ai-development-company-darwin', isRoute: true },
      { name: 'Hobart', href: '/ai-development-company-in-hobart', isRoute: true },
    ],
    company: [
      { name: 'About Us', href: '/about-us', isRoute: true },
      { name: 'Learn More', href: '/what-is-zynex', isRoute: true },
      { name: 'White Label Partner', href: '/white-label-software-development-partner', isRoute: true },
      { name: 'Contact', href: '/#contact' },
    ]
  };

  return (
    <footer className="border-t border-gray-200/60 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-10">
          {/* Brand Section - Left Side */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}>
                <span className="text-white font-heading font-bold text-xl">Z</span>
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl text-foreground">
                Zynex<span className="text-brand-green">Technologies</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Zynex Technologies helps Australian SMBs with AI Automation, ERP and AI Security. We cut repetitive work, bring your operations into one system, and keep your business data protected.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.facebook.com/people/Zynex-Technologies/61580845779746/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-brand-green hover:bg-green-50 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <img 
                  src="/socialmedia/icon-facebook.svg" 
                  alt="Facebook" 
                  className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://x.com/zynextech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-brand-green hover:bg-green-50 transition-all duration-300 group"
                aria-label="Twitter/X"
              >
                <img 
                  src="/socialmedia/x.svg" 
                  alt="Twitter/X" 
                  className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://www.linkedin.com/company/zynextechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-brand-green hover:bg-green-50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <img 
                  src="/socialmedia/icon-LinkedIn.svg" 
                  alt="LinkedIn" 
                  className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
               <a 
                href="https://www.instagram.com/zynextechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-brand-green hover:bg-green-50 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <img 
                  src="/socialmedia/instagram.svg" 
                  alt="Instagram" 
                  className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Links Section - Right Side with Equal Gaps */}
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(16rem,1.5fr)] gap-x-6 gap-y-10">
            {/* AI Services */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors font-body text-sm hover:text-brand-green block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground transition-colors font-body text-sm hover:text-brand-green block">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Locations</h4>
              <ul className="space-y-2.5">
                {footerLinks.locations.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors font-body text-sm hover:text-brand-green block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="min-w-0">
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.name === 'Contact' ? (
                      <Link
                        href={link.href}
                        onClick={(event) => {
                          event.preventDefault();
                          setIsModalOpen(true);
                        }}
                        className="text-muted-foreground transition-colors font-body text-sm hover:text-brand-green block"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors font-body text-sm hover:text-brand-green block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="min-w-0 min-[400px]:col-span-2 sm:col-span-2 lg:col-span-1">
              <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Contact</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a className="text-muted-foreground text-sm hover:text-brand-green transition-colors break-all" href="mailto:support@zynextechnologies.com.au">
                    support@zynextechnologies.com.au
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.5A2.5 2.5 0 015.5 3h1A2.5 2.5 0 019 5.5v1A2.5 2.5 0 016.5 9H6a.5.5 0 00-.5.5v2A12.5 12.5 0 0018.5 22h2a.5.5 0 00.5-.5v-1A2.5 2.5 0 0021.5 18h1A2.5 2.5 0 0025 15.5v-1A2.5 2.5 0 0022.5 12h-1a.5.5 0 00-.5.5v-1A12.5 12.5 0 003.5 2H2a.5.5 0 00-.5.5v1A2.5 2.5 0 014 6h1A2.5 2.5 0 017.5 8.5v1A.5.5 0 007 10H6a2.5 2.5 0 01-2.5-2.5v-1z" />
                  </svg>
                  <a className="text-muted-foreground text-sm hover:text-brand-green transition-colors whitespace-nowrap" href="tel:0392922022">
                    03 9292 2022
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-muted-foreground text-sm">
                    117 Aspire Boulevard<br />
                    Fraser Rise, Melbourne VIC 3336<br />
                    Australia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200/60 mt-6 pt-6">
          <p className="text-muted-foreground text-xs font-body text-center">
            © {currentYear} Zynex Technologies. All rights reserved.
          </p>
        </div>
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
