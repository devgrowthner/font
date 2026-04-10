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
  const router = useRouter();
  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

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
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const services = [
    { name: 'Custom AI Development', link: '/custom-ai', tag: 'Custom AI Development', isExternal: false },
    { name: 'AI Competitive Strategy Report', link: 'https://competitorinsights.com.au/', tag: 'Strategic Intelligence', isExternal: true },
    { name: 'CareCob: AI Companion', link: '/solutions', tag: 'Healthcare AI', isExternal: false },
    { name: 'AI Automation', link: '/ai-automation', tag: 'Process Optimization', isExternal: false },
    { name: 'AI Feasibility Analysis', link: '/ai-feasibility-analysis', tag: 'Strategic Insights', isExternal: false },
    {
      name: 'AI Development — Sydney',
      link: '/ai-development-company-sydney',
      tag: 'Local AI engineering & ROI',
      isExternal: false,
    },
    {
      name: 'AI Development — Melbourne',
      link: '/ai-development-company-melbourne',
      tag: 'Custom AI & ROI focus',
      isExternal: false,
    },
    {
      name: 'AI Development — Brisbane',
      link: '/ai-development-company-in-brisbane',
      tag: 'Chatbots, agents & automation',
      isExternal: false,
    },
  ];

  const navLinks = [
    { name: 'Learn More', href: '/what-is-zynex', isRoute: true }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (link, isExternal, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsServicesOpen(false);
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
                  className="block h-40 sm:h-44 md:h-48 lg:h-64 w-auto object-contain transition-all duration-300 drop-shadow-sm hover:drop-shadow-md"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center flex-1 justify-end shrink-0">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Link href="/" className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>
                </Link>

                {/* Services Dropdown */}
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group flex items-center gap-1 hover:text-brand-green"
                  >
                    Services
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>
                  </button>

                  {isServicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(42rem,calc(100vw-2rem))] sm:w-[min(48rem,calc(100vw-2rem))] lg:w-[min(52rem,calc(100vw-2rem))] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden z-50">
                      <div className="p-3 sm:p-4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                          {services.map((service, index) => (
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

                <Link href="/blogs" className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">
                  Blogs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>
                </Link>

                {navLinks.map(link => (
                  <Link key={link.name} href={link.href} className="cursor-pointer text-gray-700 px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap relative group hover:text-brand-green">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></span>
                  </Link>
                ))}

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-white px-3 lg:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 whitespace-nowrap"
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
                <Link href="/" className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>
                  Home
                </Link>

                {/* Mobile Services Section */}
                <div ref={mobileServicesRef}>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setIsServicesOpen(!isServicesOpen); }} className="text-gray-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green">
                    <span>Services</span>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isServicesOpen && (
                    <div className="mt-2 space-y-1" onClick={(e) => e.stopPropagation()}>
                      {services.map((service, index) => (
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

                <Link href="/blogs" className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>
                  Blogs
                </Link>

                {navLinks.map(link => (
                  <Link key={link.name} href={link.href} className="text-gray-700 block px-4 py-2.5 rounded-lg text-base font-medium w-full text-center cursor-pointer hover:bg-white/70 active:bg-white/90 transition-all duration-300 transform active:scale-95 hover:text-brand-green" onClick={handleLinkClick}>
                    {link.name}
                  </Link>
                ))}

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