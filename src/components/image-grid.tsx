"use client";

import { SearchResultT } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export function ImageGrid({ images, getImage }:
  { images: SearchResultT[], getImage: (image: SearchResultT) => ReactNode }) {

  function getColumns(colIdx: number) {
    return images.filter(
      (_, idx) => idx % MAX_COLUMNS === colIdx
    )
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        getColumns(0),
        getColumns(1),
        getColumns(2),
        getColumns(3),
      ].map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {column.map(getImage)}
        </div>
      ))}
    </div>
  )
}
