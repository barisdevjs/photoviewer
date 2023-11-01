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

export function ImageMenu({url}:{url:SearchResultT["url"]}) {
    return (
        <div className="absolute top-2 right-6">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-12/12 h-12/12 p-0">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuItem asChild>
                    <AddToAlbumDialog url={url} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
