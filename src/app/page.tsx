"use client"

import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react"

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        uploadPreset="gegrjiwd"
        onUpload={(results: CldUploadWidgetResults) => {
          if (results.info && typeof results.info === 'object') {
            const publicId = (results.info as { public_id?: string }).public_id;
            if (publicId) {
              console.log(publicId);
              setImageId(publicId);
            }
          }
        }}
      />
      {imageId && <CldImage
        width="400"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />}
    </main>
  )
}
