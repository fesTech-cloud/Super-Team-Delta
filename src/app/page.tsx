"use client";
import styles from "./page.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navigation />
      </main>
      <Body />
    </>
  );
}

function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <p>Token Wizard</p>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Deployer</li>
        </ul>
        <WalletMultiButton />
      </nav>
      <hr />
    </>
  );
}

function Body() {
  return (
    <div>
      <p>Deploy Your Own Token Using</p>
      <div className={styles.textContainer}>
        <p className={styles.text}>Token Wizard</p>
      </div>
      <div>Steps</div>
      <Form />
    </div>
  );
}

function Form() {
  return (
    <>
      <h1>Coin Setup</h1>
      <form>
        <label>
          <p>Token Name *</p>
          <input type="text" placeholder="Token Name eg: ETH Token" required />
        </label>
        <label>
          <p>Token Symbol *</p>
          <input type="text" placeholder="Token Symbol eg: ETH" required />
        </label>
        <label>
          <p>Total Supply *</p>
          <input type="number" placeholder="0" required />
        </label>
        <label>
          <p>Telegram</p>
          <input type="text" placeholder="telegram group link" />
        </label>
        <label>
          <p>Twitter</p>
          <input type="text" placeholder="twitter.com/accountusername" />
        </label>
        <label>
          <p>Website</p>
          <input type="text" placeholder="Website URL" />
        </label>
        <label>
          <p>Description *</p>
          <input
            type="text"
            placeholder="describe your project to your audience"
            required
          />
        </label>

        <button>Next</button>
      </form>
    </>
  );
}
