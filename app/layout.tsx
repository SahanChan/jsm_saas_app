import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          {/*<header>*/}
          {/*  <SignedOut>*/}
          {/*    <SignInButton />*/}
          {/*    <SignUpButton />*/}
          {/*  </SignedOut>*/}
          {/*  <SignedIn>*/}
          {/*    <UserButton />*/}
          {/*  </SignedIn>*/}
          {/*</header>*/}
          <ClerkProvider appearance={{variables : {colorPrimary :'#fe5933'}}}>

          <Navbar />
          {children}
          </ClerkProvider>

        </body>
      </html>
  );
}
