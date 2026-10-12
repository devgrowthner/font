import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import styles from './FAQArticle.module.css';

function LinkedText({ text, links }) {
  const link = links.filter(item => text.includes(item.match)).sort((a, b) => text.indexOf(a.match) - text.indexOf(b.match))[0];
  if (!link) return text;
  const index = text.indexOf(link.match);
  return <>{text.slice(0, index)}<Link href={link.href}>{link.match}</Link><LinkedText text={text.slice(index + link.match.length)} links={links} /></>;
}

export default function FAQArticle({ content, image, imageAlt, eyebrow }) {
  const linked = text => <LinkedText text={text} links={content.inlineInternalLinks || []} />;
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ question: content.title, answer: content.summaryDescription }, ...content.faq].map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className={styles.hero}><div className={styles.heroInner}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span className={styles.eyebrowDot} aria-hidden="true" />{eyebrow}<span aria-hidden="true">·</span>Australian small business</p>
        <h1>{content.title}</h1><p className={styles.heroIntro}>{content.description || content.metaDescription}</p>
      </div>
      <div className={styles.heroMedia}><Image className={styles.heroImage} src={image} alt={imageAlt} width={1792} height={1024} preload /></div>
    </div></div>
    <div className={styles.articleLayout}>
      <nav className={styles.contents} aria-label="Article contents">
        <p>In this guide</p><a href="#quick-answer">Quick answer</a>
        {content.content.map((section, i) => <a key={section.heading} href={`#section-${i}`}>{section.heading}</a>)}
        <a href="#related-questions">Related questions</a><a href="#next-steps">Next steps</a>
      </nav>
      <article className={styles.article}>
        <div className={styles.introduction} id="quick-answer"><p><strong>Quick answer: </strong>{linked(content.summaryDescription)}</p>{content.introductionDescription.split('\n\n').map(text => <p key={text}>{linked(text)}</p>)}</div>
        {content.content.map((section, i) => <section className={styles.articleSection} id={`section-${i}`} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.bodyParagraphs?.map(text => <p key={text}>{linked(text)}</p>)}
          {section.table && <div className={styles.tableWrap}><table><thead><tr>{section.table.headers.map(text => <th key={text} scope="col">{text}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((text, j) => <td key={j}>{linked(text)}</td>)}</tr>)}</tbody></table></div>}
          {section.numberedList && <ol>{section.numberedList.map(text => <li key={text}>{linked(text)}</li>)}</ol>}
          {section.bulletList && <ul>{section.bulletList.map(text => <li key={text}>{linked(text)}</li>)}</ul>}
          {section.closingParagraphs?.map(text => <p key={text}>{linked(text)}</p>)}
        </section>)}
        <section className={styles.articleSection} id="related-questions"><h2>Related Questions</h2><div className={styles.faqList}>{content.faq.map(({ question, answer }) => <details className={styles.faqItem} key={question}><summary>{question}</summary><p>{linked(answer)}</p></details>)}</div></section>
        <section className={styles.callout} id="next-steps"><p className={styles.eyebrow}>Plan your next steps with Zynex Technologies</p><h2>{content.ctaTitle}</h2><p>{content.ctaDescription}</p><a className={styles.calloutLink} href={content.ctaButtonHref} target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">→</span></a></section>
      </article>
    </div><Footer />
  </main>;
}
