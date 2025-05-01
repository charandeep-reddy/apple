import Card2 from "./Card2";
import Card3 from "./Card3";
import Carousel from "./Carousel";
import DualText from "./DualText";
function Accessories() {
  const accessoriesData = [
    {
      image: "src/assets/apple-img/airpods-max-select-202409-orange.jpeg",
      price: "59900",
      productName: "AirPods Max - Orange"
    },
    {
      image: "src/assets/apple-img/MDGR4.jpeg",
      price: "4900",
      productName: "iPhone 16 Plus Silicone Case with MagSafe – Peony"
    },
    {
      image: "src/assets/apple-img/homepod-mini-select-white-202110.jpeg",
      price: "10900",
      productName: "HomePod mini - White"
    },
    {
      image: "src/assets/apple-img/MXMN3.jpeg",
      price: "9500",
      productName: "42mm Gold Milanese Loop"
    },
    {
      image: "src/assets/apple-img/iphoneCase.jpeg",
      price: "4900",
      productName: "iPhone 16 Pro Clear Case with MagSafe"
    },
    {
      image: "src/assets/apple-img/beatsEarphones.jpeg",
      price: "29900",
      productName: "Powerbeats Pro 2 – High-Performance Earbuds – Electric Orange"
    },
    {
      image: "src/assets/apple-img/airtagCase.jpeg",
      price: "3900",
      productName: "AirTag FineWoven Key Ring – Chartreuse"
    },
    {
      image: "src/assets/apple-img/ipadCase.jpeg",
      price: "8500",
      productName: "Smart Folio for iPad (A16) - Watermelon"
    },
    {
      image: "src/assets/apple-img/magSafeCase.jpeg",
      price: "4900",
      productName: "Beats iPhone 16 Pro Max Case with MagSafe – Summit Stone"
    },
    {
      image: "src/assets/apple-img/strap.jpeg",
      price: "4500",
      productName: "40mm Aquamarine Sport Band - M/L"
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
            image={"src/assets/apple-img/mothersDay.jpeg"}
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
        <div className="flex-shrink-0">
          <Card2
            image={"src/assets/apple-img/store-card-40-accessories-explore-202503.jpeg"}
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

// {
//       new: "APPLE WATCH STRAPS",
//       brand: "",
//       image: watchstraps,
//       description: "Show Your True Colors.",
//       textStyle1: "text-black hidden",
//       textStyle0: "text-xs text-gray-600",
//       textStyle2: "text-black font-bold text-[25px] pt-1.5",
//     },
export default Accessories;
