import { getDetermination } from '@/data/determinations-wave1';
import DeterminationPage from '@/components/DeterminationPage';

const rec = getDetermination('paulas-choice');

export const metadata = {
  title: rec.title,
  description: rec.description,
  alternates: { canonical: 'https://www.bunnyindex.com/is-paulas-choice-cruelty-free' },
};

export default function Page() {
  return <DeterminationPage rec={rec} />;
}
