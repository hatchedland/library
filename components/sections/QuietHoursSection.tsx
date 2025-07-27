import React from "react";
import { Sun, Moon, Clock } from "lucide-react";
import { SectionTitle } from "../ui/Titles";
import SectionLayout from "../layout/SectionLayout";
import { SHIFT_PLANS, EXTENDED_PLANS } from "@/data/quietHours";

const FlexibleSpacePricingSection: React.FC = () => {
  return (
    <>
      <div className="py-8">
        <SectionTitle title="Flexible Hourly & Shift-Based Plans" />
        <SectionLayout>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHIFT_PLANS.map((plan) => (
              <div
                key={plan.title}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gray-100 text-gray-600">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {plan.title}
                </h3>
                <p className="text-sm text-center text-gray-500 mb-3">
                  {plan.description}
                </p>
                <div className="text-xl text-center text-blue-600 font-semibold">
                  {plan.price}
                </div>
                <div className="text-sm text-center text-gray-600">
                  {plan.hours}
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>

      {/* Second Group: Extended & Full Day Access */}
      <div className="bg-gray-100 py-8 mt-8">
        <SectionTitle title="Extended & Full Day Access"></SectionTitle>
        <SectionLayout>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED_PLANS.map((plan) => (
              <div
                key={plan.title}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-green-50"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gray-100 text-gray-600">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {plan.title}
                </h3>
                <p className="text-sm text-center text-gray-500 mb-3">
                  {plan.description}
                </p>
                <div className="text-xl text-center text-green-600 font-semibold">
                  {plan.price}
                </div>
                <div className="text-sm text-center text-gray-600">
                  {plan.hours}
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default FlexibleSpacePricingSection;
