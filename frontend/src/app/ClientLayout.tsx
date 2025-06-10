// app/ClientLayout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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