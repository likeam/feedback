import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/components/ui/theme-provider";
import { syncCurrentUser } from "@/lib/sync-user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback",
  description:
    " A platform for users to submit and vote on feedback for a product or service.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncCurrentUser(); // Ensure the current user is synced before rendering the app
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark"
        style={{ colorScheme: "dark" }}
        suppressHydrationWarning
      >
        <body className={`${inter.className} min-h-screen flex flex-col `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {/* Navbar */}
            <Navbar />

            {/* Main Section  */}

            <main className=" flex-1 container mx-auto px-4 py-8">
              {children}
            </main>

            {/* Footer  */}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
