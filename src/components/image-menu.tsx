import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "./icons/menu"
import { SearchResultT } from "@/app/gallery/page"
import { AddToAlbumDialog } from "./ui/add-to-album-dialog"
import { useState } from "react"

export function ImageMenu({image}:{image:SearchResultT}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute top-2 right-6">
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-12/12 h-12/12 p-0">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuItem asChild >
                    <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
