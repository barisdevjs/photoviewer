"use client";

import { SearchResultT } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export function ImageGrid({ images, getImage }:
  { images: SearchResultT[], getImage: (image: SearchResultT) => ReactNode }) {

  function getColumns(colIdx: number) {
    return images.filter(
      (_, idx) => idx % MAX_COLUMNS === colIdx
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[0, 1, 2, 3].map((colIdx) => (
        <div key={colIdx} className="flex flex-col gap-4">
          {getColumns(colIdx).map(getImage)}
        </div>
      ))}
    </div>
  );
}
