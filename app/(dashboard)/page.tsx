"use client";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { useSearchParams } from "next/navigation";



export default function DashboardPage() {
  const { organization } = useOrganization();
  const params = useSearchParams();
  const search = params.get('search') || '';
  const favorites = params.get('favorites') || '';

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (<EmptyOrg />) : (
      <BoardList
      orgId={organization.id}
      query = { {search,favorites}}
      />
      )}
    </div>
  );
}
