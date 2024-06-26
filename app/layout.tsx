import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import 'bootstrap/dist/css/bootstrap.css'

// import  
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajapandiyan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header/>
        {children}

      
         </body>
    </html>
  );
}
