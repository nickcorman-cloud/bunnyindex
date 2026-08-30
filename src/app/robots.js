export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://www.bunnyindex.com/sitemap.xml',
    host: 'https://www.bunnyindex.com',
  };
}
