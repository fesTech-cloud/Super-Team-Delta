"use client";
import styles from "./page.module.css";
import steps from "./steps.module.css";
import { CoinSetup, Distribution, BotProtection } from "./form";
import { useState } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function renderSteps() {
    switch (step) {
      case 1:
        return <CoinSetup />;
      case 2:
        return <Distribution />;
      case 3:
        return <BotProtection />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className={styles.main}>
        <Navigation />
      </div>

      <div>
        <p className={styles.center}>Deploy Your Own Token Using</p>
        <div className={styles.textContainer}>
          <p className={styles.text}>Token Wizard</p>
        </div>
        <p className={styles.center}>
          Create your token for your dream project with just few clicks
        </p>
      </div>

      <div className={steps.steps}>
        <div className={steps.numbers}>
          <div className={step >= 1 ? `${steps.active}` : ""}>1</div>
          <div className={step >= 2 ? `${steps.active}` : ""}>2</div>
          <div className={step >= 3 ? `${steps.active}` : ""}>3</div>
        </div>

        {renderSteps()}

        <div className={steps.buttons}>
          {step > 1 ? (
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
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
