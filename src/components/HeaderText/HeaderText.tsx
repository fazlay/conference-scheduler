import React from "react";
interface HeaderTextProps {
  className?: string;
  text: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ className, text }) => {
  return (
    <h1
      className={`text-4xl font-bold font-primary-heading py-12  text-heading ${className}`}
    >
      {text}
    </h1>
  );
};

export default HeaderText;
