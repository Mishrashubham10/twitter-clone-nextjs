'use client';

import Image from './Image';

export default function PostInfo() {
  return (
    <section className="cursor-pointer w-4 h-4 relative">
      <Image path="icons/infoMore.svg" alt="Demo" w={16} h={16} />
    </section>
  );
}