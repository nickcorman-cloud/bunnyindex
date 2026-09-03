import { getDetermination } from '@/data/determinations-wave1';
import DeterminationPage from '@/components/DeterminationPage';

const rec = getDetermination('byoma');

export const metadata = {
  title: rec.title,
  description: rec.description,
  alternates: { canonical: 'https://www.bunnyindex.com/is-byoma-cruelty-free' },
};

export default function Page() {
  return <DeterminationPage rec={rec} />;
}
