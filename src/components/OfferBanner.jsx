import add from "../assets/apple-img/add.png";

function OfferBanner() {
  return (
    <div className="flex justify-center items-center bg-white h-15">
      <p className="flex items-center gap-1 text-center text-[#1d1d1f] text-wrap leading-1.5 font-extralight text-[13.5px]">
        Get up to 12 months of No Cost EMI<sup>&sect;</sup> plus up to ₹8000.00
        instant cashback<sup>&sect;&sect;</sup> on selected products with
        eligible cards.
        <a
          href="#"
          className="text-[#06c] flex items-center hover:underline gap-1"
        >
          See offers
          <img src={add} alt="add icon" className="w-3.5 h-3.5" />
        </a>
      </p>
    </div>
  );
}

export default OfferBanner;
