import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback",
  description:
    " A platform for users to submit and vote on feedback for a product or service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col `}>
          {/* Navbar */}
          <Navbar />

          {/* Main Section  */}

          <main className=" flex-1 container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer  */}
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
