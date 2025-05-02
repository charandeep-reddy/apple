import React from "react";

const Card2 = ({
  text1,
  text2,
  price,
  image,
  description=(
    <>Apple Intelligence<span className="text-xs  align-text-top">∆</span></>
  ),
  textStyle1,
  textStyle2,
  textStyle0,
}) => {
  return (
    <div
      className="h-full w-[400px] max-md:h-full max-md:w-[330px] rounded-2xl object-contain relative transition-all duration-300 hover:scale-[1.03] hover:shadow-4xl cursor-pointer"
      style={{
        boxShadow: "2px 4px 12px #00000014",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.5, 1)",
      }}
    >
      <img
        src={image}
        alt="iPhone 16 Pro"
        className="rounded-2xl w-full h-full object-cover "
      />
      <div className="absolute top-2 m-3 px-4 py-5">
        <h1 className={`${textStyle0} font-bold`}>{text1}</h1>
        <h1 className={`text-[26px] ${textStyle1} font-bold`}>{text2}</h1>
        <h1 className={`${textStyle2} text-wrap font-[600] tracking-wide py-1`}>
          {description}
        </h1>
        <p className={`${textStyle1} font-light text-sm`}>From {price}.00</p>
      </div>
    </div>
  );
};

export default Card2;
