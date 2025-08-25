export const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
  
  export const formatDate = (d: string | number | Date) =>
    new Date(d).toLocaleString("en-GB", {
      year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit",
    });