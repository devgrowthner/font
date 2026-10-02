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
import { useSeo } from "../hooks/useSeo";

const Home = () => {
  useSeo({
    title: "ERP, AI Automation & AI Security Company Melbourne | Zynex Technologies",
    description: "AI-powered ERP for Australian SMBs. Melbourne team implementing Odoo, SAP, Salesforce and Zoho with AI automation built in and AI security.",
    canonical: "https://zynextechnologies.com.au/"
  });

  return (
    <>
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
