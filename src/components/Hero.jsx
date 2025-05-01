import DualText from "./DualText";
import Help from "./Help";
function Hero() {
  return (
    <div className="flex justify-between items-center h-65 mx-[calc(19vw-155px)]">
      <div className="w-[55%] leading-13">
        <DualText
          highlightText={"Store."}
          greyText={"The best way to buy the products you love."}
          size="46px"
        />
      </div>
      <Help />
    </div>
  );
}
export default Hero;
