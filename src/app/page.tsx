"use client"
import styles from "./page.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className={styles.main}>
        <WalletMultiButton />
    </main>
  );
}
