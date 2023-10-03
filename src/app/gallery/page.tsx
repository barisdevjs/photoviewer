"use client"

import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";


function Gallery() {
    return (
        <section>
            <div className="flex space-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <CldUploadButton
                    uploadPreset="gegrjiwd"
                    onUpload={(results: CldUploadWidgetResults) => {
                        if (results.info && typeof results.info === 'object') {
                            const publicId = (results.info as { public_id?: string }).public_id;
                            if (publicId) {
                                console.log(publicId);
                            }
                        }
                    }}
                />
            </div>
        </section>
    )
}

export default Gallery