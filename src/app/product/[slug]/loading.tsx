import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return ( 
        <div className="flex flex-col">
            <Skeleton className="w-full h-[380px]" />

            <div className="grid grid-cols-4 gap-4 mt-8 px-5">
                <Skeleton className="rounded-lg w-full h-[100px]" />
                <Skeleton className="rounded-lg w-full h-[100px]" />
                <Skeleton className="rounded-lg w-full h-[100px]" />
                <Skeleton className="rounded-lg w-full h-[100px]" />
            </div>

            <div className="flex flex-col mt-8 gap-3 px-5">
                <Skeleton className="rounded-lg w-52 h-4" />
                <Skeleton className="rounded-lg w-52 h-8" />
                <Skeleton className="rounded-lg w-40 h-4" />

                <Skeleton className="rounded-lg w-24 h-14" />
            </div>


            <div className="flex flex-col mt-8 gap-3 px-5">
                <Skeleton className="rounded-lg w-42 h-5" />

                <Skeleton className="w-full h-4" />
            </div>
            
        </div>
    );
}
 
export default Loading;