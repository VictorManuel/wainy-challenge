import { formatCurrency, formatDate } from "@/lib/formats";
import { ReactNode } from "react";
import { Transaction } from "@/types/transaction";

interface TransactionItemProps {
  transaction: Transaction;
  children?: ReactNode;
}

export default function TransactionItem({ transaction, children } : TransactionItemProps) {

  return (
    <li key={transaction.id} className="flex m-0 items-center justify-between p-3">
      <div className="flex items-center gap-3">
        {children && <div className="flex-shrink-0">{children}</div>}
        <div>
          <div className="text-sm font-medium">{transaction.title}</div>
          <div className="text-xs text-gray-500">{formatDate(transaction.date)}</div>
        </div>
      </div>
      <div className={`text-sm font-semibold ${transaction.amount < 0 ? "text-red-500" : "text-emerald-600"}`}>
        {formatCurrency(transaction.amount)}
      </div>
    </li>)
}