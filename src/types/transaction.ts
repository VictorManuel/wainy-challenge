export type Transaction = {
    id: string;
    contactId?: string;
    title: string;
    amount: number;
    notes?: string;
    date: string;
    transfer?: boolean;
  };