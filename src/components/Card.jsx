function Card({
  tag,
  title,
  description,
  image,
  textColor = "#1D1D1F",
  width,
}) {
  const customStyle = width
    ? { backgroundImage: `url(${image})`, width }
    : { backgroundImage: `url(${image})` };

  return (
    <div
      className={`max-md:w-[340px] max-sm:w-[310px] max-md:h-[470px] w-[450px] h-[500px] overflow-hidden rounded-2xl bg-cover bg-no-repeat bg-center max-md:snap-center snap-always snap-end transition-all duration-300 hover:scale-[1.03] hover:shadow-4xl cursor-pointer`}
      style={{
        ...customStyle,
        boxShadow: "2px 4px 12px #00000014",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.5, 1)",
      }}
    >
      <div className="p-[30px] whitespace-normal flex flex-col justify-end">
        {typeof tag === "string" ? (
          <span className="text-apple-grey text-[12px] font-semibold pb-[8px] font-apple-text tracking-[-.01em] min-h-[18px]">
            {tag || "\u00A0"}
          </span>
        ) : (
          <div className="pb-[8px] min-h-[18px]">{tag}</div>
        )}

        <h2
          className="text-apple-black font-semibold text-[26px] leading-8 font-apple-display tracking-small max-md:text-[20px] max-md:leading-7"
          style={{ color: textColor }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="text-apple-black text-[17px] leading-5 pt-[10px] font-apple-text tracking-tight"
            style={{ color: textColor }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
