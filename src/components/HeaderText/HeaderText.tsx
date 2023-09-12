import React from "react";
interface HeaderTextProps {
  className?: string;
  text: string;
  subTitle?: string;
  titleClassName?: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({
  className,
  titleClassName = "text-center",
  text,
  subTitle = false,
}) => {
  return (
    <div className={`py-12 ${className}`}>
      <h1
        className={`text-4xl font-bold font-primary-heading   text-heading ${titleClassName} `}
      >
        {text}
      </h1>
      {subTitle && <p className=" text-heading">{subTitle}</p>}
    </div>
  );
};

export default HeaderText;
