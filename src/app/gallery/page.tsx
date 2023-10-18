import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImg from "./cloudinary-image";

export type SearchResultT = {
  public_id: string,
  filename: string,
  url: string
}

export default async function GalleryPage() {

  const results = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(5)
    .execute() as { resources:SearchResultT[]}

  console.log(results)

  // if (!results.resources.length) return <div>NOT FOUND</div>
  return (
    <section>
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
        {results.resources.map((result) => (
          <CloudinaryImg
          key={result.public_id} 
          alt={result.public_id}  src={result.public_id}
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
