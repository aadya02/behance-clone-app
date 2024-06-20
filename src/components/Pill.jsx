import React from 'react';

const Pill = ({ text, className }) => {
  return (
    <span className={`text-xs bg-[#000] text-white font-bold rounded-md p-[2px] my-auto uppercase ${className}`}>
      {text}
    </span>
  );
};

export default Pill;
