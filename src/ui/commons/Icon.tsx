import React from "react";
import Image from "next/image";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  onClick?: () => void;
}

export const Icon = ({ name, className = "", size = 24, onClick }: IconProps) => {
  const iconClasses = `w-${size} h-${size} ${className}`;

  const iconMap: Record<string, string> = {
    profile: "/assets/icons/profile.svg",
    transfer: "/assets/icons/transfer.svg",
    transfers: "/assets/icons/transfers.svg",
    income: "/assets/icons/income.svg",
    outcome: "/assets/icons/outcome.svg",
    "arrow-left": "/assets/icons/arrow-left.svg",
  };

  const iconPath = iconMap[name];

  if (!iconPath) {
    return (
      <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    );
  }

  return (
    <Image 
      src={iconPath} 
      alt={`${name} icon`}
      width={size}
      height={size}
      className={iconClasses}
      onClick={onClick}
    />
  );
};
