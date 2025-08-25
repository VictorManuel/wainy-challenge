import TransactionItem from "./TransactionItem";
import { Transaction } from "@/types/transaction";
import { useContactsStore } from "@/store/useContactsStore";
import Avatar from "./Avatar";
import { useRouter } from "next/navigation";

interface TransactionItemWithAvatarProps {
  transaction: Transaction;
}

export default function TransactionItemWithAvatar({ transaction }: TransactionItemWithAvatarProps) {
    const contacts = useContactsStore((s) => s.contacts);
    const contact = transaction.contactId ? contacts.find(c => c.id === transaction.contactId) : null;
    const router = useRouter();

    const handleClick = () => {
        router.push(`/transfer/details/${transaction.id}`);
    };

  return (
    <div onClick={handleClick} className="cursor-pointer hover:bg-gray-100">
        <TransactionItem transaction={transaction}>
            <div className="flex-shrink-0">
                <Avatar avatar={contact?.avatar} name={contact?.fullName || transaction.title} size={40} />
            </div>
        </TransactionItem>
    </div>
  );
}
