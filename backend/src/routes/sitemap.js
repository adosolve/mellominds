import express from 'express';

const router = express.Router();

/**
 * Dynamic Sitemap Route
 * Generates sitemap.xml with all routes
 */

const sitemapRoutes = [
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
 * Escape special XML characters
 */
function escapeXml(str) {
  const xmlChars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str.replace(/[&<>"']/g, (char) => xmlChars[char]);
}

/**
 * Generate XML sitemap
 */
function generateSitemapXML() {
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
 * GET /api/sitemap.xml
 * Returns dynamic sitemap
 */
router.get('/sitemap.xml', (req, res) => {
  try {
    const sitemapXml = generateSitemapXML();
    res.header('Content-Type', 'application/xml');
    res.header('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.send(sitemapXml);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
});

/**
 * GET /api/robots.txt
 * Returns robots.txt for search engines
 */
router.get('/robots.txt', (req, res) => {
  try {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://mellominds.co.in/api/sitemap.xml
Sitemap: https://mellominds.co.in/sitemap.xml

# Disallow crawling of admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /.env
Disallow: /config/

# Allow crawling of public assets
Allow: /Images/
Allow: /public/

# Crawl delay (optional)
Crawl-delay: 1`;

    res.header('Content-Type', 'text/plain');
    res.header('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.send(robotsTxt);
  } catch (error) {
    console.error('Robots.txt generation error:', error);
    res.status(500).json({ error: 'Failed to generate robots.txt' });
  }
});

export default router;
