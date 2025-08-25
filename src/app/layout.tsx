import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { NavBar } from "../ui/layout/NavBar";

export const metadata: Metadata = {
  title: "WayniWallet",
  description: "Technical challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-gray-50 text-gray-900">
        <Providers>
          <div className="relative max-w-md mx-auto bg-[#0FD08B]">
            <div className="h-dvh pb-14 overflow-scroll">
              {children}
            </div>
            <NavBar
              items={[
                { label: "Home", href: "/", icon: "transfer" },
                { label: "Transfers", href: "/transfers", icon: "transfers" },
                { label: "Profile", href: "/profile", icon: "profile" },
              ]}
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
