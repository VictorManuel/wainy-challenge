import Skeleton from "@/ui/commons/Skeleton";

export default function ContactsSkeleton() {
  return (
    <div>
      <Skeleton className="h-4 w-28 mb-2" />
      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton className="h-14 w-14 rounded-full" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
}