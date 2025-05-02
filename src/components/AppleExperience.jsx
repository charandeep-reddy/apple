import Card from "./Card";
import Carousel from "./Carousel";
import DualText from "./DualText";
import AppleIntelligence from "./AppleIntelligence";

function AppleExperience() {
  const supportData = [
    {
      tag: <AppleIntelligence />,
      title: "Write, express yourself and get things done effortlessly.∆",
      image:
        "./src/assets/apple-img/store-card-50-apple-intelligence-202503_GEO_IN.jpeg",
    },
    {
      tag: "APPLE TV+",
      title: "Get 3 months of Apple TV+ free when you buy an Apple device.°",
      image: "./src/assets/apple-img/store-card-50-tv-services-202501.jpeg",
    },
    {
      tag: "",
      title: "Four Apple services. One easy subscription.",
      image: "./src/assets/apple-img/store-card-50-subscriptions-202108.jpeg",
    },
    {
      title: " We’ve got you covered.",
      description:
        "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
      image: "./src/assets/apple-img/store-card-50-applecare-202503.jpeg",
    },
    {
      tag: "HOME",
      title: "See how one app can control your entire home.",
      image: "./src/assets/apple-img/store-card-50-homekit-202405_GEO_IN.jpeg",
    },
  ];

  return (
    <div className="mt-15">
      <div className="ml-[clamp(20px,calc(19vw-155px),150px)] pb-2">
        <DualText
          highlightText={"The Apple experience."}
          greyText={"Do even more with Apple products and services."}
        />
      </div>
      <Carousel>
        {supportData.map((item, index) => {
          return (
            <div className="flex-shrink-0" key={index}>
              <Card
                tag={item.tag}
                title={item.title}
                image={item.image}
                description={item.description}
                width={item.width}
                textColor={item.textColor}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppleExperience;
