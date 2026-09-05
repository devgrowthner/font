'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import RelatedLocationPages from '../../components/RelatedLocationPages';

const content = {
  "hero": "Zynex Technologies is Perth's specialist custom AI development company. From chatbot development services to computer vision and agentic AI systems, we validate ROI before writing a single line of code and deploy in as little as 6 weeks.",
  "challengesIntro": "Perth businesses are investing in AI but too often receive generic tools that don't move the needle.",
  "challenges": [
    {
      "title": "AI Hype Without Substance",
      "description": "Agencies promise AI transformation but deliver off-the-shelf chatbots that don't fit your workflows or KPIs."
    },
    {
      "title": "Projects That Drag On for Months",
      "description": "Traditional software firms scope, redesign, and delay while competitors who ship faster gain market advantage."
    },
    {
      "title": "Investment With Uncertain Returns",
      "description": "Building AI without validating ROI first means expensive re-work when the solution doesn't fit the real problem."
    },
    {
      "title": "Security and Compliance Gaps",
      "description": "Enterprise AI must meet Australian compliance and data privacy requirements. Overlooking these creates significant operational risk."
    }
  ],
  "servicesIntro": "From intelligent chatbots to computer vision and autonomous AI agents, we cover the full AI development lifecycle.",
  "services": [
    {
      "title": "Chatbot Development Services",
      "description": "Custom NLP-powered chatbots for customer support, lead qualification, and internal knowledge management. Built on OpenAI, Claude, and Gemini for accuracy Perth businesses rely on."
    },
    {
      "title": "Computer Vision Development",
      "description": "Purpose-built vision systems for quality control, object detection, and automated inspection. Our computer vision development company experience spans manufacturing, logistics, and retail.",
      "href": "/computer-vision",
      "linkText": "computer vision development company"
    },
    {
      "title": "Agentic AI Development",
      "description": "Enterprise-grade autonomous AI agents that plan, reason, and execute complex workflows without constant human oversight. As a specialist agentic AI development company, we build on LangChain, CrewAI, and AutoGen.",
      "href": "/what-is-zynex",
      "linkText": "AI development company"
    },
    {
      "title": "AI Search and Recommendation Engines",
      "description": "As an experienced engine development company, we build semantic search engines, product recommendation pipelines, and intelligent retrieval systems powered by vector databases including Pinecone.",
      "href": "/recommendation-engine",
      "linkText": "engine development company"
    },
    {
      "title": "Machine Learning Model Development",
      "description": "Predictive analytics, classification models, and recommendation engines built with TensorFlow, PyTorch, and Scikit-Learn, trained on your data and tuned for your outcomes."
    },
    {
      "title": "AI Integration Services",
      "description": "Seamlessly connect AI capabilities to your existing CRM, ERP, and communication systems. Every integration is built with enterprise-grade security and long-term scalability for Perth operations."
    }
  ],
  "processIntro": "We validate before we build. Every Perth project starts with a clear-eyed feasibility assessment.",
  "steps": [
    {
      "title": "Discovery and AI Feasibility (1-2 Weeks)",
      "description": "We quantify ROI potential and data readiness before any code is written."
    },
    {
      "title": "AI Strategy and Architecture (1-2 Weeks)",
      "description": "A clear technical blueprint aligned to your business goals and infrastructure."
    },
    {
      "title": "Agile Build and Testing (4-12 Weeks)",
      "description": "Iterative sprints with regular stakeholder checkpoints and quality gates."
    },
    {
      "title": "Deploy, Integrate and Optimise (Ongoing)",
      "description": "Production deployment with 24/7 support and continuous performance improvement."
    }
  ],
  "testimonials": [
    {
      "quote": "Zynex didn't just build us an AI tool. They helped us understand exactly where AI would move the needle. The feasibility process alone saved us months of wasted spend.",
      "author": "Chief Operating Officer, Sydney-based Professional Services Firm"
    },
    {
      "quote": "From our first discovery session to going live, the entire project took 9 weeks. The multi-agent system they built handles what used to take our team two full days, every single day.",
      "author": "Head of Operations, Australian Financial Services Company"
    }
  ],
  "technologies": [
    "OpenAI GPT",
    "Claude AI",
    "Google Gemini",
    "Meta Llama",
    "LangChain",
    "CrewAI",
    "AutoGen",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Pinecone",
    "Vapi",
    "ElevenLabs"
  ],
  "faqs": [
    {
      "question": "Q1: What makes Zynex Technologies the best custom AI development company in Perth?",
      "answer": "Zynex validates AI feasibility and models your ROI before writing a single line of code. Our approach ensures Perth businesses only invest in solutions with a clear path to return. Our 95% client satisfaction rate and average 3x ROI distinguish us from generic agencies."
    },
    {
      "question": "Q2: Does Zynex offer chatbot development services for Perth businesses?",
      "answer": "Yes. Our chatbot development services cover intelligent NLP-powered bots for customer support, lead qualification, internal knowledge management, and conversational commerce. We build on OpenAI, Claude, and Gemini platforms tailored to your specific workflows."
    },
    {
      "question": "Q3: Can Zynex develop computer vision solutions for Perth industries?",
      "answer": "Absolutely. As an experienced computer vision development company, Zynex builds bespoke vision systems for quality assurance, object detection, automated inspection, and safety monitoring across manufacturing, logistics, retail, and construction sectors."
    },
    {
      "question": "Q4: What is agentic AI and can Zynex build it for my Perth business?",
      "answer": "Agentic AI refers to autonomous AI agents that plan, reason, and execute multi-step tasks independently. As a specialist agentic AI development company, Zynex builds enterprise-grade agent systems using LangChain, CrewAI, and AutoGen to automate complex workflows."
    },
    {
      "question": "Q5: Does Zynex build AI search and recommendation engine systems?",
      "answer": "Yes. As a capable engine development company for AI-powered search and discovery, we build semantic search engines, product recommendation pipelines, and intelligent retrieval systems backed by vector databases including Pinecone."
    }
  ],
  "closing": "Join Australian businesses already transforming their operations with Zynex's custom AI development. Proven ROI, fast deployment, and 24/7 support."
};
const stats = [
  ['95%', 'Client Satisfaction Rate'],
  ['3x', 'Average ROI Delivered'],
  ['6-12', 'Weeks to Deployment'],
  ['24/7', 'Production Support'],
];
const trustSignals = ['Feasibility-first approach', 'Free consultation available', '6-week deployment possible', '24/7 production support'];
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.faqs.map(({ question, answer }) => ({
    '@type': 'Question', name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};
const cardClass = 'rounded-2xl border border-[#719334]/20 bg-white p-6 sm:p-8';
const buttonClass = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5a7529] px-6 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#496021] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5a7529]';

function Section({ id, label, title, description, shaded = false, children }) {
  return (
    <section id={id} aria-labelledby={id + '-title'} className={'scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ' + (shaded ? 'bg-[#f3f7eb]' : 'bg-white')}>
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5a7529]">{label}</p>
          <h2 id={id + '-title'} className="font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
          <div aria-hidden="true" className="mt-5 h-1 w-16 rounded-full bg-[#719334]" />
          {description && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function CustomAIDevelopmentCompanyPerth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const strategyButton = <button type="button" onClick={() => setIsModalOpen(true)} className={buttonClass}>Book a Free AI Strategy Session <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></button>;

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <main>
        <section aria-labelledby="perth-title" className="bg-gradient-to-br from-[#eef4e3] via-[#fefdfb] to-[#f1f5ec] px-4 pb-14 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#5a7529]">Back to home</Link>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <h1 id="perth-title" className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Custom AI Development Company in Perth That Delivers Real ROI</h1>
                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">{content.hero}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {strategyButton}
                  <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#5a7529]/40 px-6 py-4 text-sm font-bold text-[#5a7529] hover:bg-[#eef4e3]">Explore Services</a>
                </div>
              </div>
              <div className="relative h-[280px] overflow-hidden rounded-3xl shadow-xl sm:h-[360px] lg:h-[460px]">
                <Image src="/perth.jpeg" alt="Perth, Western Australia" fill sizes="(max-width: 1023px) 100vw, 50vw" preload className="object-cover" />
              </div>
            </div>
            <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map(([metric, label]) => (
                <li key={label} className="rounded-2xl border border-[#719334]/20 bg-white/90 p-5 text-center sm:p-6">
                  <span className="block font-heading text-3xl font-extrabold text-[#5a7529] sm:text-4xl">{metric}</span>{' '}
                  <span className="mt-2 block text-xs text-slate-600 sm:text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="challenges" label="The challenge" title="Why Most AI Projects in Perth Fail Before Launch" description={content.challengesIntro}>
          <div className="grid gap-5 md:grid-cols-2">
            {content.challenges.map(item => <article key={item.title} className={cardClass + ' border-l-4 border-l-[#719334]'}><h3 className="font-heading text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.description}</p></article>)}
          </div>
        </Section>

        <Section id="services" label="What we build" title="AI Development Services for Perth Businesses" description={content.servicesIntro} shaded>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.services.map((service, index) => (
              <article key={service.title} className={cardClass + ' shadow-sm'}>
                <span aria-hidden="true" className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4e3] text-sm font-bold text-[#5a7529]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-heading text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.href ? <>{service.description.split(service.linkText)[0]}<Link href={service.href} className="font-semibold text-[#5a7529] underline underline-offset-4">{service.linkText}</Link>{service.description.split(service.linkText)[1]}</> : service.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="process" label="Our process" title="Our Proven AI Development Process" description={content.processIntro}>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.steps.map((step, index) => <li key={step.title} className={cardClass + ' bg-[#f8faf5]'}><span aria-hidden="true" className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#5a7529] font-bold text-white">0{index + 1}</span><h3 className="font-heading text-lg font-bold text-slate-900">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.description}</p></li>)}
          </ol>
        </Section>

        <Section id="testimonials" label="Client experiences" title="What Australian Businesses Say About Zynex" shaded>
          <div className="grid gap-6 md:grid-cols-2">
            {content.testimonials.map(({ quote, author }) => <figure key={author} className={cardClass + ' flex flex-col'}><blockquote className="mb-6 text-lg leading-8 text-slate-700">&ldquo;{quote}&rdquo;</blockquote><figcaption className="mt-auto border-t border-slate-100 pt-5 text-sm font-semibold text-[#5a7529]">{author}</figcaption></figure>)}
          </div>
        </Section>

        <Section id="technology" label="Our technology stack" title="AI Technology Stack We Deploy for Perth Clients">
          <ul className="flex flex-wrap gap-3">{content.technologies.map(technology => <li key={technology} className="rounded-xl border border-[#719334]/20 bg-[#f8faf5] px-5 py-3 font-semibold text-slate-700">{technology}</li>)}</ul>
        </Section>

        <Section id="faq" label="Frequently asked questions" title="Frequently Asked Questions" description="Common questions from Perth businesses exploring custom AI development." shaded>
          <div className="max-w-5xl space-y-4">
            {content.faqs.map(({ question, answer }) => <details key={question} className={cardClass}><summary className="cursor-pointer font-semibold leading-7 text-slate-900 marker:text-[#5a7529]"><h3 className="inline text-base">{question}</h3></summary><p className="mt-4 leading-8 text-slate-600">{answer}</p></details>)}
          </div>
        </Section>

        <RelatedLocationPages currentSlug="perth" />

        <section aria-labelledby="contact-title" className="bg-gradient-to-br from-[#eef4e3] to-[#f1f5ec] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 id="contact-title" className="font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">Ready to Build AI That Actually Works in Perth?</h2>
            <p className="mx-auto mb-8 mt-6 max-w-3xl text-lg leading-8 text-slate-600">{content.closing}</p>
            {strategyButton}
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">{trustSignals.map(signal => <li key={signal} className="inline-flex items-center gap-2 text-sm text-[#5a7529]"><Check className="h-4 w-4 shrink-0" aria-hidden="true" />{signal}</li>)}</ul>
          </div>
        </section>
      </main>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}
