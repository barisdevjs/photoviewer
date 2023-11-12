"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResultT } from "@/app/gallery/page";
import CloudinaryImg from "@/components/cloudinary-image";

export default function AlbumGrid({ images }: { images: SearchResultT[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResultT) => {
        return (
          <CloudinaryImg
            key={imageData.public_id}
            width={400}
            height={300}
            src={imageData.url}
            tag={imageData.tags}
            alt="an image of something"
          />
        );
      }}
    />
  );
}