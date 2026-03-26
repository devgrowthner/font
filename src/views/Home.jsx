'use client';

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhatIsZynex from "../components/WhatIsZynex";
import WhatWeDo from "../components/WhatWeDo";
import Partners from "../components/Partners";
import HowWeWork from "../components/HowWeWork";
import HowWeWorkVideo from "../components/HowWeWorkVideo";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import Schema from "../components/Schema";
import { useSeo } from "../hooks/useSeo";

const Home = () => {
  useSeo({
    title: "AI Development Company Australia | Zynex Technologies",
    description: "AI development company in Australia offering ML, chatbots, generative AI, and automation solutions to help businesses build intelligent systems.",
    canonical: "https://zynextechnologies.com.au/"
  });

  // Organization Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "zynex technologies",
    "alternateName": "zynex technologies",
    "url": "https://zynextechnologies.com.au/",
    "logo": "https://zynextechnologies.com.au/assets/final3-B-j5SN_d.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61 435 044 671",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "AU",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zynextechnologies/",
      "https://www.facebook.com/profile.php?id=61580845779746",
      "https://x.com/zynextech",
      "https://zynextechnologies.com.au/"
    ]
  };

  return (
    <>
      {/* Organization Schema */}
      <Schema schema={organizationSchema} />
      
      <Hero />
      <WhatIsZynex />
      <Partners />
      <Stats />
      <HowWeWorkVideo />
      <HowWeWork />
      <Projects />
      <WhatWeDo />
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <FooterCTA /> */}
      <Footer />
    </>
  );
};

export default Home;
