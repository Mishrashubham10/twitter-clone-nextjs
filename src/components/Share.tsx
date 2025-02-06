'use client';

import React, { useState } from 'react';
import Image from './Image';
import NextImage from 'next/image';

// ACTIONS
import { shareAction } from '@/actions';
import ImageEditor from './ImageEditor';

export default function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: 'original' | 'wide' | 'square';
    sensitive: boolean;
  }>({
    type: 'original',
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form className="p-4 flex gap-4" action={formData=>shareAction(formData, settings)}>
      {/* ======= AVATAR ======= */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
      </div>
      {/* ======= OTHERS ======= */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What is happening..."
          name="desc"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        {/* ======= PREVIEW IMAGE ======= */}
        {previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === 'original'
                  ? 'h-full object-contain'
                  : settings.type === 'square'
                  ? 'aspect-square object-cover'
                  : 'aspect-video object-cover'
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* ======= ICONS ======= */}
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                w={20}
                h={20}
                alt=""
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              w={20}
              h={20}
              alt=""
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              w={20}
              h={20}
              alt=""
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              w={20}
              h={20}
              alt=""
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              w={20}
              h={20}
              alt=""
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              w={20}
              h={20}
              alt=""
              className="cursor-pointer"
            />
          </div>
          {/* ======= BUTTONS ======= */}
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
