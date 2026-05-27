import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
