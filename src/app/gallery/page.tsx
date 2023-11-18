import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";

export type SearchResultT = {
  public_id: string,
  filename: string,
  url: string,
  tags: string[]
}

interface PageProps {
  searchParams: {
    search: string;
  };
}

export default async function GalleryPage({ searchParams }: PageProps) {
  const { search } = searchParams;

  const results = await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(10)
    .execute() as { resources: SearchResultT[] }


  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm initialSearch={search} />
        <GalleryGrid images={results.resources}/>
      </div>
    </section>
  )
}
