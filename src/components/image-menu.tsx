import {
    User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "./icons/menu"
import { FolderPlus } from "./icons/folder-plus"

export function ImageMenu() {
    return (
        <div className="absolute top-2 right-6">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-12/12 h-12/12 p-0">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuItem className="flex items-center justify-between ">
                    <FolderPlus/>
                    <span>Add to Album</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
