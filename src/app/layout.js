import './globals.css';
import Script from 'next/script';
import ClientLayout from './ClientLayout';

export const metadata = {
  metadataBase: new URL('https://zynextechnologies.com.au/'),
  title: 'AI Development Company Australia | Zynex Technologies',
  description: 'AI development company in Australia offering ML, chatbots, generative AI, and automation solutions to help businesses build intelligent systems.',
  icons: {
    icon: '/final3.png', 
    apple: '/final3.png',
  },
  openGraph: {
    title: 'Zynex Technologies',
    description: 'AI & Machine Learning Solutions',
    images: ['/final3.png'],
  },
  other: {
    'google-site-verification': '2eTFTGprXiban7qVWHTPexftIxtelNswpGgEN8Q_6DE',
    'msvalidate.01': '6A0893C130463AFFC73A8F0ABFA289BE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head suppressHydrationWarning>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKCBJSTH');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKCBJSTH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}