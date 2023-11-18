"use client";

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImg from "../../components/cloudinary-image";
import { SearchResultT } from "./page";
import { useState, useEffect } from "react";

interface FavoritesListProps {
    initialResources: SearchResultT[];
}

export default function FavoritesList({ initialResources }: FavoritesListProps) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (
        <ImageGrid images={resources}
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
