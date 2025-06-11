// app/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

// Define routes where Navbar & Footer should be hidden
const HIDE_NAV_FOOTER_PATHS = ['/login', '/signup', '/not-found'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const shouldHideNavFooter = HIDE_NAV_FOOTER_PATHS.includes(pathname || '');

  return (
    <>
      {!shouldHideNavFooter && <Navbar />}
      <main>{children}</main>
      {!shouldHideNavFooter && <Footer />}
    </>
  );
}