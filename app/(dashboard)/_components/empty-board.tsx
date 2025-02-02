"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMuatation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMuatation(api.board.create);
  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`);
      })
      .catch((err) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className=" flex items-center justify-center flex-col h-full">
      <Image src="/notepad1.png" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
