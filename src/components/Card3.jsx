function Card3({price, productName, image}) {
  return (
    <div className="h-full w-80 flex flex-col items-center snap-start scroll-ml-30 transition-all duration-300 hover:scale-[1.03] hover:shadow-4xl cursor-pointer p-7 justify-between bg-white rounded-2xl" style={{
        boxShadow: "2px 4px 12px #00000014",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.5, 1)",
      }}>
      <div className="object-cover mt-7 mx-5">
        <img src={image} alt="airpods" />
      </div>
      <div className="text-wrap flex flex-col gap-5 justify-between mt-20 h-full">
        <div>
        <span className="text-[13px] text-[#b64400]">Free Engraving</span>
        <p className="font-bold">{productName}</p>
        </div>
        <div>
        <span className="text-sm font-light">MRP ₹{price}.00 (Incl. of all taxes)</span>
        </div>
      </div>
    </div>
  );
}

export default Card3;
