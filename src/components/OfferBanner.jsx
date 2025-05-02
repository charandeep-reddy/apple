import add from "../assets/apple-img/add.png";

function OfferBanner() {
  return (
    <div className="w-full bg-white px-4 py-2 flex justify-center min-h-15">
      <div className="max-w-screen-xl text-center text-[13.5px] text-[#1d1d1fd3] font-extralight flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2">
        <span>
          Get up to 12 months of No Cost EMI<sup className="text-[9px] align-baseline">§</sup> plus up to ₹8000.00 instant cashback<sup className="text-[9px] align-baseline">§§</sup> on selected products with eligible cards.
        <a
          href="#"
          className="inline-flex items-center text-[#06c] hover:underline gap-1 pl-1"
        >
          See offers
          <img src={add} alt="add icon" className="w-3.5 h-3.5" />
        </a>
        </span>
      </div>
    </div>
  );
}

export default OfferBanner;
