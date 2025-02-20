'use client';

import { IKImage } from 'imagekitio-next';
import React from 'react';

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
  lqip?:{active:boolean, quality: number}|undefined;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Image({ path, w, h, alt, className, tr }: ImageType) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
}