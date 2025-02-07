import React from 'react';
import Search from './Search';
import PopularTag from './PopularTag';
import Recommandations from './Recommandations';
import Link from 'next/link';

export default function RightBar() {
  return (
    <div className="pt-4 pb-2 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTag />
      <Recommandations />
      {/* ====== FOOTER ====== */}
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessebility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 L Corg.</span>
      </div>
    </div>
  );
}