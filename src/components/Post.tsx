import React from 'react';
import Image from './Image';
import PostInfo from './PostInfo';
import PostInteraction from './PostInteraction';

export default function Post() {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* --------- POST TYPE --------- */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>Shubham Mishra</span>
      </div>
      {/* ========= POST CONTENT ========= */}
      <section className="flex gap-4">
        {/* ========= AVATAR ========= */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
        {/* ========= CONTENT ========= */}
        <div className="flex-1 flex flex-col gap-2">
          {/* ========= TOP ========= */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Shubham Mishra</h1>
              <span className="text-textGray">@shubhWebDev</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* ========= TEXT & MEDIA ========= */}
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto id minima cumque qui nulla blanditiis architecto, magnam, totam quam obcaecati dicta doloribus a, quis optio dolorem praesentium amet laboriosam beatae fuga accusantium cupiditate sit.</p>
          <Image path="general/post.jpeg" alt="" w={600} h={600} />
          <PostInteraction />
        </div>
      </section>
    </div>
  );
}