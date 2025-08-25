'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/ui/commons/Icon";

export const NavBar = ({ items }: { items: { label: string; href: string; icon: string }[] }) => {
  const pathname = usePathname();

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white p-4 border-t border-gray-200 shadow-2xl">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className="text-gray-500">
            <Icon 
              name={item.icon} 
              size={36} 
              className={isActive ? "filter brightness-0 invert-27 sepia-51 saturate-2878 hue-rotate-246 contrast-101" : "filter brightness-0 saturate-100 invert-50 sepia-0 hue-rotate-0"}
            />
          </Link>
        );
      })}
    </div>
  );
};