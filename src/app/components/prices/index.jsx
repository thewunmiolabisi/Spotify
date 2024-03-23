import { paymentMethods, pricingList } from "./data";
import { PricingSectionList } from './PricingCard'
export const PricingSection = () => {
 
  const renderPaymentMethods = (method) => {
    if (method.icon) return <method.icon />;
    return null;
  };

  return (
    <section>
      <h2>Pick your Premium</h2>
      <p>Listen without limits on your phone, speaker, and other devices.</p>
    
     <div>
     {
           paymentMethods.map ( renderPaymentMethods)
            }
     </div>
     <div>
      {
        pricingList.map(()=> {
          return <PricingSectionList />
        })
      }
     </div>
    </section>
  );
};

