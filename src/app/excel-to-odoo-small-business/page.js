import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { buildPageMetadata } from '@/lib/seo';
import styles from './page.module.css';

const faqItems = [
  {
    question: 'Can we handle the migration ourselves?',
    answer:
      'A small setup with clean data may be manageable internally if someone has time to learn, configure and test it. Professional support becomes more useful when financial records, stock, integrations or several teams are involved. You can also share the work, with your team preparing data while a provider handles configuration and technical migration.',
  },
  {
    question: 'How long will the move take?',
    answer:
      'The schedule depends on the processes included, data quality, integrations and your team’s availability for testing. Ask for a plan with separate milestones for preparation, setup, trial migration, training and launch. A useful estimate should explain what could delay each stage and what decisions your team needs to make.',
  },
  {
    question: 'Can we still use Excel afterwards?',
    answer:
      'Yes. You can keep Excel for planning, analysis or other agreed tasks. The important part is deciding where official business records are maintained so staff do not have to reconcile two different versions.',
  },
];

export const metadata = buildPageMetadata({
  title: 'How Can Small Businesses Move from Excel to Odoo? | Zynex Technologies',
  description:
    'Moving from Excel to Odoo? Learn how to prepare data, plan costs and train your team. Get migration support for your Australian small business from Zynex.',
  path: '/excel-to-odoo-small-business',
});

