import React from "react";

const DualText = ({ highlightText, textColor = "#1d1d1f", greyText, size = "28px" }) => {
  return (
    <>
      <div className="font-apple-display font-semibold tracking-[-1px]" style={{fontSize: size}}>
        <span style={{ color: textColor }}>{highlightText}</span>
        <span className="text-apple-grey"> {greyText}</span>
      </div>
    </>
  );
};

export default DualText;
