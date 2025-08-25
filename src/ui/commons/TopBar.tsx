"use client";
import { Icon } from "./Icon";
import { useRouter } from "next/navigation";

export default function TopBar({ title, onBack }: { title: string, onBack?: boolean}) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

    return (
        <div className="flex justify-start items-center px-4">
            {onBack && <Icon name="arrow-left" className="mr-4 cursor-pointer flex-none" size={20} onClick={handleBack} />}
            <h1 className="text-2xl text-white text-center flex-1">{title}</h1>
            <div className="w-10 h-10"></div>
        </div>
    )
}