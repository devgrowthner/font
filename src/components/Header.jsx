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



  const servicesItems = [

    { name: 'Custom AI Development', link: '/custom-ai', tag: 'Custom AI Development', isExternal: false },

    { name: 'AI Competitive Strategy Report', link: 'https://competitorinsights.com.au/', tag: 'Strategic Intelligence', isExternal: true },

    { name: 'CareCob: AI Companion', link: '/solutions', tag: 'Healthcare AI', isExternal: false },

    { name: 'AI Automation', link: '/ai-automation', tag: 'Process Optimization', isExternal: false },

    { name: 'AI Feasibility Analysis', link: '/ai-feasibility-analysis', tag: 'Strategic Insights', isExternal: false },

  ];



  const industryServices = [

    {

      name: 'AI Solution for Healthcare Clinics (Australia)',

      link: '/ai-solution-healthcare-clinics-australia',

      tag: 'GP, dental & allied health',

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

      name: 'AI Development for Small Businesses (Australia)',

      link: '/ai-development-for-small-businesses-australia',

      tag: 'SMB automation & lead capture',

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

      name: 'Zoho ERP Development',

      link: '/zoho-erp-development-company-australia',

      tag: 'Cloud-based ERP system',

      isExternal: false,

    },

  ];



  const navLinks = [

    { name: 'Learn More', href: 'https://zynextechnologies.com.au/what-is-zynex', isRoute: true }

  ];



  const handleLinkClick = () => {

    setIsOpen(false);

    setIsServicesOpen(false);

    setIsErpOpen(false);

  };



  const handleServiceClick = (link, isExternal, e) => {

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

              <Link href="https://zynextechnologies.com.au/" className="flex items-center justify-center group -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-5">

                <img

                  src={logo.src}

                  alt="ZynexTech Logo"

                  className="block h-40 sm:h-44 md:h-48 lg:h-64 w-auto object-contain transition-all duration-300 drop-shadow-sm hover:drop-shadow-md"

                />

              </Link>

            </div>



            {/* Desktop Menu */}

            <div className="hidden md:flex items-center flex-1 justify-end shrink-0">

              <div className="flex items-center space-x-1 lg:space-x-2">

                {/* Services Dropdown */}

                <div className="relative" ref={servicesRef}>

                  <button

                    onClick={() => {

                      setIsServicesOpen(!isServicesOpen);

                    }}

                    className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"

                  >

                    AI Services

                    <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </button>



                  {isServicesOpen && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(34rem,calc(100vw-2rem))] sm:w-[min(38rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">

                      <div className="p-3 sm:p-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                          {servicesItems.map((service, index) => (

                            <button

                              key={index}

                              type="button"

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

                            </button>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>



                 {/* Industry Dropdown */}

                <div className="relative" ref={industryRef}>

                  <button

                    onClick={() => {

                      setIsIndustryOpen(!isIndustryOpen);

                      setIsServicesOpen(false);

                    }}

                    className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"

                  >

                    Industry

                    <svg className={`w-4 h-4 transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </button>



                  {isIndustryOpen && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(42rem,calc(100vw-2rem))] sm:w-[min(48rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">

                      <div className="p-3 sm:p-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                          {industryServices.map((service, index) => (

                            <button

                              key={index}

                              type="button"

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

                            </button>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>



                {/* ERP Dropdown */}

                <div className="relative" ref={erpRef}>

                  <button

                    onClick={() => {

                      setIsErpOpen(!isErpOpen);

                      setIsServicesOpen(false);

                      setIsIndustryOpen(false);

                    }}

                    className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"

                  >

                    ERP services

                    <svg className={`w-4 h-4 transition-transform duration-300 ${isErpOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                  </button>



                  {isErpOpen && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(32rem,calc(100vw-2rem))] sm:w-[min(36rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">

                      <div className="p-3 sm:p-4">

                        <div className="grid grid-cols-1 gap-2">

                          {erpServices.map((service, index) => (

                            <button

                              key={index}

                              type="button"

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

                            </button>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>



                <Link href="https://zynextechnologies.com.au/blogs" className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">

                  Blogs

                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>

                </Link>





                {navLinks.map(link => (

                  <Link key={link.name} href={link.href} className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">

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

                  Book on call

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

            <div className="md:hidden flex items-center justify-end shrink-0">

              <button

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

          <div className="absolute top-full left-4 right-4 mt-2 md:hidden" data-mobile-menu>

            <div className="bg-white/95 shadow-xl rounded-2xl border border-gray-200/50 overflow-hidden">

              <div className="px-3 py-3 space-y-2">

                {/* Mobile Services Section */}

                <div ref={mobileServicesRef}>

                  <button type="button" onClick={(e) => { e.stopPropagation(); setIsServicesOpen(!isServicesOpen); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                    <span>AI Services</span>

                    <svg className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                  </button>



                  {isServicesOpen && (

                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>

                      {servicesItems.map((service, index) => (

                        <button

                          key={index}

                          type="button"

                          onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}

                          className="text-gray-600 block px-4 py-2 rounded-lg text-sm font-medium w-full text-left cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green"

                        >

                          <div className="font-semibold">{service.name}</div>

                          <div className="text-xs text-gray-500 mt-0.5">{service.tag}</div>

                        </button>

                      ))}

                    </div>

                  )}

                </div>



                {/* Mobile Industry Section */}

                <div ref={mobileIndustryRef}>

                  <button type="button" onClick={(e) => { e.stopPropagation(); setIsIndustryOpen(!isIndustryOpen); setIsServicesOpen(false); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                    <span>Industry</span>

                    <svg className={`w-5 h-5 transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                  </button>



                  {isIndustryOpen && (

                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>

                      {industryServices.map((service, index) => (

                        <button

                          key={index}

                          type="button"

                          onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}

                          className="text-gray-600 block px-4 py-2 rounded-lg text-sm font-medium w-full text-left cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green"

                        >

                          <div className="font-semibold">{service.name}</div>

                          <div className="text-xs text-gray-500 mt-0.5">{service.tag}</div>

                        </button>

                      ))}

                    </div>

                  )}

                </div>



                {/* Mobile ERP Section */}

                <div ref={mobileErpRef}>

                  <button type="button" onClick={(e) => { e.stopPropagation(); setIsErpOpen(!isErpOpen); setIsServicesOpen(false); setIsIndustryOpen(false); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">

                    <span>ERP services</span>

                    <svg className={`w-5 h-5 transition-transform duration-300 ${isErpOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                    </svg>

                  </button>



                  {isErpOpen && (

                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>

                      {erpServices.map((service, index) => (

                        <button

                          key={index}

                          type="button"

                          onClick={(e) => handleServiceClick(service.link, service.isExternal, e)}

                          className="text-gray-600 block px-4 py-2 rounded-lg text-sm font-medium w-full text-left cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green"

                        >

                          <div className="font-semibold">{service.name}</div>

                          <div className="text-xs text-gray-500 mt-0.5">{service.tag}</div>

                        </button>

                      ))}

                    </div>

                  )}

                </div>



                <Link href="https://zynextechnologies.com.au/blogs" className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>

                  Blogs

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