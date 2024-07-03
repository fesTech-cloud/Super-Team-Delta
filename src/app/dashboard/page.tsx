"use client"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styles from "./style.module.css"

export default function Dashboard() {
  return (
    <main>
        <WalletMultiButton />
    </main>
  );
}
