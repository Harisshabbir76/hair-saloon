import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Salon - Your Beauty, Our Duty",
  description: "Premium salon services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <LayoutWithNavbarAndFooter>
          {children}
        </LayoutWithNavbarAndFooter>
      </body>
    </html>
  );
}

function LayoutWithNavbarAndFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Using a client component wrapper for the conditional rendering
  const pathname = usePathname();
  const excludedPaths = ['/login', '/signup', '/404'];
  const shouldShowNavAndFooter = !excludedPaths.some(path => 
    pathname?.startsWith(path)
  );

  return (
    <>
      {shouldShowNavAndFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {shouldShowNavAndFooter && <Footer />}
    </>
  );
}