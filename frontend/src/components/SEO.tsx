import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqSchema?: Array<{ question: string; answer: string }>;
  includeOrganizationSchema?: boolean;
  includeLocalBusinessSchema?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  path,
  image = '/Images/og-image-mellominds.png',
  breadcrumbs,
  faqSchema,
  includeOrganizationSchema = false,
  includeLocalBusinessSchema = false
}) => {
  const siteUrl = 'https://mellominds.co.in';
  const fullUrl = `${siteUrl}${path}`;
  const fullImageUrl = `${siteUrl}${image}`;

  // Generate Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteUrl}${item.url}`
    }))
  } : null;

  // Generate FAQ Schema
  const faqSchemaData = faqSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqSchema.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  } : null;

  // Generate Organization Schema
  const organizationSchema = includeOrganizationSchema ? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'MelloMinds',
    'url': siteUrl,
    'logo': `${siteUrl}/Images/MelloFevicon.png`,
    'description': 'Therapy practice management platform for Indian mental health professionals',
    'sameAs': [
      'https://www.facebook.com/mellominds',
      'https://www.twitter.com/mellominds',
      'https://www.linkedin.com/company/mellominds'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Support',
      'email': 'support@mellominds.co.in'
    }
  } : null;

  // Generate LocalBusiness Schema
  const localBusinessSchema = includeLocalBusinessSchema ? {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'MelloMinds',
    'image': `${siteUrl}/Images/og-image-mellominds.png`,
    'description': 'Therapy practice management software for mental health professionals in India',
    'url': siteUrl,
    'telephone': '+91-XXXXXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
      'addressLocality': 'India'
    },
    'areaServed': 'IN',
    'priceRange': '₹0 - ₹5000'
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* hreflang tags for language/region variants */}
      <link rel="alternate" hrefLang="en-IN" href={fullUrl} />
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="MelloMinds" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* FAQ Schema */}
      {faqSchemaData && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      )}

      {/* Organization Schema */}
      {organizationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}

      {/* LocalBusiness Schema */}
      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
    </Helmet>
  );
};
