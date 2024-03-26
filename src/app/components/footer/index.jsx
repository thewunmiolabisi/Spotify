import styles from "./style.module.css";
import { Logo } from '../Logo/logo';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
function footer() {
  return (
    <section className={styles.logo}>
      <div className={styles.spotify}>
      <Logo useWhite={true} />
      </div>

    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h5>COMMUNITIES</h5>
          <ul>
            <li>About</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h5>USEFUL LINKS</h5>
          <ul>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className={styles.icons}>
        <img src={InstagramIcon} alt="Instagram"/>
        <img src={TwitterIcon} alt="Twitter"/>
          <img src={FacebookIcon} alt="Facebook"/>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2023 Spotify AB</p>
      </div>
    </footer>
    </section>
  );
}

export default footer;
