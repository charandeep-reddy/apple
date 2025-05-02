import Card2 from "./Card2";
import Card3 from "./Card3";
import Carousel from "./Carousel";
import DualText from "./DualText";
import airpodsMax from "../assets/apple-img/airpods-max-select-202409-orange.jpeg"
import iphone16plus from "../assets/apple-img/MDGR4.jpeg"
import homepodmini from "../assets/apple-img/homepod-mini-select-white-202110.jpeg"
import millanese from "../assets/apple-img/MXMN3.jpeg"
import magsafecase from "../assets/apple-img/iphoneCase.jpeg"
import powerbeats from "../assets/apple-img/beatsEarphones.jpeg"
import airtagcase from "../assets/apple-img/airtagCase.jpeg"
import folio from "../assets/apple-img/ipadCase.jpeg"
import beatscase from "../assets/apple-img/magSafeCase.jpeg"
import sportband from "../assets/apple-img/strap.jpeg"
import mothersday from "../assets/apple-img/mothersDay.jpeg"
import { Colors } from "./Card3";
import color1 from "../assets/apple-img/MX733_SW_COLOR.jpeg"
import color2 from "../assets/apple-img/MX743_SW_COLOR.jpeg"
import color3 from "../assets/apple-img/MX753_SW_COLOR.jpeg"
import color4 from "../assets/apple-img/MDGU4_SW_COLOR.jpeg"
import color5 from "../assets/apple-img/MDGV4_SW_COLOR.jpeg"
function Accessories() {
  const accessoriesData = [
    {
      tag: "New Colours",
      image: airpodsMax,
      price: "59900",
      productName: "AirPods Max - Orange",
      colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: "New",
      image: iphone16plus,
      price: "4900",
      productName: "iPhone 16 Plus Silicone Case with MagSafe – Peony",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: (<>&nbsp;</>),
      image: homepodmini,
      price: "10900",
      productName: "HomePod mini - White",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: (<>&nbsp;</>),
      image: millanese,
      price: "9500",
      productName: "42mm Gold Milanese Loop",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: (<>&nbsp;</>),
      image: magsafecase,
      price: "4900",
      productName: "iPhone 16 Pro Clear Case with MagSafe"
    },
    {
      tag: "New",
      image: powerbeats,
      price: "29900",
      productName: "Powerbeats Pro 2 – High-Performance Earbuds – Electric Orange",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: (<>&nbsp;</>),
      image: airtagcase,
      price: "3900",
      productName: "AirTag FineWoven Key Ring – Chartreuse",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: "New",
      image: folio,
      price: "8500",
      productName: "Smart Folio for iPad (A16) - Watermelon",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: (<>&nbsp;</>),
      image: beatscase,
      price: "4900",
      productName: "Beats iPhone 16 Pro Max Case with MagSafe – Summit Stone",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
    {
      tag: "New",
      image: sportband,
      price: "4500",
      productName: "40mm Aquamarine Sport Band - M/L",
       colors: [
        {src:color1, alt:"gary"},
        {src:color2, alt:"orange"},
        {src:color4, alt:"gary"},
        {src:color3, alt:"gary"},
        {src:color5, alt:"gary"},
      ]
    },
  
  ];
  return (
    <div className="mt-15">
      <div className="ml-[clamp(20px,calc(19vw-155px),150px)] pb-2">
      <DualText
        highlightText={"Accessories."}
        textColor="#ff3c26"
        greyText={"Put a bow on Mother’s Day."}
      />
      </div>
     
    <Carousel>
       <div className="flex-shrink-0">
          <Card2
            text1={"MOTHER’S DAY"}
            image={mothersday}
            description={"Pairs perfectly with Mom."}
            textStyle1="text-sm hidden"
            textStyle0="text-xs text-gray-600"
            textStyle2="text-black text-[25px] font-bold overflow-hidden break-words w-full max-w-full"
          />
        </div>
        {accessoriesData.map((item, index) => {
          return (
            <div className="flex-shrink-0" key={index}>
              <Card3
              tag={item.tag}
                productName={item.productName}
                image={item.image}
                price={item.price}
                colors={item.colors?.map((color, i) => (
                  <Colors key={i} src={color.src} alt={color.alt} />
                ))}
              />
            </div>
          );
        })}
        <div className="flex-shrink-0">
          <Card2
            image={"../assets/apple-img/store-card-40-accessories-explore-202503.jpeg"}
            description={"Explore all accessories."}
            textStyle1="text-sm hidden"
            textStyle0="text-xs text-gray-600"
            textStyle2="text-black text-[25px] font-bold overflow-hidden break-words w-full max-w-full"
          />
        </div>
    </Carousel>
    </div>
  );
}

export default Accessories;
