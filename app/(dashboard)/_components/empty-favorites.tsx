import Image from "next/image"


export const EmptyFavorites=()=>{
    return(
        <div className=" flex items-center justify-center flex-col h-full">
        <Image
            src="/empty-favorites.svg"
            alt="Empty"
            width={140}
            height={140}
        />
        <h2 className="text-2xl font-semibold mt-6">No favorites</h2>
        <p className=" text-muted-foreground text-sm mt-2">Mark star to add favorite.</p>
        </div>
    )
}