"use client";
import { useUserStore } from "@/store/useUserStore";
import Avatar from "@/ui/commons/Avatar";

export default function UserDetails() {
  const { user } = useUserStore();
  if (!user) return null;

  return (
    <div className="space-y-4 px-4 pt-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar avatar={user.avatar} name={user.fullName} size={200} />
        <div className="text-2xl font-bold">{user.fullName}</div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="text-gray-500">City</div><div className="col-span-2 font-semibold text-right">{user.city}</div>
        <div className="text-gray-500">State</div><div className="col-span-2 font-semibold text-right">{user.state}</div>
        <div className="text-gray-500">Street</div><div className="col-span-2 font-semibold text-right">{user.street}</div>
        <div className="text-gray-500">Email</div><div className="col-span-2 font-semibold text-right">{user.email}</div>
        <div className="text-gray-500">Phone</div><div className="col-span-2 font-semibold text-right">{user.phone}</div>
      </div>
      <div className="flex items-center justify-between bottom-0 absolute mb-16 gap-2">
        <div className="text-gray-400">ID</div><div className="text-right text-gray-400">{user.id}</div>
      </div>
    </div>
  );
}