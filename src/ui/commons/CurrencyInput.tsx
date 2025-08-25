"use client";
import Input from "./Input";
import { formatCurrency } from "../../lib/formats";

export default function CurrencyInput({ value, onChange, className }: { value: number, onChange: (value: number) => void, className?: string }) {


  // TODO: input formatted as currency
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  
    const onlyDigits = e.target.value.replace(/\D/g, "");
    const number = Number(onlyDigits || "0");
    onChange(number);
  }

  return (
    <div>
    <Input
      type="number"
      min={1}
      value={formatCurrency(value)}
      onChange={handleChange}
      className={`text-center text-lg font-bold border-none bg-transparent focus:ring-0 focus:ring-offset-0 ${className}`}
        />
    </div>
  );
}