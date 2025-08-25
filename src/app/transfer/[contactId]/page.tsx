"use client";
import AmountForm from "@/ui/transfer-flow/AmountForm";
import TopBar from "@/ui/commons/TopBar";
import BottomWhiteContainer from "@/ui/commons/BottomWhiteContainer";
import { useParams } from "next/navigation";
import BalanceCard from "@/ui/home/BalanceCard";

export default function SendAgain() {
  const { contactId } = useParams<{ contactId: string }>();
  return (
    <main className="h-full flex flex-col min-h-0 justify-start space-y-4 pt-4 pb-0 max-h-screen">
      <TopBar title="Send again" onBack={true} />
      <BalanceCard />
      {contactId && <BottomWhiteContainer className="flex-1 flex flex-col min-h-0">
        <AmountForm contactId={contactId as string} />
      </BottomWhiteContainer>}
      {!contactId && <div className="text-center text-gray-500">Contact not found</div>}
    </main>
  );
}