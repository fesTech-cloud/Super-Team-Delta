import styles from "./page.module.css";
import toggle from "./toggleSwitch.module.css";
import formStyle from "./form.module.css";

export function CoinSetup() {
  return (
    <>
      <h1 className={styles.stepsHeading}>Coin Setup</h1>
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
    </>
  );
}

export function Distribution() {
  return (
    <>
      <div>
        <h1 className={styles.stepsHeading}>Distribution</h1>
        <p style={{ textAlign: "center" }}>
          Set up how your token should be initially distributed
        </p>
      </div>
      <div className={formStyle.w50}>
        <div className={formStyle.container}>
          <div className={formStyle.flx}>
            <p>Team&apos;s Allocation</p>
            <ToggleSwitch label=" " />
          </div>
          <form>
            <label>
              <p>Amount of tokens for team</p>
              <input type="number" placeholder="0" />
            </label>
          </form>
        </div>
        <div className={formStyle.container}>
          <form>
            <label>
              <p>Team payout address</p>
              <input type="text" placeholder="" />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export function BotProtection() {
  return (
    <>
      <div>
        <h1 className={styles.stepsHeading}>Bot Protection</h1>
        <p style={{ textAlign: "center" }}>
          Enable these features if you want to protect your token launch from
          bots and snipers. You can not change these settings after contract has
          been renounced
        </p>
      </div>
      <div className={formStyle.w50}>
        <div className={formStyle.container}>
          <div className={formStyle.flx}>
            <p>Limit per wallet</p>
            <ToggleSwitch label=" " />
          </div>
          <form>
            <label>
              <p>Max tokens per wallet</p>
              <input type="number" placeholder="0" />
            </label>
          </form>
        </div>
        <div className={formStyle.container}>
          <div className={formStyle.flx}>
            <p>Max per transaction</p>
            <ToggleSwitch label="   " />
          </div>
          <form>
            <label>
              <p>Max tokens per trade</p>
              <input type="number" placeholder="0" />
            </label>
          </form>
        </div>
        <div className={formStyle.container}>
          <div className={formStyle.flx}>
            <p>Sniper auto-burn</p>
            <ToggleSwitch label="  " />
          </div>

          <p>
            When you buy in the first block, there&apos;s a 20% extra tax. It
            decreases to 13.33% in the second block, 6.66% in the third, and no
            tax from the fourth block onwards. The extra tax money is burned
            right away, reducing the total supply. Remember, this feature is
            just to stop snipers, not to make extra money.
          </p>
        </div>
      </div>
    </>
  );
}

export function Taxes() {
  return (
    <>
      <div>
        <h1 className={styles.stepsHeading}>Taxes</h1>
        <p style={{ textAlign: "center" }}>Enable buy/sell tax on each trade</p>
      </div>

      <div className={formStyle.w50}>
        <div className={formStyle.container}>
          <div className={formStyle.flx}>
            <p>Buy Tax</p>
            <ToggleSwitch label="   " />
          </div>
          <form>
            <label>
              <p>Tax taken for token buy</p>
              <input type="number" placeholder="0" />
            </label>
          </form>
        </div>
        <div className={formStyle.container}>
          <div className={formStyle.flx}>
            <p>Sell Tax</p>
            <ToggleSwitch label="    " />
          </div>
          <form>
            <label>
              <p>Tax taken for token sale</p>
              <input type="number" placeholder="0" />
            </label>
          </form>
        </div>
        <div className={formStyle.container}>
          <form>
            <label>
              <p>Tax Payout Address</p>
              <input type="text" />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

function ToggleSwitch({ label }) {
  return (
    <div className={toggle.container}>
      {label}
      <div className={toggle.toggleSwitch}>
        <input
          type="checkbox"
          className={toggle.checkbox}
          name={label}
          id={label}
        />
        <label className={toggle.label} htmlFor={label}>
          <span className={toggle.inner} />
          <span className={toggle.switch} />
        </label>
      </div>
    </div>
  );
}
