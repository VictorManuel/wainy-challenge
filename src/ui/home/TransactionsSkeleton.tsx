import Skeleton from "@/ui/commons/Skeleton";

export default function TransactionsSkeleton() {
  return (
    <div className="mt-4">
      <Skeleton className="h-4 w-40 mb-2" />
      <ul className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="flex justify-between rounded-xl border bg-white p-3">
            <div>
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-4 w-14" />
          </li>
        ))}
      </ul>
    </div>
  );
}