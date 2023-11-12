import cloudinary from "cloudinary";
import AlbumGrid from "./album-grid";
import { SearchResultT } from "@/app/gallery/page";
import { ForceRefresh } from "@/components/force-refresh";

export default async function GalleryPage({
  params: { albumName },
}: {
  params: {
    albumName: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResultT[] };

  return (
    <section>
      <ForceRefresh />

      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h4 className="text-4xl font-bold">Album &gt; {albumName}</h4>
        </div>

        <AlbumGrid images={results.resources} />
      </div>
    </section>
  );
}