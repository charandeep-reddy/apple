import Card from "./Card";
import Carousel from "./Carousel";
import DualText from "./DualText";
import AppleIntelligence from "./AppleIntelligence";

function Special() {
  return (
    <div className="mx-[calc(19vw-155px)] my-15">
      <div className="pb-2">
        <DualText
          highlightText={"Special stores."}
          greyText={"Exclusive savings for students and educators."}
        />
      </div>
      <div className="pt-2">
        <Card
          tag={"EDUCATION"}
          title={"Buy a new Mac or iPad with education savings.¹"}
          image={"src/assets/apple-img/store-card-40-bts-edu-macbook-air-ipad-air-202503.jpeg"}
          width={"400px"}
        />
      </div>
    </div>
  );
}

export default Special;
