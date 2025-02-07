import Link from 'next/link'
import React from 'react'
import Image from './Image'

export default function Recommandations() {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
        {/* ====== USER CARD ======== */}
        <section className="flex items-center justify-between">
            {/* ====== IMG AND USER INFO ======== */}
            <div className="flex items-center gap-2">
                {/* ====== IMG ======== */}
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="John Doe" w={100} h={100} tr={true} />
                </div>
                {/* ====== TEXT ======== */}
                <div className="">
                    <h1 className='text-md font-bold'>John Doe</h1>
                    <span className='text-textGray text-sm'>@johnDoe</span>
                </div>
            </div>
            {/* ===== BUTTON ===== */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
        </section>
        {/* ====== 2nd USER CARD ======== */}
        <section className="flex items-center justify-between">
            {/* ====== IMG AND USER INFO ======== */}
            <div className="flex items-center gap-2">
                {/* ====== IMG ======== */}
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="John Doe" w={100} h={100} tr={true} />
                </div>
                {/* ====== TEXT ======== */}
                <div className="">
                    <h1 className='text-md font-bold'>John Doe</h1>
                    <span className='text-textGray text-sm'>@johnDoe</span>
                </div>
            </div>
            {/* ===== BUTTON ===== */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
        </section>
        {/* ====== 3rd USER CARD ======== */}
        <section className="flex items-center justify-between">
            {/* ====== IMG AND USER INFO ======== */}
            <div className="flex items-center gap-2">
                {/* ====== IMG ======== */}
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="John Doe" w={100} h={100} tr={true} />
                </div>
                {/* ====== TEXT ======== */}
                <div className="">
                    <h1 className='text-md font-bold'>John Doe</h1>
                    <span className='text-textGray text-sm'>@johnDoe</span>
                </div>
            </div>
            {/* ===== BUTTON ===== */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
        </section>
        {/* ==== SHOW MORE LINK ==== */}
        <Link href="/" className='text-iconBlue'>Show More</Link>
    </div>
  )
}