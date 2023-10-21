"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useState, useTransition } from "react";
import { FullHeart } from "@/components/icons/full-heart";
import { SearchResultT } from "./page";

interface CloudinaryImgProps {
    key: string;
    alt: string;
    src: string;
    width: number;
    height: number;
    tag: string[]
    onUnheart?: (unheartedResource: SearchResultT) => void
}

export default function CloudinaryImg({ key, alt, src, width, height, tag, onUnheart }: CloudinaryImgProps ) {
    const [transition, startTransition] = useTransition();
    const [isFavorite, setIsFavorite] = useState(tag.includes("favorite"));
    return (
        <div className="relative">
            <CldImage alt={alt} src={src} key={key} width={width} height={height} tags={tag} />
            {isFavorite ?
                <FullHeart onClick={() => {
                    setIsFavorite(false);
                    startTransition(() => {
                        setAsFavoriteAction(src, false)
                    })
                }
                }
                    className="absolute top-2 right-8  text-red-600 cursor-pointer" />
                :
                <Heart onClick={() => {
                    setIsFavorite(true);
                    startTransition(() => {
                        setAsFavoriteAction(src, true)
                    })
                }
                }
                    className="absolute top-2  right-8 text-white cursor-pointer" />
            }
        </div>
    )
}