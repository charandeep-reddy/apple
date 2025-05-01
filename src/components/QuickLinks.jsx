import DualText from "./DualText";
function LinksButton({ path, text }) {
  return (
    <div className="inline-block border rounded-3xl w-fit hover:bg-[#1f1f1f] group">
      <a
        href={path}
        className="text-sm text-[#1f1f1f] px-3 py-2 flex items-center group-hover:text-white hover:underline"
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[12.5px] h-[12.5px] mb-[2px] self-end inline-block ml-[1px] fill-current text-[#1f1f1f] group-hover:text-white"
          viewBox="0 0 24 24"
        >
          <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
        </svg>
      </a>
    </div>
  );
}

function QuickLinks() {
  const linksData = [
    { path: "#", text: "Find a Store" },
    { path: "#", text: "Order Status" },
    { path: "#", text: "Shopping Help" },
    { path: "#", text: "Your Saves" },
  ];
  return (
    <div className="flex flex-col gap-3 mx-[calc(19vw-155px)]">
        <DualText highlightText={"Quick Links"}/>
    <div className="flex gap-3 items-center">
      {linksData.map((item, index) => {
        return <LinksButton key={index} path={item.path} text={item.text} />;
      })}
    </div>
    </div>
  );
}

export default QuickLinks;
