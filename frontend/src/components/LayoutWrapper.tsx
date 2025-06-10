"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HIDDEN_NAVFOOT_ROUTES = ["/login", "/signup", "/not-found"];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbarFooter = HIDDEN_NAVFOOT_ROUTES.includes(pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}