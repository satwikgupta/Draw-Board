"use client"

import { useRenameModal } from "@/store/use-rename-modal"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMuatation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";


export const RenameModal =()=>{
    const {mutate,pending} = useApiMuatation(api.board.update)
    const {isOpen, onClose, initialValues} = useRenameModal();
    const [title,setTitle] = useState(initialValues.title)

    useEffect(()=>{
        setTitle(initialValues.title);
    },[initialValues.title]);

    const onSubmit:FormEventHandler<HTMLFormElement>= (e)=>{
        e.preventDefault();
        mutate({
            id:initialValues.id,
            title
        })
            .then(()=>{
                toast.success("Renamed successfully")
                onClose()
            })
            .catch(()=>{
                 toast.error("Failed to rename")
             });
            
    }
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit title
                    </DialogTitle>
                    <DialogDescription>
                        Enter new title
                    </DialogDescription>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <Input
                        disabled={pending}
                        placeholder="Title"
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <DialogFooter>
                            <DialogClose>
                                <Button type="button" variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button  type="submit" disabled={pending}>Save</Button>
                        </DialogFooter>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}