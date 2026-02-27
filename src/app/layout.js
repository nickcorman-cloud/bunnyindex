import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FathomAnalytics from '@/components/FathomAnalytics';

export const metadata = {
  title: 'BunnyIndex — The Cruelty-Free Ingredient Directory',
  description: 'A true cruelty-free skincare directory. No testing at any stage. No sales in markets that require it. No ownership by companies that do. 503 products. Zero exceptions.',
  openGraph: {
    title: 'BunnyIndex — The Cruelty-Free Ingredient Directory',
    description: 'Discover cruelty-free skincare products from truly independent brands. Search by ingredient, skin concern, or product type.',
    url: 'https://www.bunnyindex.com',
    siteName: 'BunnyIndex',
    type: 'website',
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
      </body>
    </html>
  );
}
