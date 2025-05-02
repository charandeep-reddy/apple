import iphone from "../assets/apple-img/Category-assets/iphone.webp";
import mac from "../assets/apple-img/Category-assets/mac.webp";
import watch from "../assets/apple-img/Category-assets/watch.webp";
import ipad from "../assets/apple-img/Category-assets/ipad.webp";
import homepod from "../assets/apple-img/Category-assets/homepod.webp";
import airtags from "../assets/apple-img/Category-assets/airtags.webp";
import airpods from "../assets/apple-img/Category-assets/airpods.webp";
import appleTv from "../assets/apple-img/Category-assets/appleTv.webp";
import accessories from "../assets/apple-img/Category-assets/accessories.webp";

function Categories() {
  const categoriesData = [
    { image: mac, path: "#", categoryName: "Mac" },
    { image: iphone, path: "#", categoryName: "iPhone" },
    { image: ipad, path: "#", categoryName: "iPad" },
    { image: watch, path: "#", categoryName: "Apple Watch" },
    { image: airpods, path: "#", categoryName: "AirPods" },
    { image: airtags, path: "#", categoryName: "AirTag" },
    { image: appleTv, path: "#", categoryName: "Apple TV 4K" },
    { image: homepod, path: "#", categoryName: "HomePod" },
    { image: accessories, path: "#", categoryName: "Accessories" },
  ];
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-6 mb-10">
  <div className="flex justify-start items-center gap-7 max-md:gap-3">
  <div className="w-[calc(18vw-155px)] snap-end" aria-hidden="true"></div>
    {categoriesData.map((category, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-3 min-w-[100px] shrink-0"
      >
        <img
          src={category.image}
          alt={category.categoryName}
          className="w-30 max-md:w-22"
        />
        <a
          href={category.path}
          className="hover:underline text-sm text-[#1d1d1f] font-medium"
        >
          {category.categoryName}
        </a>
      </div>
    ))}
    <div className="w-[30px] snap-end" aria-hidden="true"></div>
  </div>
</div>

  );
}

export default Categories;
