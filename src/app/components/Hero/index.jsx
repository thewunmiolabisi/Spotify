import style from './Hero.module.css';
import {CustomButton} from '../buttons';
export const Hero = (props) => {
  console.log(props)
  return (
    <section className={`${style.Hero} ${props.className}`}>
      <h1 className={style.title}>
        {props.title ||  "Get Premium free for 1 month"}</h1>
      <p className={style.paragraph}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
      <div className={style.button}>
      <CustomButton onClick ={()=>{}}>
      Get Started
      </CustomButton>
     <CustomButton onClick ={()=>{}} type="outline">
      See other plans
      </CustomButton>
      </div>
      <div className={style.terms}>
        <a href="#/Terms_and_conditions">Terms and Conditions apply.</a>
        1 month free not available for users who have already tried Premium.
      </div>
      
    </section>
  );
};
