"use client";

import { CldImage } from "next-cloudinary";
export default function CloudinaryImg(...props : any) {
    return (
        <CldImage {...props} />
    )
}