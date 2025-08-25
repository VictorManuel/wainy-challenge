import { Icon } from "./Icon";
import TransactionItem from "./TransactionItem";
import { Transaction } from "@/types/transaction";

interface TransactionItemWithIconProps {
  transaction: Transaction;
}

export default function TransactionItemWithIcon({ transaction }: TransactionItemWithIconProps) {
  const getIconName = () => {

    if(transaction.transfer === true) {
      return "transfer";
    } else if (transaction.amount > 0 ) {
      return "income";
    } else {
      return "outcome";
    }
  };

  return (
    <TransactionItem transaction={transaction}>
      <div className="flex items-center justify-center rounded-full bg-fuchsia-100 w-7 h-7">
        <Icon name={getIconName()} size={20} />
      </div>
    </TransactionItem>
  );
}