function ArticleSection({ id, title, children }) {
  return (
    <section className={styles.articleSection} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function ExcelToOdooSmallBusinessPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Odoo migration guide <span aria-hidden="true">•</span> Australian small business
            </p>
            <h1>How Can Small Businesses Move from Excel to Odoo?</h1>
            <p className={styles.heroIntro}>
              A practical guide to preparing your records, choosing a first process and
              helping your team make the change with confidence.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <Image
              className={styles.heroImage}
              src="/odoo/oddo.png"
              alt="Business team reviewing an Odoo ERP dashboard"
              width="1792"
              height="1024"
              preload
            />
          </div>
        </div>
      </div>

      <div className={styles.articleLayout}>
        <nav className={styles.contents} aria-label="Article contents">
          <p>In this guide</p>
          <a href="#when-to-move">When to move beyond Excel</a>
          <a href="#first-process">Start with one process</a>
          <a href="#prepare-data">Prepare your data</a>
          <a href="#import-records">Import the records you need</a>
          <a href="#test-process">Test the process</a>
          <a href="#budget">Budget for the full move</a>
          <a href="#existing-tools">Keep the tools you need</a>
          <a href="#team-training">Give your team time to practise</a>
          <a href="#changeover">Plan the changeover</a>
          <a href="#common-questions">Common questions</a>
          <a href="#first-conversation">Prepare for your first conversation</a>
        </nav>

        <article className={styles.article}>
          <div className={styles.introduction}>
            <p>
              Excel is often where a small business starts. You create a customer list,
              add a stock tracker and build another spreadsheet for orders. For a while,
              the setup works.
            </p>
            <p>
              The problems usually appear when more people need the same information.
              Sales updates one file, accounts works from another, and someone has to
              check which version is correct before answering a customer.
            </p>
            <p>
              Moving from Excel to Odoo involves choosing the processes you want to
              improve, cleaning your data, setting up the relevant apps and testing them
              before switching. Your team also needs time to practise using the system
              for everyday work.
            </p>
            <p>
              You don’t need to move everything at once. A focused first phase gives you
              a chance to check the setup before extending it to other parts of the
              business.
            </p>
          </div>

          <ArticleSection id="when-to-move" title="Knowing When It’s Time to Move Beyond Excel">
            <p>The reason to consider Odoo is usually repeated work or unreliable information.</p>
            <p>
              You might notice that staff enter the same order details into several files.
              Stock figures may need checking before every sale. Reports might take hours
              because someone has to collect and compare spreadsheets from different teams.
            </p>
            <p>
              Spend a week noting where these problems happen. Record the task, the time
              involved and any mistakes that need correcting. This gives you a practical
              starting point for deciding whether a new system would help.
            </p>
            <p>
              If one person manages a simple spreadsheet and the information stays accurate,
              a move may be unnecessary. Better templates and clearer responsibilities
              could solve the immediate issue.
            </p>
          </ArticleSection>

          <ArticleSection id="first-process" title="Start With One Business Process">
            <p>Choose a first phase based on the problem you most need to solve.</p>
            <p>
              For example, a small wholesaler might begin with products, stock and sales
              orders because those records need to work together. A service business might
              focus on customer enquiries and project tracking.
            </p>
            <p>
              Write down what should become easier after the move. “Staff can check
              outstanding orders without combining three files” is a clearer goal than
              “we want to digitise the business”.
            </p>
            <p>
              <Link href="/odoo-erp-development-company-australia">
                Zynex’s Odoo implementation services
              </Link>{' '}
              include module selection, configuration, data migration, training and go-live
              support. These activities help connect the software setup to the work your
              team needs to do.
            </p>
          </ArticleSection>

          <ArticleSection id="prepare-data" title="Prepare Your Data Before Importing It">
            <p>
              Start by deciding which files contain the correct information. If two
              departments maintain different customer lists, agree how you will combine
              them before migration begins.
            </p>
            <p>Then review the records for common issues:</p>
            <ul>
              <li>Duplicate customers, suppliers or products.</li>
              <li>Missing contact details or product codes.</li>
              <li>Inconsistent dates and units of measure.</li>
              <li>Old records mixed with active ones.</li>
              <li>Formulas or colour-coded notes that need explanation.</li>
            </ul>
            <p>
              For example, “ABC Supplies” and “ABC Supplies Pty Ltd” might be the same
              supplier. Someone who knows the business needs to confirm that before both
              become separate records.
            </p>
            <p>
              Keep an untouched copy of the original files and nominate a person to approve
              each dataset. Your provider can manage the technical work, but your team needs
              to confirm that the information is accurate.
            </p>
            <p>
              The{' '}
              <Link href="/blogs/migrate-spreadsheets-to-erp-system">
                spreadsheet migration guide
              </Link>{' '}
              provides further guidance on preparing for this transition.
            </p>
          </ArticleSection>

          <ArticleSection id="import-records" title="Import the Records You Actually Need">
            <p>
              Odoo supports importing Excel .xlsx and CSV files for records such as
              contacts, products and orders. Each spreadsheet column needs to match the
              appropriate field in Odoo.
            </p>
            <p>
              Start with the information required for daily operations. This may include
              active customers, current products and unfinished transactions. Older records
              can sometimes remain in an organised archive if they are accessible when needed.
            </p>
            <p>
              Importing a spreadsheet does not automatically recreate its formulas,
              reminders or approval processes. If a highlighted cell means “manager
              approval required”, decide how that approval should work in the new setup.
            </p>
            <p>
              Financial information needs careful planning. Agree how opening balances and
              outstanding transactions will be transferred and checked with the person
              responsible for your accounts.
            </p>
          </ArticleSection>

          <ArticleSection id="test-process" title="Test the Process, Not Just the File">
            <p>
              A successful import is only one part of testing. You also need to know whether
              staff can use the records correctly.
            </p>
            <p>
              Use a small sample first. Check names, quantities, prices and links between
              records, then work through a complete task. For an order process, that could
              mean creating an order, making a change and checking what happens next.
            </p>
            <p>
              Include awkward situations, too. A duplicate customer, a cancelled order or a
              wrong quantity can reveal problems that a straightforward example misses.
            </p>
            <p>
              Odoo provides a Test function for checking an import file. Its documentation
              also warns that imports are permanent and cannot simply be undone, so trial
              imports belong in a suitable test environment.
            </p>
          </ArticleSection>

          <ArticleSection id="budget" title="Budget for the Full Move">
            <p>
              Your budget should cover the work needed to make Odoo usable, as well as the
              software subscription.
            </p>
            <p>
              Odoo’s subscription pricing excludes implementation services. That means the
              licence price alone does not represent the total cost of moving from Excel.
            </p>
            <p>
              Ask providers to separate the cost of configuration, data migration,
              integrations, training and post-launch support. Check what they expect your
              team to handle.
            </p>
            <p>
              The condition of your data matters. A clean product list takes different work
              from several years of inconsistent records spread across departments. Custom
              workflows and connections to other software can also increase the scope.
            </p>
            <p>
              Zynex’s{' '}
              <Link href="/blogs/odoo-erp-implementation-cost-australia">
                implementation cost guide
              </Link>{' '}
              explains the areas to consider when planning a budget. Request an estimate
              based on your own requirements, with currency, GST treatment and exclusions
              stated clearly.
            </p>
          </ArticleSection>

          <ArticleSection id="existing-tools" title="Check Which Existing Tools You Want to Keep">
            <p>
              Moving to Odoo does not necessarily mean replacing every tool your business
              uses. Decide which systems should stay and what information needs to pass
              between them.
            </p>
            <p>
              For example, an online store may need to exchange orders and stock updates. Be
              specific about those requirements before agreeing to an integration.
            </p>
            <p>
              Ask who will maintain each connection, how failed transfers will be identified
              and which system controls the original record. If staff can change a product in
              two places, you need a rule for which update takes priority.
            </p>
            <p>
              Check subscription requirements as well. Odoo lists external API access under
              its Custom plan, which may affect the setup required for a proposed connection.
            </p>
          </ArticleSection>

          <ArticleSection id="team-training" title="Give Your Team Time to Practise">
            <p>Training works best when it reflects the tasks people actually perform.</p>
            <p>
              Someone handling orders should practise creating, changing and cancelling
              them. Someone responsible for stock should practise receiving goods and
              correcting an incorrect entry.
            </p>
            <p>
              Let staff complete these tasks themselves using realistic sample records. This
              gives them a chance to ask questions and helps you find gaps before launch.
            </p>
            <p>
              Keep short instructions for common activities and nominate an internal contact
              for day-to-day questions. Zynex’s{' '}
              <Link href="/blogs/odoo-implementation-guide-australia">
                Odoo implementation guide
              </Link>{' '}
              covers training within the wider rollout process.
            </p>
          </ArticleSection>

          <ArticleSection id="changeover" title="Plan a Clear Changeover">
            <p>
              Your business can continue using its current process while Odoo is prepared and
              tested. However, the final switch needs a clear plan.
            </p>
            <p>
              Decide when spreadsheet editing will stop, how recent changes will be
              transferred and who will approve the final checks. Staff should know exactly
              where to record new work from that point onwards.
            </p>
            <p>
              Avoid leaving Excel and Odoo as competing versions of the same records. Keep
              the old files available for reference, with clear instructions about their use.
            </p>
            <p>
              If you are unsure how to organise the first phase,{' '}
              <Link href="/odoo-erp-development-company-australia">
                discuss your migration with Zynex
              </Link>
              . You can talk through your current files, daily tasks and the work that needs
              to continue during the move.
            </p>
          </ArticleSection>

          <ArticleSection id="common-questions" title="Common Questions About Moving to Odoo">
            <div className={styles.faqList}>
              {faqItems.map(({ question, answer }) => (
                <details className={styles.faqItem} key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="first-conversation" title="Prepare for Your First Conversation">
            <p>
              Before speaking with a provider, gather your main spreadsheets and list the
              three problems you most want to solve. Include an anonymised data sample, the
              software you want to keep and the people who will use Odoo.
            </p>
            <p>
              Ask what should move first, what can wait and how accuracy will be checked. A
              useful proposal should explain your responsibilities as clearly as the
              provider’s.
            </p>
          </ArticleSection>

          <section className={styles.callout}>
            <p className={styles.eyebrow}>Plan your move with Zynex Technologies</p>
            <h2>Make the first phase manageable.</h2>
            <p>
              If spreadsheets are making orders, stock or customer information harder to
              manage, speak with Zynex Technologies about your current process. You can
              discuss where work gets held up, which records need to move and what a
              manageable first phase could include.
            </p>
            <Link className={styles.calloutLink} href="/odoo-erp-development-company-australia">
              Discuss your Odoo migration <span aria-hidden="true">→</span>
            </Link>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}