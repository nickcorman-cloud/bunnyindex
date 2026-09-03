import { getDetermination } from '@/data/determinations-wave1';
import DeterminationPage from '@/components/DeterminationPage';

const rec = getDetermination('the-inkey-list');

export const metadata = {
  title: rec.title,
  description: rec.description,
  alternates: { canonical: 'https://www.bunnyindex.com/is-the-inkey-list-cruelty-free' },
};

export default function Page() {
  return <DeterminationPage rec={rec} />;
}
