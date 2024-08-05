import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className=" flex items-center justify-center flex-col h-full">
      <Image src="/notepad1.png" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Try searching something else
      </p>
    </div>
  );
};

