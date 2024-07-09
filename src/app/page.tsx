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
      <p className={styles.center}>Deploy Your Own Token Using</p>
      <div className={styles.textContainer}>
        <p className={styles.text}>Token Wizard</p>
      </div>
      <p className={styles.center}>
        Create your token for your dream project with just few clicks
      </p>
      {/* <div>Steps</div> */}
      <Form />
    </div>
  );
}

function Form() {
  return (
    <>
      <h1 className={styles.coinSetup}>Coin Setup</h1>
      <form>
        <div className={styles.flex}>
          <label>
            <p>
              Token Name <span className={styles.required}>*</span>
            </p>
            <input
              type="text"
              placeholder="Token Name eg: ETH Token"
              required
            />
          </label>
          <label>
            <p>
              Token Symbol <span className={styles.required}>*</span>
            </p>
            <input type="text" placeholder="Token Symbol eg: ETH" required />
          </label>
          <label>
            <p>
              Total Supply <span className={styles.required}>*</span>
            </p>
            <input type="number" placeholder="0" required />
          </label>
        </div>
        <div className={styles.flex}>
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
        </div>
        <label>
          <p>
            Description <span className={styles.required}>*</span>
          </p>

          <textarea
            rows={5}
            cols={33}
            required
            placeholder="describe your project to your audience"
            className={styles.descriptionBox}
          />
        </label>
      </form>
      <button className={styles.button}>Next</button>
    </>
  );
}
