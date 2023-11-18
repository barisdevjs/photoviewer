import cloudinary from "cloudinary";
import FavoritesList from "./favorites-list";
import { ForceRefresh } from "@/components/force-refresh";

export type SearchResultT = {
  public_id: string,
  filename: string,
  url: string,
  tags: string[]
}

export default async function FavoritesPage() {

  const results = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(10)
    .execute() as { resources:SearchResultT[]}


  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
          <FavoritesList initialResources={results.resources}/>
      </div>
    </section>
  )
}
