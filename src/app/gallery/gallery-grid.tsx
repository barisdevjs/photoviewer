"use client"

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImg from "./cloudinary-image";
import { SearchResultT } from "./page";

export default function GalleryGrid({ images }: { images: SearchResultT[] }) {

    return (
        <ImageGrid images={images}
            getImage={(image: SearchResultT) => {
                return (
                    <CloudinaryImg
                        key={image.public_id}
                        alt={image.public_id}
                        src={image.public_id}
                        tag={image.tags}
                        width={400}
                        height={300}
                    />
                )
            }}
        />
    )
}
