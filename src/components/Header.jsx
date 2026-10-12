import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import ContactModal from './ContactModal';

import logo from '../assets/final3.png';



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  const [isErpOpen, setIsErpOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const faqRef = useRef(null);

  const router = useRouter();

  const servicesRef = useRef(null);

  const industryRef = useRef(null);

  const erpRef = useRef(null);



  const mobileServicesRef = useRef(null);

  const mobileIndustryRef = useRef(null);

  const mobileErpRef = useRef(null);





  useEffect(() => {

    let timeoutId = null;



    const handleScroll = () => {

      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {

        const currentScrollY = window.scrollY;

        const scrollDifference = Math.abs(currentScrollY - lastScrollY);

        const newScrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';



        if (currentScrollY <= 50) {

          setIsVisible(true);

        } else if (newScrollDirection === 'down' && currentScrollY > 150 && scrollDifference > 8) {

          setIsVisible(false);

        } else if (newScrollDirection === 'up' && scrollDifference > 5) {

          setIsVisible(true);

        }



        setLastScrollY(currentScrollY);

      }, 10);

    };



    window.addEventListener("scroll", handleScroll, { passive: true });



    return () => {

      window.removeEventListener("scroll", handleScroll);

      if (timeoutId) clearTimeout(timeoutId);

    };

  }, [lastScrollY]);



  // Close dropdown when clicking outside (desktop only)

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (isOpen) return;

      if (servicesRef.current && !servicesRef.current.contains(event.target)) {

        setIsServicesOpen(false);

      }

      if (industryRef.current && !industryRef.current.contains(event.target)) {

        setIsIndustryOpen(false);

      }

      if (erpRef.current && !erpRef.current.contains(event.target)) {

        setIsErpOpen(false);

      }

    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);

  }, [isOpen]);

  useEffect(() => {
    const dismissFaq = (event) => {
      if (event.type === 'keydown') {
        if (event.key === 'Escape') {
          setIsFaqOpen(false);
          faqRef.current?.querySelector('button')?.focus();
        }
      } else if (!isOpen && faqRef.current && !faqRef.current.contains(event.target)) {
        setIsFaqOpen(false);
      }
    };
    if (!isFaqOpen) return;
    document.addEventListener('mousedown', dismissFaq);
    document.addEventListener('keydown', dismissFaq);
    return () => {
      document.removeEventListener('mousedown', dismissFaq);
      document.removeEventListener('keydown', dismissFaq);
    };
  }, [isFaqOpen, isOpen]);

  const faqLinks = [
    { name: 'How Can Small Businesses Move from Excel to Odoo?', href: '/faq/excel-to-odoo-small-business' },
    { name: 'How Long Does an Odoo Implementation Take?', href: '/faq/how-long-does-an-odoo-implementation-take' },
    { name: 'Does the Privacy Act Apply to Small Businesses Using AI Tools?', href: '/faq/privacy-act-small-business-exemption-ai' },
  ];

  const toggleFaq = () => {
    setIsFaqOpen(open => !open);
    setIsServicesOpen(false);
    setIsIndustryOpen(false);
    setIsErpOpen(false);
  };



  const servicesItems = [

    { name: 'Custom AI Development', link: '/custom-ai', tag: 'Custom AI Development', isExternal: false },

    { name: 'AI Competitive Strategy Report', link: '/strategy-report', tag: 'Strategic Intelligence', isExternal: false },

    { name: 'CareCob: AI Companion', link: '/solutions', tag: 'Healthcare AI', isExternal: false },

    { name: 'AI Automation', link: '/ai-automation', tag: 'Process Optimization', isExternal: false },

    { name: 'AI Feasibility Analysis', link: '/ai-feasibility-analysis', tag: 'Strategic Insights', isExternal: false },

    { name: 'AI Security Services', link: '/ai-security-services-australia', tag: 'AI Risk, Privacy & Protection', isExternal: false },

  ];



  const industryServices = [

    {

      name: 'AI Solution for Healthcare Clinics (Australia)',

      link: '/ai-solution-healthcare-clinics-australia',

      tag: 'GP, dental & allied health',

      isExternal: false,

    },

    {

      name: 'Healthcare ERP, CRM & AI Automation (Australia)',

      link: '/healthcare-erp-crm-ai-automation-australia',

      tag: 'Clinic workflows, ERP & CRM',

      isExternal: false,

    },

    {

      name: 'AI Solution for Hospitality (Australia)',

      link: '/ai-solution-hospitality-businesses-australia',

      tag: 'Restaurants, cafes & venue groups',

      isExternal: false,

    },

    {

      name: 'AI Development for Construction (Australia)',

      link: '/ai-development-company-construction-businesses-australia',

      tag: 'Builders, contractors & project firms',

      isExternal: false,

    },

    {

      name: 'Construction ERP, CRM & AI Automation (Australia)',

      link: '/construction-erp-crm-ai-automation-australia',

      tag: 'Workflow automation, ERP & CRM',

      isExternal: false,

    },

    {

      name: 'AI Development for Small Businesses (Australia)',

      link: '/ai-development-for-small-businesses-australia',

      tag: 'SMB automation & lead capture',

      isExternal: false,

    },

    {

      name: 'Small Business ERP, CRM & AI Automation (Australia)',

      link: '/small-business-erp-crm-ai-automation-australia',

      tag: 'Process automation, ERP & CRM',

      isExternal: false,

    },

    {

      name: 'AI Development for Legal Firms (Australia)',

      link: '/ai-development-company-legal-firms-australia',

      tag: 'Document review & client intake',

      isExternal: false,

    },

    {

      name: 'AI Development for Real Estate (Australia)',

      link: '/ai-development-company-for-real-estate-australia',

      tag: 'Listings, leads & property management',

      isExternal: false,

    },

  ];



  const erpServices = [

    {

      name: 'Odoo ERP Development',

      link: '/odoo-erp-development-company-australia',

      tag: 'Open-source ERP solution',

      isExternal: false,

    },

    {

      name: 'ERPNext Implementation',

      link: '/erpnext-implementation-company-australia',

      tag: 'Open-source ERP platform',

      isExternal: false,

    },

    {

      name: 'SAP ERP Implementation',

      link: '/sap-erp-implementation-company-australia',

      tag: 'Enterprise SAP ERP deployment',

      isExternal: false,

    },

    {

      name: 'Zoho ERP Development',

      link: '/zoho-erp-development-company-australia',

      tag: 'Cloud-based ERP system',

      isExternal: false,

    },

    {

      name: 'Salesforce Implementation',

      link: '/salesforce-implementation-customization-services-australia',

      tag: 'CRM automation & customisation',

      isExternal: false,

    },

  ];



  const navLinks = [

    { name: 'Learn More', href: '/what-is-zynex', isRoute: true }

  ];



  const handleLinkClick = () => {
    setIsFaqOpen(false);
    setIsIndustryOpen(false);

    setIsOpen(false);

    setIsServicesOpen(false);

    setIsErpOpen(false);

  };



  const handleServiceClick = (link, isExternal, e) => {
    setIsFaqOpen(false);

    if (e) {

      e.preventDefault();

      e.stopPropagation();

    }

    setIsServicesOpen(false);

    setIsIndustryOpen(false);

    setIsErpOpen(false);

    setIsOpen(false);



    if (isExternal) {

      window.open(link, '_blank', 'noopener,noreferrer');

    } else {

      router.push(link);

    }

  };



  return (

    <>

      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4 sm:px-6 transition-all duration-300 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>

        <div className="w-full max-w-7xl bg-white/95 border border-gray-200/50 rounded-full px-4 sm:px-6 shadow-lg">

          <div className="flex justify-between items-center h-12 sm:h-12 md:h-14 lg:h-16">

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">

              <Link href="/" className="flex items-center justify-center group -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-5">

                <img

                  src={logo.src}

                  alt="ZynexTech Logo"

                  className="block h-40 sm:h-44 md:h-48 lg:h-56 w-auto object-contain transition-all duration-300 drop-shadow-sm hover:drop-shadow-md"

                />

              </Link>

            </div>



            {/* Desktop Menu */}

            <div className="hidden xl:flex items-center flex-1 min-w-0 justify-end">

              <div className="flex items-center gap-1">

                {/* Services Dropdown */}

                <div className="relative" ref={servicesRef}>

                  <a

                    href="/custom-ai"

                    onClick={(event) => {

                      event.preventDefault();

                      setIsFaqOpen(false); setIsServicesOpen(!isServicesOpen);

                    }}

                    className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"

                  >

                    AI Services

                    <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </a>



                  {isServicesOpen && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(34rem,calc(100vw-2rem))] sm:w-[min(38rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">

                      <div className="p-3 sm:p-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                          {servicesItems.map((service, index) => (

                            <a
                              href={service.link}
                              key={index}
                              onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}
                              className="w-full text-left rounded-xl px-3 py-2.5 sm:py-3 text-sm text-gray-700 border border-transparent hover:bg-gray-50/80 hover:border-gray-100 transition-all duration-200 flex items-start gap-2 group"
                            >

                              <div className="flex-1 min-w-0">

                                <div className="font-semibold leading-snug group-hover:text-brand-green transition-colors">{service.name}</div>

                                <div className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">{service.tag}</div>

                              </div>

                              <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-brand-green transition-all duration-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                              </svg>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>


                 {/* Industry Dropdown */}

                <div className="relative" ref={industryRef}>

                  <a

                    href="/solutions"

                    onClick={(event) => {

                      event.preventDefault();

                      setIsFaqOpen(false); setIsIndustryOpen(!isIndustryOpen);

                      setIsServicesOpen(false);

                    }}

                    className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"

                  >

                    Industry

                    <svg className={`w-4 h-4 transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </a>



                  {isIndustryOpen && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(42rem,calc(100vw-2rem))] sm:w-[min(48rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">

                      <div className="p-3 sm:p-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                          {industryServices.map((service, index) => (

                            <a
                              href={service.link}
                              key={index}
                              onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}
                              className="w-full text-left rounded-xl px-3 py-2.5 sm:py-3 text-sm text-gray-700 border border-transparent hover:bg-gray-50/80 hover:border-gray-100 transition-all duration-200 flex items-start gap-2 group"
                            >

                              <div className="flex-1 min-w-0">

                                <div className="font-semibold leading-snug group-hover:text-brand-green transition-colors">{service.name}</div>

                                <div className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">{service.tag}</div>

                              </div>

                              <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-brand-green transition-all duration-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                              </svg>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>



                {/* ERP Dropdown */}

                <div className="relative" ref={erpRef}>

                  <a

                    href="/odoo-erp-development-company-australia"

                    onClick={(event) => {

                      event.preventDefault();

                      setIsFaqOpen(false); setIsErpOpen(!isErpOpen);

                      setIsServicesOpen(false);

                      setIsIndustryOpen(false);

                    }}

                    className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"

                  >

                    ERP services

                    <svg className={`w-4 h-4 transition-transform duration-300 ${isErpOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </a>



                  {isErpOpen && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(32rem,calc(100vw-2rem))] sm:w-[min(36rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">

                      <div className="p-3 sm:p-4">

                        <div className="grid grid-cols-1 gap-2">

                          {erpServices.map((service, index) => (

                            <a
                              href={service.link}

                              key={index}

                              onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}

                              className="w-full text-left rounded-xl px-3 py-2.5 sm:py-3 text-sm text-gray-700 border border-transparent hover:bg-gray-50/80 hover:border-gray-100 transition-all duration-200 flex items-start gap-2 group"

                            >

                              <div className="flex-1 min-w-0">

                                <div className="font-semibold leading-snug group-hover:text-brand-green transition-colors">{service.name}</div>

                                <div className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">{service.tag}</div>

                              </div>

                              <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-brand-green transition-all duration-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                              </svg>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>


                <Link href="/blogs" className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">

                  Blogs

                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                </Link>

                <div className="relative" ref={faqRef}>
                  <button type="button" aria-expanded={isFaqOpen} aria-controls="desktop-faq-links" onClick={toggleFaq} className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 hover:text-brand-green">
                    FAQ
                    <svg className={`w-4 h-4 transition-transform ${isFaqOpen ? 'rotate-180' : ''}`} aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isFaqOpen && (
                    <div id="desktop-faq-links" className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-gray-200/50 rounded-2xl shadow-xl p-3 z-50">
                      {faqLinks.map(link => <Link key={link.href} href={link.href} onClick={handleLinkClick} className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green">{link.name}</Link>)}
                    </div>
                  )}
                </div>

                <Link href="/news" className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">

                  News

                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                </Link>





                {navLinks.map(link => (

                  <Link key={link.name} href={link.href} className="cursor-pointer text-gray-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">

                    {link.name}

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </Link>

                ))}



                {/* <a href="tel:0392922022" className="hidden md:inline-flex items-center gap-2 text-gray-700 bg-white border border-brand-green/20 px-3 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap hover:border-brand-green hover:bg-green-50 hover:text-brand-green shadow-sm">

                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.3 12.3 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.11-.45 12.3 12.3 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />

                  </svg>

                  03 9292 2022

                </a> */}

                <a

                  href="https://calendly.com/zynex-technologies/30min"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="hidden md:inline-flex items-center gap-2 text-white px-4 lg:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg min-w-fit"

                  style={{ background: 'linear-gradient(to right, #719334, #719334)' }}

                >

                  Book a call

                </a>



                <button

                  onClick={() => setIsModalOpen(true)}

                  className="text-white px-3 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 whitespace-nowrap"

                  style={{ background: 'linear-gradient(to right, #719334, #719334)' }}

                >

                  Connect with us

                </button>

              </div>

            </div>



            {/* Mobile menu button */}

            <div className="xl:hidden flex items-center justify-end shrink-0">

              <button

                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}

                className="text-gray-600 hover:text-gray-900 p-1 sm:p-1.5 rounded-lg hover:bg-white/50 active:bg-white/70 transition-all duration-300"

              >

                {isOpen ? (

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <line x1="18" y1="6" x2="6" y2="18"></line>

                    <line x1="6" y1="6" x2="18" y2="18"></line>

                  </svg>

                ) : (

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <line x1="3" y1="12" x2="21" y2="12"></line>

                    <line x1="3" y1="6" x2="21" y2="6"></line>

                    <line x1="3" y1="18" x2="21" y2="18"></line>

                  </svg>

                )}

              </button>

            </div>

          </div>

        </div>



        {/* Mobile menu */}

        {isOpen && (

          <div className="absolute top-full left-4 right-4 mt-2 xl:hidden" data-mobile-menu>

            <div className="bg-white/95 shadow-xl rounded-2xl border border-gray-200/50 overflow-hidden">

              <div className="px-3 py-3 space-y-2">

                {/* Mobile Services Section */}

                <div ref={mobileServicesRef}>

                  <a href="/custom-ai" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFaqOpen(false); setIsServicesOpen(!isServicesOpen); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                    <span>AI Services</span>

                    <svg className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                  </a>



                  {isServicesOpen && (

                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>

                      {servicesItems.map((service, index) => (

                        <a
                          href={service.link}
                          key={index}
                          onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}
                          className="text-gray-600 block px-4 py-2 rounded-lg text-sm font-medium w-full text-left cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green"
                        >

                          <div className="font-semibold">{service.name}</div>

                          <div className="text-xs text-gray-500 mt-0.5">{service.tag}</div>

                        </a>

                      ))}

                    </div>

                  )}

                </div>



                {/* Mobile Industry Section */}

                <div ref={mobileIndustryRef}>

                  <a href="/solutions" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFaqOpen(false); setIsIndustryOpen(!isIndustryOpen); setIsServicesOpen(false); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                    <span>Industry</span>

                    <svg className={`w-5 h-5 transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                  </a>



                  {isIndustryOpen && (

                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>

                      {industryServices.map((service, index) => (

                        <a
                          href={service.link}
                          key={index}
                          onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}
                          className="text-gray-600 block px-4 py-2 rounded-lg text-sm font-medium w-full text-left cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green"
                        >

                          <div className="font-semibold">{service.name}</div>

                          <div className="text-xs text-gray-500 mt-0.5">{service.tag}</div>

                        </a>

                      ))}

                    </div>

                  )}

                </div>



                {/* Mobile ERP Section */}

                <div ref={mobileErpRef}>

                  <a href="/odoo-erp-development-company-australia" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFaqOpen(false); setIsErpOpen(!isErpOpen); setIsServicesOpen(false); setIsIndustryOpen(false); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                    <span>ERP services</span>

                    <svg className={`w-5 h-5 transition-transform duration-300 ${isErpOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                  </a>



                  {isErpOpen && (

                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>

                      {erpServices.map((service, index) => (

                        <a
                          href={service.link}

                          key={index}

                          onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}

                          className="text-gray-600 block px-4 py-2 rounded-lg text-sm font-medium w-full text-left cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green"

                        >

                          <div className="font-semibold">{service.name}</div>

                          <div className="text-xs text-gray-500 mt-0.5">{service.tag}</div>

                        </a>

                      ))}

                    </div>

                  )}

                </div>



                <Link href="/blogs" className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>

                  Blogs

                </Link>

                <div>
                  <button type="button" aria-expanded={isFaqOpen} aria-controls="mobile-faq-links" onClick={toggleFaq} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full cursor-pointer hover:text-brand-green">
                    FAQ
                    <svg className={`w-5 h-5 transition-transform ${isFaqOpen ? 'rotate-180' : ''}`} aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isFaqOpen && <div id="mobile-faq-links" className="mt-2 space-y-1">{faqLinks.map(link => <Link key={link.href} href={link.href} onClick={handleLinkClick} className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-green">{link.name}</Link>)}</div>}
                </div>

                <Link href="/news" className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>

                  News

                </Link>



                {navLinks.map(link => (

                  <Link key={link.name} href={link.href} className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>

                    {link.name}

                  </Link>

                ))}



                <a href="tel:0392922022" className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                  03 9292 2022

                </a>

                <a

                  href="https://calendly.com/zynex-technologies/30min"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="text-white block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 min-w-fit"

                  style={{ background: 'linear-gradient(to right, #719334, #719334)' }}

                >

                  Book a call

                </a>



                <button className="text-white block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95" style={{ background: 'linear-gradient(to right, #719334, #719334)' }} onClick={() => { setIsModalOpen(true); handleLinkClick(); }}>

                  Connect with us

                </button>

              </div>

            </div>

          </div>

        )}

      </nav>



      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>

  );

};



export default Header;
