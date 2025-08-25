export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-none rounded-3xl bg-white p-4 mx-4 shadow">
            {children}
        </div>
    )
}