import Feed from '@/components/Feed';
import Image from '@/components/Image';
import Link from 'next/link';
import React from 'react';

export default function UserPage() {
  return (
    <section className="">
      {/* ====== PROFILE TITLE ======= */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000004]">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Shubham Mishra</h1>
      </div>
      {/* ====== INFO ======= */}
      <div className="">
        {/* ====== COVER & AVATAR CONTAINER ======= */}
        <div className="relative w-full">
          {/* ====== COVER ====== */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              path="general/cover.png"
              alt="Cover"
              w={600}
              h={200}
              tr={true}
            />
          </div>
          {/* ====== AVATAR ====== */}
          <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
              path="general/avatar.png"
              alt="Cover"
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* ======= USER DETAILS ======= */}
        <div className="p-4 flex flex-col gap-2">
          {/* ======== USERNAME & HANDLE ======== */}
          <div className="">
            <h1 className="text-2xl font-bold">Shubham Mishra</h1>
            <span className="text-textGray text-sm">@shubhDev</span>
          </div>
          <p className="">Shubham Mishra Youtube Channel</p>
          {/* ==== JOB LOCATION & DATE ==== */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image path="icons/userLocation.svg" alt="" w={20} h={20} />
              <p>India</p>
            </div>
            <div className="flex items-center gap-2">
              <Image path="icons/date.svg" alt="" w={20} h={20} />
              <p>Joined May 2024</p>
            </div>
          </div>
        {/* ======== FOLLOWING & FOLLOWERS ======== */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className='font-bold'>100</span>
            <span className='text-textGray text-[15px]'>Followers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className='font-bold'>100</span>
            <span className='text-textGray text-[15px]'>Followings</span>
          </div>
        </div>
        </div>
      </div>
      {/* ======== FEEDS ======== */}
      <Feed />
    </section>
  );
}