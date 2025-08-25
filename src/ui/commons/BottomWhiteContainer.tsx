interface BottomWhiteContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function BottomWhiteContainer({ children, className = "" }: BottomWhiteContainerProps) {
  return <div className={`bg-white rounded-t-3xl pt-4 p-0 ${className}`}>{children}</div>;
}