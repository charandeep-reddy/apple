import React from "react";

const DualText = ({ highlightText, textColor = "#1d1d1f", greyText }) => {
  return (
    <>
      <div className="text-[28px] font-apple-display font-semibold tracking-small">
        <span style={{ color: textColor }}>{highlightText}. </span>
        <span className="text-apple-grey">{greyText}.</span>
      </div>
    </>
  );
};

export default DualText;
