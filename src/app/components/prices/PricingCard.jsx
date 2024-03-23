import { CustomButton } from '../buttons';
import styles from './style.module.css';

export const PricingSectionList = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.hero}>
        <span className={styles.plan}>1 month free</span>
        <br />
        <span className={styles.onetime}>One-time plans available</span>
        <h4 className={styles.package}>Individual</h4>
        <p>₹119/month after offer period</p>
        <p>1 account</p>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            <p>Ad-free music listening</p>
          </li>
          <li>
            <p>Group Session</p>
          </li>
          <li>
            <p>Download 10k songs/device on 5 devices</p>
          </li>
        </ul>
        <br/>
        <CustomButton className={styles.button} onClick={() => {}}>View plans</CustomButton>
      </div>
      <div className={styles.footer}>
        <a href='#terms'>Terms and conditions apply. </a>
        1 month free not available for users who have already tried Premium.</div>
    </div>
  );
};
