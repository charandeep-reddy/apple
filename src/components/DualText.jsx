import React from "react";

const DualText = ({ highlightText, textColor = "#1d1d1f", greyText, size = "28px"}) => {
  return (
    <>
      <div className="font-apple-display font-semibold tracking-[-1px] max-md:leading-8" style={{fontSize: size}}>
        <span style={{ color: textColor }} className="max-md:text-[26px]">{highlightText}</span>
        <span className="text-apple-grey max-md:text-[26px]" > {greyText}</span>
      </div>
    </>
  );
};

export default DualText;
