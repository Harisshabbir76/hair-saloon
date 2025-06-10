import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Salon - Your Beauty, Our Duty",
  description: "Premium salon services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavbarFooter = ["/login", "/signup", "/404"].includes(pathname);

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        {!hideNavbarFooter && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!hideNavbarFooter && <Footer />}
      </body>
    </html>
  );
}