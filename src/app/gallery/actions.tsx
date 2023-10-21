"use server";
import cloudinary from "cloudinary";
export async function setAsFavoriteAction(
  src: string,
  isFavorite: boolean,
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [src])
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [src])
  }
}