import { ShieldCheck, ArrowLeft, ArrowUpRight, Check, LockKeyhole, ScanLine, Eye, Workflow } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { buildPageMetadata } from '@/lib/seo';
import AssessmentForm from './AssessmentForm';
import content from './content.json';
import styles from './page.module.css';

export const metadata = buildPageMetadata({ title: 'AI Security Services Company in Australia | Zynex Technologies', description: 'Secure your AI tools, LLMs and agents with Zynex Technologies. Melbourne-based AI security assessments, testing, privacy and governance for Australian SMBs.', path: '/ai-security-services-australia' });
const calendar = 'https://calendly.com/zynex-technologies/30min';
function LinkedText({ text }) {
  const link = text.match(/^\[(.+)\]\((https:\/\/.+)\)$/);
  return link ? <a href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]} <ArrowUpRight size={15} aria-hidden="true" /></a> : text;
}
function AccentHeading({ text }) {
  const words = text.split(' ');
  const split = Math.max(1, words.length - 2);
  return <>{words.slice(0, split).join(' ')} <span className={styles.headingAccent}>{words.slice(split).join(' ')}</span></>;
}
export default function AISecurityPage() {
  const icons = [LockKeyhole, ScanLine, ShieldCheck, Workflow, Eye, ShieldCheck];
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: content.faqs.map(({question,answer})=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}})) };
  return <><main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
    <section className={styles.hero}><div className={styles.container}><Link className={styles.backLink} href="/" aria-label="Back to home"><ArrowLeft size={20} aria-hidden="true" /></Link></div><div className={styles.heroGrid}><div>
      <p className={styles.eyebrow}><ShieldCheck size={16} aria-hidden="true" /> AI Security Services</p>
      <h1><AccentHeading text={content.hero[0]} /></h1><p className={styles.lead}>{content.hero[1]}</p><p>{content.hero[2]}</p>
      <div className={styles.actions}><a className={styles.primary} href="#assessment">Get a Free AI Security Assessment <ArrowUpRight size={18} aria-hidden="true" /></a><a className={styles.secondary} href={calendar} target="_blank" rel="noopener noreferrer">Talk to an AI Security Expert</a></div>
    </div><div className={styles.heroMedia}><Image src="/ai-security-hero.webp" alt="Glass security shield protecting an AI neural network and connected data" fill sizes="(max-width: 1023px) 100vw, 50vw" preload className={styles.heroImage} /><div className={styles.imageOverlay} aria-hidden="true" /><div className={styles.imageBadge}><ShieldCheck size={24} aria-hidden="true" /><span>AI tools, agents & business data</span></div></div></div>
    <div className={styles.stats}>{content.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className={styles.expertise}><div className={styles.container}><h2><AccentHeading text="Areas of Expertise" /></h2><ul>{content.expertise.map(t=><li key={t}><Check size={15} aria-hidden="true" />{t}</li>)}</ul></div></section>
    {content.sections.map(({title,intro,items},index)=><section className={`${styles.section} ${index%2===1?styles.tint:''}`} key={title}><div className={styles.container}><p className={styles.eyebrow}>{['Understand the risks','A clear path forward','Protection that fits','Australian compliance','Your security partner'][index]}</p><h2><AccentHeading text={title} /></h2><p className={styles.sectionIntro}>{intro}</p>
      {index===3?<div className={styles.tableWrap}><table><thead><tr><th scope="col">Framework</th><th scope="col">What we help you do</th></tr></thead><tbody>{items.map(([name,description])=><tr key={name}><th scope="row"><LinkedText text={name}/></th><td>{description}</td></tr>)}</tbody></table></div>:<div className={index===1?styles.process:styles.cards}>{items.map((item,i)=>{const Icon=icons[i%icons.length];const [name,description]=index===1?item.slice(1):item;return <article className={styles.card} key={name}>{index===1?<span className={styles.step}>{item[0]}</span>:<span className={styles.iconBox}><Icon size={25} aria-hidden="true"/></span>}<h3>{name}</h3><p>{description}</p></article>;})}</div>}
    </div></section>)}
    <section id="assessment" className={`${styles.section} ${styles.assessment}`}><div className={`${styles.container} ${styles.assessmentGrid}`}><div><p className={styles.eyebrow}>Free, 30 minutes</p><h2><AccentHeading text={content.assessment.title} /></h2><p>{content.assessment.intro}</p><h3>What you get:</h3><ul>{content.assessment.benefits.map(t=><li key={t}><Check size={20} aria-hidden="true"/>{t}</li>)}</ul></div><AssessmentForm /></div></section>
    <section className={`${styles.section} ${styles.tint}`}><div className={styles.faq}><p className={styles.eyebrow}>Your questions, answered</p><h2><AccentHeading text="Frequently Asked Questions" /></h2><p className={styles.sectionIntro}>Common questions about AI security services in Australia.</p>{content.faqs.map(({question,answer})=><details key={question}><summary><h3>{question}</h3></summary><p>{answer}</p></details>)}</div></section>
    <section className={styles.finalCta}><ShieldCheck size={38} aria-hidden="true"/><h2><AccentHeading text={content.cta[0]} /></h2><p>{content.cta[1]}</p><a className={styles.primary} href="#assessment">Book a Free AI Security Assessment <ArrowUpRight size={18} aria-hidden="true"/></a></section>
  </main><Footer /></>;
}
