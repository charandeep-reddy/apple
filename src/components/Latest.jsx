import Card2 from "./Card2";
import iphone16pro from "../assets/apple-img/store-card-40-iphone-16-pro-202409.jpeg";
import ipadair from "../assets/apple-img/store-card-40-ipad-air-202503.jpeg";
import macbook from "../assets/apple-img/store-card-40-macbook-air-202503.jpeg";
import iphone16 from "../assets/apple-img/store-card-40-iphone-16-202409_GEO_IN.jpeg";
import macstudio from "../assets/apple-img/store-card-40-mac-studio-202503.jpeg";
import iwatch from "../assets/apple-img/store-card-40-watch-s10-202409.jpeg";
import ipad from "../assets/apple-img/store-card-40-ipad-202503_GEO_IN.jpeg";
import iwatchultra from "../assets/apple-img/store-card-40-watch-ultra-202409_GEO_IN.jpeg";
import iphone16e from "../assets/apple-img/store-card-40-iphone-16e-202502_GEO_IN.jpeg";
import waystobuy from "../assets/apple-img/store-card-40-waystobuy-202409_GEO_IN.jpeg";
import watchstraps from "../assets/apple-img/store-card-40-watch-bands-202503.jpeg";
import Carousel from "./Carousel";
import DualText from "./DualText";

function Latest() {
  const brandName = [
    {
      new: "",
      brand: "iPhone 16 Pro",
      price: "₹119900",
      image: iphone16pro,
      description: "Apple Intelligence",
      textStyle1: "text-white",
      textStyle2: "text-md bg-custom bg-clip-text text-transparent",
    },
    {
      new: "",
      brand: "Apple Watch Series 10",
      price: "₹99900",
      image: iwatch,
      description: "Thinstant classic",
      textStyle1: "text-black",
      textStyle2: "text-md font-bold text-black",
    },
    {
      new: "",
      brand: "iPad Air",
      price: "₹59900",
      image: ipadair,
      description: "Apple Intelligence",
      textStyle1: "text-black",
      textStyle2: "text-md bg-custom bg-clip-text text-transparent",
    },
    {
      new: "",
      brand: "MacBook Air",
      price: "₹99900",
      image: macbook,
      description: "Apple Intelligence",
      textStyle1: "text-black",
      textStyle2: "text-md bg-custom bg-clip-text text-transparent",
    },
    {
      new: "",
      brand: "iPhone 16",
      price: "₹99900",
      image: iphone16,
      description: "Apple Intelligence",
      textStyle1: "text-white",
      textStyle2: "text-md bg-custom bg-clip-text text-transparent",
    },
    {
      new: "SPECIAL OFFERS",
      brand: "",
      image: waystobuy,
      description:
        "Get up to 12 months of No Cost EMI § plus up to ₹8000.00 instant cashback  §§ on selected products with eligible cards.",
      textStyle1: "text-gray-600 invisible",
      textStyle0: "text-xs text-gray-600",
      textStyle2: "text-black font-bold text-[26px] leading-7.5 pt-2",
    },
    {
      new: "NEW",
      brand: "iPhone 16e",
      price: "₹59900",
      image: iphone16e,
      description: "Apple Intelligence",
      textStyle1: "text-black",
      textStyle0: "text-xs text-red-900",
      textStyle2: "text-md bg-custom bg-clip-text text-transparent",
    },

    {
      new: "",
      brand: "iPad",
      price: "₹99900",
      image: ipad,
      description: "Loveable. Drawable. Magical.",
      textStyle1: "text-black",
      textStyle2: "text-md font-medium text-black",
    },
    {
      new: "",
      brand: "Mac Studio",
      price: "₹214900",
      image: macstudio,
      description: "Apple Intelligence",
      textStyle1: "text-black",
      textStyle2: "text-md bg-custom bg-clip-text text-transparent",
    },
    {
      new: "",
      brand: "Apple Watch Ultra 2",
      price: "₹89900",
      image: iwatchultra,
      description: "Never Finish Never quit.",
      textStyle1: "text-white",
      textStyle2: "text-md font-medium text-white",
    },

    {
      new: "APPLE WATCH STRAPS",
      brand: "",
      image: watchstraps,
      description: "Show Your True Colors.",
      textStyle1: "text-black hidden",
      textStyle0: "text-xs text-gray-600",
      textStyle2: "text-black font-bold text-[25px] pt-1.5",
    },
  ];
  return (
    <div className="mt-15">
      <div className="ml-[clamp(20px,calc(19vw-155px),150px)] pb-2">
      <DualText
        highlightText={"The latest."}
        textColor=""
        greyText={"Take a look at what’s new right now."}
      />
      </div>
      <Carousel
        children={brandName.map((item, index) => {
          return (
            <div
              className="flex-shrink-0 snap-always snap-center scroll-mr-15"
              key={index}
            >
              <Card2
                text1={item.new}
                text2={item.brand}
                price={item.price}
                image={item.image}
                description={item.description}
                textStyle1={item.textStyle1}
                textStyle2={item.textStyle2}
                textStyle0={item.textStyle0}
              />
            </div>
          );
        })}
      />
    </div>
  );
}

export default Latest;
