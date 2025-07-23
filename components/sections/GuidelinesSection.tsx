import React from "react";
import CheckboxList from "@/components/ui/CheckboxList";
import { GUIDELINES } from "@/data/guidelines";
import { SectionTitle } from "../ui/Titles";
import SectionLayout from "../layout/SectionLayout";

const GuidelinesSection: React.FC = () => {
  return (
    <SectionLayout>
      <SectionTitle title="Study Space Guidelines" />
      <CheckboxList items={GUIDELINES} />
      <p className="text-gray-600 mt-6 text-sm">
        Failure to comply with these guidelines may result in the loss of study
        space privileges.
      </p>
    </SectionLayout>
  );
};

export default GuidelinesSection;
