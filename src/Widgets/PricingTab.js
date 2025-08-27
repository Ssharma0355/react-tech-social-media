import React, { useState } from "react";
import { PricingsPlan } from "../assets/JSONs/PricingsPlans";

const PricingTab = ({ activePlanId = "basic_monthly" }) => {
  const [billingCycle, setBillingCycle] = useState(
    localStorage.getItem("billingCycle") || "monthly"
  );

  const handleCycleChange = (cycle) => {
    setBillingCycle(cycle);
    localStorage.setItem("billingCycle", cycle);
  };

  // Select plans dynamically
  const plans =
    billingCycle === "monthly"
      ? PricingsPlan.plans.monthly
      : PricingsPlan.plans.yearly;

  return (
    <main className="flex flex-col gap-6">
      {/* Billing cycle toggle */}
      <div className="flex items-center justify-center gap-4 p-4">
        {/* Monthly */}
        <span
          className={`cursor-pointer font-semibold transition ${
            billingCycle === "monthly" ? "text-[#4CAF50]" : "text-gray-500"
          }`}
          onClick={() => handleCycleChange("monthly")}
        >
          Monthly
        </span>

        {/* Switch */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={billingCycle === "yearly"}
            onChange={() =>
              handleCycleChange(
                billingCycle === "monthly" ? "yearly" : "monthly"
              )
            }
            className="sr-only peer"
          />
          <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-[#4CAF50] transition-colors"></div>
          <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-7"></div>
        </label>

        {/* Yearly */}
        <span
          className={`cursor-pointer font-semibold transition ${
            billingCycle === "yearly" ? "text-[#4CAF50]" : "text-gray-500"
          }`}
          onClick={() => handleCycleChange("yearly")}
        >
          Yearly
        </span>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col rounded-[12px] bg-white border border-gray-300 p-6 shadow-md gap-8"
          >
            {/* Card content */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Header */}
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] font-bold">{plan.name}</h1>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-[#4CAF50]">
                {plan.currency} {plan.amount.toLocaleString("en-IN")}
                <span className="text-sm font-normal text-gray-500">
                  /{plan.billingCycle}
                </span>
              </div>

              {/* Features */}
              <ul className="list-disc list-inside text-gray-700 flex flex-col gap-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Button (sticks to bottom) */}
            <button
              className={`mt-auto w-full rounded-[8px] text-white p-2 transition ${
                plan.id === activePlanId
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4CAF50] hover:bg-[#43a047]"
              }`}
              disabled={plan.id === activePlanId}
            >
              {plan.id === activePlanId ? "Current Plan" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PricingTab;
