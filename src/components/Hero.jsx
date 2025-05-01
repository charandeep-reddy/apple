import DualText from "./DualText";
import Help from "./Help";
function Hero() {
  return (
    <div className="flex justify-center items-center min-h-65">
    <div className="flex justify-between items-center w-[82%] max-md:w-full max-md:px-5 max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-5">
      <div className="w-[55%] max-md:w-full max-md:leading-8 leading-13">
        <DualText
          highlightText={"Store."}
          greyText={"The best way to buy the products you love."}
          size="46px"
          smallSize="2px"
        />
      </div>
      <Help />
    </div>
    </div>
  );
}
export default Hero;
