import React from 'react';
import Image from './Image';
import Link from 'next/link';

export default function PopularTag() {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* ====== TREND EVENT ======= */}
      <div className="flex gap-4">
        {/* ====== IMG ======= */}
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/event.png"
            alt="event"
            tr={true}
            w={120}
            h={120}
          />
        </div>
        {/* ====== DESC ======= */}
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">Diwali</h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* ====== TOPIC ======= */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray font-bold text-sm">
            Technology * Trending
          </span>
          <Image path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* ====== 2nd TOPIC ======= */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray font-bold text-sm">
            Technology * Trending
          </span>
          <Image path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* ====== 3rd TOPIC ======= */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray font-bold text-sm">
            Technology * Trending
          </span>
          <Image path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* ====== 4th TOPIC ======= */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray font-bold text-sm">
            Technology * Trending
          </span>
          <Image path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      <Link href="/" className='text-iconBlue'>Show More</Link>
    </div>
  );
}