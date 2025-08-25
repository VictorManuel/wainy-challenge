"use client";
import { TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className = "", ...rest } = props;
  return (
    <textarea
      {...rest}
      className={`w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 ${className}`}
    />
  );
}