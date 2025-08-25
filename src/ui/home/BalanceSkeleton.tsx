import Skeleton from "@/ui/commons/Skeleton";

export default function BalanceSkeleton() {
  return (
    <div className="rounded-3xl bg-gray-100 p-5">
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-8 w-32" />
    </div>
  );
}