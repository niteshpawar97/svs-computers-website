import { Helmet } from 'react-helmet-async';

const DEFAULT = {
  siteName: 'SVS Computers',
  siteUrl: 'https://svscomputers.co.in',
  defaultTitle: 'SVS Computers | Best Computer Institute in Chhindwara',
  defaultDescription: 'SVS Computers is the leading computer education institute in Chhindwara, MP. Offering BCA, M.Sc CS, PGDCA, DCA, Tally & CPCT courses with 95% placement rate. ISO 9001:2008 certified. Affordable fees, expert faculty, modern labs.',
  defaultImage: '/logo192.png',
  locale: 'en_IN',
};

function SEO({ title, description, path = '', image, type = 'website', noindex = false, children }) {
  const pageTitle = title ? `${title} | SVS Computers Chhindwara` : DEFAULT.defaultTitle;
  const pageDesc = description || DEFAULT.defaultDescription;
  const pageUrl = `${DEFAULT.siteUrl}${path}`;
  const pageImage = image || DEFAULT.defaultImage;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content="SVS Computers, computer institute Chhindwara, BCA Chhindwara, DCA Chhindwara, PGDCA Chhindwara, computer classes Chhindwara, best computer institute Chhindwara, Tally course Chhindwara, CPCT coaching Chhindwara, computer education Madhya Pradesh, IT training Chhindwara, SVS Computers Chhindwara" />
      <link rel="canonical" href={pageUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${DEFAULT.siteUrl}${pageImage}`} />
      <meta property="og:site_name" content={DEFAULT.siteName} />
      <meta property="og:locale" content={DEFAULT.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={`${DEFAULT.siteUrl}${pageImage}`} />

      {children}
    </Helmet>
  );
}

export default SEO;
