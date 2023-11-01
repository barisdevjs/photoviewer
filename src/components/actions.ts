"use server";

import { SearchResultT } from "@/app/gallery/page";
import cloudinary from "cloudinary";

export async function createFolder(image: SearchResultT,folder : string) {
   const existingFolder = await cloudinary.v2.api.create_folder(folder);

   await cloudinary.v2.uploader.rename(
    image.public_id, `${folder}/${image.public_id}`
   )
    
}