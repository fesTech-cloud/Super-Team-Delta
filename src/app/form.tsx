import styles from "./page.module.css";
import toggle from "./toggleSwitch.module.css";

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
      <div>
        <div>
          <span>Team Allocation</span> <ToggleSwitch label=" " />
        </div>
        <form>
          <label>
            <p>Amount of tokens for team</p>
            <input type="number" placeholder="0" />
          </label>
        </form>
        <form>
          <label>
            <p>Team payout address</p>
            <input type="text" placeholder="" />
          </label>
        </form>
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
          Set up how your token should be initially distributed
        </p>
      </div>
      <div>
        <div>
          <span>Team Allocation</span> <ToggleSwitch label=" " />
        </div>
        <form>
          <label>
            <p>Amount of tokens for team</p>
            <input type="number" placeholder="0" />
          </label>
        </form>
        <form>
          <label>
            <p>Team payout address</p>
            <input type="text" placeholder="" />
          </label>
        </form>
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
