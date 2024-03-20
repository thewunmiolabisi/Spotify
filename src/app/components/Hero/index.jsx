import style from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={style.Hero}>
      <h1 className={style.title}>Get Premium free for 1 month</h1>
      <p className={style.paragraph}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
      <div className={style.button}>
      <button className="btn">Get Started</button>
      <button className="btn-2">See other plans</button>
      </div>
      <div className={style.terms}>
        <a href="#/Terms_and_conditions">Terms and Conditions apply.</a>
        1 month free not available for users who have already tried Premium.
      </div>
    </section>
  );
};
