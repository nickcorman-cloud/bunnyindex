import DirectoryClient from './DirectoryClient';

export const metadata = {
  title: 'Browse Products — BunnyIndex',
  description: 'Browse 503 cruelty-free skincare products. Filter by ingredient, skin concern, brand, and more.',
};

export default function DirectoryPage() {
  return <DirectoryClient />;
}
