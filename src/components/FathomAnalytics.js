'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Fathom from 'fathom-client';

function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    Fathom.load('EBICVQTX', {
      includedDomains: ['bunnyindex.com', 'www.bunnyindex.com'],
    });
  }, []);

  useEffect(() => {
    Fathom.trackPageview();
  }, [pathname, searchParams]);

  return null;
}

export default function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  );
}
