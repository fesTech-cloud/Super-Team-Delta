"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import * as web3 from "@solana/web3.js";
require("@solana/wallet-adapter-react-ui/styles.css");

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets: any = useMemo(() => [], []);
  return (
    <html lang="en">
           <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <body className={inter.className}>{children}</body>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </html>
  );
}
