/**
 * Dynamic Sitemap Generator for SEO
 * Generates sitemap.xml with all routes and their metadata
 */

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Define all routes and their sitemap metadata
 */
export const sitemapRoutes: SitemapUrl[] = [
  {
    loc: 'https://mellominds.co.in/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: 'https://mellominds.co.in/features',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: 'https://mellominds.co.in/pricing',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: 'https://mellominds.co.in/#faqs',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://mellominds.co.in/privacy-policy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://mellominds.co.in/terms-of-service',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.5
  }
];

/**
 * Generate XML sitemap content
 * @returns XML string for sitemap
 */
export function generateSitemapXML(): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urls = sitemapRoutes
    .map(
      (url) => `
  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('');

  return `${xmlHeader}\n${urlsetOpen}${urls}\n${urlsetClose}`;
}

/**
 * Escape special XML characters
 * @param str - String to escape
 * @returns Escaped string
 */
function escapeXml(str: string): string {
  const xmlChars: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str.replace(/[&<>"']/g, (char) => xmlChars[char]);
}

/**
 * Generate sitemap index for multiple sitemaps (if needed in future)
 * @param sitemaps - Array of sitemap URLs
 * @returns XML string for sitemap index
 */
export function generateSitemapIndex(sitemaps: string[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const sitemapIndexOpen =
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const sitemapIndexClose = '</sitemapindex>';

  const sitemapEntries = sitemaps
    .map(
      (url) => `
  <sitemap>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`
    )
    .join('');

  return `${xmlHeader}\n${sitemapIndexOpen}${sitemapEntries}\n${sitemapIndexClose}`;
}

/**
 * Hook to dynamically update sitemap when routes change
 * Call this in your main App component
 */
export function updateSitemapInHead(): void {
  if (typeof document === 'undefined') return;

  const sitemapXml = generateSitemapXML();
  const blob = new Blob([sitemapXml], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);

  // Update or create sitemap link in head
  let sitemapLink = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement;
  if (!sitemapLink) {
    sitemapLink = document.createElement('link');
    sitemapLink.rel = 'sitemap';
    document.head.appendChild(sitemapLink);
  }
  sitemapLink.href = url;
  sitemapLink.type = 'application/xml';
}
