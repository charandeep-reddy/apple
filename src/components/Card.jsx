import React from "react";

const Card = ({ tag, title, description, image, textColor = "#1D1D1F" }) => {
  return (
    <div
      className="w-[309px] md:w-[480px]  h-[450px] md:[500px] overflow-hidden rounded-2xl bg-cover bg-center cursor-pointer shadow-lg transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="p-[30px] whitespace-normal flex flex-col justify-end">
        <span className="text-apple-grey text-[12px] font-semibold pb-[8px] font-apple-text tracking-[-.01em]">
          {tag}
        </span>
        <h2 className="text-apple-black font-semibold text-[28px] leading-8 font-apple-display tracking-small" style={{ color: textColor}} >
          {title}
        </h2>
        {description && (
          <p className="text-apple-black text-[17px] leading-5 pt-[10px] font-apple-text tracking-tight" style={{ color: textColor }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
