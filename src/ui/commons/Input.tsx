"use client";
import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={`rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 ${className}`}
    />
  );
}