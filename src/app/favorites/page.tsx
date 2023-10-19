import cloudinary from "cloudinary";
import CloudinaryImg from "../gallery/cloudinary-image";

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
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
        {results.resources.map((result) => (
          <CloudinaryImg
          key={result.public_id} 
          alt={result.public_id}  
          src={result.public_id}
          tag={result.tags}
          width={400} 
          height={300}
          />
          ))
        }
        </div>
      </div>
    </section>
  )
}
