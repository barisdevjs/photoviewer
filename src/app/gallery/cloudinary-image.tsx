"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { FullHeart } from "@/components/icons/full-heart";

interface CloudinaryImgProps {
    key: string;
    alt: string;
    src: string;
    width: number;
    height: number;
    tag: string[]
}

export default function CloudinaryImg({ key, alt, src, width, height, tag }: CloudinaryImgProps) {
    const [transition, startTransition] = useTransition();
    const isFavorite = tag.includes("favorite");
    return (
        <div className="relative">
            <CldImage alt={alt} src={src} key={key} width={width} height={height} tags={tag} />
            {isFavorite ?
                <FullHeart onClick={() =>
                    startTransition(() => {
                        setAsFavoriteAction(src, false, "/gallery")
                    })
                }
                    className="absolute top-2 right-8  text-red-600 cursor-pointer" />
                :
                <Heart onClick={() =>
                    startTransition(() => {
                        setAsFavoriteAction(src, true,"/gallery")
                    })
                }
                    className="absolute top-2  right-8 text-white cursor-pointer" />
            }
        </div>
    )
}