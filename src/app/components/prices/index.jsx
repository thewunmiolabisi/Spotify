import { paymentMethods, pricingList } from "./data";
import { PricingSectionList } from './PricingCard'
import { DiscountFlags } from "./discount";
import styles from './style.module.css'
export const PricingSection = () => {
 
  const renderPaymentMethods = (method) => {
    if (method.icon) return <method.icon />;
    return null;
  };

  return ( <section className={styles.section}>
      <h2 className={styles.text}>Pick your Premium</h2>
      <p className={styles.description}>Listen without limits on your phone, speaker, and other devices.</p>
    
     <div className={styles.flex}>
     {
           paymentMethods.map ( renderPaymentMethods)
            }
     </div>
     <div className={styles.flex}>
      <br/>
      <br/>
      {
        pricingList.map(()=> {
          return <PricingSectionList />
        })
      }
     </div>
     <br/>
     <br/>
     <DiscountFlags/>
    </section>
  );
};

