"use client";
import Link from "next/link";
import { useContactsStore } from "@/store/useContactsStore";
import Avatar from "@/ui/commons/Avatar";

export default function SendAgainList() {
  const contacts = useContactsStore((s) => s.contacts);
  if (!contacts.length) return null;

  return (
    <div className="flex-none">
      <div className="mb-2 font-bold text-center">Send Again</div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {contacts.map((contact) => (
          <Link key={contact.id} href={`/transfer/${contact.id}`} className="flex shrink-0 flex-col items-center gap-2">
            <Avatar avatar={contact.avatar} name={contact.fullName} size={56} />
            <span className="text-xs w-16 text-center">{contact.fullName.split(" ")[0]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}