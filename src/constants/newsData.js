export const newsArticles = [
  {
    slug: "albanese-ai-data-centre-standards",
    metaTitle: "Albanese's AI Data Centre Plan | Zynex Technologies",
    metaDescription:
      "Prime Minister Anthony Albanese has detailed new data centre standards ahead of Wednesday's national cabinet meeting, as Australia vies for AI investment.",
    title: "Albanese details new data centre rules to court AI investment",
    excerpt:
      "Prime Minister Anthony Albanese has detailed new data centre standards ahead of Wednesday's national cabinet meeting, as Australia vies for AI investment.",
    category: "AI Policy",
    date: "August 25, 2026",
    datePublished: "2026-08-25",
    readTime: "7 min read",
    image: "/zynex_banner_natural_logo_4K.png",
    sourceName: "news.com.au",
    sourceUrl:
      "https://www.news.com.au/technology/innovation/pm-pushes-major-ai-and-data-centre-plan-to-win-global-investment/news-story/e47941e289862c3ae372557d97b6aa1e",
    sections: [
      {
        paragraphs: [
          "Prime Minister Anthony Albanese will use a speech to the Business Council of Australia's (BCA) annual dinner on Tuesday night to detail mandatory new standards for data centres, restricting where facilities can be built as Canberra competes for global artificial intelligence (AI) investment.",
          "According to news.com.au, the announcement comes ahead of a national cabinet meeting with state and territory leaders on Wednesday, where the government will try to secure agreement on the standards. For technology and infrastructure decision-makers, the timing matters. Tens of billions of dollars in data centre proposals are already before Australian regulators, and the rules attached to that pipeline are still being negotiated between Canberra and the states.",
        ],
      },
      {
        heading: "New rules target energy, water and location",
        paragraphs: [
          "Under the standards, new data centres would need to add more renewable energy to the grid than they draw from it, and minimise their water use. Facilities would also have to avoid locations near homes, schools and prime farmland, and steer clear of sites that could otherwise be used for housing.",
          "That requirement could affect proposals already in the pipeline, including a NextDC data centre planned for Macquarie Park in Sydney, next to a metro station. The City of Ryde has objected to that project, arguing it would leave transport infrastructure underused and work against efforts to ease the housing shortage.",
          "Albanese has pledged to introduce the mandatory requirements as legislation in early 2027, with Wednesday's national cabinet meeting positioned as the next step toward a national agreement. \"Australia is in a strong position to attract investment in data centres,\" Albanese is expected to say, tying the plan to social licence, stable energy bills and secure water supply.",
        ],
      },
      {
        paragraphs: [
          "The push builds on the National AI Plan the government released in December 2025 and the Office of AI established within the Prime Minister's department in July 2026, which was set up to coordinate national standards covering energy, copyright, productivity and labour rights. Businesses that would rather build custom AI development capability in-house than wait on hyperscale infrastructure timelines have another path forward while these standards are finalised.",
        ],
      },
      {
        heading: "States split over energy requirements",
        paragraphs: [
          "Not every state is on board. Queensland Premier David Crisafulli is expected to resist the renewable energy requirement at Wednesday's meeting, arguing it would push up power bills and discourage investment. Queensland is instead developing its own framework that would allow data centres to run on gas and coal, paired with social impact assessments and agreements with local councils.",
          "BCA chief executive Bran Black has welcomed the federal government's approach. In a separate address at the same dinner, Black plans to unveil a national roadmap for tracking AI adoption, aimed at making Australia a top-ten investment destination and addressing sluggish productivity growth. He is also expected to raise business concerns about tax changes in the federal budget and the complexity of Australia's industrial relations system.",
        ],
      },
      {
        paragraphs: [
          "Australia has already attracted large-scale hyperscale investment in recent years, including a $5 billion commitment from Microsoft to expand its local data centre footprint. New South Wales alone is assessing 26 further data centre projects worth a combined $100 billion, underscoring the scale of investment the new standards are designed to manage. Businesses building AI capability while these settings firm up may find working with established AI development services in Australia more predictable than betting on a single hyperscale build.",
        ],
      },
      {
        heading: "Why this matters for CEOs, CTOs and founders",
        paragraphs: [
          "For technology leaders planning AI infrastructure or cloud migration in Australia, site selection and energy sourcing are becoming compliance questions, not just cost ones. A national standard due in 2027 means projects approved under a patchwork of state rules today could face different obligations once federal legislation lands. Running an AI feasibility analysis before committing to a site or energy contract can flag these risks early, rather than after a build is already under way.",
          "The Queensland-Canberra split also signals that businesses operating across state lines may face inconsistent requirements in the near term, making early engagement with the Office of AI and state planning bodies a practical way to reduce approval risk on new builds. Founders weighing build-versus-buy decisions may also want to consider AI automation platforms, which can reduce reliance on dedicated infrastructure while the regulatory picture settles.",
        ],
      },
      {
        heading: "What's next",
        paragraphs: [
          "State and territory leaders meet at national cabinet on Wednesday, where the government will seek agreement on the proposed standards. Legislation is due to be introduced to federal parliament in early 2027. Albanese has also flagged raising Australia's AI approach at the United Nations in New York next month. Whether Queensland's gas and coal carve-out is reconciled with the federal renewable energy requirement remains an open question heading into Wednesday's talks.",
        ],
      },
    ],
    links: [
      { text: "news.com.au", href: "https://www.news.com.au/technology/innovation/pm-pushes-major-ai-and-data-centre-plan-to-win-global-investment/news-story/e47941e289862c3ae372557d97b6aa1e" },
      { text: "custom AI development", href: "/custom-ai" },
      { text: "AI feasibility analysis", href: "/ai-feasibility-analysis" },
      { text: "AI automation", href: "/ai-automation" },
    ],
  },
];

export const newsBySlug = Object.fromEntries(newsArticles.map((article) => [article.slug, article]));
