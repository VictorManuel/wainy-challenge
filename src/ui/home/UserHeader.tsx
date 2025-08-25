import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";

export const UserHeader = () => {
    const user = useUserStore((s) => s.user);

    if (!user) return null;

    return(<div className="flex-none flex items-center justify-end gap-3 px-4">
        <div className="font-semibold">{user.fullName}</div>
        <Image src={user.avatar} alt={user.fullName} width={42} height={42} className="rounded-full" />
      </div>)
}