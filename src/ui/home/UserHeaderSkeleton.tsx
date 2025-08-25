export const UserHeaderSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="animate-pulse h-[42px] w-[42px] rounded-full bg-gray-200" />
      <div className="animate-pulse h-4 w-32 bg-gray-200 rounded-md" />
    </div>
  );
};