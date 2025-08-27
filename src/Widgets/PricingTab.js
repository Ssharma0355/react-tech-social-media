import React from 'react'
import { PricingsPlan } from '../assets/JSONs/PricingsPlans'

const PricingTab = () => {
      const monthlyPlans = PricingsPlan.plans.monthly;
        const yearlyPlans = PricingsPlan.plans.yearly;


  return (
    <main>
      {monthlyPlans.map((plans, id) => (
        <ul key={id}>
          <li>{plans.name}</li>
        </ul>
      ))}
      <h1></h1>
    </main>
  );
}

export default PricingTab
