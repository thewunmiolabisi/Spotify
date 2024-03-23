import { features } from "./data";
import styles from './styles.module.css';

export const Features = () => {
  return (
    <section className={styles.cards}>
      <h3 className={styles.title}>The power of Premium</h3>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <div className={styles.feature}>
            <img src={feature.image} alt={feature.title} className={styles.featureImage} />
            <h5 className={styles.featureTitle}>{feature.title}</h5>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
