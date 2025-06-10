// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Salon - Your Beauty, Our Duty",
  description: "Premium salon services",
};

// Dynamically import the client-side component
const ClientLayout = dynamic(() => import('./ClientLayout'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}