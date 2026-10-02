const organizationId = 'https://zynextechnologies.com.au/#organization';
const logoId = 'https://zynextechnologies.com.au/#logo';

export const homeLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': organizationId,
      name: 'Zynex Technologies',
      url: 'https://zynextechnologies.com.au/',
      logo: {
        '@type': 'ImageObject',
        '@id': logoId,
        url: 'https://zynextechnologies.com.au/final3.png',
        contentUrl: 'https://zynextechnologies.com.au/final3.png',
        caption: 'Zynex Technologies',
      },
      image: { '@id': logoId },
      description:
        'Melbourne company for Australian SMBs. Zynex Technologies implements Odoo, SAP, Salesforce and Zoho ERP with AI automation built in, and helps businesses keep their AI use secure.',
      disambiguatingDescription:
        'Melbourne, Australia based ERP, AI automation and AI security company. Not affiliated with Zynex Technologies Private Limited in India.',
      slogan: 'ERP, AI Automation and AI Security for Australian SMBs',
      foundingDate: '2026',
      foundingLocation: {
        '@type': 'City',
        name: 'Melbourne',
        sameAs: [
          'https://en.wikipedia.org/wiki/Melbourne',
          'https://www.wikidata.org/wiki/Q3141',
        ],
      },
      telephone: '+61-3-9292-2022',
      email: 'info@zynextechnologies.com.au',
      priceRange: '$$$',
      currenciesAccepted: 'AUD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '117 Aspire Blvd',
        addressLocality: 'Fraser Rise',
        addressRegion: 'VIC',
        postalCode: '3336',
        addressCountry: 'AU',
      },
      hasMap: 'https://share.google/z7zEydt8i7afxtFUb',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      location: {
        '@type': 'Place',
        name: 'Zynex Technologies',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '117 Aspire Blvd',
          addressLocality: 'Fraser Rise',
          addressRegion: 'VIC',
          postalCode: '3336',
          addressCountry: 'AU',
        },
        containedInPlace: {
          '@type': 'City',
          name: 'Melbourne',
          sameAs: [
            'https://en.wikipedia.org/wiki/Melbourne',
            'https://www.wikidata.org/wiki/Q3141',
          ],
        },
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Melbourne',
          sameAs: [
            'https://en.wikipedia.org/wiki/Melbourne',
            'https://www.wikidata.org/wiki/Q3141',
          ],
        },
        {
          '@type': 'Country',
          name: 'Australia',
          sameAs: [
            'https://en.wikipedia.org/wiki/Australia',
            'https://www.wikidata.org/wiki/Q408',
          ],
        },
      ],
      audience: {
        '@type': 'BusinessAudience',
        name: 'Australian small and medium-sized businesses',
        audienceType: 'SMB',
        sameAs:
          'https://en.wikipedia.org/wiki/Small_and_medium-sized_enterprises',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+61-3-9292-2022',
          email: 'info@zynextechnologies.com.au',
          areaServed: 'AU',
          availableLanguage: 'English',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: '+61-3-9292-2022',
          email: 'support@zynextechnologies.com.au',
          areaServed: 'AU',
          availableLanguage: 'English',
        },
      ],
      knowsAbout: [
        {
          '@type': 'Thing',
          name: 'Enterprise resource planning',
          sameAs: 'https://en.wikipedia.org/wiki/Enterprise_resource_planning',
        },
        {
          '@type': 'Thing',
          name: 'Customer relationship management',
          sameAs: 'https://en.wikipedia.org/wiki/Customer_relationship_management',
        },
        { '@type': 'Thing', name: 'Odoo', sameAs: 'https://en.wikipedia.org/wiki/Odoo' },
        {
          '@type': 'Thing',
          name: 'ERPNext',
          sameAs: 'https://en.wikipedia.org/wiki/ERPNext',
        },
        { '@type': 'Organization', name: 'SAP', sameAs: 'https://en.wikipedia.org/wiki/SAP' },
        {
          '@type': 'Organization',
          name: 'Salesforce',
          sameAs: 'https://en.wikipedia.org/wiki/Salesforce',
        },
        {
          '@type': 'Organization',
          name: 'Zoho Corporation',
          sameAs: 'https://en.wikipedia.org/wiki/Zoho_Corporation',
        },
        {
          '@type': 'Thing',
          name: 'Artificial intelligence',
          sameAs: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
        },
        {
          '@type': 'Thing',
          name: 'Generative artificial intelligence',
          sameAs: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
        },
        {
          '@type': 'Thing',
          name: 'AI agents',
          sameAs: 'https://en.wikipedia.org/wiki/Intelligent_agent',
        },
        {
          '@type': 'Thing',
          name: 'Business process automation',
          sameAs: 'https://en.wikipedia.org/wiki/Business_process_automation',
        },
        {
          '@type': 'Thing',
          name: 'AI security',
          sameAs: 'https://en.wikipedia.org/wiki/Computer_security',
        },
        {
          '@type': 'Thing',
          name: 'Prompt injection',
          sameAs: 'https://en.wikipedia.org/wiki/Prompt_injection',
        },
        {
          '@type': 'Thing',
          name: 'AI governance',
          sameAs: 'https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence',
        },
        {
          '@type': 'Thing',
          name: 'Information privacy',
          sameAs: 'https://en.wikipedia.org/wiki/Information_privacy',
        },
        {
          '@type': 'Legislation',
          name: 'Privacy Act 1988',
          legislationJurisdiction: 'AU',
          sameAs: 'https://en.wikipedia.org/wiki/Privacy_Act_1988',
        },
        {
          '@type': 'GovernmentOrganization',
          name: 'Australian Cyber Security Centre',
          sameAs: 'https://en.wikipedia.org/wiki/Australian_Cyber_Security_Centre',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'ERP, AI Automation and AI Security Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://zynextechnologies.com.au/#service-erp',
              name: 'ERP and CRM Implementation with AI',
              serviceType: 'ERP implementation',
              description:
                'Odoo, SAP, Salesforce, Zoho and ERPNext implementation for Australian SMBs, with AI automation built into the ERP. GST and BAS ready.',
              url: 'https://zynextechnologies.com.au/odoo-erp-development-company-australia',
              provider: { '@id': organizationId },
              areaServed: { '@type': 'Country', name: 'Australia' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://zynextechnologies.com.au/#service-ai-automation',
              name: 'AI Automation',
              serviceType: 'AI automation',
              description:
                'Secure AI agents that read invoices, raise purchase orders, route approvals and handle routine admin inside your ERP and CRM.',
              url: 'https://zynextechnologies.com.au/ai-automation',
              provider: { '@id': organizationId },
              areaServed: { '@type': 'Country', name: 'Australia' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://zynextechnologies.com.au/#service-ai-security',
              name: 'AI Security and Governance',
              serviceType: 'AI security consulting',
              description:
                'AI usage audits, AI policies, safe AI setup and AI agent security testing for Australian SMBs, aligned with the Privacy Act 1988.',
              provider: { '@id': organizationId },
              areaServed: { '@type': 'Country', name: 'Australia' },
            },
          },
        ],
      },
      sameAs: [
        'https://www.linkedin.com/company/zynextechnologies',
        'https://www.instagram.com/zynextechnologies/',
        'https://x.com/zynextech',
        'https://www.google.com/search?kgmid=/g/11z7pcjqbb',
        'https://techbehemoths.com/company/zynex-technologies',
      ],
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'Google Knowledge Graph ID',
        value: '/g/11z7pcjqbb',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zynextechnologies.com.au/#website',
      url: 'https://zynextechnologies.com.au/',
      name: 'Zynex Technologies',
      inLanguage: 'en-AU',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://zynextechnologies.com.au/#webpage',
      url: 'https://zynextechnologies.com.au/',
      name: 'ERP, AI Automation & AI Security Company Melbourne | Zynex Technologies',
      description:
        'Zynex Technologies is a Melbourne company for Australian SMBs. We implement Odoo, SAP, Salesforce and Zoho ERP with AI automation built in, and keep your AI use secure.',
      inLanguage: 'en-AU',
      isPartOf: { '@id': 'https://zynextechnologies.com.au/#website' },
      about: { '@id': organizationId },
      mainEntity: { '@id': organizationId },
      primaryImageOfPage: { '@id': logoId },
      mentions: [
        { '@type': 'Thing', name: 'Odoo', sameAs: 'https://en.wikipedia.org/wiki/Odoo' },
        { '@type': 'Organization', name: 'SAP', sameAs: 'https://en.wikipedia.org/wiki/SAP' },
        {
          '@type': 'Organization',
          name: 'Salesforce',
          sameAs: 'https://en.wikipedia.org/wiki/Salesforce',
        },
        {
          '@type': 'Organization',
          name: 'Zoho Corporation',
          sameAs: 'https://en.wikipedia.org/wiki/Zoho_Corporation',
        },
      ],
    },
  ],
};