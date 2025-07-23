import React from 'react';


interface PageTitleProps {
  title: string;
  className?: string;
}

interface SectionTitleProps {
  title: string;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, className = "" }) => {
  return (
    <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${className}`}>
      {title}
    </h1>
  );
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = "" }) => {
  return (
    <h2 className={`text-3xl font-semibold text-gray-800 my-4 py-4 text-center  ${className}`}>
      {title}
    </h2>
  );
};


export { PageTitle, SectionTitle };