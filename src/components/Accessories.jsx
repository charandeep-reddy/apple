import React from "react";
import airpods4anc from "../assets/apple-img/airpods-4-anc-select-202409.jpeg";
import airpodspro from "../assets/apple-img/airpods-pro-2-hero-select-202409.jpeg";
import applepencil from "../assets/apple-img/MX2D3.jpeg";
import airtag from "../assets/apple-img/airtag-single-select-202104.jpeg";
import airpods4 from "../assets/apple-img/airpods-4-select-202409.jpeg";
import airtags from "../assets/apple-img/airtag-4pack-select-202104.jpeg";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Carousel from "./Carousel";
import DualText from "./DualText";
function Accessories() {
  const accessoriesData = [
    {
      image: airpods4anc,
      price: "17900",
      productName: "AirPods 4 with Active Noise Cancellation"
    },
    {
      image: airpodspro,
      price: "24900",
      productName: "AirPods Pro 2"
    },
    {
      image: applepencil,
      price: "11900",
      productName: "Apple Pencil Pro"
    },
    {
      image: airtag,
      price: "3490",
      productName: "AirTag"
    },
    {
      image: airpods4,
      price: "12900",
      productName: "AirPods 4"
    },
    {
      image: airtags,
      price: "11900",
      productName: "AirTag 4 pack"
    },
  ];
  return (
    <div className="mt-15">
      <div className="mx-[calc(19vw-155px)] pb-2">
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
            image={"src/assets/apple-img/mothersDay.png"}
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
                productName={item.productName}
                image={item.image}
                price={item.price}
              />
            </div>
          );
        })}
    </Carousel>
    </div>
  );
}

export default Accessories;
