import React from 'react';
import Image from './Image';
import PostInfo from './PostInfo';
import PostInteraction from './PostInteraction';
import { imageKit } from '@/utils';
import Video from './Video';

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  lqip?: { active: boolean; quality: number } | undefined;
  customMetadata?: { sensitive: boolean };
}

export default async function Post() {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imageKit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails('67a4972b432c47641649a824');

  console.log(fileDetails);

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
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto
            id minima cumque qui nulla blanditiis architecto, magnam, totam quam
            obcaecati dicta doloribus a, quis optio dolorem praesentium amet
            laboriosam beatae fuga accusantium cupiditate sit.
          </p>
          {fileDetails && fileDetails.fileType === 'image' ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
              lqip={{ active: true, quality: 20 }}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
            />
          )}
          <PostInteraction />
        </div>
      </section>
    </div>
  );
}