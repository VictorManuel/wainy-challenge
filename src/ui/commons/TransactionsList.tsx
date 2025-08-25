export default function TransactionsList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex-1 min-h-0 overflow-auto space-y-3 pr-1">
      {children}
    </ul>
  );
}