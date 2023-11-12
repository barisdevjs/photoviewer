import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "../icons/folder-plus"
import { useState } from "react"
import { SearchResultT } from "@/app/gallery/page"
import { addImgToAlbum} from "../actions"

export function AddToAlbumDialog({image, onClose}:{image:SearchResultT; onClose: () => void}) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={(newOpenState) => {
            setOpen(newOpenState);
            !newOpenState && onClose();
        }}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="w-40 flex items-center justify-between">
                <FolderPlus />
                <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type an album you want to move this image into.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            id="album-name"
                            value={albumName}
                            className="col-span-3"
                            onChange={e => setAlbumName(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    {/* OnClick  we need to invoke a server action*/}
                    <Button 
                    onClick={ async () => { 
                        onClose();
                        setOpen(false);
                         await addImgToAlbum( image, albumName)}}
                    type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
