"use client";
import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" }) {
  const { className = "", variant = "primary", ...rest } = props;

  return (
    <button
      {...rest}
      className={`${variant === "outline" ? "bg-transparent text-white border border-white" : variant === "secondary" ? "bg-white text-emerald-500 border border-emerald-500" : "bg-emerald-500 text-white"} cursor-pointer h-11 w-full rounded-full px-4 font-medium disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    />
  );
}