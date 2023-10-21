"use client";

import CloudinaryImg from "../gallery/cloudinary-image";
import { SearchResultT } from "./page";
import { useState, useEffect } from "react";

export default function FavoritesList({ initialResources }: { initialResources: SearchResultT[] }) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])
    
    return (
        <div className="grid grid-cols-4 gap-4">
            {resources.map((result) => (
                <CloudinaryImg
                    key={result.public_id}
                    alt={result.public_id}
                    src={result.public_id}
                    tag={result.tags}
                    width={400}
                    height={300}
                    onUnheart={(unheartedResource) => {
                        setResources((currentResources) => 
                            currentResources.filter((resource) => 
                                resource.public_id !== unheartedResource
                         )
                        )
                    }}
                />
            ))
            }
        </div>
    )
}
