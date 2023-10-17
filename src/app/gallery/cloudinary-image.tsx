"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImgProps {
    key: string;
    alt: string;
    src: string;
    width: number;
    height: number;
  }

export default function CloudinaryImg({ key, alt, src, width, height } : CloudinaryImgProps) {
    return (
        <CldImage  alt={alt} src={src} key={key} width={width} height={height} />
    )
}