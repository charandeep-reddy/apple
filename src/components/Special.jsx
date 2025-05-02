import Card from "./Card";
import Carousel from "./Carousel";
import DualText from "./DualText";
import macair from "../assets/apple-img/store-card-40-bts-edu-macbook-air-ipad-air-202503.jpeg"

function Special() {
  return (
    <div className="my-15">
      <div className="ml-[clamp(20px,calc(19vw-155px),150px)] pb-2">
        <DualText
          highlightText={"Special stores."}
          greyText={"Exclusive savings for students and educators."}
        />
      </div>
      <Carousel>
      <div className="pt-2">
        <Card
          tag={"EDUCATION"}
          title={"Buy a new Mac or iPad with education savings.¹"}
          image={macair}
        />
      </div>
      </Carousel>
    </div>
  );
}

export default Special;
