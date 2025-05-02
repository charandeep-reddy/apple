import persona1 from "../assets/apple-img/Help-assets/persona1.jpeg";
import persona2 from "../assets/apple-img/Help-assets/persona2.jpeg";
import persona3 from "../assets/apple-img/Help-assets/persona3.jpeg";
import persona4 from "../assets/apple-img/Help-assets/persona4.jpeg";
import arrow from "../assets/apple-img/Help-assets/arrow.png";
import visitApple from "../assets/apple-img/Help-assets/visitApple.svg";

function randomPersona() {
  const images = [persona1, persona2, persona3, persona4];
  const randomImage = Math.floor(Math.random() * images.length);
  return images[randomImage];
}
function Help() {
  const helpData = [
    {
      image: randomPersona(),
      title: "Need shopping help?",
      text: "Ask a Specialist",
    },
    {
      image: visitApple,
      title: "Visit an Apple Store",
      text: "Find one near you",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-3.5 justify-center max-xl:pr-5">
      {helpData.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <img src={item.image} alt="persona" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{item.title}</span>
            <a
              href="#"
              className="text-sm text-[#06c] items-center font-light hover:underline flex"
            >
              {item.text}
              <img
                src={arrow}
                alt="arrow"
                className="w-3.5 h-3.5 self-end inline-block  ml-[1px]"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Help;
