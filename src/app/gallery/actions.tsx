"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
export async function setAsFavoriteAction(
  src: string,
  isFavorite: boolean,
  path:string
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [src])
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [src])
  }
  await new Promise((resolve) => setTimeout(() => {resolve}, 1000))
  revalidatePath(path)
}