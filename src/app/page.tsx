import Feed from '@/components/Feed';
import Share from '@/components/Share';
import Link from 'next/link';

const Homepage = () => {
  return (
    <main className="">
      {/* ---------- TOP OPTIONS ----------- */}
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          for you
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          Following
        </Link>
        <Link href="/" className="hidden md:flex pb-3 items-center">
          React.js
        </Link>
        <Link href="/" className="hidden md:flex pb-3 items-center">
          JavaScript
        </Link>
        <Link href="/" className="hidden md:flex pb-3 items-center">
          Programming
        </Link>
      </div>
      <Share />
      <Feed />
    </main>
  );
};

export default Homepage;