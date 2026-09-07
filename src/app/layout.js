import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FathomAnalytics from '@/components/FathomAnalytics';

export const metadata = {
  title: 'BunnyIndex — The Cruelty-Free Ingredient Directory',
  description: 'A true cruelty-free skincare directory. No testing at any stage. No sales in markets that require it. No ownership by companies that do. Zero exceptions.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'BunnyIndex — The Cruelty-Free Ingredient Directory',
    description: 'Discover cruelty-free skincare products from truly independent brands. Search by ingredient, skin concern, or product type.',
    url: 'https://www.bunnyindex.com',
    siteName: 'BunnyIndex',
    type: 'website',
  },
  other: {
    'awin-site-verification': 'Awin',
    'impact-site-verification': '76572be3-8a69-422d-b9c1-6e83f99d27a5',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FathomAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://subscribe-forms.beehiiv.com/attribution.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
