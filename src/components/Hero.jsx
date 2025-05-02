import DualText from "./DualText";
import Help from "./Help";
function Hero() {
  return (
    <div className="flex items-center min-h-65 ml-[clamp(20px,calc(19vw-155px),150px)]">
    <div className="flex justify-between items-center max-md:w-full max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-7">
      <div className="w-[55%] max-md:w-full max-md:leading-8 leading-13">
        <DualText
          highlightText={"Store."}
          greyText={"The best way to buy the products you love."}
          size="46px"
        />
      </div>
      <Help />
    </div>
    </div>
  );
}
export default Hero;
