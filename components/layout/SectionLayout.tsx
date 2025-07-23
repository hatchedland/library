import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 my-4">
      <main>{children}</main>
    </div>
  );
};

export default SectionLayout;
