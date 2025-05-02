import Card from "./Card";
import Carousel from "./Carousel";
import DualText from "./DualText";
import specialist from "../assets/apple-img/store-card-50-earth-day-specialist-help-202504.jpeg";
import todayapple from "../assets/apple-img/store-card-50-TAA-202310.jpeg";
import business from "../assets/apple-img/iphone-card-40-business-202409_GEO_IN.jpeg";
import personalsetup from "../assets/apple-img/store-card-50-personal-setup-202408.jpeg";
import watchnlearn from "../assets/apple-img/apple-support-app-202308_GEO_IN.jpeg";
function Support() {
  const supportData = [
    {
      tag: "APPLE SPECIALIST",
      title: "Shop one on one with a Specialist online.",
      image: specialist,
    },
    {
      tag: "TODAY AT APPLE",
      title: "Join free sessions at your Apple Store.",
      description:
        "Learn about the latest features and how to go further with your Apple devices.",
      image: todayapple,
    },
    {
      tag: "BUSINESS",
      title: "From enterprise to small business, we’ll work with you.¹",
      image: business,
      width: "400px",
      textColor: "white",
    },
    {
      tag: "PERSONAL SETUP",
      title: "Set up your new device with help from a Specialist.",
      description:
        "Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
      image: personalsetup,
    },
    {
      tag: " WATCH AND LEARN",
      title: "Need support? Our teams are here for you.",
      image: watchnlearn,
    },
  ];

  return (
    <div className="mt-15">
      <div className="ml-[clamp(20px,calc(19vw-155px),150px)] pb-2">
        <DualText
          highlightText={"Help is here."}
          greyText={"Whenever and however you need it."}
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

export default Support;
