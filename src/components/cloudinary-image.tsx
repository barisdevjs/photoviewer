"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { FullHeart } from "@/components/icons/full-heart";
import { SearchResultT } from "../app/gallery/page";
import { ImageMenu } from "./image-menu";

interface CloudinaryImgProps {
    alt: string;
    src: string;
    width: number;
    height: number;
    tag: string[]
    onUnheart?: (unheartedResource: SearchResultT["public_id"]) => void
}

export default function CloudinaryImg({ alt, src, width, height, tag, onUnheart }: CloudinaryImgProps) {
    const [_, startTransition] = useTransition();
    const [isFavorite, setIsFavorite] = useState(tag.includes("favorite"));

    console.log("Tag:", tag);
    console.log("Is Favorite:", isFavorite);

    const handleUnheartClick = () => {
        onUnheart?.(src);
        setIsFavorite(false);
        startTransition(() => {
            setAsFavoriteAction(src, false);
        });
    };

    const handleHeartClick = () => {
        setIsFavorite(true);
        startTransition(() => {
            setAsFavoriteAction(src, true);
        });
    };

    return (
        <div className="relative">
            <CldImage alt={alt} src={src} width={width} height={height} />
            {isFavorite ?
                <FullHeart onClick={handleUnheartClick} className="absolute top-2 left-2  text-red-600 cursor-pointer" />
                :
                <Heart onClick={handleHeartClick} className="absolute top-2 left-2 text-white cursor-pointer" />
            }
            <ImageMenu image={{ public_id: src, filename: src, url: src, tags: tag }} />
        </div>
    );
}